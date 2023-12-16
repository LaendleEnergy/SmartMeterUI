interface Label {
    name: string,
};

export default function InputAttribute({ name }: Label) {
    return (
        <label className="text-sm sm:text-base font-bold p-3">{name}</label>
    )
}



