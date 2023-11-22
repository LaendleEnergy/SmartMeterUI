"use client";

import { Fragment, SetStateAction, Dispatch, useState, FormEvent } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import InputAttribute from '@/app/components/input/InputAttribute';
import Dropdown from './input/Dropdown';
import Label from './input/Label';


interface DialogProps {
    title: string;
    activeButtonLabel: string;
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    delete: boolean;
    device: boolean;
}

export default function GenericDialog(props: DialogProps) {

    const [formData, setFormData] = useState({
        name: "",
        dateOfBirth: "",
        gender: "",
    });

    const [deviceFormData, setDeviceFormData] = useState({
        description: "",
        deviceType: "",
    });

    const data = new FormData();
    const formURL = '';

    const handleInput = (event: any) => {
        const { name, value } = event.currentTarget;

        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    async function submitEditInformationForm(event: FormEvent<HTMLFormElement>) {
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
                name: "",
                dateOfBirth: "",
                gender: "",
            })
        });
    }

    const handleDeviceInput = (event: any) => {
        const { name, value } = event.currentTarget;

        setDeviceFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    return (
        <div>
            <Transition appear show={props.isOpen} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" open={props.isOpen} onClose={() => props.setIsOpen(false)}
                >
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0"
                            enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                            <Dialog.Overlay className="fixed inset-0" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span className="inline-block h-screen align-middle" aria-hidden="true">
                            &#8203;
                        </span>
                        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95">
                            <div
                                className="inline-block w-full max-w-md p-6 my-8 space-y-10 overflow-hidden text-center align-middle transition-all transform bg-indigo-50 shadow-xl rounded-lg justify-center items-center border-2 border-solid border-black">
                                <Dialog.Title><span className="text-3xl font-bold pb-4">{props.title}</span></Dialog.Title>

                                <div className="flex-col space-y-6">
                                    <div className={props.delete || props.device ? "hidden" : "inline-block w-full max-w-md p-6 my-8 space-y-10 text-center justify-center items-center"}>
                                        <form method="POST" onSubmit={submitEditInformationForm} className="flex flex-col items-center space-y-3">
                                            <Label name="Name"></Label>
                                            <InputAttribute name="name" handleInput={handleInput} placeholder="Name" value={formData.name} required={true}></InputAttribute>
                                            <Label name="Geburtsdatum (Optional)"></Label>
                                            <InputAttribute name="dateOfBirth" type="date" handleInput={handleInput} placeholder="Geburtsdatum (Optional)" value={formData.dateOfBirth} required={false}></InputAttribute>
                                            <Label name="Geschlecht (Optional)"></Label>
                                            <InputAttribute name="gender" handleInput={handleInput} placeholder="Geschlecht (Optional)" value={formData.gender} required={false}></InputAttribute>
                                        </form>
                                    </div>

                                    <div className={props.delete ? "space-y-4" : "hidden"}>
                                        <span className="pb-4">Soll dieser Account wirklich endgültig gelöscht werden?</span><br />
                                        <span className="font-bold pb-4">Hinweis: Diese Aktion kann nicht rückgängig gemacht werden.</span>
                                    </div>

                                    <div className={props.device ? "flex flex-col space-y-8 w-96" : "hidden"}>
                                        <form method="POST" className="flex flex-col items-center space-y-3">
                                            <Label name="Bezeichnung"></Label>
                                            <InputAttribute name="description" handleInput={handleDeviceInput} placeholder="Bezeichnung" value={deviceFormData.description} required={true}></InputAttribute>
                                            <Dropdown title="Gerätetyp auswählen" values={["Kühlschrank", "Haarföhn", "Waschmaschine"]}></Dropdown>
                                        </form>
                                    </div>

                                    <div className="inline-flex grow space-x-8 justify-center items-center">
                                        <div className="CancelButton bg-gray-400 rounded-full p-3 transition duration-150 ease-in-out hover:bg-gray-500 hover:shadow">
                                            <button onClick={() => props.setIsOpen(false)} className="text-center text-white text-base font-medium leading-normal">Abbrechen</button>
                                        </div>
                                        <div className={props.delete ? "DeleteButton bg-red-600 rounded-full p-3 transition duration-150 ease-in-out hover:bg-red-700 hover:shadow" : "ConfirmButton bg-primary-600 rounded-full p-3 transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow"}>
                                            <button onClick={() => props.setIsOpen(false)} className="text-center text-white text-base font-medium leading-normal">{props.activeButtonLabel}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </div>
    )
}