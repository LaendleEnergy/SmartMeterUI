interface Input {
    name: string;
    type?: string;
}

export default function InputAttribute({ name, type = "text" }: Input) {
    return (
        <div className="justify-start items-start flex">
            <div className="p-2 rounded border-4 border-black justify-start items-center flex">
                <input type={type} id={name} name={name} placeholder={name} className="text-zinc-600 p-4" />
            </div>
        </div>
    )
}



