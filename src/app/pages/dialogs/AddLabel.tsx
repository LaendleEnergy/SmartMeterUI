import Link from "next/link";

export default function AddLabelDialog() {
    return (
        <div className="AddLabelDialog w-96 h-96 relative">
            <div className="Rectangle1 w-96 h-96 left-0 top-0   bg-indigo-50 border-2 border-black" />
            <div className="ConfirmButton inline-flex justify-center items-center bg-primary-600 rounded-full p-3 space-x-3 transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow">
                    <Link href="../pages/energy-consumption" legacyBehavior>
                        <span className="Default text-center text-white text-xl font-medium leading-normal">Bestätigen</span>
                    </Link>
                </div>
            <div className="CancelButton pl-px pr-2 pt-2 pb-7 left-[79px] top-[340px]   justify-start items-center inline-flex">
                <div className="ActiveButton w-42 px-8 py-4 bg-primary-600 rounded-full justify-center items-center flex">
                    <div className="Default text-center text-white text-base font-medium   leading-normal">Abbrechen</div>
                </div>
            </div>
            <div className="AddLabel left-[96px] top-[34px]     text-4xl font-bold  ">Verbrauch zuordnen</div>
            <div className="NewLabelName w-96 h-14 left-[79px] top-[207px]   justify-start items-start inline-flex">
                <div className="Name justify-start items-start flex">
                    <div className="Email w-96 h-14 pl-3.5 pr-2.5 py-2.5 rounded border-4 border-black justify-start items-center gap-2.5 flex">
                        <div className="Email text-zinc-600 text-base     tracking-wider">Kategorie</div>
                    </div>
                </div>
            </div>
            <div className="PredefinedLabelSelection w-96 h-14 left-[79px] top-[119px]   justify-start items-start inline-flex">
                <div className="Dropdown justify-start items-start flex">
                    <div className="Dropdown w-96 h-14 pl-3.5 pr-2.5 py-2.5 rounded border-4 border-black justify-start items-center gap-2.5 flex">
                        <div className="Dropdown text-zinc-600 text-base     tracking-wider">Bezeichnung</div>
                    </div>
                </div>
            </div>
            <div className="Icon p-3 left-[410px] top-[211px]   bg-indigo-50 rounded-lg justify-start items-start inline-flex">
                <div className="IconsMediumChevron2 w-6 h-6 relative" />
            </div>
        </div>
    );
}