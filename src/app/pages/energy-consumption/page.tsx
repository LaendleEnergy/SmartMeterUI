import Image from 'next/image'

export default function EnergyConsumption() {
return (
<div className="Page w-96 h-96 relative">
  <div className="Stromverbrauch w-96 h-96 left-[458px] top-[194px] absolute">
    <div
      className="EnergyConsumption w-72 h-11 left-[188px] top-0 absolute text-black text-4xl font-bold font-['Inter']">
      Stromverbrauch</div>
    <div
      className="AverageValues w-60 h-7 left-[213px] top-[310.67px] absolute text-black text-2xl font-bold font-['Inter']">
      Durchschnittswerte</div>
    <div
      className="ImagesPlaceholder w-96 h-52 left-[14px] top-[71.77px] absolute bg-indigo-50 rounded-lg border-2 border-zinc-400" />
    <div className="Costs w-36 h-7 left-[262px] top-[610.53px] absolute text-black text-2xl font-bold font-['Inter']">
      Stromkosten</div>
    <div className="Graph w-96 h-52 left-[6px] top-[661.66px] absolute">
      <div className="Rectangle10 w-96 h-52 left-0 top-0 absolute bg-indigo-50 border border-black" />
      <div className="Line3 w-96 h-px left-[32.33px] top-[158.87px] absolute border border-black"></div>
      <div
        className="Time w-56 h-3 left-[294.39px] top-[170.79px] absolute text-neutral-800 text-xl font-semibold font-['Inter'] leading-10">
        Zeit (Tag)</div>
      <div
        className="Costs w-64 h-6 left-[0.93px] top-0 absolute text-neutral-800 text-xl font-semibold font-['Inter'] leading-10">
        Stromkosten (Euro)</div>
    </div>
    <div className="Graph w-96 h-60 left-0 top-[351.97px] absolute">
      <div className="Rectangle10 w-96 h-60 left-0 top-0 absolute bg-indigo-50 border border-black" />
      <div className="Line3 w-96 h-px left-[32.33px] top-[184.65px] absolute border border-black"></div>
      <div
        className="Time w-56 h-3.5 left-[294.39px] top-[198.51px] absolute text-neutral-800 text-xl font-semibold font-['Inter'] leading-10">
        Zeit (Woche)</div>
      <div
        className="Costs w-64 h-6 left-[0.93px] top-0 absolute text-neutral-800 text-xl font-semibold font-['Inter'] leading-10">
        Verbrauch (kWh)</div>
    </div>
  </div>
  <div
    className="TimeframeSelect w-36 h-14 pl-3.5 pr-2.5 py-2.5 left-[962px] top-[563px] absolute rounded border-4 border-black justify-start items-center gap-2.5 inline-flex">
    <div className="TimeframeSelect text-zinc-600 text-base font-normal font-['Inter'] tracking-wider">Woche</div>
  </div>
  <div
    className="Icon p-3 left-[1050px] top-[567px] absolute bg-white bg-opacity-0 rounded-lg justify-start items-start inline-flex">
    <div className="IconsMediumChevron2 w-6 h-6 relative" />
  </div>
  <div className="Rectangle13 w-20 h-20 left-[550px] top-[639px] absolute bg-blue-200" />
  <div className="Rectangle14 w-20 h-24 left-[644px] top-[625px] absolute bg-blue-200" />
  <div className="Rectangle15 w-20 h-11 left-[738px] top-[672px] absolute bg-blue-200" />
  <div className="Rectangle16 w-20 h-12 left-[832px] top-[665px] absolute bg-blue-200" />
  <div className="Rectangle17 w-20 h-16 left-[926px] top-[647px] absolute bg-blue-200" />
</div>
)}