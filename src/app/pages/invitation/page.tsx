import Image from "next/image";
import Navigation from "../../components/navigation/NavBar";
import Link from "next/link";

export default function AcceptInvitation() {
    return (
        <div className="AcceptInvitation w-96 h-96 bg-white flex-col justify-start items-start gap-2.5 inline-flex">
            <header><Navigation /></header>
            <div className="Page w-96 h-96 justify-start items-start gap-96 inline-flex">
                <div className="NavigationBar w-96 bg-indigo-50 flex-col justify-start items-start gap-6 inline-flex">
                    <div className="Center w-96 h-28 relative">
                        <div className="Logo w-56 h-24 left-[36.22px] top-[-0px]   flex-col justify-start items-start gap-2.5 inline-flex">
                            <Image className="Image1 w-40 h-24" src="https://via.placeholder.com/154x103" alt="placeholder" />
                        </div>
                        <div className="Divider w-96 h-px left-0 top-[105px]   bg-zinc-200" />
                    </div>
                </div>
                <div className="Register w-96 h-96 relative">
                    <div className="Email w-96 h-14 left-[1px] top-[108px]   justify-start items-start inline-flex">
                        <div className="Email justify-start items-start flex">
                            <div className="Email w-96 h-14 pl-3.5 pr-2.5 py-2.5 rounded border-4 border-black justify-start items-center gap-2.5 flex">
                                <div className="Email text-zinc-600 text-base     tracking-wider">Name</div>
                            </div>
                        </div>
                    </div>
                    <div className="Password w-96 h-14 pl-3.5 pr-2.5 py-2.5 left-0 top-[203px]   rounded border-4 border-black justify-start items-center gap-2.5 inline-flex">
                        <div className="Password text-zinc-600 text-base     tracking-wider">Passwort</div>
                    </div>
                    <div className="ConfirmPassword w-96 h-14 pl-3.5 pr-2.5 py-2.5 left-0 top-[298px]   rounded border-4 border-black justify-start items-center gap-2.5 inline-flex">
                        <div className="Password text-zinc-600 text-base     tracking-wider">Passwort wiederholen</div>
                    </div>
                    <div className="RegisterButton inline-flex justify-center items-center bg-primary-600 rounded-full p-3 space-x-3 transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow">
                        <Link href="../pages/energy-consumption">
                            <span className="Default text-center text-white text-xl font-medium   leading-normal">Profil erstellen</span>
                        </Link>
                    </div>
                    <div className="RegisterHousehold left-[34px] top-0     text-4xl font-bold  ">Haushalt beitreten</div>
                </div>
            </div>
        </div>)
}