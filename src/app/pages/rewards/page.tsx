'use client';

import DisplayAttribute from '@/app/components/input/DisplayAttribute';
import Navigation from '../../components/navigation/NavBar';
import Link from 'next/link';
import { FaEdit } from 'react-icons/fa';
import { FormEvent, useEffect, useState } from 'react';
import InputAttribute from '@/app/components/input/InputAttribute';
import Label from '@/app/components/input/Label';
import { useRouter } from 'next/navigation';
import { Incentive, IncentiveInput } from '@/app/models/Incentive';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { LeaderboardMember } from '@/app/models/Member';
import { AuthenticatedView } from '@/app/components/AuthenticatedView/AuthenticatedView';

const calculateRemainingDays = (endDate: Date): number => {
  const diff = Math.abs(endDate.getTime() - new Date().getTime());
  return Math.ceil(diff / (24 * 60 * 60 * 1000)); // hours*minutes*seconds*milliseconds
};

export default function Rewards() {
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState<IncentiveInput>({
    description: '',
    endDate: new Date(),
  });
  const [render, setRender] = useState(true);
  const router = useRouter();
  const [remainingDays, setRemainingDays] = useState<number>(0);
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardMember[]>([{ name: '', numberOfCreatedTags: 0, id: '' }]);

  const fetchCurrentIncentive = async () => {
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_HOST_HOUSEHOLDMANAGEMENT + '/saving/getCurrentIncentive', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
      }).catch((e) => {
        throw e;
      });

      if (res.ok) {
        const data = await res.json();
        Object.keys(data).forEach(function (key) {
          let value: string | Date;

          if (key == 'endDate') {
            value = data[key] != '' ? new Date(data[key]) : new Date();
          } else {
            value = data[key];
          }

          setFormData((prevState) => ({
            ...prevState,
            [key]: value,
          }));
        });

        setRemainingDays(calculateRemainingDays(formData.endDate));
        return 200;
      }
      return res.status;
    } catch (error) {
      return 500;
    }
  };

  const fetchLeaderboardData = async () => {
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_HOST_HOUSEHOLDMANAGEMENT + '/leaderboard/get', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
      }).catch((e) => {
        throw e;
      });

      if (res.ok) {
        const data: LeaderboardMember[] = await res.json();
        setLeaderboardData(data.sort((a, b) => b.numberOfCreatedTags - a.numberOfCreatedTags));
        return 200;
      }
      return res.status;
    } catch (error) {
      return 500;
    }
  };

  useEffect(() => {
    (async () => {
      try {
        if (render) {
          const incentiveStatus: number = await fetchCurrentIncentive();
          const leaderboardStatus: number = await fetchLeaderboardData();

          if ((incentiveStatus | leaderboardStatus) != 200) {
            (incentiveStatus | leaderboardStatus) === 404 ? router.push('./errors/notfound') : router.push('./errors/error');
          }

          setRender(false);
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }),
    [render, fetchCurrentIncentive, fetchLeaderboardData];

  const handleInput = (event: any) => {
    const { name, value } = event.currentTarget;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDateInput = (date: Date | null) => {
    if (date != null) {
      setFormData((prevState) => ({
        ...prevState,
        endDate: date,
      }));
    }
  };

  async function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const incentive: Incentive = {
      description: formData.description,
      endDate: formData.endDate ? formData.endDate.toISOString().substring(0, 10) : '',
    };

    await fetch(process.env.NEXT_PUBLIC_HOST_HOUSEHOLDMANAGEMENT + '/saving/updateIncentive', {
      method: 'POST',
      body: JSON.stringify(incentive),
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
    })
      .then(async (res) => {
        if (!res.ok) {
          res.status === 404 ? router.push('./errors/notfound') : router.push('./errors/error');
        }
      })
      .catch((e) => {
        console.error(e);
      });

    setRender(true);
    setEditMode(false);
  }

  return (
    <div className="Rewards">
      <header>
        <Navigation />
      </header>
      <div className="flex flex-col justify-center items-center space-y-8 mb-5">
        <div className="text-xl sm:text-2xl md:text-4xl font-bold">Belohnungen</div>
        <div className="flex flex-col space-y-5 bg-indigo-50 rounded-sm border-2 border-black p-5">
          <div className="text-lg md:text-xl font-bold text-center">Aktuelle Belohnung</div>
          <AuthenticatedView role="Admin">
            <button
              className={
                editMode ? 'hidden' : 'Edit justify-center items-center inline-flex space-x-3 bg-primary-600 rounded-full p-2 transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow'
              }
              onClick={() => setEditMode(true)}
            >
              <div className="Bearbeiten text-sm sm:text-base text-white">Bearbeiten</div>
              <FaEdit class="text-white"></FaEdit>
            </button>
          </AuthenticatedView>
          <div className={editMode ? 'hidden' : 'text-base md:text-xl font-bold text-center'}>{formData.description}</div>
          <div className={editMode ? 'hidden' : 'text-sm md:text-lg text-right'}>noch {remainingDays} Tag(e)</div>
          <form method="POST" onSubmit={submitForm} className={editMode ? 'flex flex-col items-center space-y-3' : 'hidden'}>
            <Label name="Freitext für Belohnung"></Label>
            <InputAttribute name="description" handleInput={handleInput} placeholder="Belohnung" value={formData.description} required={false}></InputAttribute>
            <Label name="Fälligkeitsdatum für Belohnung"></Label>
            <DatePicker name="dateOfBirth" selected={formData.endDate} onChange={(date) => handleDateInput(date)} required={false} placeholderText="MM/DD/YYYY" />
            <div className="flex grow space-x-4 md:space-x-8 mt-10 justify-center items-center">
              <div className="CancelButton bg-gray-400 rounded-full p-3 transition duration-150 ease-in-out hover:bg-gray-500 hover:shadow">
                <button onClick={() => setEditMode(false)} className="text-center text-white text-base font-medium leading-normal">
                  Abbrechen
                </button>
              </div>
              <div className="ConfirmButton bg-primary-600 rounded-full p-3 transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow">
                <button type="submit">
                  <span className="text-center text-white text-sm sm:text-base font-medium leading-normal">Änderungen übernehmen</span>
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="Leaderboard flex flex-col space-y-5 rounded-sm border-2 border-black bg-indigo-50 p-4">
          <div className="Rangliste text-lg md:text-xl font-bold">Rangliste</div>
          <div className="flex-col flex justify-center items-center space-y-8 mb-5">
            {leaderboardData.map((m, index) => (
              <DisplayAttribute key={m.id} name={`${m.name}: ${m.numberOfCreatedTags} Markierungen`} star={index == 0 ? true : false}></DisplayAttribute>
            ))}
          </div>
        </div>
        <div className="ActiveButton inline-flex justify-center items-center bg-primary-600 rounded-full p-3 space-x-3 transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow">
          <Link href="../pages/energy-consumption">
            <span className="text-sm sm:text-base text-center text-white font-medium leading-normal">Jetzt Verbrauch zuordnen</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
