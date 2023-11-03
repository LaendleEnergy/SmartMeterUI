import Image from 'next/image';
import Link from 'next/link';
import 'tailwindcss/tailwind.css';

export default function Home() {
  const login = () => {
    console.log('Login button clicked');
  };

  return (
    <div className="Welcome w-96 h-96 bg-white flex-col justify-start items-start gap-2.5 inline-flex">
      <div className="Page w-96 h-96 relative">
        <div className="RegisterOrLogin w-96 px-12 py-20 left-[454px] top-[273px] absolute flex-col justify-start items-center gap-10 inline-flex">
          <div className="WelcomePhrase p-2.5 flex-col justify-start items-center gap-2.5 flex">
            <div className="WillkommenBeiLaendleenergy text-black text-4xl font-bold font-['Inter']">Willkommen bei LaendleEnergy!</div>
          </div>
          <div className="RegistriereDichJetztUmDenStromverbrauchDeinesHaushaltesUndDieDamitVerbundenenKostenBeobachtenUndFeedbackBerDieEnergieeffizienzDeinerGerTeErhaltenZuKNnen w-96 text-black text-lg font-normal font-['Inter']">Registriere dich jetzt, um den Stromverbrauch deines Haushaltes und die damit verbundenen Kosten beobachten und Feedback über die Energieeffizienz deiner Geräte erhalten zu können.</div>
          <div className="Email justify-start items-start inline-flex">
            <div className="Email justify-start items-start flex">
              <div className="Email w-96 h-14 pl-3.5 pr-2.5 py-2.5 rounded border-4 border-black justify-start items-center gap-2.5 flex">
                <input type="text" id="email" name="email" placeholder="Email" className="Email text-zinc-600 text-base font-normal font-['Inter'] tracking-wider"/>
              </div>
            </div>
          </div>
          <div className="Passwort justify-start items-start inline-flex">
            <div className="Passwort justify-start items-start flex">
              <div className="Passwort w-96 h-14 pl-3.5 pr-2.5 py-2.5 rounded border-4 border-black justify-start items-center gap-2.5 flex">
                <input type="password" id="password" name="password" placeholder='Passwort' className="Passwort text-zinc-600 text-base font-normal font-['Inter'] tracking-wider"/>
              </div>
            </div>
          </div>
          <div className="Login flex-col justify-start items-center gap-7 flex">
            <div className="LogIn w-96 h-14 p-2.5 rounded-lg border-4 border-black justify-center items-center gap-2.5 inline-flex">
            <Link href="/register" className="PrimaryMedium w-32 px-5 py-2 bg-gray-400 rounded-full justify-center items-center inline-flex"><span className="Text text-center text-white text-base font-medium font-['Inter'] leading-normal">Log In</span></Link>
            </div>
          </div>
          <div className="PasswortVergessen flex-col justify-start items-center gap-5 flex">
            <div className="Frame9 flex-col justify-start items-center gap-3.5 flex">
              <div className="PasswortVergessen text-black text-sm font-normal font-['Inter'] underline tracking-wider">Passwort vergessen?</div>
            </div>
          </div>
          <div className="DuHastNochKeinenAccountRegistriereDeinenHaushaltKostenlos text-center"><span className="text-zinc-600 text-xl font-normal font-['Inter'] tracking-widest">Du hast noch keinen Account? <br /></span>
            <Link className="text-zinc-600 text-xl font-semibold font-['Inter'] underline tracking-widest" href="/register">Registriere deinen Haushalt kostenlos</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
