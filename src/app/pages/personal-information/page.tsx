import Navigation from "../../components/navigation/navbar";
export default function PersonalInformation() {
    return (
        <div className="PersonalInformation w-96 h-96 bg-white flex-col justify-start items-start gap-2.5 inline-flex">
            <header><Navigation /></header>
            <div className="Page w-96 h-96 relative">

                <div className="PersonalInformation px-12 py-20 left-[549px] top-[219px] absolute flex-col justify-start items-center gap-11 inline-flex">
                    <div className="Email justify-start items-start inline-flex">
                        <div className="Email justify-start items-start flex">
                            <div className="Email w-96 h-14 pl-3.5 pr-2.5 py-2.5 rounded border-4 border-black justify-start items-center gap-2.5 flex">
                                <div className="Email text-zinc-600 text-base font-normal font-['Inter'] tracking-wider">Name</div>
                            </div>
                        </div>
                    </div>
                    <div className="Email justify-start items-start inline-flex">
                        <div className="Email justify-start items-start flex">
                            <div className="Email w-96 h-14 pl-3.5 pr-2.5 py-2.5 rounded border-4 border-black justify-start items-center gap-2.5 flex">
                                <div className="Email text-zinc-600 text-base font-normal font-['Inter'] tracking-wider">Email</div>
                            </div>
                        </div>
                    </div>
                    <div className="Passwort w-96 h-14 pl-3.5 pr-2.5 py-2.5 rounded border-4 border-black justify-start items-center gap-2.5 inline-flex">
                        <div className="Password text-zinc-600 text-base font-normal font-['Inter'] tracking-wider">Passwort</div>
                    </div>
                    <div className="Passwort w-96 h-14 pl-3.5 pr-2.5 py-2.5 rounded border-4 border-black justify-start items-center gap-2.5 inline-flex">
                        <div className="Password text-zinc-600 text-base font-normal font-['Inter'] tracking-wider">Passwort wiederholen</div>
                    </div>
                    <div className="Passwort w-96 h-14 pl-3.5 pr-2.5 py-2.5 rounded border-4 border-black justify-start items-center gap-2.5 inline-flex">
                        <div className="Password text-zinc-600 text-base font-normal font-['Inter'] tracking-wider">Geburtsdatum (Optional)</div>
                    </div>
                    <div className="Passwort w-96 h-14 pl-3.5 pr-2.5 py-2.5 rounded border-4 border-black justify-start items-center gap-2.5 inline-flex">
                        <div className="Password text-zinc-600 text-base font-normal font-['Inter'] tracking-wider">Geschlecht (Optional)</div>
                    </div>
                    <div className="Stromtarif" />
                    <div className="Name" />
                </div>
                <div className="Edit w-36 h-12 left-[807px] top-[210px] absolute justify-center items-center inline-flex">
                    <div className="Bearbeiten text-black text-xl font-normal font-['Inter']">Bearbeiten</div>
                    <div className="Icon w-12 h-12 p-3 bg-white rounded-lg justify-start items-start inline-flex">
                        <div className="IconsMediumEdit w-6 h-6 relative">
                            <div className="IconGrid w-6 h-6 left-0 top-0 absolute" />
                            <div className="Rotate origin-top-left rotate-45 w-1 h-5 left-[17.66px] top-[3.51px] absolute">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Information left-[636px] top-[166px] absolute text-black text-4xl font-bold font-['Inter']">Persönliche Daten</div>
            </div>
        </div>
    )
}