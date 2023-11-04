import Navigation from "../../components/navigation/navbar";

export default function Members() {
    return (
        <div className="Members w-96 h-96 bg-white flex-col justify-start items-start gap-2.5 inline-flex">
            <header><Navigation /></header>
            <div className="Page w-96 h-96 relative">

                <div className="CircleArrowLeft w-32 h-32 left-[36px] top-[103px] absolute bg-white">
                    <div className="Ellipse1 w-14 h-12 left-[37.62px] top-[35.58px] absolute rounded-full border-2 border-slate-900" />
                </div>
                <div className="CurrentMembers left-[543px] top-[205px] absolute text-black text-4xl font-bold font-['Inter']">Aktuelle Haushaltsmitglieder</div>
                <div className="Name h-40 left-[599px] top-[455px] absolute" />
                <div className="Icon p-3 left-[1087px] top-[354px] absolute bg-white rounded-lg" />
                <div className="Rectangle18 w-96 h-72 left-[612px] top-[349px] absolute bg-indigo-50" />
                <div className="Bearbeiten w-14 h-10 left-[768px] top-[372px] absolute text-black text-base font-bold font-['Inter']">Name 1</div>
                <div className="Bearbeiten w-28 h-5 left-[738px] top-[424px] absolute text-black text-base font-normal font-['Inter']">Geburtsdatum</div>
                <div className="Bearbeiten w-24 h-5 left-[750px] top-[455px] absolute text-black text-base font-normal font-['Inter']">Geschlecht</div>
                <div className="PrimaryMedium w-32 h-12 px-5 py-2 left-[848px] top-[584px] absolute bg-primary-600 rounded-full justify-center items-center inline-flex">
                    <div className="Default text-white text-sm font-medium font-['Inter'] leading-normal">Email hinzufügen</div>
                </div>
                <div className="PrimaryMedium w-32 h-12 px-5 py-2 left-[620px] top-[584px] absolute bg-primary-600 rounded-full justify-center items-center inline-flex">
                    <div className="Default text-white text-sm font-medium font-['Inter'] leading-normal">Bearbeiten</div>
                </div>
                <div className="PrimaryMedium w-80 h-14 px-5 py-2 left-[629px] top-[797px] absolute bg-primary-600 rounded-full justify-center items-center inline-flex">
                    <div className="Default text-white text-base font-medium font-['Inter'] leading-normal">Neues Mitglied hinzufügen </div>
                </div>
                <div className="Group1 w-12 h-9 left-[927px] top-[349px] absolute">
                    <div className="DeleteButton w-12 h-7 left-0 top-[7px] absolute justify-center items-center inline-flex">
                        <div className="PrimaryMedium w-12 h-7 px-5 py-2 bg-red-600 rounded-full" />
                    </div>
                    <div className="Icon w-3.5 h-7 p-3 left-0 top-0 absolute bg-red-600 bg-opacity-0 rounded-lg justify-start items-start inline-flex">
                        <div className="IconsMediumTrash4 w-6 h-6 relative" />
                    </div>
                </div>
            </div>
        </div>)
}