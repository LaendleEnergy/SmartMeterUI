import Image from 'next/image'

export default function Register2() {
  return (
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
        <div className="Ellipse2 w-10 h-10 left-[79px] top-0 absolute bg-sky-600 rounded-full" />
      </div>
      <div className="CompleteProfil w-96 h-96 relative">
        <div className="NumberOfPeople w-96 h-14 left-0 top-[140px] absolute" />
        <div className="Tarif w-96 h-14 left-[1px] top-[194px] absolute justify-start items-start inline-flex">
          <div className="Stromtarif w-96 h-14 pl-3.5 pr-2.5 py-2.5 rounded border-4 border-black justify-start items-center gap-2.5 flex">
            <div className="Stromtarif text-zinc-600 text-base font-normal font-['Inter'] tracking-wider">Aktueller Stromtarif</div>
          </div>
        </div>
        <div className="Tarif w-96 h-14 left-[1px] top-[102px] absolute justify-start items-start inline-flex">
          <div className="Stromtarif w-96 h-14 pl-3.5 pr-2.5 py-2.5 rounded border-4 border-black justify-start items-center gap-2.5 flex">
            <div className="Stromtarif text-zinc-600 text-base font-normal font-['Inter'] tracking-wider">Stromanbieter</div>
          </div>
        </div>
        <div className="Icon w-12 h-12 p-3 left-[338px] top-[198px] absolute bg-white rounded-lg justify-start items-start inline-flex">
          <div className="IconsMediumChevron2 w-6 h-6 relative" />
        </div>
        <div className="Icon w-12 h-12 p-3 left-[338px] top-[198px] absolute bg-white rounded-lg justify-start items-start inline-flex">
          <div className="IconsMediumChevron2 w-6 h-6 relative" />
        </div>
        <div className="MeterNumbers w-96 h-14 pl-3.5 pr-2.5 py-2.5 left-0 top-[284px] absolute rounded border-4 border-black justify-start items-center gap-2.5 inline-flex">
          <div className="Zaehlernummern text-zinc-600 text-base font-normal font-['Inter'] tracking-wider">Zählernummer</div>
        </div>
        <div className="CancelButton w-32 h-24 pl-px pr-2 pt-2 pb-12 left-0 top-[440px] absolute justify-start items-center inline-flex">
          <div className="PrimaryMedium w-32 px-5 py-2 bg-gray-400 rounded-full justify-center items-center inline-flex">
            <div className="Default text-center text-white text-base font-medium font-['Inter'] leading-normal">Abbrechen</div>
          </div>
        </div>
        <div className="ConfirmButton w-32 h-24 pt-2 pb-12 left-[244px] top-[440px] absolute justify-center items-center inline-flex">
          <div className="PrimaryMedium w-32 px-5 py-2 bg-sky-600 rounded-full justify-center items-center inline-flex">
            <div className="Default text-center text-white text-base font-medium font-['Inter'] leading-normal">Registrieren</div>
          </div>
        </div>
        <div className="CompleteProfile left-[6px] top-0 absolute text-black text-4xl font-bold font-['Inter']">Haushalt registrieren</div>
      </div>
      <div className="IconsMediumChevron2 w-6 h-6 relative" />
    </div>
  )
}