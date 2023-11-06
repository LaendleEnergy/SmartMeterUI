export default function DeleteAccountDialog() {
    return (
        <div className="DeleteAccountDialog w-96 h-96 relative">
            <div className="ConfirmDeletion w-96 h-96 pl-5 pr-2.5 pt-7 pb-56 left-0 top-0   flex-col justify-start items-center inline-flex">
                <div className="Background w-96 h-96 pl-96 pt-52 pb-72 bg-indigo-50 rounded-sm border-2 border-black flex-col justify-start items-center inline-flex">
                    <div className="Icon p-3 bg-white bg-opacity-0 rounded-lg justify-start items-start inline-flex">
                        <div className="IconsMediumStar w-6 h-6 relative" />
                    </div>
                </div>
            </div>
            <div className="Information left-[115px] top-[52px]   text-center   text-4xl font-bold  ">Account löschen</div>
            <div className="Information w-96 left-[63px] top-[141px]  "><span className="  text-xl font-medium  ">Soll dieser Account wirklich endgültig <br />gelöscht werden? <br /></span><span className="  text-xl font-bold  "><br />Hinweis: <br />Diese Aktion kann nicht rückgängig gemacht werden.</span></div>
            <div className="IconsMediumTrash4 w-5 h-5 left-[404px] top-[454px]  " />
            <div className="DeleteAccountButton w-44 h-10 left-[254px] top-[446px]   justify-center items-center inline-flex">
                <div className="PrimaryMedium w-44 h-10 px-5 py-2 bg-red-600 rounded-full justify-center items-center inline-flex">
                    <div className="Default text-center text-white text-base font-medium   leading-normal">Account löschen</div>
                </div>
            </div>
            <div className="CancelButton w-44 h-14 pr-px pt-2.5 pb-2 left-[48px] top-[436px]   justify-center items-center inline-flex">
                <div className="PrimaryMedium grow shrink basis-0 self-stretch px-5 py-2 bg-gray-400 rounded-full justify-center items-center inline-flex">
                    <div className="Default text-center text-white text-base font-medium   leading-normal">Abbrechen</div>
                </div>
            </div>
        </div>
    )
}