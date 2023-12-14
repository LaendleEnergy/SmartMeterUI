"use client";

import { authenticate } from "@/app/authentication/authentication";
import InputAttribute from "@/app/components/input/InputAttribute";
import NavBar from "@/app/components/navigation/NavBar";
import { AuthRequest } from "@/app/models/Authentication";
import { User, UserInput } from "@/app/models/User";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function AcceptInvitation() {
    const [formData, setFormData] = useState<UserInput>({ emailAddress: "", password: "", confirmPassword: "", name: "", dateOfBirth: new Date(), gender: "" });
    const router = useRouter();

    const handleInput = (event: any) => {
        const { name, value } = event.currentTarget;

        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    async function submitRegistrationForm(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (formData.password == formData.confirmPassword) {

            const validated = await fetch('http://localhost:8080/user/validateEmail', {
                method: "POST",
                body: JSON.stringify({ email: formData.emailAddress }),
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then(async (res) => {
                if (res.ok) {
                    return res.json();
                }
                return res.status;
            }).then((res) => {
                if (typeof res == "boolean") {
                    return res;
                }
                else if (res === 404) {
                    router.push("./errors/notfound");
                } else if (res != 200) {
                    router.push("./errors/error");
                }
            }).catch((e) => {
                console.log(e)
            });

            if (validated) {
                const newUser: User = {
                    emailAddress: formData.emailAddress,
                    password: formData.password,
                    name: formData.name,
                    gender: "",
                    dateOfBirth: ""
                };

                await fetch("http://localhost:8080/user/create", {
                    method: "POST",
                    body: JSON.stringify(newUser),
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
                        'Content-Type': 'application/json',
                    },
                }).then(async (res) => {
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

                const authRequest: AuthRequest = { emailAddress: formData.emailAddress, password: formData.password };
                
                if (await authenticate(authRequest)) {
                    router.push("./energy-consumption");
                    console.log(localStorage.getItem("token"))
                }
            } else {
                alert("E-Mail Adresse wird bereits verwendet.")
            }

        } else {
            alert("Passwörter stimmen nicht überein.");
        }
    }


    return (
        <div className="Invitation">
            <NavBar showTabs={false}></NavBar>
            <div className="flex-col flex justify-center items-center space-y-8 ">
                <div className="text-4xl font-bold ">Haushalt beitreten</div>
                <div className="text-lg max-w-[75%]">Nimm deine Einladung, deinem Haushalt beizutreten an, indem du hier deine gewünschten Login-Daten angibst.</div>
                <form method="POST" onSubmit={submitRegistrationForm} className="flex flex-col space-y-5 justify-center items-center">
                    <InputAttribute name="emailAddress" type="email" handleInput={handleInput} placeholder="E-Mail" value={formData.emailAddress}></InputAttribute>
                    <InputAttribute name="name" handleInput={handleInput} placeholder="Name" value={formData.name}></InputAttribute>
                    <InputAttribute name="password" type="password" handleInput={handleInput} placeholder="Passwort" value={formData.password}></InputAttribute>
                    <InputAttribute name="confirmPassword" type="password" handleInput={handleInput} placeholder="Passwort wiederholen" value={formData.confirmPassword}></InputAttribute>
                    <div className="ActiveButton inline-flex justify-center items-center bg-primary-600 rounded-full px-8 py-3 transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow">
                        <button><span className="Text text-center text-white text-base font-medium leading-normal">Haushalt beitreten</span></button>
                    </div>
                </form>
            </div>
        </div>)
}


