"use client";

import DisplayAttribute from "@/app/components/input/DisplayAttribute";
import Navigation from "../../components/navigation/NavBar";
import { FaEdit, FaTrash } from "react-icons/fa";
import Link from "next/link";
import { FormEvent, useEffect, useState } from 'react';
import InputAttribute from "@/app/components/input/InputAttribute";
import Label from "@/app/components/input/Label";
import SupplierDropdown from "@/app/components/input/SupplierDropdown";
import PricingPlanDropdown from "@/app/components/input/PricingPlanDropdown";
import DeleteDialog from "@/app/components/dialogs/DeleteDialog";
import { Household } from "@/app/models/Household";
import { useRouter } from 'next/navigation';
import { PricingPlanAndSupplierValidation, validatePricingPlanAndSupplier } from "@/app/components/input/Validation";

export default function Household() {
    const [isOpen, setIsOpen] = useState(false);
    const [render, setRender] = useState(true);
    const [displayData, setDisplayData] = useState<Household>({ deviceId: "Zählernummer", pricingPlan: "Stromtarif", supplier: "Stromanbieter" });
    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState<Household>({ deviceId: "", pricingPlan: "", supplier: "" });
    const [errors, setErrors] = useState({ supplier: "", pricingPlan: "" });
    const router = useRouter();

    useEffect(() => {

        if (render) {
            fetch("http://localhost:8080/household/get", {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json',
                },
            })
                .then(async (res) => {
                    if (res.ok) {
                        const data = await res.json();
                        setDisplayData(data);
                        setFormData(data);
                        return 200;
                    }
                    return res.status;
                })
                .then((status) => {
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

    async function deleteAccount() {
        await fetch("http://localhost:8080/household/delete", {
            method: "DELETE",
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
            },
        }).then(async (res) => {
            if (res.ok) {
                return 200;
            }
            return res.status;
        }).then((status) => {
            if (status === 404) {
                router.push("./not-found");
            } else if (status != 200) {
                router.push("./error");
            }
        }).catch((e) => {
            console.log(e)
        });

    }

    async function submitForm(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const pricingPlanAndSupplierValidation: PricingPlanAndSupplierValidation = { supplier: formData.supplier, pricingPlan: formData.pricingPlan, setErrors: setErrors };

        if (await validatePricingPlanAndSupplier(pricingPlanAndSupplierValidation)) {
            setErrors({ supplier: "", pricingPlan: "" });

            const household: Household = {
                deviceId: formData.deviceId,
                pricingPlan: formData.pricingPlan,
                supplier: formData.supplier,
            };

            await fetch('http://localhost:8080/household/update', {
                method: "POST",
                body: JSON.stringify(household),
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json',
                },
            }).then(async (res) => {
                if (res.ok) {
                    return 200;
                }
                return res.status;
            }).then((status) => {
                if (status === 404) {
                    router.push("./not-found");
                } else if (status != 200) {
                    router.push("./error");
                }
            }).catch((e) => {
                console.log(e)
            });

            setRender(true);
            setDisplayData(household);
            setEditMode(false);
        }
    }

    return (
        <div className="Household">
            <header><Navigation /></header>
            <div className="flex-col flex justify-center items-center space-y-8 mb-5">
                <div className="space-y-2">
                    <div className="text-xl sm:text-2xl md:text-4xl font-bold">Dein Haushalt</div>
                    <button className={editMode ? "hidden" : "Edit justify-center items-center inline-flex space-x-3 bg-primary-600 rounded-full p-3 transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow"} onClick={() => setEditMode(true)}>
                        <span className="Bearbeiten text-sm sm:text-base font-medium text-white">Bearbeiten</span>
                        <FaEdit class="text-white"></FaEdit>
                    </button>
                </div>
                <div className={editMode ? "hidden" : "HouseholdInformation flex-col items-center gap-3 inline-flex"}>
                    <Label name="Stromanbieter"></Label>
                    <DisplayAttribute name={displayData.supplier}></DisplayAttribute>
                    <Label name="Stromtarif"></Label>
                    <DisplayAttribute name={displayData.pricingPlan}></DisplayAttribute>
                    <Label name="Zählernummer"></Label>
                    <DisplayAttribute name={displayData.deviceId}></DisplayAttribute>
                </div>
                <form method="POST" onSubmit={submitForm} className={editMode ? "flex flex-col items-center space-y-2 md:space-y-4 border-2 bg-indigo-50 border-black border-solid p-2 md:p-5" : "hidden"}>
                    <Label name="Stromanbieter"></Label>
                    <SupplierDropdown handleInput={handleSupplierInput} supplierName={formData.supplier}></SupplierDropdown>
                    {errors.supplier && <p className="text-red-600 text-sm sm:text-base">{errors.supplier}</p>}
                    <Label name="Stromtarif"></Label>
                    <PricingPlanDropdown handleInput={handlePricingPlanInput} pricingPlanName={formData.pricingPlan}></PricingPlanDropdown>
                    {errors.pricingPlan && <p className="text-red-600 text-sm sm:text-base">{errors.pricingPlan}</p>}
                    <Label name="Zählernummer"></Label>
                    <InputAttribute name="deviceId" handleInput={handleInput} placeholder="Zählernummer" value={formData.deviceId}></InputAttribute>

                    <div className="flex grow space-x-8 mt-10 justify-center items-center">
                        <div className="CancelButton bg-gray-400 rounded-full p-3 transition duration-150 ease-in-out hover:bg-gray-500 hover:shadow">
                            <button onClick={() => setEditMode(false)} className="text-center text-white font-medium text-sm sm:text-base">Abbrechen</button>
                        </div>
                        <div className="ConfirmButton bg-primary-600 rounded-full p-3 transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow">
                            <button type="submit"><span className="Text text-center text-white font-medium text-sm sm:text-base">Änderungen übernehmen</span></button>
                        </div>
                    </div>
                </form>
                <div className="ActiveButton inline-flex flex-col justify-center items-center bg-primary-600 rounded-full p-3 space-x-3 transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow">
                    <Link href="../pages/members"><span className="Text text-center text-white font-medium text-sm sm:text-base">Haushaltsmitglieder verwalten</span></Link>
                </div>
            </div>

            <div className="DeleteButton inline-flex fixed bottom-4 right-4 bg-red-600 rounded-full p-3 space-y-10 transition duration-150 ease-in-out hover:bg-red-700 hover:shadow">
                <button onClick={() => setIsOpen(true)} className="text-center text-white text-sm sm:text-base right grow w-50 h-15 inline-flex justify-center items-center space-x-3 ">Account löschen  <FaTrash className="text-white"></FaTrash> </button>
            </div>

            <DeleteDialog isOpen={isOpen} setIsOpen={setIsOpen} handleDelete={deleteAccount}></DeleteDialog>
        </div >
    );
}




