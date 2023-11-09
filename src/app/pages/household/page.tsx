"use client";

import DisplayAttribute from "@/app/components/input/DisplayAttribute";
import Navigation from "../../components/navigation/NavBar";
import { FaEdit } from "react-icons/fa";
import Link from "next/link";
import { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

export default function Household() {
    let [isOpen, setIsOpen] = useState(false);

    return (
        <div className="Household">
            <header><Navigation /></header>
            <div className="flex-col flex justify-center items-center space-y-5 py-[10%]">
                <div className="space-y-2">
                    <div className="text-4xl font-bold">Dein Haushalt</div>
                    <div className="Edit justify-center items-center inline-flex space-x-3">
                        <div className="Bearbeiten text-xl">Bearbeiten</div>
                        <FaEdit></FaEdit>
                    </div>
                </div>
                <div className="HouseholdInformation px-12 py-20 flex-col items-center gap-10 inline-flex">
                    <DisplayAttribute name="Stromanbieter"></DisplayAttribute>
                    <DisplayAttribute name="Aktueller Stromtarif"></DisplayAttribute>
                    <DisplayAttribute name="Zählernummer"></DisplayAttribute>
                </div>
                <div className="ActiveButton inline-flex flex-col justify-center items-center bg-primary-600 rounded-full p-3 space-x-3 transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow">
                    <Link href="../pages/members"><span className="Text text-center text-white text-base font-medium leading-normal">Haushaltsmitglieder verwalten</span></Link>
                </div>
            </div>

            <div className="ConfirmButton inline-flex fixed bottom-4 right-4 bg-red-600 rounded-full p-3 space-x-3 space-y-10 transition duration-150 ease-in-out hover:bg-red-700 hover:shadow">
                <button onClick={() => setIsOpen(true)} className="text-center text-white text-base font-medium leading-normal right">Account löschen</button>
            </div>

            <div>
                <Transition appear show={isOpen} as={Fragment}>
                    <Dialog
                        as="div"
                        className="fixed inset-0 z-10 overflow-y-auto"
                        open={isOpen}
                        onClose={() => setIsOpen(false)}
                    >
                        <div className="min-h-screen px-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Dialog.Overlay className="fixed inset-0" />
                            </Transition.Child>

                            {/* This element is to trick the browser into centering the modal contents. */}
                            <span
                                className="inline-block h-screen align-middle"
                                aria-hidden="true"
                            >
                                &#8203;
                            </span>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <div className="inline-block w-full max-w-md p-6 my-8 space-y-10 overflow-hidden text-center align-middle transition-all transform bg-indigo-50 shadow-xl rounded-lg justify-center items-center border-2 border-solid border-black">
                                    <Dialog.Title><span className="text-4xl font-bold pb-4">Account löschen</span></Dialog.Title>
                                    <span className="pb-4">Soll dieser Account wirklich endgültig gelöscht werden?</span><br />
                                    <span className="font-bold pb-4">Hinweis: Diese Aktion kann nicht rückgängig gemacht werden.</span>

                                    <div className="flex grow space-x-8 justify-center items-center">
                                        <div className="CancelButton bg-gray-400 rounded-full p-3 transition duration-150 ease-in-out hover:bg-gray-500 hover:shadow">
                                            <button onClick={() => setIsOpen(false)} className="text-center text-white text-base font-medium leading-normal">Abbrechen</button>
                                        </div>
                                        <div className="ConfirmButton bg-red-600 rounded-full p-3 transition duration-150 ease-in-out hover:bg-red-700 hover:shadow">
                                            <button onClick={() => setIsOpen(false)} className="text-center text-white text-base font-medium leading-normal">Account löschen</button>
                                        </div>
                                    </div>
                                </div>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition>
            </div>
        </div >
    )
}

