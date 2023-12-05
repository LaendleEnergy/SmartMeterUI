"use client";

import { FormEvent, useState } from 'react';
import InputAttribute from '@/app/components/input/InputAttribute';
import { useRouter } from 'next/navigation';
import NavBar from '@/app/components/navigation/NavBar';
import React from 'react';
import Label from '@/app/components/input/Label';
import PricingPlanDropdown from '@/app/components/input/PricingPlanDropdown';
import SupplierDropdown from '@/app/components/input/SupplierDropdown';

interface CreateHousehold {
  emailAddress: string;
  password: string;
  confirmPassword?: string;
  name: string;
  pricingPlan: string;
  supplier: string;
  deviceId: string;
}

interface AuthRequest {
  emailAddress: string,
  password: string,
}

export default function Register() {

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<CreateHousehold>({ emailAddress: "", name: "", password: "", confirmPassword: "", pricingPlan: "", supplier: "", deviceId: "" });
  const router = useRouter();
  const data = new FormData();
  let token;

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

  const handlePricingPlanInput = (selectedValue: any) => {
    setFormData((prevState) => ({
      ...prevState,
      ["pricingPlan"]: selectedValue.name,
    }));
  }

  const handleSupplierInput = (selectedValue: any) => {
    setFormData((prevState) => ({
      ...prevState,
      ["supplier"]: selectedValue,
    }));
  }

  async function submitAccountForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (formData.password == formData.confirmPassword) {

      Object.entries(formData).forEach(([key, value]) => {
        data.append(key, value);
      });

      setStep(step + 1);
    } else {
      alert("Passwörter stimmen nicht überein.");
    }
  }

  async function submitHouseholdForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const household: CreateHousehold = {
      emailAddress: formData.emailAddress,
      password: formData.password,
      name: formData.name,
      pricingPlan: formData.pricingPlan,
      supplier: formData.supplier,
      deviceId: formData.deviceId
    };

    const householdId = await fetch('http://localhost:8080/household/create', {
      method: "POST",
      body: JSON.stringify(household),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(result => result.json())
    .catch((e) => console.log(e));

    const authRequest: AuthRequest = { emailAddress: formData.emailAddress, password: formData.password };

    // ToDo: Automatisch erneuern, wenn abgelaufen
    token = await fetch('http://localhost:8080/user/authenticate', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(authRequest),
    })
      .then(async result => {
        return await result.json();
      })
      .catch(error => console.log(error));


    if (token) {
      const tokenValue = token["token"];
      localStorage.setItem("token", tokenValue);
      localStorage.setItem("email", formData.emailAddress);
      localStorage.setItem("householdId", householdId);
      localStorage.setItem("userId", token["userId"]);
      router.push("../pages/energy-consumption");
    } else {
      console.log("Authorization failed")
    }
  };

  const steps = [
    {
      title: 'Account', content:
        <form method="POST" onSubmit={submitAccountForm} className="flex flex-col items-center space-y-3 p-5 border-2 bg-indigo-50 border-black border-solid">
          <Label name="E-Mail"></Label>
          <InputAttribute name="emailAddress" type="email" handleInput={handleInput} placeholder="E-Mail" value={formData.emailAddress}></InputAttribute>
          <Label name="Name"></Label>
          <InputAttribute name="name" handleInput={handleInput} placeholder="Name" value={formData.name}></InputAttribute>
          <Label name="Passwort"></Label>
          <InputAttribute name="password" type="password" handleInput={handleInput} placeholder="Passwort" value={formData.password}></InputAttribute>
          <Label name="Passwort wiederholen"></Label>
          <InputAttribute name="confirmPassword" type="password" handleInput={handleInput} placeholder="Passwort wiederholen" value={formData.confirmPassword ? formData.confirmPassword : ""}></InputAttribute>
          <div className="flex grow space-x-8 mt-10 justify-center items-center">
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
        <form method="POST" onSubmit={submitHouseholdForm} className="flex flex-col items-center space-y-3 border-2 bg-indigo-50 border-black border-solid">
          <Label name="Stromanbieter"></Label>
          <SupplierDropdown handleInput={handleSupplierInput} supplierName={formData.supplier}></SupplierDropdown>
          <Label name="Stromtarif"></Label>
          <PricingPlanDropdown handleInput={handlePricingPlanInput} pricingPlanName={formData.pricingPlan}></PricingPlanDropdown>
          <Label name="Zählernummer"></Label>
          <InputAttribute name="deviceId" handleInput={handleInput} placeholder="Zählernummer" value={formData.deviceId}></InputAttribute>
          <div className="flex grow space-x-8 mt-10 justify-center items-center">
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
      <div className="flex grow space-x-20 justify-center items-center py-[12%]">
        {steps.map((s, index) => (
          <span key={index} className={index === 0 || step == 2 ? "z-2 font-bold bg-primary-600 rounded-full p-3 text-white" : "z-2 font-normal bg-gray-400 rounded-full p-3 text-white"}>
            {s.title}
          </span>
        ))}
      </div>

      <div>
        <div className="flex-col flex justify-center items-center">
          <NavBar showTabs={false}></NavBar>
          <div className="text-4xl font-bold pb-10">Haushalt registrieren</div>
          <p>{steps[step - 1].content}</p>
        </div>
      </div>
    </div>
  );
};


