import Navigation from "../../components/navigation/NavBar";

export default function Members() {
    return (
        <div className="Members w-96 h-96 bg-white flex-col justify-start items-start gap-2.5 inline-flex">
            <header><Navigation /></header>
            <div className="Page w-96 h-96 relative">

                <div className="CircleArrowLeft w-32 h-32 left-[36px] top-[103px]   bg-white">
                    <div className="Ellipse1 w-14 h-12 left-[37.62px] top-[35.58px]   rounded-full border-2 border-slate-900" />
                </div>
                <div className="CurrentMembers left-[543px] top-[205px]     text-4xl font-bold  ">Aktuelle Haushaltsmitglieder</div>
                <div className="Name h-40 left-[599px] top-[455px]  " />
                <div className="Icon p-3 left-[1087px] top-[354px]   bg-white rounded-lg" />
                <div className="Rectangle18 w-96 h-72 left-[612px] top-[349px]   bg-indigo-50" />
                <div className="Bearbeiten w-14 h-10 left-[768px] top-[372px]     text-base font-bold  ">Name 1</div>
                <div className="Bearbeiten w-28 h-5 left-[738px] top-[424px]     text-base    ">Geburtsdatum</div>
                <div className="Bearbeiten w-24 h-5 left-[750px] top-[455px]     text-base    ">Geschlecht</div>
                <div className="ActiveButton w-42 px-8 py-4 bg-primary-600 rounded-full justify-center items-center flex">
                    <div className="Default text-white text-sm font-medium   leading-normal">Email hinzufügen</div>
                </div>
                <div className="ActiveButton w-42 px-8 py-4 bg-primary-600 rounded-full justify-center items-center flex">
                    <div className="Default text-white text-sm font-medium   leading-normal">Bearbeiten</div>
                </div>
                <div className="ActiveButton w-80 px-8 py-4 bg-primary-600 rounded-full justify-center items-center flex">
                    <div className="Default text-white text-base font-medium   leading-normal">Neues Mitglied hinzufügen </div>
                </div>
                <div className="Group1 w-12 h-9 left-[927px] top-[349px]  ">
                    <div className="DeleteButton w-12 h-7 left-0 top-[7px]   justify-center items-center inline-flex">
                        <div className="PrimaryMedium w-12 h-7 px-5 py-2 bg-red-600 rounded-full" />
                    </div>
                    <div className="Icon w-3.5 h-7 p-3 left-0 top-0   bg-red-600 bg-opacity-0 rounded-lg justify-start items-start inline-flex">
                        <div className="IconsMediumTrash4 w-6 h-6 relative" />
                    </div>
                </div>
            </div>
        </div>)
}