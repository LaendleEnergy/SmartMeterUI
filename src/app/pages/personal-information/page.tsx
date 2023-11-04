import DisplayAttribute from "@/app/components/DisplayAttribute";
import Navigation from "../../components/navigation/navbar";
import { FaEdit } from "react-icons/fa";

export default function PersonalInformation() {
    return (
        <div className="PersonalInformation">
            <header><Navigation /></header>
            <div className="flex justify-center items-center">
                <div className="Page flex-col justify-center items-center space-y-10 py-[10%]">
                    <div className="flex-col space-y-2 justify-center items-center">
                        <div className="Information text-4xl font-bold">Persönliche Daten</div>
                        <div className="Edit justify-center items-center inline-flex space-x-3">
                            <div className="Bearbeiten text-xl">Bearbeiten</div>
                            <FaEdit></FaEdit>
                        </div>
                    </div>
                    <div className="PersonalInformation px-12 py-20 flex-col justify-start items-center gap-11 inline-flex">
                        <DisplayAttribute name="Name"></DisplayAttribute>
                        <DisplayAttribute name="Email"></DisplayAttribute>
                        <DisplayAttribute name="Geburtsdatum (Optional)"></DisplayAttribute>
                        <DisplayAttribute name="Geschlecht (Optional)"></DisplayAttribute>
                    </div>
                </div>
            </div>
        </div>
    )
}