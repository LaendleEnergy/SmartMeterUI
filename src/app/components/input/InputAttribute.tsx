interface Input {
    name: string;
    type?: string;
    handleInput: any;
    placeholder: string;
    value: string | number;
    required?: boolean;
}

export default function InputAttribute({ name, type = "text", handleInput, placeholder, value, required = true }: Input) {
    return (
        <div className="justify-start items-start flex">
            <div className="w-72 sm:w-96 h-15 p-3 lg:p-4 space-x-2 lg:space-x-3 rounded border-3 border-black justify-start items-center flex">
                <input type={type} id={name} name={name} placeholder={placeholder} value={value} required={required} className="text-sm font-medium sm:text-base text-black p-2 lg:p-4 grow" onChange={handleInput} min={0} max={1000}/>
            </div>
        </div>
    )
}



