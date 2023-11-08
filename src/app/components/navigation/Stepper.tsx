export default function Stepper({ step2 = false }) {
    return (
        <div className="p-5">
            <div className="flex items-center space-x-20">
                <div className="flex items-center text-primary-600 relative">
                    <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-primary-600 bg-primary-600"></div>
                    <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-primary-600">Account</div>
                </div>
                <hr className="flex-auto border-t-2 border-primary-600 bg-primary-600"></hr>
                <div className="flex items-center text-primary-600 relative">
                    <div className={step2 ? "rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-primary-600 bg-primary-600" : "rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-primary-600"}></div>
                    <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-primary-600">Haushalt</div>
                </div>
            </div>
        </div>
    )
}

