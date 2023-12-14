"use client";

import Navigation from "../../components/navigation/NavBar";
import DeviceCard from "../../components/cards/DeviceCard";
import { FaPlusCircle } from "react-icons/fa";
import { useState } from "react";
import DeviceDialog from "@/app/components/dialogs/DeviceDialog";

export default function Devices() {
    let [isOpen, setIsOpen] = useState(false);

    return (
        <div className="CurrentDevices">
            <header><Navigation /></header>
            <div className="flex-col flex justify-center items-center space-y-8 ">
                <div className="text-4xl font-bold">Deine Geräte</div>
                <DeviceCard name="Kühlschrank"></DeviceCard>
                <DeviceCard name="Waschmaschine"></DeviceCard>
                <div className="ActiveButton inline-flex justify-center items-center bg-primary-600 rounded-full p-3 space-x-3 transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow">
                    <button onClick={() => setIsOpen(true)} className="Default text-white text-base font-medium">Neues Gerät hinzufügen </button>
                    <FaPlusCircle className="text-white"></FaPlusCircle>
                </div>
            </div>
            <DeviceDialog title="Neues Gerät hinzufügen" isOpen={isOpen} activeButtonLabel="Hinzufügen" setIsOpen={setIsOpen} device={true}></DeviceDialog>
        </div>
    )
}
