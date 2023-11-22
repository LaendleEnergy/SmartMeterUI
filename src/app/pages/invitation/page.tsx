"use client";

import InputAttribute from "@/app/components/input/InputAttribute";
import Navbar from "@/app/components/navigation/NavBar";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function AcceptInvitation() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    })

    const router = useRouter();
    const data = new FormData();
    const formURL = '';

    const handleInput = (event: any) => {
        const { name, value } = event.currentTarget;

        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    async function submitRegistrationForm(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (formData.password == formData.confirmPassword) {

            // Turn formData state into data which can be used with a form submission
            Object.entries(formData).forEach(([key, value]) => {
                data.append(key, value);
            })

            fetch(formURL, {
                method: "POST",
                body: data,
            }).then(() => {
                setFormData({
                    email: "",
                    password: "",
                    confirmPassword: "",
                })
            });

            router.push("./pages/energy-consumption");
        } else {
            alert("Passwörter stimmen nicht überein.")
        }
    }

    async function submitAccountForm(event: FormEvent<HTMLFormElement>) {
        if (formData.password == formData.confirmPassword) {
            event.preventDefault();

            // Turn formData state into data which can be used with a form submission
            Object.entries(formData).forEach(([key, value]) => {
                data.append(key, value);
            })

            handleNext();
        } else {
            alert("Passwörter stimmen nicht überein.")
        }
    }


    return (
        <div className="Invitation">
            <div className="flex-col flex justify-center items-center space-y-8 py-[10%]">
                <Navbar showTabs={false}></Navbar>
                <div className="text-4xl font-bold ">Haushalt beitreten</div>
                <div className="text-lg">Nimm deine Einladung, deinem Haushalt beizutreten an, indem du hier deine gewünschten Login-Daten angibst.</div>
                <form method="POST" onSubmit={submitRegistrationForm} className="flex flex-col space-y-5 justify-center items-center">
                    <InputAttribute name="email" type="email" handleInput={handleInput} placeholder="E-Mail" value={formData.email} required={true}></InputAttribute>
                    <InputAttribute name="password" type="password" handleInput={handleInput} placeholder="Passwort" value={formData.password} required={true}></InputAttribute>
                    <InputAttribute name="confirmPassword" type="password" handleInput={handleInput} placeholder="Passwort wiederholen" value={formData.confirmPassword} required={true}></InputAttribute>
                    <div className="ActiveButton inline-flex justify-center items-center bg-primary-600 rounded-full px-8 py-3 transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow">
                        <button><span className="Text text-center text-white text-base font-medium leading-normal">Haushalt beitreten</span></button>
                    </div>
                </form>
            </div>
        </div>)
}


