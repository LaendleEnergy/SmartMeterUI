import { FaMinusCircle } from "react-icons/fa";

interface DeviceProps {
    name: string;
}

export default function DeviceCard({ name }: DeviceProps) {
    return (
        <div className="flex justify-center">
            <div className="inline-flex justify-center items-center space-x-3">
                <div className="w-72 sm:w-96 h-15 p-3 rounded border-2 border-solid border-black">
                    <div className="text-zinc-600 tracking-wider text-center text-sm sm:text-base">{name}</div>
                </div>
                <FaMinusCircle class="text-red-600"></FaMinusCircle>
            </div>
        </div>
    )
}

