'use client';

import Navigation from '../../components/navigation/NavBar';
import TimeframeDropdown from '@/app/components/input/Dropdown';
import { SavingTarget } from '@/app/models/SavingTarget';
import { FormEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaEdit } from 'react-icons/fa';
import Label from '@/app/components/input/Label';
import InputAttribute from '@/app/components/input/InputAttribute';
import { AuthenticatedView } from '@/app/components/AuthenticatedView/AuthenticatedView';

export default function EnergySaving() {
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState<SavingTarget>({ percentage: 0, timeframe: '' });
  const [render, setRender] = useState(true);
  const router = useRouter();
  const [errors, setErrors] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const fetchSavingTargetData = async () => {
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_HOST_HOUSEHOLDMANAGEMENT + '/saving/getCurrentSavingTarget', {
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
        setFormData(data);
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
          const savingTargetStatus: number = await fetchSavingTargetData();

          if (savingTargetStatus != 200) {
            savingTargetStatus === 404 ? router.push('./errors/notfound') : router.push('./errors/error');
          }

          setRender(false);
          setErrors('');
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, [render, router, formData]);

  const handleInput = (event: any) => {
    const { name, value } = event.currentTarget;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleTimeframeInput = (selectedValue: any) => {
    setFormData((prevState) => ({
      ...prevState,
      ['timeframe']: selectedValue,
    }));
  };

  async function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (formData.percentage == 0 || formData.timeframe == '') {
      setErrors('Bitte prüfen Sie Ihre Eingaben.');
      return null;
    }

    const savingTarget: SavingTarget = {
      percentage: formData.percentage,
      timeframe: formData.timeframe,
    };

    await fetch(process.env.NEXT_PUBLIC_HOST_DATACOLLECTOR + '/saving/updateSavingTarget', {
      method: 'POST',
      body: JSON.stringify(savingTarget),
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
    <div className="EnergySaving">
      <header>
        <Navigation />
      </header>
      <div className="flex-col flex justify-center items-center space-y-8">
        <div className="text-xl sm:text-2xl md:text-4xl font-bold">Stromsparen</div>
        <div className="Trend flex-col justify-end items-start p-4 border-2 bg-indigo-50 border-black border-solid w-80 sm:w-96 h-28">
          <div className="inline-flex space-x-2">
            <span className="text-base sm:text-lg font-bold">Trend positiv/ negativ</span>
            <TimeframeDropdown value="Zeitraum wählen" values={['Tag', 'Monat', 'Jahr']} name="timeframe"></TimeframeDropdown>
          </div>
        </div>
        <div className="SavingGoal flex flex-col space-y-5 bg-indigo-50 rounded-sm border-2 border-black p-5">
          <div className="inline-flex space-x-2">
            <span className="text-base sm:text-lg font-bold">Dein Stromsparziel</span>
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
          </div>
          <span className={!editMode && !formData.percentage && !formData.timeframe ? 'text-sm sm:text-base' : 'hidden'}>Es wurde noch kein Stromsparziel gesetzt.</span>
          <span className={editMode || (!formData.percentage && !formData.timeframe) ? 'hidden' : 'text-sm sm:text-base'}></span>
          Einsparung von {formData.percentage}% im Vergleich zum {formData.timeframe}
          <form method="POST" onSubmit={submitForm} className={editMode ? 'flex flex-col items-center space-y-3' : 'hidden'}>
            <Label name="Gewünschte Einsparung in Prozent"></Label>
            <InputAttribute name="percentage" type="number" handleInput={handleInput} placeholder="Einsparung" value={formData.percentage} required={false}></InputAttribute>
            <Label name="Einsparung im Vergleich zum"></Label>
            <TimeframeDropdown
              value={formData.timeframe != '' ? formData.timeframe : 'Zeitraum wählen'}
              handleInput={handleTimeframeInput}
              values={['Vorjahr', 'Vormonat']}
              name="timeframe"
            ></TimeframeDropdown>
            {errors && <p className="text-red-600 text-sm sm:text-base">{errors}</p>}
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
        <div className="Recommendation">
          <div className="flex-col justify-end items-start p-4 border-2 bg-indigo-50 border-black border-solid">
            <div className="Tarifempfehlung text-base sm:text-lg font-bold">Tarifempfehlung</div>
            <div className="Beschreibung w-72 sm:w-96 h-28 justify-center items-center">
              <span className="text-sm sm:text-base">Basierend auf Ihrem Verbrauch, wird folgender Tarif empfohlen: </span>
              <span className="text-base sm:text-lg font-bold">VKW StromTagNacht</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
