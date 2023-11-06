import Navigation from "../../components/navigation/NavBar";
import DeviceCard from "../../components/DeviceCard";
import { FaPlusCircle } from "react-icons/fa";

export default function DeviceOverview() {
    return (
        <div className="CurrentDevices">
            <header><Navigation /></header>
            <div className="Page flex-col flex justify-center items-center space-y-10 py-[10%]">
                <div className="Devices text-4xl font-bold">Deine Geräte</div>
                <DeviceCard name="Kühlschrank"></DeviceCard>
                <DeviceCard name="Waschmaschine"></DeviceCard>
                <div className="ActiveButton flex h-14 w-80 items-center justify-center rounded-full bg-blue-600 px-5 py-2 space-x-3">
                    <div className="Default font-medium text-white">Neues Gerät hinzufügen</div>
                    <FaPlusCircle className="text-white"></FaPlusCircle>
                </div>
            </div>
        </div>
    )
}
