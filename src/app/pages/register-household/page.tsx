'use client';

import { FormEvent, useState } from 'react';
import InputAttribute from '@/app/components/input/InputAttribute';
import { useRouter } from 'next/navigation';
import NavBar from '@/app/components/navigation/NavBar';
import React from 'react';
import Label from '@/app/components/input/Label';
import PricingPlanDropdown from '@/app/components/input/PricingPlanDropdown';
import SupplierDropdown from '@/app/components/input/SupplierDropdown';
import { authenticate } from '@/app/authentication/authentication';
import { CreateHousehold } from '@/app/models/Household';
import { AuthRequest } from '@/app/models/Authentication';
import { PasswordValidation, PricingPlanAndSupplierValidation, validatePassword, validatePricingPlanAndSupplier } from '@/app/components/input/Validation';

export default function Register() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<CreateHousehold>({ emailAddress: '', name: '', password: '', confirmPassword: '', pricingPlan: '', supplier: '', deviceId: '' });
  const router = useRouter();
  const data = new FormData();
  const [errors, setErrors] = useState({ password: '', supplier: '', pricingPlan: '', authentication: '' });

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleInput = (event: any) => {
    const { name, value } = event.currentTarget;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlePricingPlanInput = (selectedValue: any) => {
    setFormData((prevState) => ({
      ...prevState,
      ['pricingPlan']: selectedValue.name,
    }));
  };

  const handleSupplierInput = (selectedValue: any) => {
    setFormData((prevState) => ({
      ...prevState,
      ['supplier']: selectedValue,
    }));
  };

  async function submitAccountForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const passwordValidation: PasswordValidation = { password: formData.password, confirmPassword: formData.confirmPassword || '', setErrors: setErrors };

    if (validatePassword(passwordValidation)) {
      setErrors({ password: '', supplier: '', pricingPlan: '', authentication: '' });

      const validated = await fetch('http://localhost:8080/user/validateEmail', {
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
        Object.entries(formData).forEach(([key, value]) => {
          data.append(key, value);
        });

        setStep(step + 1);
      } else {
        setErrors((prevState) => ({
          ...prevState,
          accountForm: 'E-Mail Adresse wird bereits verwendet.',
        }));
      }
    }
  }

  async function submitHouseholdForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const pricingPlanAndSupplierValidation: PricingPlanAndSupplierValidation = { supplier: formData.supplier, pricingPlan: formData.pricingPlan, setErrors: setErrors };

    if (validatePricingPlanAndSupplier(pricingPlanAndSupplierValidation)) {
      setErrors({ password: '', supplier: '', pricingPlan: '', authentication: '' });

      const household: CreateHousehold = {
        emailAddress: formData.emailAddress,
        password: formData.password,
        name: formData.name,
        pricingPlan: formData.pricingPlan,
        supplier: formData.supplier,
        deviceId: formData.deviceId,
      };

      await fetch('http://localhost:8080/household/create', {
        method: 'POST',
        body: JSON.stringify(household),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(async (res) => {
          if (!res.ok) {
            res.status === 404 ? router.push('./errors/notfound') : router.push('./errors/error');
          } else {
            const authRequest: AuthRequest = { emailAddress: formData.emailAddress, password: formData.password };

            if (await authenticate(authRequest)) {
              router.push('./energy-consumption');
            } else {
              setErrors((prevState) => ({
                ...prevState,
                authentication: 'Authentifizierung fehlgeschlagen.',
              }));
            }
          }
        })
        .catch((e) => {
          console.error(e);
        });
    }
  }

  const steps = [
    {
      title: 'Account',
      content: (
        <form method="POST" onSubmit={submitAccountForm} className="flex flex-col items-center mb-5 space-y-2 p-2 md:p-4 border-2 bg-indigo-50 border-black border-solid">
          <Label name="E-Mail"></Label>
          <InputAttribute name="emailAddress" type="email" handleInput={handleInput} placeholder="E-Mail" value={formData.emailAddress}></InputAttribute>
          <Label name="Name"></Label>
          <InputAttribute name="name" handleInput={handleInput} placeholder="Name" value={formData.name}></InputAttribute>
          <Label name="Passwort"></Label>
          <InputAttribute name="password" type="password" handleInput={handleInput} placeholder="Passwort" value={formData.password}></InputAttribute>
          <Label name="Passwort wiederholen"></Label>
          <InputAttribute
            name="confirmPassword"
            type="password"
            handleInput={handleInput}
            placeholder="Passwort wiederholen"
            value={formData.confirmPassword ? formData.confirmPassword : ''}
          ></InputAttribute>
          {errors.password && <p className="text-red-600 text-sm sm:text-base">{errors.password}</p>}
          <div className="flex grow space-x-4 md:space-x-8 mt-10 justify-center items-center">
            <div className="CancelButton bg-gray-400 rounded-full p-3 transition duration-150 ease-in-out hover:bg-gray-500 hover:shadow">
              <button onClick={() => router.back()} className="text-center text-white text-sm sm:text-base font-medium leading-normal">
                Zurück
              </button>
            </div>
            <div className="ConfirmButton bg-primary-600 rounded-full p-3 transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow">
              <button type="submit" className="text-center text-white text-sm sm:text-base font-medium">
                Weiter
              </button>
            </div>
          </div>
        </form>
      ),
    },
    {
      title: 'Haushalt',
      content: (
        <form method="POST" onSubmit={submitHouseholdForm} className="flex flex-col items-center mb-5 space-y-2 p-2 md:p-4 border-2 bg-indigo-50 border-black border-solid">
          <Label name="Stromanbieter"></Label>
          <SupplierDropdown handleInput={handleSupplierInput} supplierName={formData.supplier}></SupplierDropdown>
          {errors.supplier && <p className="text-red-600 text-sm sm:text-base">{errors.supplier}</p>}
          <Label name="Stromtarif"></Label>
          <PricingPlanDropdown handleInput={handlePricingPlanInput} pricingPlanName={formData.pricingPlan}></PricingPlanDropdown>
          {errors.pricingPlan && <p className="text-red-600 text-sm sm:text-base">{errors.pricingPlan}</p>}
          <Label name="Zählernummer"></Label>
          <InputAttribute name="deviceId" handleInput={handleInput} placeholder="Zählernummer" value={formData.deviceId}></InputAttribute>
          {errors.authentication && <p className="text-red-600 text-sm sm:text-base">{errors.authentication}</p>}
          <div className="flex grow space-x-4 md:space-x-8 mt-10 justify-center items-center">
            <div className="CancelButton bg-gray-400 rounded-full p-3 transition duration-150 ease-in-out hover:bg-gray-500 hover:shadow">
              <button onClick={handleBack} className="text-center text-white text-sm sm:text-base font-medium">
                Zurück
              </button>
            </div>
            <div className="ConfirmButton bg-primary-600 rounded-full p-3 transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow">
              <button type="submit" className="text-center text-white text-sm sm:text-base font-medium">
                Registrieren
              </button>
            </div>
          </div>
        </form>
      ),
    },
  ];

  return (
    <div>
      <header>
        <NavBar showTabs={false}></NavBar>
      </header>
      <div className="flex grow space-x-20 justify-center items-center pb-10">
        {steps.map((s, index) => (
          <span
            key={index}
            className={index === 0 || step == 2 ? 'z-2 font-bold bg-primary-600 rounded-full p-3 text-white' : 'z-2 text-sm sm:text-base font-normal bg-gray-400 rounded-full p-3 text-white'}
          >
            {s.title}
          </span>
        ))}
      </div>

      <div className="flex-col flex justify-center items-center">
        <div className="text-xl sm:text-2xl md:text-4xl font-bold pb-10">Haushalt registrieren</div>
        <p>{steps[step - 1].content}</p>
      </div>
    </div>
  );
}
