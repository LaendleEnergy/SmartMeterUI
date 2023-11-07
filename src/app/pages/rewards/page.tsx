import Navigation from "../../components/navigation/NavBar";
import Link from "next/link";

export default function Rewards() {
    return (
        <div className="Rewards w-96 h-96 bg-white flex-col justify-start items-start gap-2.5 inline-flex">
            <header><Navigation /></header>
            <div className="Page w-96 h-96 relative">
                <div className="Background w-96 h-56 pl-96 pr-7 pt-52 left-[492px] top-[211px]   bg-indigo-50 rounded-sm border-2 border-black justify-end items-center inline-flex">
                    <div className="Icon p-3 bg-white bg-opacity-0 rounded-lg justify-start items-start inline-flex">
                        <div className="IconsMediumStar w-6 h-6 relative" />
                    </div>
                </div>
                <div className="Competition left-[653px] top-[125px]     text-4xl font-bold  ">Belohnungen</div>
                <div className="CurrentReward w-80 left-[595px] top-[229px]  "><span className="  text-3xl font-bold  ">Aktuelle Belohnung</span><span className="  text-2xl font-medium  "> </span></div>
                <div className="Incentive w-40 left-[683px] top-[363px]     text-2xl font-bold  ">Gratis Pizza</div>
                <div className="Leaderboard w-96 h-96 left-[434px] top-[487px]   bg-indigo-50 rounded-sm border-2 border-black">
                    <div className="Name left-[134px] top-[108px]   justify-start items-start inline-flex">
                        <div className="Name justify-start items-start flex">
                            <div className="Name w-96 h-14 pl-3.5 pr-2.5 py-2.5 rounded border-4 border-black justify-start items-center gap-2.5 flex">
                                <div className="Name text-zinc-600 text-base     tracking-wider">Name 1 - Anzahl der Labels</div>
                            </div>
                        </div>
                    </div>
                    <div className="Name left-[134px] top-[197px]   justify-start items-start inline-flex">
                        <div className="Name w-96 h-14 pl-3.5 pr-2.5 py-2.5 rounded border-4 border-black justify-start items-center gap-2.5 flex">
                            <div className="Name text-zinc-600 text-base     tracking-wider">Name 2 - Anzahl der Labels</div>
                        </div>
                    </div>
                    <div className="Name left-[134px] top-[286px]   justify-start items-start inline-flex">
                        <div className="Name w-96 h-14 pl-3.5 pr-2.5 py-2.5 rounded border-4 border-black justify-start items-center gap-2.5 flex">
                            <div className="Name text-zinc-600 text-base     tracking-wider">Name 3 - Anzahl der Labels</div>
                        </div>
                    </div>
                    <div className="Rangliste left-[247px] top-[36px]     text-3xl font-bold   tracking-widest">Rangliste</div>
                    <div className="Icon p-3 left-[471px] top-[201px]   bg-white bg-opacity-0 rounded-lg justify-start items-start inline-flex">
                        <div className="IconsMediumStar w-6 h-6 relative" />
                    </div>
                </div>

                <div className="Edit w-36 h-12 left-[761px] top-[268px]   justify-center items-center inline-flex">
                    <div className="Bearbeiten   text-xl    ">Bearbeiten</div>
                    <div className="Icon w-12 h-12 p-3 bg-indigo-50 rounded-lg justify-start items-start inline-flex">
                        <div className="IconsMediumEdit w-6 h-6 relative">
                            <div className="IconGrid w-6 h-6 left-0 top-0  " />
                            <div className="Rotate origin-top-left rotate-45 w-1 h-5 left-[17.66px] top-[3.51px]  ">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Bearbeiten left-[912px] top-[392px]     text-xl    ">noch 5 Tage</div>
                <div className="ActiveButton inline-flex justify-center items-center bg-primary-600 rounded-full p-3 space-x-3 transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow">
                    <Link href="../pages/energy-consumption">
                        <span className="Default text-center text-white text-xl font-medium   leading-normal">Jetzt Verbrauch zuordnen</span>
                    </Link>
                </div>
            </div>
        </div>)
}