"use client";

import Navigation from "../../components/navigation/NavBar";
import { FaPlusCircle } from "react-icons/fa";
import { useEffect, useState } from 'react';
import MemberCard from "@/app/components/cards/MemberCard";
import GenericDialog from "../../components/dialogs/GenericDialog";
import { Member } from "@/app/models/Member";


export default function Members() {
    const [render, setRender] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [displayData, setDisplayData] = useState<Member[]>([{ name: "Name", dateOfBirth: "Geburtsdatum (Optional)", gender: "Geschlecht (Optional)" }]);

    useEffect(() => {
        if (render) {
            const token = localStorage.getItem('token');

            fetch("http://localhost:8080/member/get", {
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
            setRender(false);
        }
    }, [render]);

    return (
        <div className="Members">
            <header><Navigation /></header>
            {displayData.map(m => (
                <div key={m.name} className="flex-col flex justify-center items-center space-y-8 py-[15%]">
                    <MemberCard name={m.name} dateOfBirth={m.dateOfBirth} gender={m.gender}></MemberCard>
                    <div className="ActiveButton inline-flex justify-center items-center bg-primary-600 rounded-full p-3 space-x-3 transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow">
                        <button onClick={() => setIsOpen(true)} className="Default text-white text-base font-medium">Neues Mitglied hinzufügen </button>
                        <FaPlusCircle className="text-white"></FaPlusCircle>
                    </div>
                    <GenericDialog title="Haushaltsmitglied hinzufügen" isOpen={isOpen} activeButtonLabel="Hinzufügen" setIsOpen={setIsOpen} device={false}></GenericDialog>
                </div>
            ))}
        </div>
    )
}

