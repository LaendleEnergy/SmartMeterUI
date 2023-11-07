import { FaTrash } from "react-icons/fa";

interface MemberProps {
    name: string;
    dateOfBirth?: string;
    gender?: string;
}

export default function MemberCard({ name, dateOfBirth = "", gender = "" }: MemberProps) {
    return (
        <div className="flex justify-center">
            <div className="Background p-5 w-96 h-7 2bg-indigo-50" >
                <div className="Group inline-flex justify-center">
                    <div className="font-bold">{name}</div>
                    <div className="DeleteButton w-12 h-7 justify-end items-end inline-flex space-x-3">
                        <div className="PrimaryMedium w-12 h-7 bg-red-600 rounded-full" />
                        <FaTrash className="text-white"></FaTrash>
                    </div>
                </div>
                <div>{dateOfBirth}</div>
                <div>{gender}</div>
                <div className="inline-flex space-x-5">
                    <div className="ActiveButton w-42 px-8 py-4 bg-primary-600 rounded-full justify-center items-center flex">
                        <div className="Default text-white text-sm font-medium">Email hinzufügen</div>
                    </div>
                    <div className="ActiveButton w-42 px-8 py-4 bg-primary-600 rounded-full justify-center items-center flex">
                        <div className="Default text-white text-sm font-medium">Bearbeiten</div>
                    </div>
                </div>
            </div>
        </div>
    )
}


