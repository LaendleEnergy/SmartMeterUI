import Navigation from "../../components/navigation/NavBar";
import Link from "next/link";

export default function DeviceOverview() {
    return (
        <div className="DevicesOverview">
            <header><Navigation /></header>
            <div className="flex-col flex justify-center items-center space-y-10 py-[10%]">
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
                    <div className="text-xl font-bold justify-center inline-flex space-x-2">Energieeffizienz von:
                        <button id="dropdownDefaultButton" data-dropdown-toggle="devices-dropdown" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center" type="button">Gerät auswählen
                            <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" /></svg>
                        </button>
                        <div id="devices-dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Kühlschrank</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Haarföhn</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="Fazit border-2 bg-indigo-50 border-black border-solid p-2"><span className="text-lg font-bold">Fazit:<br /></span><span className="text-lg">Dein Gerät verbraucht 200 kWh (Jahr) mehr als vergleichbare Geräte.</span></div>
                <div className="ConfirmButton inline-block bg-primary-600 rounded-full p-3 transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow">
                    <Link href="./devices" className="Default text-center text-white text-base font-medium leading-normal"><span className="Text text-center text-white text-base font-medium leading-normal">Geräte verwalten</span></Link>
                </div>
            </div>
        </div>
    )
}

