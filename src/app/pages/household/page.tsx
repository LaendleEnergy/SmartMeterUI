"use client";

import DisplayAttribute from "@/app/components/input/DisplayAttribute";
import Navigation from "../../components/navigation/NavBar";
import { FaEdit, FaTrash } from "react-icons/fa";
import Link from "next/link";
import { useState } from 'react';
import GenericDialog from "../../components/GenericDialog";

export default function Household() {
    let [isOpen, setIsOpen] = useState(false);

    return (
        <div className="Household">
            <header><Navigation /></header>
            <div className="flex-col flex justify-center items-center space-y-8 py-[10%]">
                <div className="space-y-2">
                    <div className="text-4xl font-bold">Dein Haushalt</div>
                    <div className="Edit justify-center items-center inline-flex space-x-3">
                        <div className="Bearbeiten text-xl">Bearbeiten</div>
                        <FaEdit></FaEdit>
                    </div>
                </div>
                <div className="HouseholdInformation flex-col items-center gap-8 inline-flex">
                    <DisplayAttribute name="Stromanbieter"></DisplayAttribute>
                    <DisplayAttribute name="Aktueller Stromtarif"></DisplayAttribute>
                    <DisplayAttribute name="Zählernummer"></DisplayAttribute>
                </div>
                <div className="ActiveButton inline-flex flex-col justify-center items-center bg-primary-600 rounded-full p-3 space-x-3 transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow">
                    <Link href="../pages/members"><span className="Text text-center text-white text-base font-medium leading-normal">Haushaltsmitglieder verwalten</span></Link>
                </div>
            </div>

            <div className="DeleteButton inline-flex fixed bottom-4 right-4 bg-red-600 rounded-full p-3 space-y-10 transition duration-150 ease-in-out hover:bg-red-700 hover:shadow">
                <button onClick={() => setIsOpen(true)} className="text-center text-white text-base font-medium leading-normal right grow w-50 h-15 inline-flex justify-center items-center space-x-3 ">Account löschen  <FaTrash className="text-white"></FaTrash> </button>
            </div>

            <GenericDialog title="Account löschen" isOpen={isOpen} activeButtonLabel="Account löschen" setIsOpen={setIsOpen} delete={true} device={false}></GenericDialog>
        </div >
    )
}

