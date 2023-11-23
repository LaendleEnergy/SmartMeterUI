"use client";

import DisplayAttribute from "@/app/components/input/DisplayAttribute";
import Navigation from "../../components/navigation/NavBar";
import { FaEdit } from "react-icons/fa";
import { FormEvent, useState } from "react";
import InputAttribute from "@/app/components/input/InputAttribute";
import Label from "@/app/components/input/Label";

export default function PersonalInformation() {

    const [editMode, setEditMode] = useState(false);
    const data = new FormData();
    const updateURL = 'http://localhost:8080/user/updateUser';

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        dateOfBirth: "",
        gender: "",
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

        fetch(updateURL, {
            method: "POST",
            body: data,
        }).then(() => {
            setFormData({
                name: "",
                email: "",
                dateOfBirth: "",
                gender: "",
            })
        });

        setEditMode(false);
    }


    return (
        <div className="PersonalInformation">
            <header><Navigation /></header>
            <div className="flex-col flex justify-center items-center space-y-8 py-[10%]">
                <div className="space-y-2">
                    <div className="text-4xl font-bold">Persönliche Daten</div>
                    <button className={editMode ? "hidden" : "Edit justify-center items-center inline-flex space-x-3 bg-primary-600 rounded-full p-3 transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow"} onClick={() => setEditMode(true)}>
                        <div className="Bearbeiten text-lg text-white">Bearbeiten</div>
                        <FaEdit class="text-white"></FaEdit>
                    </button>
                </div>
                <div className={editMode ? "hidden" : "PersonalInformation flex-col items-center gap-8 inline-flex"}>
                    <DisplayAttribute name="Name"></DisplayAttribute>
                    <DisplayAttribute name="Email"></DisplayAttribute>
                    <DisplayAttribute name="Geburtsdatum (Optional)"></DisplayAttribute>
                    <DisplayAttribute name="Geschlecht (Optional)"></DisplayAttribute>
                </div>
                <form method="POST" onSubmit={submitForm} className={editMode ? "PersonalInformation flex flex-col items-center space-y-5 border-2 bg-indigo-50 border-black border-solid p-5" : "hidden"}>
                    <Label name="Name"></Label>
                    <InputAttribute name="name" handleInput={handleInput} placeholder="Name" value={formData.name}></InputAttribute>
                    <Label name="E-Mail"></Label>
                    <InputAttribute name="email" type="email" handleInput={handleInput} placeholder="E-Mail" value={formData.email}></InputAttribute>
                    <Label name="Geburtsdatum (Optional)"></Label>
                    <InputAttribute name="dateOfBirth" handleInput={handleInput} placeholder="Geburtsdatum (Optional)" value={formData.dateOfBirth} required={false}></InputAttribute>
                    <Label name="Geschlecht (Optional)"></Label>
                    <InputAttribute name="gender" type="password" handleInput={handleInput} placeholder="Geschlecht (Optional)" value={formData.gender} required={false}></InputAttribute>
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
        </div>
    )
}