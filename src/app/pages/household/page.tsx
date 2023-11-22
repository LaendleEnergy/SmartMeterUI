"use client";

import DisplayAttribute from "@/app/components/input/DisplayAttribute";
import Navigation from "../../components/navigation/NavBar";
import { FaEdit, FaTrash } from "react-icons/fa";
import Link from "next/link";
import { FormEvent, useState } from 'react';
import GenericDialog from "../../components/GenericDialog";
import InputAttribute from "@/app/components/input/InputAttribute";
import Label from "@/app/components/input/Label";

export default function Household() {
    let [isOpen, setIsOpen] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const data = new FormData();
    const formURL = 'http://localhost:8080/user/updateUser';

    const [formData, setFormData] = useState({
        supplier: "",
        pricingPlan: "",
        deviceId: "",
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
                supplier: "",
                pricingPlan: "",
                deviceId: "",
            })
        });

        setEditMode(false);
    }


    return (
        <div className="Household">
            <header><Navigation /></header>
            <div className="flex-col flex justify-center items-center space-y-8 py-[10%]">
                <div className="space-y-2">
                    <div className="text-4xl font-bold">Dein Haushalt</div>
                    <button className={editMode ? "hidden" : "Edit justify-center items-center inline-flex space-x-3 bg-primary-600 rounded-full p-3 transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow"} onClick={() => setEditMode(true)}>
                        <div className="Bearbeiten text-lg text-white">Bearbeiten</div>
                        <FaEdit class="text-white"></FaEdit>
                    </button>
                </div>
                <div className={editMode ? "hidden" : "HouseholdInformation flex-col items-center gap-8 inline-flex"}>
                    <DisplayAttribute name="Stromanbieter"></DisplayAttribute>
                    <DisplayAttribute name="Aktueller Stromtarif"></DisplayAttribute>
                    <DisplayAttribute name="Zählernummer"></DisplayAttribute>
                </div>
                <form method="POST" onSubmit={submitForm} className={editMode ? "HouseholdInformation flex flex-col items-center space-y-5 p-5 border-2 bg-indigo-50 border-black border-solid" : "hidden"}>
                    <Label name="Stromanbieter"></Label>
                    <InputAttribute name="supplier" handleInput={handleInput} placeholder="Stromanbieter" value={formData.supplier} required={true}></InputAttribute>
                    <Label name="Stromtarif"></Label>
                    <InputAttribute name="pricingPlan" handleInput={handleInput} placeholder="Aktueller Stromtarif" value={formData.pricingPlan} required={true}></InputAttribute>
                    <Label name="Zählernummer"></Label>
                    <InputAttribute name="deviceId" handleInput={handleInput} placeholder="Zählernummer" value={formData.deviceId} required={true}></InputAttribute>
                    <div className="flex grow space-x-8 mt-10 justify-center items-center">
                        <div className="CancelButton bg-gray-400 rounded-full p-3 transition duration-150 ease-in-out hover:bg-gray-500 hover:shadow">
                            <button onClick={() => setEditMode(false)} className="text-center text-white text-base font-medium leading-normal">Abbrechen</button>
                        </div>
                        <div className="ConfirmButton bg-primary-600 rounded-full p-3 transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow">
                            <button type="submit" className="text-center text-white text-base font-medium leading-normal"><span className="Text text-center text-white text-base font-medium leading-normal">Änderungen übernehmen</span></button>
                        </div>
                    </div>
                </form>
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




