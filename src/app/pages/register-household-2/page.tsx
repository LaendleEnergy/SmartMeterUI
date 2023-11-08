"use client";

import Link from "next/link";
import InputAttribute from "@/app/components/InputAttribute";
import Navbar from "@/app/components/navigation/NavBar";
import { useRouter } from 'next/navigation'
import Stepper from "@/app/components/navigation/Stepper";

export default function Register2() {
  const router = useRouter()

  return (
    <div className="Register2">
      <div className="Page flex-col flex justify-center items-center space-y-10 py-[10%]">
        <Navbar showTabs={false}></Navbar>
        <Stepper step2={true}></Stepper>
        <div className="RegisterHousehold text-4xl font-bold">Haushalt registrieren</div>
        <div className="Register space-y-5">
          <InputAttribute name="Aktueller Stromtarif"></InputAttribute>
          <InputAttribute name="Stromanbieter"></InputAttribute>
          <InputAttribute name="Zählernummer"></InputAttribute>
          <div className="inline-flex space-x-5 justify-center items-center">
            <div className="CancelButton inline-block bg-gray-400 rounded-full p-3 transition duration-150 ease-in-out hover:bg-gray-700 hover:shadow">
              <button onClick={() => router.back()} className="Default text-center text-white text-base font-medium leading-normal">Zurück</button>
            </div>
            <div className="ConfirmButton inline-block bg-primary-600 rounded-full p-3 transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow">
              <Link href="./energy-consumption" className="Default text-center text-white text-base font-medium leading-normal"><span className="Text text-center text-white text-base font-medium leading-normal">Registrieren</span></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
