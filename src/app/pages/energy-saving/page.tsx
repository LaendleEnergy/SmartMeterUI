"use client";

import Toggle from "@/app/components/input/Toggle";
import Navigation from "../../components/navigation/NavBar";
import { FaEdit } from "react-icons/fa";
import Dropdown from "@/app/components/input/Dropdown";
import { useState } from "react";

export default function EnergySaving() {
  const [enabled, setEnabled] = useState(true);

  return (
    <div className="EnergySaving">
      <header><Navigation /></header>
      <div className="flex-col flex justify-center items-center space-y-8">
        <div className="text-xl sm:text-2xl md:text-4xl font-bold">Stromsparen</div>
        <div className="flex-col space-y-6 xl:fixed xl:top-[15%] xl:right-[5%] justify-center items-center w-72 sm:w-96 h-28 mb-6">
          <div className="justify-end items-start p-4 border-2 bg-indigo-50 border-black border-solid">
            <div className="inline-flex space-x-2">
              <span className="text-base sm:text-lg font-bold">Bericht erhalten ja/nein</span>
              <Toggle setEnabled={setEnabled} enabled={enabled}></Toggle>
            </div><br />
            <span className="text-sm">Der Bericht beinhaltet eine Zusammenfassung von verschiedenen Informationen über den Stromverbrauch und das Stromsparen. Solch ein Bericht wird monatlich erstellt.</span>
          </div>
        </div>
        <div className="Trend">
          <div className="flex-col justify-end items-start p-4 inline-flex border-2 bg-indigo-50 border-black border-solid w-72 sm:w-96 h-28">
            <div className="text-base sm:text-lg font-bold justify-center items-center inline-flex space-x-4 space-y-3">
              <span>Trend positiv/ negativ</span>
              <Dropdown title="Zeitraum wählen" values={["Tag", "Monat", "Jahr"]}></Dropdown>
            </div>
          </div>
        </div>
        <div className="SavingGoal">
          <div className="flex-col justify-end items-start border-2 bg-indigo-50 border-black border-solid p-4">
            <div className="Edit w-72 sm:w-96 h-28 justify-center items-center">
              <div className="space-y-2">
                <div className="text-base sm:text-lg font-bold">Dein Stromsparziel</div>
                <span className="text-sm sm:text-base space-y-2">Einsparung von 10% im Vergleich zum Vormonat</span>
              </div>
            </div>
          </div>
        </div>
        <div className="Recommendation">
          <div className="flex-col justify-end items-start p-4 border-2 bg-indigo-50 border-black border-solid">
            <div className="Tarifempfehlung text-base sm:text-lg font-bold">Tarifempfehlung</div>
            <div className="Beschreibung w-72 sm:w-96 h-28 justify-center items-center">
              <span className="text-sm sm:text-base">Basierend auf Ihrem Verbrauch, wird folgender Tarif empfohlen: </span>
              <span className="text-base sm:text-lg font-bold">VKW StromTagNacht</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}