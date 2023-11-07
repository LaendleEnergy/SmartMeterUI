import { FaTrash } from "react-icons/fa";

interface MemberProps {
    name: string;
    dateOfBirth?: string;
    gender?: string;
}

export default function MemberCard({ name, dateOfBirth = "", gender = "" }: MemberProps) {
    return (
        <div className="flex items-center justify-center">
            <div className="grid grid-rows-3 bg-primary-100 p-5 space-y-3">
                <div className="Wrapper flex justify-center relative">
                    <div className="font-bold">Testname</div>
                    <div className="DeleteButton absolute top-0 right-0">
                        <div className="PrimaryMedium h-7 w-12 rounded-full bg-red-600 inline-flex justify-center items-center">
                            <FaTrash className="text-white"></FaTrash>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <div>1.1.1999</div>
                    <div>weiblich</div>
                </div>
                <div className="inline-flex space-x-5 justify-center items-center">
                    <div className="ActiveButton inline-block bg-primary-600 rounded-full p-3 transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow">
                        <div className="Default text-sm font-medium text-white">Email hinzufügen</div>
                    </div>
                    <div className="ActiveButton inline-block bg-primary-600 rounded-full p-3 transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow">
                        <div className="Default text-sm font-medium text-white">Bearbeiten</div>
                    </div>
                </div>
            </div>
        </div>
    )
}


