import DisplayAttribute from "@/app/components/input/DisplayAttribute";
import Navigation from "../../components/navigation/NavBar";
import { FaEdit } from "react-icons/fa";

export default function PersonalInformation() {
    return (
        <div className="PersonalInformation">
            <header><Navigation /></header>
            <div className="flex-col flex justify-center items-center space-y-8 py-[10%]">
                <div className="space-y-2">
                    <div className="text-4xl font-bold">Persönliche Daten</div>
                    <div className="Edit justify-center items-center inline-flex space-x-3">
                        <div className="Bearbeiten text-xl">Bearbeiten</div>
                        <FaEdit></FaEdit>
                    </div>
                </div>
                <div className="PersonalInformation flex-col items-center gap-8 inline-flex">
                    <DisplayAttribute name="Name"></DisplayAttribute>
                    <DisplayAttribute name="Email"></DisplayAttribute>
                    <DisplayAttribute name="Geburtsdatum (Optional)"></DisplayAttribute>
                    <DisplayAttribute name="Geschlecht (Optional)"></DisplayAttribute>
                </div>
            </div>
        </div>
    )
}