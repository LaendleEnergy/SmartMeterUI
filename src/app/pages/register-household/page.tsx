"use client";

import { FormEvent, useEffect, useState } from 'react';
import InputAttribute from '@/app/components/input/InputAttribute';
import { useRouter } from 'next/navigation';
import Navbar from '@/app/components/navigation/NavBar';
import React from 'react';
import Label from '@/app/components/input/Label';
import PricingPlanDropdown from '@/app/components/input/PricingPlanDropdown';

export default function Register() {

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
    pricingPlan: "",
    supplier: "",
    deviceId: "",
  })

  useEffect(() => { });

  const router = useRouter();
  const data = new FormData();
  const formURL = 'http://localhost:8080/household/create';

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleInput = (event: any) => {
    const { name, value } = event.currentTarget;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  async function submitAccountForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (formData.password == formData.confirmPassword) {
      // Turn formData state into data which can be used with a form submission
      Object.entries(formData).forEach(([key, value]) => {
        data.append(key, value);
      })

      handleNext();
    } else {
      alert("Passwörter stimmen nicht überein.")
    }
  }

  async function submitHouseholdForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    fetch(formURL, {
      method: "POST",
      body: data,
    }).then(() => {
      setFormData({
        email: "",
        name: "",
        password: "",
        confirmPassword: "",
        pricingPlan: "",
        supplier: "",
        deviceId: "",
      })
    });

    router.push("./energy-consumption");
  }

  const steps = [
    {
      title: 'Account', content:
        <form method="POST" onSubmit={submitAccountForm} className="flex flex-col items-center space-y-5 border-2 bg-indigo-50 border-black border-solid">
          <Label name="E-Mail"></Label>
          <InputAttribute name="email" type="email" handleInput={handleInput} placeholder="E-Mail" value={formData.email}></InputAttribute>
          <Label name="Name"></Label>
          <InputAttribute name="name" handleInput={handleInput} placeholder="Name" value={formData.name}></InputAttribute>
          <Label name="Passwort"></Label>
          <InputAttribute name="password" type="password" handleInput={handleInput} placeholder="Passwort" value={formData.password}></InputAttribute>
          <Label name="Passwort wiederholen"></Label>
          <InputAttribute name="confirmPassword" type="password" handleInput={handleInput} placeholder="Passwort wiederholen" value={formData.confirmPassword}></InputAttribute>
          <div className="flex grow space-x-8 mt-10 mb-10 justify-center items-center">
            <div className="CancelButton bg-gray-400 rounded-full p-3 transition duration-150 ease-in-out hover:bg-gray-500 hover:shadow">
              <button onClick={() => router.back()} className="text-center text-white text-base font-medium leading-normal">Zurück</button>
            </div>
            <div className="ConfirmButton bg-primary-600 rounded-full p-3 transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow">
              <button type="submit" className="text-center text-white text-base font-medium leading-normal"><span className="Text text-center text-white text-base font-medium leading-normal">Weiter</span></button>
            </div>
          </div>
        </form>
    },
    {
      title: 'Haushalt', content:
        <form method="POST" onSubmit={submitHouseholdForm} className="flex flex-col items-center space-y-5 border-2 bg-indigo-50 border-black border-solid">
          <Label name="Stromanbieter"></Label>
          <InputAttribute name="supplier" handleInput={handleInput} placeholder="Stromanbieter" value={formData.supplier}></InputAttribute>
          <Label name="Stromtarif"></Label>
          <PricingPlanDropdown title="Stromtarif auswählen" handleInput={handleInput} value={formData.pricingPlan}></PricingPlanDropdown>
          <Label name="Zählernummer"></Label>
          <InputAttribute name="deviceId" handleInput={handleInput} placeholder="Zählernummer" value={formData.deviceId}></InputAttribute>
          <div className="flex grow space-x-8 mt-10 mb-10 justify-center items-center">
            <div className="CancelButton bg-gray-400 rounded-full p-3 transition duration-150 ease-in-out hover:bg-gray-500 hover:shadow">
              <button onClick={handleBack} className="text-center text-white text-base font-medium leading-normal">Zurück</button>
            </div>
            <div className="ConfirmButton bg-primary-600 rounded-full p-3 transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow">
              <button type="submit" className="text-center text-white text-base font-medium leading-normal">Registrieren</button>
            </div>
          </div>
        </form>
    },
  ];

  return (
    <div>
      <div className="flex grow space-x-20 justify-center items-center py-[7%]">
        {steps.map((s, index) => (
          <span key={index} className={index === 0 || step == 2 ? "z-2 font-bold bg-primary-600 rounded-full p-3 text-white" : "z-2 font-normal bg-gray-400 rounded-full p-3 text-white"}>
            {s.title}
          </span>
        ))}
      </div>

      <div>
        <div className="flex-col flex justify-center items-center">
          <Navbar showTabs={false}></Navbar>
          <div className="text-4xl font-bold pb-10">Haushalt registrieren</div>
          <p>{steps[step - 1].content}</p>
        </div>
      </div>
    </div>
  );
};


