import Navigation from "../../components/navigation/NavBar";

export default function EnergyConsumption() {
  return (
    <div className="Page w-96 h-96 relative">
      <header><Navigation /></header>
      <div className="Stromverbrauch w-96 h-96 left-[458px] top-[194px]  ">
        <div
          className="EnergyConsumption w-72 h-11 left-[188px] top-0     text-4xl font-bold  ">
          Stromverbrauch</div>
        <div
          className="AverageValues w-60 h-7 left-[213px] top-[310.67px]     text-2xl font-bold  ">
          Durchschnittswerte</div>
        <div
          className="ImagesPlaceholder w-96 h-52 left-[14px] top-[71.77px]   bg-indigo-50 rounded-lg border-2 border-zinc-400" />
        <div className="Costs w-36 h-7 left-[262px] top-[610.53px]     text-2xl font-bold  ">
          Stromkosten</div>
        <div className="Graph w-96 h-52 left-[6px] top-[661.66px]  ">
          <div className="Rectangle10 w-96 h-52 left-0 top-0   bg-indigo-50 border border-black" />
          <div className="Line3 w-96 h-px left-[32.33px] top-[158.87px]   border border-black"></div>
          <div
            className="Time w-56 h-3 left-[294.39px] top-[170.79px]   text-neutral-800 text-xl font-semibold   leading-10">
            Zeit (Tag)</div>
          <div
            className="Costs w-64 h-6 left-[0.93px] top-0   text-neutral-800 text-xl font-semibold   leading-10">
            Stromkosten (Euro)</div>
        </div>
        <div className="Graph w-96 h-60 left-0 top-[351.97px]  ">
          <div className="Rectangle10 w-96 h-60 left-0 top-0   bg-indigo-50 border border-black" />
          <div className="Line3 w-96 h-px left-[32.33px] top-[184.65px]   border border-black"></div>
          <div
            className="Time w-56 h-3.5 left-[294.39px] top-[198.51px]   text-neutral-800 text-xl font-semibold   leading-10">
            Zeit (Woche)</div>
          <div
            className="Costs w-64 h-6 left-[0.93px] top-0   text-neutral-800 text-xl font-semibold   leading-10">
            Verbrauch (kWh)</div>
        </div>
      </div>
      <div
        className="TimeframeSelect w-36 h-14 pl-3.5 pr-2.5 py-2.5 left-[962px] top-[563px]   rounded border-4 border-black justify-start items-center gap-2.5 inline-flex">
        <div className="TimeframeSelect text-zinc-600 text-base     tracking-wider">Woche</div>
      </div>
      <div
        className="Icon p-3 left-[1050px] top-[567px]   bg-white bg-opacity-0 rounded-lg justify-start items-start inline-flex">
        <div className="IconsMediumChevron2 w-6 h-6 relative" />
      </div>
      <div className="Rectangle13 w-20 h-20 left-[550px] top-[639px]   bg-blue-200" />
      <div className="Rectangle14 w-20 h-24 left-[644px] top-[625px]   bg-blue-200" />
      <div className="Rectangle15 w-20 h-11 left-[738px] top-[672px]   bg-blue-200" />
      <div className="Rectangle16 w-20 h-12 left-[832px] top-[665px]   bg-blue-200" />
      <div className="Rectangle17 w-20 h-16 left-[926px] top-[647px]   bg-blue-200" />
    </div>
  )
}