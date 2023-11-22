"use client";

import { FormEvent, useEffect, useState } from 'react';
import InputAttribute from '@/app/components/input/InputAttribute';
import { useRouter } from 'next/navigation';
import Navbar from '@/app/components/navigation/NavBar';
import React from 'react';

export default function Register() {

  const [step, setStep] = useState(1);
  const [isFormValid, setIsFormValid] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
    pricingPlan: "",
    supplier: "",
    deviceId: "",
  })

  useEffect(() => {});

  const router = useRouter();
  const data = new FormData();
  const formURL = 'http://localhost:8080/household/create';
  let passwordError = ""

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
    if (formData.password == formData.confirmPassword) {
      event.preventDefault();

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

    if (isFormValid) {
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
  }

  const steps = [
    {
      title: 'Account', content:

        <form method="POST" onSubmit={submitAccountForm} className="space-y-5">
          <InputAttribute name="email" type="email" handleInput={handleInput} placeholder="E-Mail" value={formData.email} required={true}></InputAttribute>
          <InputAttribute name="name" handleInput={handleInput} placeholder="Name" value={formData.name} required={true}></InputAttribute>
          <InputAttribute name="password" type="password" handleInput={handleInput} placeholder="Passwort" value={formData.password} required={true}></InputAttribute>
          <InputAttribute name="confirmPassword" type="password" handleInput={handleInput} placeholder="Passwort wiederholenn" value={formData.confirmPassword} required={true}></InputAttribute>
          <div className="flex grow space-x-8 justify-center items-center">
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
        <form method="POST" onSubmit={submitHouseholdForm} className="space-y-5">
          <InputAttribute name="supplier" handleInput={handleInput} placeholder="Stromanbieter" value={formData.supplier} required={true}></InputAttribute>
          <InputAttribute name="pricingPlan" handleInput={handleInput} placeholder="Stromtarif" value={formData.pricingPlan} required={true}></InputAttribute>
          <InputAttribute name="deviceId" handleInput={handleInput} placeholder="Zählernummer" value={formData.deviceId} required={true}></InputAttribute>
          <div className="flex grow space-x-8 justify-center items-center">
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


