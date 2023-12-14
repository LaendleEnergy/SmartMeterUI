"use client";

import Navigation from "../../components/navigation/NavBar";
import { FaPlusCircle } from "react-icons/fa";
import { useEffect, useState } from 'react';
import MemberCard from "@/app/components/cards/MemberCard";
import AddMemberDialog from "../../components/dialogs/AddMemberDialog";
import { Member } from "@/app/models/Member";
import { useRouter } from 'next/navigation';

export default function Members() {
    const [render, setRender] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [displayData, setDisplayData] = useState<Member[]>([{ name: "Name", dateOfBirth: "Geburtsdatum (Optional)", gender: "Geschlecht (Optional)", id:"" }]);
    const router = useRouter();

    useEffect(() => {
        if (render) {
            fetch("http://localhost:8080/member/get", {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json',
                },
            }).then(async (res) => {
                if (res.ok) {
                    const data = await res.json();
                    setDisplayData(data);
                    return 200;
                }
                return res.status;
            }).then((status) => {
                if (status === 404) {
                    router.push("./errors/notfound");
                } else if (status != 200) {
                    router.push("./errors/error");
                }
            }).catch((e) => {
                console.log(e)
            });

            setRender(false);
        }
    }, [render, router]);

    return (
        <div className="Members">
            <header><Navigation /></header>
            <div className="flex-col flex justify-center items-center space-y-8 ">
                {displayData.map(m => (
                    <MemberCard key={m.name} name={m.name} dateOfBirth={m.dateOfBirth} gender={m.gender} id={m.id ? m.id : ""} setRender={setRender}></MemberCard>
                ))}
                <div className="ActiveButton inline-flex justify-center items-center bg-primary-600 rounded-full p-3 space-x-3 transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow">
                    <button onClick={() => setIsOpen(true)} className="Default text-white text-base font-medium">Neues Mitglied hinzufügen </button>
                    <FaPlusCircle className="text-white"></FaPlusCircle>
                </div>
                <AddMemberDialog isOpen={isOpen} setIsOpen={setIsOpen} setRender={setRender}></AddMemberDialog>
            </div>
        </div>
    )
}

