"use client";

import Navigation from "../../components/navigation/NavBar";
import { FaPlusCircle } from "react-icons/fa";
import { useState } from 'react';
import MemberCard from "@/app/components/cards/MemberCard";
import MemberDialog from "../dialogs/MemberDialog";

export default function Members() {
    let [isOpen, setIsOpen] = useState(false);

    return (
        <div className="Members">
            <header><Navigation /></header>
            <div className="flex-col flex justify-center items-center space-y-10 py-[10%]">
                <MemberCard name="Testname1" dateOfBirth="01.01.2000" gender="neutral"></MemberCard>
                <div className="ActiveButton inline-flex justify-center items-center bg-primary-600 rounded-full p-3 space-x-3 transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow">
                    <button onClick={() => setIsOpen(true)} className="Default text-white text-base font-medium">Neues Mitglied hinzufügen </button>
                    <FaPlusCircle className="text-white"></FaPlusCircle>
                </div>
            </div>
            <MemberDialog title="Haushaltsmitglied hinzufügen" isOpen={isOpen} activeButtonLabel="Hinzufügen" setIsOpen={setIsOpen}></MemberDialog>
        </div>
    )
}

