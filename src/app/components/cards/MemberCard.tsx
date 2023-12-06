import GenericDialog from "@/app/components/dialogs/GenericDialog";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";

interface Member {
    name: string;
    dateOfBirth: string;
    gender: string;
    householdId: string;
    id: string;
}

export default function MemberCard(member: Member) {
    const [isOpen, setIsOpen] = useState(false);
    const [data, setData] = useState({ householdId: "", memberId: "" })

    console.log(member)

    useEffect(() => {
        const token = localStorage.getItem('token');

        fetch(`http://localhost:8080/member/get/${member.id}/${member.householdId}`, {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
            .then(async (res) => { return await res.json(); })
            .then((data) => {
                setData(data)
            })
    });

    async function deleteMember() {

        if (member.householdId != "" && member.id != "") {
            await fetch(`http://localhost:8080/member/remove/${member.id}/${member.householdId}`, {
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
            <GenericDialog title="Haushaltsmitglied bearbeiten" isOpen={isOpen} activeButtonLabel="Bestätigen" setIsOpen={setIsOpen} device={false} memberId={member.id} householdId={member.householdId}></GenericDialog>
        </div>

    )
}


function setRender(arg0: boolean) {
    throw new Error("Function not implemented.");
}

