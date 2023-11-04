interface DisplayAttribute {
    name: string;
}

export default function DisplayAttribute({ name }: DisplayAttribute) {
    return (
        <div className="w-96 h-14 p-3 rounded border-4 border-black justify-start items-center inline-flex">
            <div className="text-zinc-600 text-base tracking-wider">{name}</div>
        </div>
    )
}

