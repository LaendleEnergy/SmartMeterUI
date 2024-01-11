"use client";

import DisplayAttribute from "@/app/components/input/DisplayAttribute";
import Navigation from "../../components/navigation/NavBar";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";
import { FormEvent, useState } from "react";
import InputAttribute from "@/app/components/input/InputAttribute";
import Label from "@/app/components/input/Label";

export default function Rewards() {
    const [editMode, setEditMode] = useState(false);
    const data = new FormData();
    const formURL = 'http://localhost:8080/user/updateUser';

    const [formData, setFormData] = useState({
        incentive: "",
        deadline: "",
    });

    const handleInput = (event: any) => {
        const { name, value } = event.currentTarget;

        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };


    async function submitForm(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        // Turn formData state into data which can be used with a form submission
        Object.entries(formData).forEach(([key, value]) => {
            data.append(key, value);
        })

        fetch(formURL, {
            method: "POST",
            body: data,
        }).then(() => {
            setFormData({
                incentive: "",
                deadline: "",
            })
        });

        setEditMode(false);
    }

    return (
        <div className="Rewards">
            <header><Navigation /></header>
            <div className="flex flex-col justify-center items-center space-y-8 py-[10%]">
                <div className="text-4xl font-bold">Belohnungen</div>
                <div className="flex flex-col space-y-5 bg-indigo-50 rounded-sm border-2 border-black p-5">
                    <div className="text-2xl font-bold text-center">Aktuelle Belohnung</div>
                    <button className={editMode ? "hidden" : "Edit justify-center items-center inline-flex space-x-3 bg-primary-600 rounded-full p-2 transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow"} onClick={() => setEditMode(true)}>
                        <div className="Bearbeiten text-lg text-white">Bearbeiten</div>
                        <FaEdit class="text-white"></FaEdit>
                    </button>
                    <div className={editMode ? "hidden" : "text-xl font-bold text-center"}>Pizza</div>
                    <div className={editMode ? "hidden" : "text-lg text-right"}>noch 5 Tage</div>
                    <form method="POST" onSubmit={submitForm} className={editMode ? "flex flex-col items-center space-y-3" : "hidden"}>
                        <Label name="Freitext für Belohnung"></Label>
                        <InputAttribute name="incentive" handleInput={handleInput} placeholder="Belohnung" value={formData.incentive} required={false}></InputAttribute>
                        <Label name="Fälligkeitsdatum für Belohnung"></Label>
                        <InputAttribute type="date" name="deadline" handleInput={handleInput} placeholder="Fälligkeitsdatum" value={formData.deadline} required={false}></InputAttribute>
                        <div className="flex grow space-x-8 mt-10 justify-center items-center">
                            <div className="CancelButton bg-gray-400 rounded-full p-3 transition duration-150 ease-in-out hover:bg-gray-500 hover:shadow">
                                <button onClick={() => setEditMode(false)} className="text-center text-white text-base font-medium leading-normal">Abbrechen</button>
                            </div>
                            <div className="ConfirmButton bg-primary-600 rounded-full p-3 transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow">
                                <button type="submit" className="text-center text-white text-base font-medium leading-normal"><span className="Text text-center text-white text-base font-medium leading-normal">Änderungen übernehmen</span></button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="Leaderboard flex flex-col space-y-5 rounded-sm border-2 border-black bg-indigo-50 p-4">
                    <div className="Rangliste text-2xl font-bold">Rangliste</div>
                    <DisplayAttribute name="Name 1 - Anzahl der Labels"></DisplayAttribute>
                    <DisplayAttribute name="Name 2 - Anzahl der Labels" star={true}></DisplayAttribute>
                    <DisplayAttribute name="Name 3 - Anzahl der Labels"></DisplayAttribute>
                </div>
                <div className="ActiveButton inline-flex justify-center items-center bg-primary-600 rounded-full p-3 space-x-3 transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow">
                    <Link href="../pages/energy-consumption" legacyBehavior>
                        <span className="Default text-center text-white text-xl font-medium leading-normal">Jetzt Verbrauch zuordnen</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
