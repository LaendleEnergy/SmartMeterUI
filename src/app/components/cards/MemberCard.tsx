import Link from "next/link";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import EditMemberDialog from "../dialogs/EditMemberDialog";

interface Member {
    name: string;
    dateOfBirth: string;
    gender: string;
    householdId: string;
    id: string;
}

interface MemberInput {
    name: string;
    dateOfBirth: Date;
    gender: string;
    householdId: string | null;
    id: string;
}

export default function MemberCard(member: Member) {
    const memberInput: MemberInput = {
        name: member.name,
        dateOfBirth: new Date(member.dateOfBirth),
        gender: member.gender,
        householdId: member.householdId ? member.householdId : "",
        id: member.id
    };

    const [isOpen, setIsOpen] = useState(false);

    async function deleteMember() {
        if (member.householdId != "" && member.id != "") {
            await fetch(`http://localhost:8080/member/remove/${member.id}`, {
                method: "DELETE",
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json',
                },
            }).catch((e) => console.log(e));
        } else {
            console.log("Member could not be deleted");
        }
    };


    return (
        <div className="flex items-center justify-center border-2 border-solid border-black">
            <div className="grid grid-rows-3 bg-primary-100 p-5 space-y-3">
                <div className="Wrapper flex justify-center relative">
                    <div className="font-bold">{member.name}</div>
                    <div className="DeleteButton absolute top-0 right-0">
                        <button onSubmit={deleteMember} className="PrimaryMedium h-7 w-12 rounded-full bg-red-600 inline-flex justify-center items-center">
                            <FaTrash className="text-white"></FaTrash>
                        </button>
                    </div>
                </div>
                <div className="text-center">
                    <div>{member.dateOfBirth}</div>
                    <div>{member.gender}</div>
                </div>
                <div className="flex grow space-x-8 justify-center items-center">
                    <div className="ConfirmButton bg-primary-600 rounded-full p-3 transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow">
                        <Link href="./invitation" className="text-center text-white text-base font-medium leading-normal"><span className="Text text-center text-white text-base font-medium leading-normal">Email hinzufügen</span></Link>
                    </div>
                    <div className="ActiveButton inline-block bg-primary-600 rounded-full p-3 transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow grow">
                        <button onClick={() => setIsOpen(true)} className="Default text-sm font-medium text-white">Bearbeiten</button>
                    </div>
                </div>
            </div>
            <EditMemberDialog isOpen={isOpen} setIsOpen={setIsOpen} member={memberInput}></EditMemberDialog>
        </div>

    )
}
