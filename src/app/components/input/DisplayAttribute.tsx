import { FaStar } from "react-icons/fa";

interface DisplayAttribute {
    name: string;
    star?: boolean;
}

export default function DisplayAttribute({ name, star = false }: DisplayAttribute) {
    return (
        <div className="w-96 h-14 p-3 space-x-3 rounded border-3 border-black justify-start items-center inline-flex">
            <div className="text-zinc-600 text-base tracking-wider">{name}</div>
            <FaStar class={star ? "text-right" : "hidden"}></FaStar>
        </div>
    )
}

