"use client";

import { Fragment, SetStateAction, Dispatch, useState, FormEvent } from 'react';
import { Dialog, Transition } from '@headlessui/react';

interface DeleteProps {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    handleDelete: any;
    deleteUser?: boolean;
}

export default function DeleteDialog({ isOpen, setIsOpen, handleDelete, deleteUser = false}: DeleteProps) {

    const subject = deleteUser ? "User" : "Account";

    return (
        <div>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" open={isOpen} onClose={() => setIsOpen(false)}
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
                                <Dialog.Title><span className="text-3xl font-bold pb-4">{subject} löschen</span></Dialog.Title>

                                <div className="flex-col space-y-6">

                                    <div className="space-y-4">
                                        <span className="text-sm sm:text-base pb-4">Soll dieser {subject} wirklich endgültig gelöscht werden?</span><br />
                                        <span className="text-sm sm:text-base font-bold pb-4">Hinweis: Diese Aktion kann nicht rückgängig gemacht werden.</span>
                                    </div>

                                    <div className="inline-flex grow space-x-8 justify-center items-center">
                                        <div className="bg-red-600 rounded-full p-3 transition duration-150 ease-in-out hover:bg-red-700 hover:shadow">
                                            <button onClick={() => handleDelete(true)} className="text-sm sm:text-base text-center text-white font-medium leading-normal">{subject}  löschen</button>
                                        </div>
                                        <div className="CancelButton bg-gray-400 rounded-full p-3 transition duration-150 ease-in-out hover:bg-gray-500 hover:shadow">
                                            <button onClick={() => setIsOpen(false)} className="text-sm sm:text-basetext-center text-white font-medium leading-normal">Abbrechen</button>
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