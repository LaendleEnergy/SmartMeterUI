import Dropdown from "@/app/components/input/Dropdown";
import Navigation from "../../components/navigation/NavBar";
import Link from "next/link";

export default function DeviceOverview() {
    return (
        <div className="DevicesOverview">
            <header><Navigation /></header>
            <div className="flex-col flex justify-center items-center space-y-8 py-[15%]">
                <div className="w-32 h-10 text-4xl font-bold">Geräte</div>
                <div className="DeviceOverview inline-flex space-x-5">
                    <div className="w-96 h-36 border-2 bg-indigo-50 border-black border-solid text-center">
                        <div className="text-lg font-bold ">Schlechteste Energieineffizienz</div>
                        <div className="text-lg">Kühlschrank (200 kWh (Jahr) <br />mehr als Durchschnitt)</div>
                    </div>
                    <div className="w-96 h-36 border-2 bg-indigo-50 border-black border-solid text-center">
                        <div className="text-lg font-bold">Zweit-schlechteste Energieeffizienz</div>
                        <div className="text-lg">Haarföhn (300 kWh (Jahr) <br />mehr als Durchschnitt)</div>
                    </div>
                </div>
                <div className="Trend">
                    <div className="text-xl font-bold justify-center items-center inline-flex space-x-2">
                        <span>Energieeffizienz von:</span>
                        <Dropdown title="Gerät auswählen" values={["Kühlschrank", "Haarföhn", "Waschmaschine"]}></Dropdown>
                    </div>
                </div>
                <div className="Fazit border-2 bg-indigo-50 border-black border-solid p-2"><span className="text-lg font-bold">Fazit:<br /></span><span className="text-lg">Dein Gerät verbraucht 200 kWh (Jahr) mehr als vergleichbare Geräte.</span></div>
                <div className="inline-block bg-primary-600 rounded-full p-3 transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow">
                    <Link href="./devices" className="Default text-center text-white text-base font-medium leading-normal"><span className="Text text-center text-white text-base font-medium leading-normal">Geräte verwalten</span></Link>
                </div>
            </div>
        </div>
    )
}

