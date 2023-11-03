import Image from 'next/image'

export default function Register() {
  return (
    <div className="Register w-96 h-96 bg-white flex-col justify-start items-start gap-2.5 inline-flex">
      <div className="Page w-96 h-96 justify-start items-start gap-96 inline-flex">
        <div className="NavigationBar w-96 bg-indigo-50 flex-col justify-start items-start gap-6 inline-flex">
          <div className="Center w-96 h-28 relative">
            <div className="Logo w-56 h-24 left-[36.22px] top-[-0px] absolute flex-col justify-start items-start gap-2.5 inline-flex">
              <Image className="Image1 w-40 h-24" src="https://via.placeholder.com/154x103" alt="placeholder" />
            </div>
            <div className="Divider w-96 h-px left-0 top-[105px] absolute bg-zinc-200" />
          </div>
        </div>
        <div className="CircleArrowLeft w-32 h-32 relative bg-white">
          <div className="Ellipse1 w-14 h-12 left-[37.62px] top-[35.58px] absolute rounded-full border-2 border-slate-900" />
        </div>
        <div className="ProgressBar w-96 h-10 relative">
          <div className="Ellipse2 w-10 h-10 left-[48px] top-0 absolute bg-sky-600 rounded-full" />
          <div className="Ellipse3 w-10 h-10 left-[411px] top-0 absolute bg-gray-400 rounded-full" />
          <div className="Line19 w-20 h-px left-[83px] top-[16.50px] absolute origin-top-left -rotate-180 border-8 border-sky-600"></div>
        </div>
        <div className="Register w-96 h-96 relative">
          <div className="Email w-96 h-14 left-0 top-[175px] absolute justify-start items-start inline-flex">
            <div className="Email justify-start items-start flex">
              <div className="Email w-96 h-14 pl-3.5 pr-2.5 py-2.5 rounded border-4 border-black justify-start items-center gap-2.5 flex">
                <div className="Email text-zinc-600 text-base font-normal font-['Inter'] tracking-wider">Email</div>
              </div>
            </div>
          </div>
          <div className="Email w-96 h-14 left-[1px] top-[93px] absolute justify-start items-start inline-flex">
            <div className="Email justify-start items-start flex">
              <div className="Email w-96 h-14 pl-3.5 pr-2.5 py-2.5 rounded border-4 border-black justify-start items-center gap-2.5 flex">
                <div className="Email text-zinc-600 text-base font-normal font-['Inter'] tracking-wider">Name</div>
              </div>
            </div>
          </div>
          <div className="Password w-96 h-14 pl-3.5 pr-2.5 py-2.5 left-0 top-[257px] absolute rounded border-4 border-black justify-start items-center gap-2.5 inline-flex">
            <div className="Password text-zinc-600 text-base font-normal font-['Inter'] tracking-wider">Passwort</div>
          </div>
          <div className="ConfirmPassword w-96 h-14 pl-3.5 pr-2.5 py-2.5 left-[1px] top-[339px] absolute rounded border-4 border-black justify-start items-center gap-2.5 inline-flex">
            <div className="Password text-zinc-600 text-base font-normal font-['Inter'] tracking-wider">Passwort wiederholen</div>
          </div>
          <div className="RegisterButton w-32 h-24 pl-0.5 pr-1.5 pt-2 pb-12 left-[263px] top-[467px] absolute justify-start items-center inline-flex">
            <div className="PrimaryMedium w-32 h-10 px-5 py-2 bg-sky-600 rounded-full justify-center items-center inline-flex">
              <div className="Default text-center text-white text-base font-medium font-['Inter'] leading-normal">Weiter</div>
            </div>
          </div>
          <div className="RegisterHousehold left-[12px] top-0 absolute text-black text-4xl font-bold font-['Inter']">Haushalt registrieren</div>
          <div className="CancelButton w-32 h-24 pl-px pr-2 pt-2 pb-12 left-0 top-[467px] absolute justify-start items-center inline-flex">
            <div className="PrimaryMedium w-32 px-5 py-2 bg-gray-400 rounded-full justify-center items-center inline-flex">
              <div className="Default text-center text-white text-base font-medium font-['Inter'] leading-normal">Abbrechen</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}