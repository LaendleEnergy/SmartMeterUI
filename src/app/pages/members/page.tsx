"use client";

import Navigation from "../../components/navigation/NavBar";
import { FaPlusCircle } from "react-icons/fa";
import { useEffect, useState } from 'react';
import MemberCard from "@/app/components/cards/MemberCard";
import GenericDialog from "../../components/dialogs/GenericDialog";


interface Member {
    name: string;
    dateOfBirth: string;
    gender: string;
    householdId: string;
    id: string;
}

export default function Members() {
    const [isOpen, setIsOpen] = useState(false);
    const [displayData, setDisplayData] = useState<Member[]>([{ name: "Name", dateOfBirth: "Geburtsdatum (Optional)", gender: "Geschlecht (Optional)", householdId: "", id: "" }]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        const householdId = localStorage.getItem("householdId");

        fetch(`http://localhost:8080/member/get/${householdId}`, {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
            .then(async (res) => {
                return await res.json();
            }).then((data) => {
                setDisplayData(data);
            }).catch(e => console.log(e));

    });

    return (
        <div className="Members">
            <header><Navigation /></header>
            {displayData.map(m => (
                <div key={m.id} className="flex-col flex justify-center items-center space-y-8 py-[15%]">
                    <MemberCard name={m.name} dateOfBirth={m.dateOfBirth} gender={m.gender} id={m.id} householdId={m.householdId}></MemberCard>
                    <div className="ActiveButton inline-flex justify-center items-center bg-primary-600 rounded-full p-3 space-x-3 transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow">
                        <button onClick={() => setIsOpen(true)} className="Default text-white text-base font-medium">Neues Mitglied hinzufügen </button>
                        <FaPlusCircle className="text-white"></FaPlusCircle>
                    </div>
                    <GenericDialog title="Haushaltsmitglied hinzufügen" isOpen={isOpen} activeButtonLabel="Hinzufügen" setIsOpen={setIsOpen} device={false} memberId={m.id}></GenericDialog>
                </div>
            ))}
        </div>
    )
}

