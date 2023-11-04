import { FaPlusCircle } from "react-icons/fa";
import Navigation from "../../components/navigation/navbar";

export default function DeviceOverview() {
    return (
        <div className="Devices w-96 h-96 bg-white flex-col justify-start items-start gap-2.5 inline-flex">
            <header><Navigation /></header>
            <div className="Page w-96 h-96 relative">

            </div>
            <div className="CurrentDevices w-96 h-96 px-12 py-20 left-[531px] top-[106px] absolute flex-col justify-start items-center gap-11 inline-flex">
                <div className="Devices text-black text-4xl font-bold font-['Inter']">Deine Geräte</div>
                <div className="Name justify-start items-start inline-flex">
                    <div className="Name justify-start items-start flex">
                        <div className="Name w-96 h-14 pl-3.5 pr-2.5 py-2.5 rounded border-4 border-black justify-start items-center gap-2.5 flex">
                            <div className="Name text-zinc-600 text-base font-normal font-['Inter'] tracking-wider">Kühlschrank</div>
                        </div>
                    </div>
                </div>
                <div className="Icon p-3 bg-white rounded-lg justify-start items-start inline-flex">
                    <div className="IconsMediumCircleMinus w-6 h-6 relative">
                        <div className="Vector w-4 h-4 left-[4px] top-[4px] absolute rounded-full border border-neutral-800" />
                    </div>
                </div>
                <div className="Name justify-start items-start inline-flex">
                    <div className="Name w-96 h-14 pl-3.5 pr-2.5 py-2.5 rounded border-4 border-black justify-start items-center gap-2.5 flex">
                        <div className="Name text-zinc-600 text-base font-normal font-['Inter'] tracking-wider">Waschmaschine</div>
                    </div>
                </div>
                <div className="Icon p-3 bg-white rounded-lg justify-start items-start inline-flex">
                    <div className="IconsMediumCircleMinus w-6 h-6 relative">
                        <div className="Vector w-4 h-4 left-[4px] top-[4px] absolute rounded-full border border-neutral-800" />
                    </div>
                </div>
                <div className="Name justify-start items-start inline-flex">
                    <div className="Name w-96 h-14 pl-3.5 pr-2.5 py-2.5 rounded border-4 border-black justify-start items-center gap-2.5 flex">
                        <div className="Name text-zinc-600 text-base font-normal font-['Inter'] tracking-wider">Haarföhn</div>
                    </div>
                </div>
                <div className="Icon p-3 bg-white rounded-lg justify-start items-start inline-flex">
                    <div className="IconsMediumCircleMinus w-6 h-6 relative">
                        <div className="Vector w-4 h-4 left-[4px] top-[4px] absolute rounded-full border border-neutral-800" />
                    </div>
                </div>
                <div className="Frame13 w-96 h-40 relative">
                    <div className="PrimaryMedium w-80 h-14 px-5 py-2 left-[36.50px] top-[44px] absolute bg-primary-600 rounded-full justify-center items-center inline-flex">
                        <div className="Default text-white text-base font-medium font-['Inter'] leading-normal">Neues Gerät hinzufügen </div>
                    </div>
                    <FaPlusCircle></FaPlusCircle>
                </div>
            </div>
            <div className="CircleArrowLeft w-32 h-32 left-0 top-[106px] absolute bg-white">
                <div className="Ellipse1 w-14 h-12 left-[37.62px] top-[35.58px] absolute rounded-full border-2 border-slate-900" />
            </div>
        </div>

    )
}