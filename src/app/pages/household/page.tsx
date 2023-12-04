"use client";

import DisplayAttribute from "@/app/components/input/DisplayAttribute";
import Navigation from "../../components/navigation/NavBar";
import { FaEdit, FaTrash } from "react-icons/fa";
import Link from "next/link";
import { FormEvent, useEffect, useState } from 'react';
import GenericDialog from "../../components/GenericDialog";
import InputAttribute from "@/app/components/input/InputAttribute";
import Label from "@/app/components/input/Label";
import SupplierDropdown from "@/app/components/input/SupplierDropdown";
import PricingPlanDropdown from "@/app/components/input/PricingPlanDropdown";


interface UpdateHousehold {
    deviceId: string;
    pricingPlan: string;
    supplier: string;
    incentive: string;
    savingTarget: string;
}


export default function Household() {
    let [isOpen, setIsOpen] = useState(false);
    const [render, setRender] = useState(true);
    const [displayData, setDisplayData] = useState<UpdateHousehold>({ deviceId: "Zählernummer", pricingPlan: "Stromtarif", supplier: "Stromanbieter", incentive: "", savingTarget: "" });
    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState<UpdateHousehold>({ deviceId: "", pricingPlan: "", supplier: "", incentive: "", savingTarget: "" });

    useEffect(() => {
        if (render) {
            const token = localStorage.getItem('token');
            const deviceId = localStorage.getItem("deviceId");

            fetch(`http://localhost:8080/household/get/${deviceId}`, {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            })
                .then(async (res) => {
                    return await res.json();
                })
                .then((data) => {
                    setDisplayData(data);

                    Object.keys(data).forEach(function (key) {
                        setFormData((prevState) => ({
                            ...prevState,
                            [key]: data[key],
                        }));
                    });
                });
            setRender(false);
        }
    }, [render]);

    const handleInput = (event: any) => {
        const { name, value } = event.currentTarget;

        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handlePricingPlanInput = (selectedValue: any) => {
        setFormData((prevState) => ({
            ...prevState,
            ["pricingPlan"]: selectedValue.name,
        }));
    }

    const handleSupplierInput = (selectedValue: any) => {
        setFormData((prevState) => ({
            ...prevState,
            ["supplier"]: selectedValue,
        }));
    }


    async function submitForm(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const household: UpdateHousehold = {
            deviceId: formData.deviceId,
            pricingPlan: formData.pricingPlan,
            supplier: formData.supplier,
            incentive: "",
            savingTarget: ""
        };

        fetch('http://localhost:8080/household/update', {
            method: "POST",
            body: JSON.stringify(household),
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
            },
        }).catch((e) => console.log(e));

        if (household.deviceId) {
            localStorage.setItem("deviceId", household.deviceId);   
        }

        setDisplayData(household);
        setRender(true);
        setEditMode(false);
    }


    return (
        <div className="Household">
            <header><Navigation /></header>
            <div className="flex-col flex justify-center items-center space-y-8 py-[15%]">
                <div className="space-y-2">
                    <div className="text-4xl font-bold">Dein Haushalt</div>
                    <button className={editMode ? "hidden" : "Edit justify-center items-center inline-flex space-x-3 bg-primary-600 rounded-full p-3 transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow"} onClick={() => setEditMode(true)}>
                        <div className="Bearbeiten text-lg text-white">Bearbeiten</div>
                        <FaEdit class="text-white"></FaEdit>
                    </button>
                </div>
                <div className={editMode ? "hidden" : "HouseholdInformation flex-col items-center gap-3 inline-flex"}>
                    <Label name="Zählernummer"></Label>
                    <DisplayAttribute name={displayData.deviceId}></DisplayAttribute>
                    <Label name="Stromanbieter"></Label>
                    <DisplayAttribute name={displayData.supplier}></DisplayAttribute>
                    <Label name="Stromtarif"></Label>
                    <DisplayAttribute name={displayData.pricingPlan}></DisplayAttribute>
                </div>
                <form method="POST" onSubmit={submitForm} className={editMode ? "flex flex-col items-center space-y-3 border-2 bg-indigo-50 border-black border-solid" : "hidden"}>
                    <Label name="Zählernummer"></Label>
                    <InputAttribute name="deviceId" handleInput={handleInput} placeholder="Zählernummer" value={formData.deviceId}></InputAttribute>
                    <Label name="Stromanbieter"></Label>
                    <SupplierDropdown handleInput={handleSupplierInput} supplierName={formData.supplier}></SupplierDropdown>
                    <Label name="Stromtarif"></Label>
                    <PricingPlanDropdown handleInput={handlePricingPlanInput} pricingPlanName={formData.pricingPlan}></PricingPlanDropdown>

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




