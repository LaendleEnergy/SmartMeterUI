import Link from "next/link";

export default function AddMemberDialog() {
    return (
        <div className="AddMemberDialog w-96 h-96 relative">
            <div className="Background w-96 h-96 pl-96 pt-52 pb-72 left-[22px] top-[28px]   bg-indigo-50 rounded-sm border-2 border-black flex-col justify-start items-center inline-flex">
                <div className="Icon p-3 bg-white bg-opacity-0 rounded-lg justify-start items-start inline-flex">
                    <div className="IconsMediumStar w-6 h-6 relative" />
                </div>
            </div>
            <div className="AddMember w-96 h-96 left-[11px] top-[57px]  ">
                <div className="AddMember w-96 h-96 px-12 py-20 left-0 top-[50px]   flex-col justify-start items-center gap-11 inline-flex">
                    <div className="Name justify-start items-start inline-flex">
                        <div className="Name justify-start items-start flex">
                            <div className="Name w-96 h-14 pl-3.5 pr-2.5 py-2.5 rounded border-4 border-black justify-start items-center gap-2.5 flex">
                                <div className="Name text-zinc-600 text-base     tracking-wider">Name</div>
                            </div>
                        </div>
                    </div>
                    <div className="DateOfBirth justify-start items-start inline-flex">
                        <div className="DateOfBirth w-96 h-14 pl-3.5 pr-2.5 py-2.5 rounded border-4 border-black justify-start items-center gap-2.5 flex">
                            <div className="DateOfBirth text-zinc-600 text-base     tracking-wider">Geburtsdatum (Optional)</div>
                        </div>
                    </div>
                    <div className="Gender w-96 h-14 pl-3.5 pr-2.5 py-2.5 rounded border-4 border-black justify-start items-center gap-2.5 inline-flex">
                        <div className="Gender text-zinc-600 text-base     tracking-wider">Geschlecht (Optional)</div>
                    </div>
                    <div className="CancelButton pl-px pr-2 pt-2 pb-12 justify-start items-center inline-flex">
                        <div className="ActiveButton w-42 px-8 py-4 bg-primary-600 rounded-full justify-center items-center flex">
                            <div className="Default text-center text-white text-base font-medium   leading-normal">Abbrechen</div>
                        </div>
                    </div>
                    <div className="AddButton w-32 h-14 relative" />
                    <div className="ActiveButton inline-flex justify-center items-center bg-primary-600 rounded-full p-3 space-x-3 transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow">
                    <Link href="../pages/members">
                        <span className="Default text-center text-white text-xl font-medium   leading-normal">Hinzufügen</span>
                    </Link>
                </div>
                </div>
                <div className="AddMember w-96 h-12 left-[60px] top-0   text-center   text-3xl font-bold  ">Haushaltsmitglied hinzufügen</div>
            </div>
        </div>
    )
}