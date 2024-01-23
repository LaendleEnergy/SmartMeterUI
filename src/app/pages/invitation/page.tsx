'use client';

import { authenticate } from '@/app/authentication/authentication';
import InputAttribute from '@/app/components/input/InputAttribute';
import { PasswordValidation, validatePassword } from '@/app/components/input/Validation';
import NavBar from '@/app/components/navigation/NavBar';
import { AuthRequest } from '@/app/models/Authentication';
import { User, UserInput } from '@/app/models/User';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

export default function AcceptInvitation() {
  const [formData, setFormData] = useState<UserInput>({ emailAddress: '', password: '', confirmPassword: '', name: '', dateOfBirth: new Date(), gender: '' });
  const router = useRouter();
  const [errors, setErrors] = useState({ password: '', email: '' });

  const handleInput = (event: any) => {
    const { name, value } = event.currentTarget;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  async function submitRegistrationForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const passwordValidation: PasswordValidation = { password: formData.password, confirmPassword: formData.confirmPassword, setErrors: setErrors };

    if (validatePassword(passwordValidation)) {
      setErrors({ password: '', email: '' });

      const validated = await fetch(process.env.NEXT_PUBLIC_HOST_ACCOUNTMANAGEMENT + '/user/validateEmail', {
        method: 'POST',
        body: JSON.stringify({ email: formData.emailAddress }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(async (res) => {
          if (res.ok) {
            return res.json();
          }
          return res.status;
        })
        .then((res) => {
          if (typeof res == 'boolean') {
            return res;
          } else if (!res.ok) {
            res.status === 404 ? router.push('./errors/notfound') : router.push('./errors/error');
          }
        })
        .catch((e) => {
          console.error(e);
        });

      if (validated) {
        const newUser: User = {
          emailAddress: formData.emailAddress,
          password: formData.password,
          name: formData.name,
          gender: '',
          dateOfBirth: '',
        };

        await fetch(process.env.NEXT_PUBLIC_HOST_ACCOUNTMANAGEMENT + '/user/create', {
          method: 'POST',
          body: JSON.stringify(newUser),
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

        const authRequest: AuthRequest = { emailAddress: formData.emailAddress, password: formData.password };

        if (await authenticate(authRequest)) {
          router.push('./energy-consumption');
        }
      } else {
        setErrors((prevState) => ({
          ...prevState,
          email: 'E-Mail Adresse wird bereits verwendet.',
        }));
      }
    }
  }

  return (
    <div className="Invitation">
      <NavBar showTabs={false}></NavBar>
      <div className="flex-col flex justify-center items-center space-y-8 ">
        <div className="text-xl sm:text-2xl md:text-4xl font-bold ">Haushalt beitreten</div>
        <div className="text-sm sm:text-base max-w-[75%]">Nimm deine Einladung, deinem Haushalt beizutreten an, indem du hier deine gewünschten Login-Daten angibst.</div>
        <form method="POST" onSubmit={submitRegistrationForm} className="flex flex-col space-y-5 justify-center items-center">
          <InputAttribute name="emailAddress" type="email" handleInput={handleInput} placeholder="E-Mail" value={formData.emailAddress}></InputAttribute>
          {errors.email && <p className="text-red-600 text-sm sm:text-base">{errors.email}</p>}
          <InputAttribute name="name" handleInput={handleInput} placeholder="Name" value={formData.name}></InputAttribute>
          <InputAttribute name="password" type="password" handleInput={handleInput} placeholder="Passwort" value={formData.password}></InputAttribute>
          <InputAttribute name="confirmPassword" type="password" handleInput={handleInput} placeholder="Passwort wiederholen" value={formData.confirmPassword}></InputAttribute>
          {errors.password && <p className="text-red-600 text-sm sm:text-base">{errors.password}</p>}
          <div className="ActiveButton inline-flex justify-center items-center bg-primary-600 rounded-full px-8 py-3 transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow">
            <button>
              <span className="Text text-center text-white text-sm sm:text-base font-medium leading-normal">Haushalt beitreten</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
