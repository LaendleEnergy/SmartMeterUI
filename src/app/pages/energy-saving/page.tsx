import Navigation from "../../components/navigation/NavBar";

export default function Home() {
  return (
    <div className="EnergySaving w-96 h-96 bg-white flex-col justify-start items-start gap-2.5 inline-flex">
      <header><Navigation /></header>
      <div className="Page w-96 h-96 relative">
        <div className="Rectangle20 w-72 h-36 left-[1299px] top-[271px]   bg-gray-300 bg-opacity-40 border border-black" />

        <div className="EnergySaving w-96 h-96 left-[410px] top-[140px]  ">
          <div className="EnergySavings left-[227px] top-[5px]     text-4xl font-bold  ">Stromsparen</div>
          <div className="ReportYesNo left-[880px] top-0     text-2xl font-bold  ">Bericht erhalten ja/nein</div>
          <div className="Toggle w-36 h-16 p-5 left-[949px] top-[40px]   rounded border border-violet-500 justify-start items-start gap-5 inline-flex">
            <div className="StateOff w-10 h-6 relative">
              <div className="Rectangle w-10 h-6 left-0 top-0   bg-gray-400 rounded-full" />
              <div className="Ellipse w-5 h-5 left-[1.50px] top-[1.50px]   bg-white rounded-full shadow" />
            </div>
            <div className="StateOn w-10 h-6 relative">
              <div className="Rectangle w-10 h-6 left-0 top-0   bg-primary-600 rounded-3xl" />
              <div className="Ellipse w-5 h-5 left-[16.50px] top-[1.50px]   bg-white rounded-full shadow" />
            </div>
          </div>
          <div className="Recommendation w-96 h-40 left-0 top-[687px]  ">
            <div className="Rectangle7 w-96 h-32 left-0 top-0   bg-indigo-50 border-2 border-black" />
            <div className="Frame14 w-96 h-32 pr-32 left-[19px] top-[20px]   flex-col justify-end items-start gap-4 inline-flex">
              <div className="Tarifempfehlung   text-2xl font-bold  ">Tarifempfehlung</div>
              <div className="Beschreibung w-96 h-28"><span className="  text-2xl    ">Basierend auf Ihrem Verbrauch, wird folgender Tarif empfohlen: <br /></span><span className="  text-2xl font-bold  ">VKW StromTagNacht</span></div>
            </div>
          </div>
          <div className="SavingGoal w-96 h-44 left-0 top-[527px]  ">
            <div className="Rectangle8 w-96 h-32 left-0 top-0   bg-indigo-50 border-2 border-black" />
            <div className="Frame15 w-96 h-40 left-[7px] top-[16px]   flex-col justify-start items-start inline-flex">
              <div className="Edit w-36 h-12 justify-center items-center inline-flex">
                <div className="Bearbeiten   text-xl    ">Bearbeiten</div>
                <div className="Icon w-12 h-12 p-3 bg-indigo-50 rounded-lg justify-start items-start inline-flex">
                  <div className="IconsMediumEdit w-6 h-6 relative">
                    <div className="IconGrid w-6 h-6 left-0 top-0  " />
                    <div className="Rotate origin-top-left rotate-45 w-1 h-5 left-[17.66px] top-[3.51px]  ">
                    </div>
                  </div>
                </div>
              </div>
              <div className="Stromsparziel   text-2xl font-bold  ">Stromsparziel</div>
              <div className="EinsparungVon10ImVergleichZumVormonat w-96 h-28   text-2xl    ">Einsparung von 10% im Vergleich zum Vormonat</div>
            </div>
          </div>
          <div className="Trend w-96 h-96 left-0 top-[82px]  ">
            <div className="Rectangle9 w-96 h-96 left-0 top-0   bg-indigo-50 border-2 border-black" />
            <div className="Frame16 w-96 h-96 left-[17px] top-[37px]  ">
              <div className="Rectangle3 w-20 h-32 left-[42px] top-[132px]   bg-blue-200" />
              <div className="Rectangle4 w-20 h-28 left-[140px] top-[152px]   bg-blue-200" />
              <div className="Rectangle5 w-20 h-24 left-[238px] top-[169px]   bg-blue-200" />
              <div className="Rectangle6 w-20 h-20 left-[336px] top-[184px]   bg-lime-600" />
              <div className="Line7 w-6 h-px left-[339px] top-[203px]   origin-top-left rotate-[-36.38deg] border border-black"></div>
              <div className="Line14 w-16 h-px left-[358px] top-[263px]   origin-top-left rotate-[-36.50deg] border border-black"></div>
              <div className="Line8 w-10 h-px left-[377px] top-[263px]   origin-top-left rotate-[-39.99deg] border border-black"></div>
              <div className="Line9 w-14 h-px left-[339px] top-[220px]   origin-top-left rotate-[-36.43deg] border border-black"></div>
              <div className="Line11 w-20 h-px left-[339px] top-[234px]   origin-top-left rotate-[-36.87deg] border border-black"></div>
              <div className="Line12 w-20 h-px left-[340px] top-[249px]   origin-top-left rotate-[-37.93deg] border border-black"></div>
              <div className="Line13 w-20 h-px left-[340px] top-[263px]   origin-top-left rotate-[-37.41deg] border border-black"></div>
              <div className="Line10 w-3.5 h-px left-[397px] top-[263px]   origin-top-left rotate-[-42.27deg] border border-black"></div>
              <div className="Line15 w-48 h-px left-[10px] top-[74px]   origin-top-left rotate-[89.70deg] border border-black"></div>
              <div className="Line16 w-96 h-px left-[10px] top-[266px]   border border-black"></div>
              <div className="Line17 w-96 h-px left-[19px] top-[178px]   border-2 border-black"></div>
              <div className="VerbrauchKwh w-32 h-6 left-[11px] top-[38px]     text-xl    ">Verbrauch (kWh)</div>
              <div className="Icon p-3 left-[624px] top-[43px]   bg-indigo-50 rounded-lg justify-start items-start inline-flex">
                <div className="IconsMediumChevron2 w-6 h-6 relative" />
              </div>
            </div>
            <div className="Jahr w-24 h-7 left-[214px] top-[358px]     text-xl    ">Jahr</div>
            <div className="Stromsparziel w-40 h-7 left-[477px] top-[245.74px]     text-xl    ">Stromsparziel</div>
            <div className=" w-24 h-7 left-[369px] top-[318px]     text-xl    ">2023</div>
            <div className=" w-24 h-7 left-[262px] top-[318px]     text-xl    ">2022</div>
            <div className=" w-24 h-7 left-[165px] top-[318px]     text-xl    ">2021</div>
            <div className=" w-24 h-7 left-[68px] top-[318px]     text-xl    ">2020</div>
            <div className="TimeframeSelect w-80 h-20 left-[299px] top-[75px]   justify-start items-start inline-flex">
              <div className="TimeframeSelect w-96 h-14 pl-3.5 pr-2.5 py-2.5 rounded border-4 border-black justify-start items-center gap-2.5 flex">
                <div className="TimeframeSelect text-zinc-600 text-base     tracking-wider">Zeitraum (Tag/ Woche/ Monat/ Jahr)</div>
              </div>
            </div>
            <div className="TrendPositivNegativ w-64 h-9 left-[21px] top-[37px]     text-2xl font-bold  ">Trend positiv/ negativ</div>
          </div>
        </div>
        <div className="DerBerichtBeinhaltetEineZusammenfassungVonVerschiedenenInformationenBerDenStromverbrauchUndDasStromsparenSolchEinBerichtWirdMonatlichErstellt w-64 h-40 left-[1302px] top-[282px]   text-center   text-base     tracking-wider">Der Bericht beinhaltet eine Zusammenfassung von verschiedenen Informationen über den Stromverbrauch und das Stromsparen. Solch ein Bericht wird monatlich erstellt.</div>
      </div>
    </div>
  )
}