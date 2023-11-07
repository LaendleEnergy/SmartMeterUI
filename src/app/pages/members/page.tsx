import Navigation from "../../components/navigation/NavBar";
import MemberCard from "@/app/components/MemberCard";
import { FaPlusCircle } from "react-icons/fa";

export default function Members() {
    return (
        <div className="Members">
            <header><Navigation /></header>
            <div className="Page flex-col flex justify-center items-center space-y-10 py-[10%]">
                <MemberCard name="Testname1" dateOfBirth="01.01.2000" gender="neutral"></MemberCard>
                <div className="ActiveButton inline-flex justify-center items-center bg-primary-600 rounded-full p-3 space-x-3 transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow">
                    <div className="Default text-white text-base font-medium">Neues Mitglied hinzufügen </div>
                    <FaPlusCircle className="text-white"></FaPlusCircle>
                </div>
            </div>
        </div>
        )
}

