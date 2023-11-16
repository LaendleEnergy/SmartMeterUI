import Link from "next/link";
import InputAttribute from "@/app/components/input/InputAttribute";
import Navbar from "@/app/components/navigation/NavBar";

export default function AcceptInvitation() {
    return (
        <div className="Invitation">
            <div className="flex-col flex justify-center items-center space-y-8 py-[10%]">
                <Navbar showTabs={false}></Navbar>
                <div className="text-4xl font-bold ">Haushalt beitreten</div>
                <div className="text-lg">Nimm deine Einladung, deinem Haushalt beizutreten an, indem du hier deine gewünschten Login-Daten angibst.</div>
                <InputAttribute name="Email"></InputAttribute>
                <InputAttribute name="Passwort" type="password"></InputAttribute>
                <InputAttribute name="Passwort wiederholen" type="password"></InputAttribute>
                <div className="ActiveButton inline-flex justify-center items-center bg-primary-600 rounded-full px-8 py-3 transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow">
                    <Link href="./energy-consumption"><span className="Text text-center text-white text-base font-medium leading-normal">Haushalt beitreten</span></Link>
                </div>
            </div>
        </div>)
}


