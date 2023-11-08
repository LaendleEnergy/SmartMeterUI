import DisplayAttribute from "@/app/components/DisplayAttribute";
import Navigation from "../../components/navigation/NavBar";
import { FaEdit } from "react-icons/fa";
import Link from "next/link";

export default function Household() {
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
                <div className="ActiveButton inline-flex justify-center items-center bg-primary-600 rounded-full p-3 space-x-3 transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow">
                    <Link href="../pages/members"><span className="Text text-center text-white text-base font-medium leading-normal">Haushaltsmitglieder verwalten</span></Link>
                </div>
            </div>
        </div>
    )
}