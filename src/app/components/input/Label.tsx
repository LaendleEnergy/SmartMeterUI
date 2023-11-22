interface Label {
    name: string,
};

export default function InputAttribute({ name }: Label) {
    return (
        <label className="font-bold p-3">{name}</label>
    )
}



