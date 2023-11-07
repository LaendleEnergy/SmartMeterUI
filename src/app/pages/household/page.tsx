import Navigation from "../../components/navigation/NavBar";
import Link from "next/link";

export default function Household() {
    return (
        <div className="Account w-96 h-96 bg-white flex-col justify-start items-start gap-2.5 inline-flex">
            <header><Navigation /></header>
            <div className="Page w-96 h-96 relative">

                <div className="PersonalInformation px-12 py-20 left-[549px] top-[174px]   flex-col justify-start items-center gap-11 inline-flex">
                    <div className="Tarif justify-start items-start inline-flex">
                        <div className="Stromtarif w-96 h-14 pl-3.5 pr-2.5 py-2.5 rounded border-4 border-black justify-start items-center gap-2.5 flex">
                            <div className="Stromtarif text-zinc-600 text-base     tracking-wider">Stromanbieter</div>
                        </div>
                    </div>
                    <div className="Icon p-3 bg-white bg-opacity-0 rounded-lg justify-start items-center gap-2.5 inline-flex">
                        <div className="IconsMediumChevron2 w-6 h-6 relative" />
                    </div>
                    <div className="Stromtarif justify-start items-start inline-flex">
                        <div className="Stromtarif w-96 h-14 pl-3.5 pr-2.5 py-2.5 rounded border-4 border-black justify-start items-center gap-2.5 flex">
                            <div className="Stromtarif text-zinc-600 text-base     tracking-wider">Aktueller Stromtarif</div>
                        </div>
                    </div>
                    <div className="Icon p-3 bg-white rounded-lg justify-start items-start inline-flex">
                        <div className="IconsMediumChevron2 w-6 h-6 relative" />
                    </div>
                    <div className="Zaehlernummern w-96 h-14 pl-3.5 pr-2.5 py-2.5 rounded border-4 border-black justify-start items-center gap-2.5 inline-flex">
                        <div className="Password text-zinc-600 text-base     tracking-wider">Zählernummer</div>
                    </div>
                    <div className="ActiveButton inline-flex justify-center items-center bg-primary-600 rounded-full p-3 space-x-3 transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow">
                        <Link href="../pages/members"><span className="Text text-center text-white text-base font-medium leading-normal">Haushaltsmitglieder verwalten</span></Link>
                    </div>
                    <div className="Name" />
                </div>
                <div className="Edit w-36 h-12 left-[769px] top-[167px]   justify-center items-center inline-flex">
                    <div className="Bearbeiten   text-xl    ">Bearbeiten</div>
                    <div className="Icon w-12 h-12 p-3 bg-white rounded-lg justify-start items-start inline-flex">
                        <div className="IconsMediumEdit w-6 h-6 relative">
                            <div className="IconGrid w-6 h-6 left-0 top-0  " />
                            <div className="Rotate origin-top-left rotate-45 w-1 h-5 left-[17.66px] top-[3.51px]  ">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Information left-[674px] top-[132px]     text-4xl font-bold  ">Dein Haushalt</div>
                <div className="DeleteAccountButton w-72 h-14 left-[1269px] top-[878px]  ">
                    <div className="PrimaryMedium w-72 h-14 px-5 py-2 left-0 top-0   bg-red-600 rounded-full justify-center items-center inline-flex">
                        <div className="Default text-center text-white text-xl font-medium   leading-normal">Account löschen</div>
                    </div>
                    <div className="Icon w-12 h-12 p-3 left-[227px] top-[6px]   bg-red-600 rounded-lg justify-start items-start inline-flex">
                        <div className="IconsMediumTrash4 w-6 h-6 relative" />
                    </div>
                </div>
            </div>
        </div>
    )
}