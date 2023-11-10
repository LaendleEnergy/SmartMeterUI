"use client";

import { Fragment, SetStateAction, Dispatch } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import InputAttribute from '@/app/components/input/InputAttribute';


interface DialogProps {
    title: string;
    activeButtonLabel: string;
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    delete: boolean;
}

export default function GenericDialog(props: DialogProps) {

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
                                <Dialog.Title><span className="text-4xl font-bold pb-4">{props.title}</span></Dialog.Title>

                                <div className={props.delete ? "hidden" : "inline-block w-full max-w-md p-6 my-8 space-y-10 text-center justify-center items-center"}>
                                    <InputAttribute name="Name"></InputAttribute>
                                    <InputAttribute name="Geburtsdatum (Optional)" type="date"></InputAttribute>
                                    <InputAttribute name="Geschlecht (Optional)"></InputAttribute>
                                </div>

                                <div className={props.delete ? "space-y-4" : "hidden"}>
                                    <span className="pb-4">Soll dieser Account wirklich endgültig gelöscht werden?</span><br />
                                    <span className="font-bold pb-4">Hinweis: Diese Aktion kann nicht rückgängig gemacht werden.</span>
                                </div>

                                <div className="flex grow space-x-8 justify-center items-center">
                                    <div
                                        className="CancelButton bg-gray-400 rounded-full p-3 transition duration-150 ease-in-out hover:bg-gray-500 hover:shadow">
                                        <button onClick={() => props.setIsOpen(false)} className="text-center text-white text-base font-medium leading-normal">Abbrechen</button>
                                    </div>
                                    <div className={props.delete ? "DeleteButton bg-red-600 rounded-full p-3 transition duration-150 ease-in-out hover:bg-red-700 hover:shadow" : "ConfirmButton bg-primary-600 rounded-full p-3 transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow"}>
                                        <button onClick={() => props.setIsOpen(false)} className="text-center text-white text-base font-medium leading-normal">{props.activeButtonLabel}</button>
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