import GenericDialog from "@/app/components/GenericDialog";
import Link from "next/link";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";

interface MemberProps {
    name: string;
    dateOfBirth?: string;
    gender?: string;
}

export default function MemberCard({ name, dateOfBirth = "", gender = "" }: MemberProps) {
    let [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex items-center justify-center border-2 border-solid border-black">
            <div className="grid grid-rows-3 bg-primary-100 p-5 space-y-3">
                <div className="Wrapper flex justify-center relative">
                    <div className="font-bold">{name}</div>
                    <div className="DeleteButton absolute top-0 right-0">
                        <div className="PrimaryMedium h-7 w-12 rounded-full bg-red-600 inline-flex justify-center items-center">
                            <FaTrash className="text-white"></FaTrash>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <div>{dateOfBirth}</div>
                    <div>{gender}</div>
                </div>
                <div className="inline-flex space-x-5 justify-center items-center grow">
                    <div className="ConfirmButton bg-primary-600 rounded-full p-3 transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow">
                        <Link href="./invitation" className="text-center text-white text-base font-medium leading-normal"><span className="Text text-center text-white text-base font-medium leading-normal">Email hinzufügen</span></Link>
                    </div>
                    <div className="ActiveButton inline-block bg-primary-600 rounded-full p-3 transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow grow">
                        <button onClick={() => setIsOpen(true)} className="Default text-sm font-medium text-white">Bearbeiten</button>
                    </div>
                </div>
            </div>
            <GenericDialog title="Haushaltsmitglied bearbeiten" isOpen={isOpen} activeButtonLabel="Bestätigen" setIsOpen={setIsOpen} delete={false}></GenericDialog>
        </div>
    )
}


