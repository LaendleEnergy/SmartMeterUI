interface Input {
    name: string;
    type?: string;
    handleInput: any;
    placeholder: string;
    value: string;
    required?: boolean;
}

export default function InputAttribute({ name, type = "text", handleInput, placeholder, value, required = true }: Input) {
    return (
        <div className="justify-start items-start flex">
            <div className="w-96 h-14 p-3 space-x-3 rounded border-3 border-black justify-start items-center flex">
                <input type={type} id={name} name={name} placeholder={placeholder} value={value} required={required} className="text-zinc-600 p-4 grow" onChange={handleInput}/>
            </div>
        </div>
    )
}



