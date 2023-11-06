export default function EditMemberDialog() {
    return (
        <div className="EditMemberDialog w-96 h-96 flex-col justify-center items-center inline-flex">
            <div className="EditMemberDialog w-96 h-96 relative flex-col justify-start items-start flex">
                <div className="Background w-96 h-96 pl-96 pt-52 pb-72 bg-indigo-50 rounded-sm border-2 border-black flex-col justify-start items-center inline-flex">
                    <div className="Icon p-3 bg-white bg-opacity-0 rounded-lg justify-start items-start inline-flex">
                        <div className="IconsMediumStar w-6 h-6 relative" />
                    </div>
                </div>
                <div className="EditMember w-96 h-96 relative">
                    <div className="EditMember w-96 h-96 px-12 py-20 left-0 top-[50px]   flex-col justify-start items-center gap-11 inline-flex">
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
                        <div className="ConfirmButton h-10 px-5 py-2 bg-primary-600 rounded-full justify-center items-center inline-flex">
                            <div className="Default text-center text-white text-base font-medium   leading-normal">Bestätigen</div>
                        </div>
                    </div>
                    <div className="EditMember w-96 h-12 left-[60px] top-0   text-center   text-3xl font-bold  ">Haushaltsmitglied bearbeiten</div>
                </div>
            </div>
        </div>
    )
}