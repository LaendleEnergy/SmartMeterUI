"use client";

import DisplayAttribute from "@/app/components/input/DisplayAttribute";
import Navigation from "../../components/navigation/NavBar";
import { FaEdit } from "react-icons/fa";
import { FormEvent, useEffect, useState } from "react";
import InputAttribute from "@/app/components/input/InputAttribute";
import Label from "@/app/components/input/Label";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

interface UserInput {
    emailAddress: string;
    password: string;
    confirmPassword: string;
    name: string;
    dateOfBirth: Date;
    gender: string;
}

interface User {
    emailAddress: string | null;
    password?: string;
    name: string;
    dateOfBirth: string;
    gender: string;
}

export default function PersonalInformation() {

    const [editMode, setEditMode] = useState(false);
    const [displayData, setDisplayData] = useState<User>({ emailAddress: "E-Mail", name: "Name", dateOfBirth: "Geburtsdatum (Optional)", gender: "Geschlecht (Optional)" });
    const [formData, setFormData] = useState<UserInput>({
        emailAddress: "",
        password: "",
        confirmPassword: "",
        name: "",
        dateOfBirth: new Date(),
        gender: "",
    });

    useEffect(() => {
        const token = localStorage.getItem('token');
        const currentEmail = localStorage.getItem("email");

        fetch(`http://localhost:8080/user/get/${currentEmail}`, {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
            .then(async (res) => await res.json())
            .then((data) => {
                setDisplayData(data);

                Object.keys(data).forEach(function (key) {
                    let value: string | Date;

                    if (key == "dateOfBirth") {
                        value = new Date(data[key]);
                    } else {
                        value = data[key];
                    }

                    setFormData((prevState) => ({
                        ...prevState,
                        [key]: value,
                        "confirmPassword": data["password"]
                    }));
                })
            })
    });

    const handleInput = (event: any) => {
        const { name, value } = event.currentTarget;

        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleDateInput = (date: Date | null) => {
        if (date != null) {
            setFormData((prevState) => ({
                ...prevState,
                "dateOfBirth": date,
            }));
        }
    };

    async function submitForm(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (formData.password != formData.confirmPassword) {
            alert("Passwörter stimmen nicht überein.");
            return;
        }

        const user: User = {
            emailAddress: formData.emailAddress,
            password: formData.password,
            name: formData.name,
            dateOfBirth: formData.dateOfBirth ? formData.dateOfBirth.toISOString().substring(0, 10) : "",
            gender: formData.gender
        };

        const token = localStorage.getItem('token');

        fetch('http://localhost:8080/user/update', {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        }).then(() => {
            setFormData({
                emailAddress: "",
                password: "",
                confirmPassword: "",
                name: "",
                dateOfBirth: new Date(),
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
                    <DisplayAttribute name={displayData.name} ></DisplayAttribute>
                    <DisplayAttribute name={displayData.emailAddress ? displayData.emailAddress : ""}></DisplayAttribute>
                    <DisplayAttribute name={displayData.dateOfBirth}></DisplayAttribute>
                    <DisplayAttribute name={displayData.gender}></DisplayAttribute>
                </div>
                <form method="POST" onSubmit={submitForm} className={editMode ? "PersonalInformation flex flex-col items-center space-y-5 border-2 bg-indigo-50 border-black border-solid p-5" : "hidden"}>
                    <Label name="Name"></Label>
                    <InputAttribute name="name" handleInput={handleInput} placeholder="Name" value={formData.name}></InputAttribute>
                    <Label name="E-Mail"></Label>
                    <InputAttribute name="emailAddress" type="email" handleInput={handleInput} placeholder="E-Mail" value={formData.emailAddress}></InputAttribute>
                    <Label name="Passwort"></Label>
                    <InputAttribute name="password" type="password" handleInput={handleInput} placeholder="Passwort" value={formData.password}></InputAttribute>
                    <Label name="Passwort wiederholen"></Label>
                    <InputAttribute name="confirmPassword" type="password" handleInput={handleInput} placeholder="Passwort wiederholen" value={formData.confirmPassword ? formData.confirmPassword : ""}></InputAttribute>
                    <Label name="Geburtsdatum (Optional)"></Label>
                    <DatePicker name="dateOfBirth" selected={formData.dateOfBirth} onChange={(date) => handleDateInput(date)} required={false} />
                    <Label name="Geschlecht (Optional)"></Label>
                    <InputAttribute name="gender" handleInput={handleInput} placeholder="Geschlecht (Optional)" value={formData.gender} required={false}></InputAttribute>
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