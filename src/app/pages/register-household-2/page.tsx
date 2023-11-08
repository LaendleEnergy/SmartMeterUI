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
      <div className="flex-col flex justify-center items-center space-y-10 py-[10%]">
        <Navbar showTabs={false}></Navbar>
        <Stepper step2={true}></Stepper>
        <div className="text-4xl font-bold">Haushalt registrieren</div>
        <div className="space-y-5">
          <InputAttribute name="Aktueller Stromtarif"></InputAttribute>
          <InputAttribute name="Stromanbieter"></InputAttribute>
          <InputAttribute name="Zählernummer"></InputAttribute>
          <div className="flex grow space-x-8 justify-center items-center">
            <div className="CancelButton bg-gray-400 rounded-full p-3 transition duration-150 ease-in-out hover:bg-gray-500 hover:shadow">
              <button onClick={() => router.back()} className="text-center text-white text-base font-medium leading-normal">Zurück</button>
            </div>
            <div className="ConfirmButton bg-primary-600 rounded-full p-3 transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow">
              <Link href="./energy-consumption" className="text-center text-white text-base font-medium leading-normal"><span className="Text text-center text-white text-base font-medium leading-normal">Registrieren</span></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
