import DisplayAttribute from "@/app/components/input/DisplayAttribute";
import Navigation from "../../components/navigation/NavBar";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";

export default function Rewards() {
    return (
        <div className="Rewards">
            <header><Navigation /></header>
            <div className="flex flex-col justify-center items-center space-y-10 py-[10%]">
                <div className="text-4xl font-bold">Belohnungen</div>
                <div className="space-y-2 bg-indigo-50 rounded-sm border-2 border-black p-4">
                    <div className="text-3xl font-bold text-center">Aktuelle Belohnung</div>
                    <div className="Edit justify-center items-center inline-flex space-x-3">
                        <div className="Bearbeiten text-xl">Bearbeiten</div>
                        <FaEdit></FaEdit>
                    </div>
                    <div className="text-xl font-bold text-center">Gratis Pizza</div>
                    <div className="text-lg text-right">noch 5 Tage</div>
                </div>
                <div className="Leaderboard flex flex-col space-y-5 rounded-sm border-2 border-black bg-indigo-50 p-4">
                    <div className="Rangliste text-3xl font-bold">Rangliste</div>
                    <DisplayAttribute name="Name 1 - Anzahl der Labels"></DisplayAttribute>
                    <DisplayAttribute name="Name 2 - Anzahl der Labels" star={true}></DisplayAttribute>
                    <DisplayAttribute name="Name 3 - Anzahl der Labels"></DisplayAttribute>
                </div>
                <div className="ActiveButton inline-flex justify-center items-center bg-primary-600 rounded-full p-3 space-x-3 transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow">
                    <Link href="../pages/energy-consumption">
                        <span className="Default text-center text-white text-xl font-medium leading-normal">Jetzt Verbrauch zuordnen</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
