import Link from 'next/link';
import 'tailwindcss/tailwind.css';
import Logo from "./components/Logo";
import InputAttribute from "@/app/components/input/InputAttribute";

export default function Home() {

  return (
    <div className="Welcome p-[5%]">
      <div className="RegisterOrLogin flex-col justify-center items-center space-y-8 inline-flex">
        <Logo h={388} w={740}></Logo>
        <div className="text-4xl font-bold ">Willkommen bei LaendleEnergy!</div>
        <div className="text-lg max-w-[750%]">Registriere dich jetzt, um den Stromverbrauch deines Haushaltes und die damit verbundenen Kosten beobachten und Feedback über die Energieeffizienz deiner Geräte erhalten zu können.</div>
        <InputAttribute name="Email"></InputAttribute>
        <InputAttribute name="Passwort" type="password"></InputAttribute>
        <div className="ActiveButton inline-flex justify-center items-center bg-primary-600 rounded-full px-8 py-3 transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow">
          <Link href="./pages/energy-consumption"><span className="Text text-center text-white text-base font-medium leading-normal">Log In</span></Link>
        </div>
        <div className="PasswortVergessen justify-start items-center flex">
          <div className="PasswortVergessen underline tracking-wider">Passwort vergessen?</div>
        </div>
        <div className="Register text-center"><span className="tracking-wider">Du hast noch keinen Account? <br /></span>
          <Link className="text-zinc-600 font-semibold underline tracking-wider" href="./pages/register-household">Registriere deinen Haushalt kostenlos</Link>
        </div>
      </div>
    </div>
  )
}
