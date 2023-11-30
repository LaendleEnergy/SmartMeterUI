"use client";

import Link from 'next/link';
import 'tailwindcss/tailwind.css';
import Logo from "./components/Logo";
import InputAttribute from "@/app/components/input/InputAttribute";
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import Label from './components/input/Label';

interface AuthRequest {
  email: string,
  password: string,
}

export default function Home() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const data = new FormData();
  const router = useRouter();
  const formURL = 'http://localhost:8080/user/login';
  let token;

  const handleInput = (event: any) => {
    const { name, value } = event.currentTarget;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  async function authenticate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const authRequest: AuthRequest = { email: formData.email, password: formData.password };

    // ToDo: Automatisch erneuern, wenn abgelaufen
    token = await fetch(formURL, {
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

    const tokenValue = token["token"];
    localStorage.setItem("token", tokenValue);

    if (tokenValue.length > 0) {
      router.push("./pages/energy-consumption");
    }
  };

  return (
    <div className="Welcome p-[5%]">
      <div className="RegisterOrLogin flex-col justify-center items-center space-y-8 inline-flex">
        <Logo h={388} w={740}></Logo>
        <div className="text-4xl font-bold ">Willkommen bei LaendleEnergy!</div>
        <div className="text-lg max-w-[750%]">Registriere dich jetzt, um den Stromverbrauch deines Haushaltes und die damit verbundenen Kosten beobachten und Feedback über die Energieeffizienz deiner Geräte erhalten zu können.</div>
        <form method="POST" onSubmit={authenticate} className="flex flex-col items-center space-y-3">
          <Label name="E-Mail"></Label>
          <InputAttribute name="email" type="email" handleInput={handleInput} placeholder="E-Mail" value={formData.email} required={true}></InputAttribute>
          <Label name="Passwort"></Label>
          <InputAttribute name="password" type="password" handleInput={handleInput} placeholder="Passwort" value={formData.password} required={true}></InputAttribute>
          <div className="ActiveButton inline-flex justify-center items-center bg-primary-600 rounded-full px-8 py-3 transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow">
            <button type="submit"><span className="Text text-center text-white text-base font-medium leading-normal">Log In</span></button>
          </div>
        </form>
        <div className="PasswortVergessen justify-start items-center flex">
          <div className="PasswortVergessen underline tracking-wider">Passwort vergessen?</div>
        </div>
        <div className="Register text-center"><span className="tracking-wider">Du hast noch keinen Account? <br /></span>
          <Link className="text-zinc-600 font-semibold underline tracking-wider" href="./pages/register-household">Registriere deinen Haushalt kostenlos</Link>
        </div>
      </div>
    </div>
  )
}
