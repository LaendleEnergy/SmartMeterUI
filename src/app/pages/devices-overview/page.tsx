import Navigation from "../../components/navigation/NavBar";

export default function DeviceOverview() {
    return (
        <div className="DevicesOverview w-96 h-96 bg-white flex-col justify-start items-start gap-2.5 inline-flex">
            <header><Navigation /></header>
            <div className="Page w-96 h-96 relative">
                <div className="Trend w-96 h-96 left-[428px] top-[391px]  ">
                    <div className="Rectangle9 w-96 h-96 left-0 top-0   bg-indigo-50 border-2 border-black"></div>
                    <div className="Frame16 w-96 h-96 left-[17px] top-[37px]  ">
                        <div className="Rectangle3 w-20 h-36 left-[81px] top-[124px]   bg-blue-200"></div>
                        <div className="Rectangle4 w-20 h-11 left-[276px] top-[221px]   bg-blue-200"></div>
                        <div className="Line15 w-48 h-px left-[10px] top-[74px]   origin-top-left rotate-[89.70deg] border border-black"></div>
                        <div className="Line16 w-96 h-px left-[10px] top-[266px]   border border-black"></div>
                        <div className="Line17 w-96 h-px left-[10px] top-[219px]   border-2 border-black"></div>
                        <div className="VerbrauchKwh w-32 h-6 left-[11px] top-[38px]     text-xl    ">Verbrauch (kWh)</div>
                        <div className="Icon p-3 left-[608px] top-[-8px]   bg-indigo-50 rounded-lg justify-start items-start inline-flex">
                            <div className="IconsMediumChevron2 w-6 h-6 relative"></div>
                        </div>
                        <div className="KwhJahr w-14 h-8 left-[284px] top-[74px]     text-sm    ">100 kWh<br />(Jahr)</div>
                        <div className="KwhJahr w-14 h-8 left-[89px] top-[74px]     text-sm    ">300 kWh<br />(Jahr)</div>
                        <div className="Rectangle12 w-64 h-28 left-[455px] top-[150px]   bg-zinc-300 bg-opacity-0 border border-black"></div>
                    </div>
                    <div className="GerT w-24 h-7 left-[214px] top-[358px]     text-xl    ">Gerät</div>
                    <div className="FazitDeinGerTVerbraucht200KwhJahrMehrAlsVergleichbareGerTe w-60 h-24 left-[483px] top-[195px]  "><span className="  text-lg font-bold  ">Fazit:<br /></span><span className="  text-lg    ">Dein Gerät verbraucht 200 kWh (Jahr) mehr als vergleichbare Geräte.</span></div>
                    <div className="Durchschnitt w-32 h-7 left-[277px] top-[318px]     text-xl    ">Durchschnitt</div>
                    <div className="DeinGerT w-36 h-7 left-[89px] top-[318px]     text-xl    ">Dein Gerät</div>
                    <div className="EnergieeffizienzVon w-96 h-9 left-[21px] top-[37px]     text-2xl font-bold  ">Energieeffizienz von:</div>
                    <div className="DevicesSelect w-64 h-14 left-[283px] top-[25px]   justify-start items-start inline-flex">
                        <div className="DevicesSelect w-96 h-14 pl-3.5 pr-2.5 py-2.5 rounded border-4 border-black justify-start items-center gap-2.5 flex">
                            <div className="DevicesSelect text-zinc-600 text-base     tracking-wider">Kühlschrank</div>
                        </div>
                    </div>
                </div>
                <div className="Devices w-32 h-10 left-[733px] top-[131px]     text-4xl font-bold  ">Geräte</div>
                <div className="PActiveButton w-42 px-8 py-4 bg-primary-600 rounded-full justify-center items-center flex">
                    <div className="Default text-center text-white text-xl font-medium   leading-normal">Geräte verwalten</div>
                </div>
                <div className="DeviceOverview w-96 h-36 left-[428px] top-[209px]  ">
                    <div className="Rectangle19 w-96 h-36 left-0 top-0   bg-gray-300 bg-opacity-40 border border-black"></div>
                    <div className="KHlschrank200KwhJahrMehrAlsDurchschnitt left-[39px] top-[71px]     text-lg    ">Kühlschrank (200 kWh (Jahr) <br />mehr als Durchschnitt)</div>
                    <div className="SchlechtesteEnergieineffizienz left-[39px] top-[27px]     text-lg font-bold  ">Schlechteste Energieineffizienz</div>
                </div>
                <div className="DeviceOverview w-96 h-36 left-[807px] top-[209px]  ">
                    <div className="Rectangle19 w-96 h-36 left-0 top-0   bg-gray-300 bg-opacity-40 border border-black"></div>
                    <div className="HaarfHn300KwhJahrMehrAlsDurchschnitt left-[39px] top-[71px]     text-lg    ">Haarföhn (300 kWh (Jahr) <br />mehr als Durchschnitt)</div>
                    <div className="ZweitSchlechtesteEnergieeffizienz left-[18px] top-[27px]     text-lg font-bold  ">Zweit-schlechteste Energieeffizienz</div>
                </div>
            </div>
        </div>
    )
}