'use client';

import DisplayAttribute from '@/app/components/input/DisplayAttribute';
import Navigation from '../../components/navigation/NavBar';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { FormEvent, useEffect, useState } from 'react';
import InputAttribute from '@/app/components/input/InputAttribute';
import Label from '@/app/components/input/Label';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import DeleteDialog from '@/app/components/dialogs/DeleteDialog';
import { Gender, User, UserInput } from '@/app/models/User';
import { useRouter } from 'next/navigation';
import Dropdown from '@/app/components/input/Dropdown';
import { DateOfBirthValidation, PasswordValidation, validateDateOfBirth, validatePassword } from '@/app/components/input/Validation';

export default function PersonalInformation() {
  const [isOpen, setIsOpen] = useState(false);
  const [render, setRender] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [displayData, setDisplayData] = useState<User>({ emailAddress: 'E-Mail', name: 'Name', dateOfBirth: 'Geburtsdatum (Optional)', gender: 'Geschlecht (Optional)', password: '' });
  const [formData, setFormData] = useState<UserInput>({ emailAddress: '', password: '', confirmPassword: '', name: '', dateOfBirth: new Date(), gender: '' });
  const router = useRouter();
  const [errors, setErrors] = useState({ password: '', dateOfBirth: '' });
  const [isDateOfBirthSet, setIsDateOfBirthSet] = useState(false);

  const handleCheckboxChange = () => {
    setIsDateOfBirthSet(!isDateOfBirthSet);

    if (!isDateOfBirthSet) {
      setFormData((prevState) => ({
        ...prevState,
        dateOfBirth: null,
      }));
    }
  };

  const fetchUserData = async () => {
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_HOST_ACCOUNTMANAGEMENT + '/user/get', {
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
        setDisplayData(data);

        Object.keys(data).forEach(function (key) {
          let value: Date | null;

          if (key == 'dateOfBirth') {
            const dateOfBirthSet = data[key] != '';
            value = dateOfBirthSet ? new Date(data[key]) : null;
            setIsDateOfBirthSet(dateOfBirthSet);
          } else {
            value = data[key];
          }

          setFormData((prevState) => ({
            ...prevState,
            [key]: value,
            confirmPassword: data['password'],
          }));
        });
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
          const userStatus: number = await fetchUserData();

          if (userStatus != 200) {
            userStatus === 404 ? router.push('./errors/notfound') : router.push('./errors/error');
          }

          setRender(false);
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, [render, router]);

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
        dateOfBirth: date,
      }));
    }
  };

  const handleGenderInput = (selectedValue: any) => {
    setFormData((prevState) => ({
      ...prevState,
      ['gender']: selectedValue,
    }));
  };

  async function deleteUser() {
    await fetch(process.env.NEXT_PUBLIC_HOST_ACCOUNTMANAGEMENT + '/user/delete', {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
    })
      .then(async (res) => {
        if (!res.ok) {
          res.status === 404 ? router.push('./errors/notfound') : router.push('./errors/error');
        } else {
          router.push('./goodbye');
        }
      })
      .catch((e) => {
        console.error(e);
      });
  }

  async function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const passwordValidation: PasswordValidation = { password: formData.password, confirmPassword: formData.confirmPassword, setErrors: setErrors };
    const dateOfBirthValidation: DateOfBirthValidation = { dateOfBirth: formData.dateOfBirth, setErrors: setErrors };

    if (validatePassword(passwordValidation)) {
      setErrors({ password: '', dateOfBirth: '' });

      if (formData.dateOfBirth && !validateDateOfBirth(dateOfBirthValidation)) {
        return;
      }

      const user: User = {
        emailAddress: formData.emailAddress,
        password: formData.password,
        name: formData.name,
        dateOfBirth: formData.dateOfBirth ? formData.dateOfBirth.toISOString().substring(0, 10) : null,
        gender: formData.gender == '' ? null : formData.gender,
      };

      if (!isDateOfBirthSet) {
        user.dateOfBirth = null;
      }

      await fetch(process.env.NEXT_PUBLIC_HOST_ACCOUNTMANAGEMENT + '/user/update', {
        method: 'POST',
        body: JSON.stringify(user),
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

      setDisplayData(user);
      setRender(true);
      setEditMode(false);
    }
  }

  return (
    <div className="PersonalInformation">
      <header>
        <Navigation />
      </header>
      <div className="flex-col flex justify-center items-center space-y-8 mb-5">
        <div className="space-y-2">
          <div className="text-xl sm:text-2xl md:text-4xl font-bold">Persönliche Daten</div>
          <button
            className={
              editMode ? 'hidden' : 'Edit justify-center items-center inline-flex space-x-3 bg-primary-600 rounded-full p-3 transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow'
            }
            onClick={() => setEditMode(true)}
          >
            <div className="text-sm sm:text-base text-white">Bearbeiten</div>
            <FaEdit class="text-white"></FaEdit>
          </button>
        </div>
        <div className={editMode ? 'hidden' : 'PersonalInformation flex-col items-center gap-3 inline-flex'}>
          <Label name="Name"></Label>
          <DisplayAttribute name={displayData.name}></DisplayAttribute>
          <Label name="E-Mail"></Label>
          <DisplayAttribute name={displayData.emailAddress ? displayData.emailAddress : ''}></DisplayAttribute>
          <Label name="Geburtsdatum (Optional)"></Label>
          <DisplayAttribute name={displayData.dateOfBirth ? displayData.dateOfBirth : ''}></DisplayAttribute>
          <Label name="Geschlecht (Optional)"></Label>
          <DisplayAttribute name={displayData.gender ? displayData.gender : ''}></DisplayAttribute>
        </div>
        <form
          method="POST"
          onSubmit={submitForm}
          className={editMode ? 'PersonalInformation flex flex-col items-center space-y-2 md:space-y-4 border-2 bg-indigo-50 border-black border-solid p-2 md:p-5' : 'hidden'}
        >
          <Label name="Name"></Label>
          <InputAttribute name="name" handleInput={handleInput} placeholder="Name" value={formData.name}></InputAttribute>
          <Label name="E-Mail"></Label>
          <InputAttribute name="emailAddress" type="email" handleInput={handleInput} placeholder="E-Mail" value={formData.emailAddress}></InputAttribute>
          <Label name="Passwort"></Label>
          <InputAttribute name="password" type="password" handleInput={handleInput} placeholder="Passwort" value={formData.password}></InputAttribute>
          <Label name="Passwort wiederholen"></Label>
          {errors.password && <p className="text-red-600 text-sm sm:text-base">{errors.password}</p>}
          <InputAttribute
            name="confirmPassword"
            type="password"
            handleInput={handleInput}
            placeholder="Passwort wiederholen"
            value={formData.confirmPassword ? formData.confirmPassword : ''}
          ></InputAttribute>
          <Label name="Geburtsdatum (Optional)"></Label>
          <span className="text-sm sm:text-base">Geburtsdatum hinzufügen?</span>
          <input type="checkbox" checked={isDateOfBirthSet} onChange={handleCheckboxChange} />
          <div className={isDateOfBirthSet ? '' : 'hidden'}>
            <DatePicker name="dateOfBirth" selected={formData.dateOfBirth} onChange={(date) => handleDateInput(date)} required={false} />
            {errors.dateOfBirth && <p className="text-red-600 text-sm sm:text-base">{errors.dateOfBirth}</p>}
          </div>
          <Label name="Geschlecht (Optional)"></Label>
          <Dropdown handleInput={handleGenderInput} values={Gender} name="gender" value={formData.gender != null ? formData.gender : 'Geschlecht auswählen'}></Dropdown>
          <div className="flex grow space-x-8 mt-10 justify-center items-center">
            <div className="CancelButton bg-gray-400 rounded-full p-3 transition duration-150 ease-in-out hover:bg-gray-500 hover:shadow">
              <button onClick={() => setEditMode(false)} className="text-center text-white text-sm sm:text-base">
                Abbrechen
              </button>
            </div>
            <div className="ConfirmButton bg-primary-600 rounded-full p-3 transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow">
              <button type="submit">
                <span className="Text text-center text-white text-sm sm:text-base">Änderungen übernehmen</span>
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className={`${editMode ? 'hidden' : 'inline-flex fixed bottom-4 right-4 bg-red-600 rounded-full p-3 space-y-10 transition duration-150 ease-in-out hover:bg-red-700 hover:shadow'}`}>
        <button onClick={() => setIsOpen(true)} className="text-center text-white text-sm sm:text-base right grow w-50 h-15 inline-flex justify-center items-center space-x-3 ">
          User löschen <FaTrash className="text-white"></FaTrash>{' '}
        </button>
      </div>

      <DeleteDialog isOpen={isOpen} setIsOpen={setIsOpen} handleDelete={deleteUser} deleteUser={true}></DeleteDialog>
    </div>
  );
}
