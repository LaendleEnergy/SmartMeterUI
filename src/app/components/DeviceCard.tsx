import { FaMinusCircle } from "react-icons/fa";

interface DeviceProps {
    name: string;
}

export default function Logo({ name }: DeviceProps) {
    return (
        <div className="flex justify-center">
            <div className="inline-flex justify-center items-center space-x-3">
                <div className="w-96 h-14 p-3 rounded border-4 border-black">
                    <div className="text-zinc-600 tracking-wider">{name}</div>
                </div>
                <FaMinusCircle></FaMinusCircle>
            </div>
        </div>
    )
}

