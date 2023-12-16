import { FaStar } from "react-icons/fa";

interface DisplayAttribute {
    name: string;
    star?: boolean;
}

export default function DisplayAttribute({ name, star = false }: DisplayAttribute) {
    return (
        <div className="justify-start items-start flex">
            <div className="w-72 sm:w-96 h-14 p-3 lg:p-4 space-x-3 rounded border-2 border-black justify-start items-center inline-flex">
                <div className="text-sm sm:text-base text-zinc-600 font-medium tracking-wider grow">{name}</div>
                <FaStar class={star ? "text-right" : "hidden"}></FaStar>
            </div>
        </div>
    )
}

