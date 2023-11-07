import Navigation from "../../components/navigation/NavBar";
import MemberCard from "@/app/components/MemberCard";

export default function Members() {
    return (
        <div className="Members">
            <header><Navigation /></header>
            <div className="Page flex-col flex justify-center items-center space-y-10 py-[10%]">
                <MemberCard name="Testname1" dateOfBirth="01.01.2000" gender="neutral"></MemberCard>
                <div className="ActiveButton w-80 px-8 py-4 bg-primary-600 rounded-full justify-center items-center flex">
                    <div className="Default text-white text-base font-medium">Neues Mitglied hinzufügen </div>
                </div>
            </div>
        </div>)
}

