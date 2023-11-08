import Navigation from "../../components/navigation/NavBar";
import DeviceCard from "../../components/DeviceCard";
import { FaPlusCircle } from "react-icons/fa";

export default function Devices() {
    return (
        <div className="CurrentDevices">
            <header><Navigation /></header>
            <div className="flex-col flex justify-center items-center space-y-10 py-[10%]">
                <div className="text-4xl font-bold">Deine Geräte</div>
                <DeviceCard name="Kühlschrank"></DeviceCard>
                <DeviceCard name="Waschmaschine"></DeviceCard>
                <div className="ActiveButton inline-flex justify-center items-center bg-primary-600 rounded-full p-3 space-x-3 transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow">
                    <div className="Default font-medium text-white">Neues Gerät hinzufügen</div>
                    <FaPlusCircle className="text-white"></FaPlusCircle>
                </div>
            </div>
        </div>
    )
}
