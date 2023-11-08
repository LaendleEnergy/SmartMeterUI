"use client";

import Link from "next/link";
import InputAttribute from "@/app/components/InputAttribute";
import Navbar from "@/app/components/navigation/NavBar";
import { useRouter } from 'next/navigation'
import Stepper from "@/app/components/navigation/Stepper";

export default function Register() {
  const router = useRouter()

  return (
    <div className="Register">
      <div className="flex-col flex justify-center items-center space-y-10 py-[10%]">
        <Navbar showTabs={false}></Navbar>
        <Stepper></Stepper>
        <div className="text-4xl font-bold">Haushalt registrieren</div>
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
              <Link href="./register-household-2" className="text-center text-white text-base font-medium leading-normal"><span className="Text text-center text-white text-base font-medium leading-normal">Weiter</span></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
