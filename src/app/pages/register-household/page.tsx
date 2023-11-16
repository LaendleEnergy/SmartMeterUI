"use client";

import { useEffect, useState } from 'react';
import InputAttribute from '@/app/components/input/InputAttribute';
import { useRouter } from 'next/navigation';
import Navbar from '@/app/components/navigation/NavBar';
import React from 'react';

export default function Register() {

  useEffect(() => {

  });

  const [step, setStep] = useState(1);
  const router = useRouter();

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleConfirm = () => {
    router.push("./energy-consumption");
  };

  const steps = [
    {
      title: 'Account', content:

        <div className="space-y-5">
          <InputAttribute name="Email"></InputAttribute>
          <InputAttribute name="Name"></InputAttribute>
          <InputAttribute name="Passwort" type="password"></InputAttribute>
          <InputAttribute name="Passwort wiederholen" type="password"></InputAttribute>
          <div className="flex grow space-x-8 justify-center items-center">
            <div className="CancelButton bg-gray-400 rounded-full p-3 transition duration-150 ease-in-out hover:bg-gray-500 hover:shadow">
              <button onClick={() => router.back()} className="text-center text-white text-base font-medium leading-normal">Zurück</button>
            </div>
            <div className="ConfirmButton bg-primary-600 rounded-full p-3 transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow">
              <button onClick={(handleNext)} className="text-center text-white text-base font-medium leading-normal"><span className="Text text-center text-white text-base font-medium leading-normal">Weiter</span></button>
            </div>
          </div>
        </div>
    },
    {
      title: 'Haushalt', content:
        <div className="space-y-5">
          <InputAttribute name="Aktueller Stromtarif"></InputAttribute>
          <InputAttribute name="Stromanbieter"></InputAttribute>
          <InputAttribute name="Zählernummer"></InputAttribute>
          <div className="flex grow space-x-8 justify-center items-center">
            <div className="CancelButton bg-gray-400 rounded-full p-3 transition duration-150 ease-in-out hover:bg-gray-500 hover:shadow">
              <button onClick={handleBack} className="text-center text-white text-base font-medium leading-normal">Zurück</button>
            </div>
            <div className="ConfirmButton bg-primary-600 rounded-full p-3 transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow">
              <button onClick={handleConfirm} className="text-center text-white text-base font-medium leading-normal">Registrieren</button>
            </div>
          </div>
        </div>
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


