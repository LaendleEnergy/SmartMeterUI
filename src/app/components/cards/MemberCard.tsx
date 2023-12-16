import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import EditMemberDialog from "../dialogs/EditMemberDialog";
import { Member } from "@/app/models/Member";
import { useRouter } from 'next/navigation';
import DeleteDialog from "../dialogs/DeleteDialog";

interface MemberCardProps {
    name: string; 
    dateOfBirth: string;
    gender: string;
    id: string;
    setRender: Dispatch<SetStateAction<boolean>>;
}

export default function MemberCard(member: MemberCardProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [deleteIsOpen, deleteSetIsOpen] = useState(false);
    const [currentMember, setCurrentMember] = useState<Member>(member);
    const router = useRouter();

    useEffect(() => { })

    async function deleteMember() {
        const currentMemberId = currentMember.id ? currentMember.id : "";

        if (currentMemberId == "") {
            router.push("../pages/errors/error");
            return;
        }

        await fetch(`http://localhost:8080/member/remove/${currentMemberId}`, {
            method: "DELETE",
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
            },
        }).then(async (res) => {
            member.setRender(true);
            return res.status;
        }).then((status) => {
            if (status === 404) {
                router.push("../pages/errors/notfound");
            } else if (status != 200) {
                router.push("../pages/errors/error");
            }
        }).catch((e) => {
            console.log(e)
        });

    };

    return (
        <div className="flex items-center justify-center border-2 border-solid border-black">
            <div className="grid grid-rows-3 bg-primary-100 p-2 md:p-5 space-y-3">
                <div className="Wrapper flex justify-center relative">
                    <div className="font-bold">{currentMember.name}</div>
                    <div className="DeleteButton absolute top-0 right-0">
                        <button onClick={() => deleteSetIsOpen(true)} className="PrimaryMedium h-7 w-12 rounded-full bg-red-600 inline-flex justify-center items-center">
                            <FaTrash className="text-white"></FaTrash>
                        </button>
                    </div>
                </div>
                <div className="text-sm sm:text-base text-center">
                    <div>{currentMember.dateOfBirth}</div>
                    <div>{currentMember.gender}</div>
                </div>
                <div className="flex grow space-x-8 justify-center items-center">
                    <div className="ConfirmButton bg-primary-600 rounded-full p-3 transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow">
                        <Link href="./invitation"><span className="Text text-center text-white text-sm sm:text-base">Email hinzufügen</span></Link>
                    </div>
                    <div className="ActiveButton inline-block bg-primary-600 rounded-full p-3 transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow grow">
                        <button onClick={() => setIsOpen(true)} className="Default text-sm sm:text-base md:font-medium text-white">Bearbeiten</button>
                    </div>
                </div>
            </div>
            <EditMemberDialog isOpen={isOpen} setIsOpen={setIsOpen} member={currentMember} setCurrentMember={setCurrentMember}></EditMemberDialog>
            <DeleteDialog isOpen={deleteIsOpen} setIsOpen={deleteSetIsOpen} handleDelete={deleteMember} deleteUser={true}></DeleteDialog>
        </div>
    )
}
