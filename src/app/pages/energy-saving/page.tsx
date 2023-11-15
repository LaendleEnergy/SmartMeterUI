import Toggle from "@/app/components/input/Toggle";
import Navigation from "../../components/navigation/NavBar";
import { FaEdit } from "react-icons/fa";
import Dropdown from "@/app/components/input/Dropdown";

export default function Home() {
  return (
    <div className="EnergySaving">
      <header><Navigation /></header>
      <div className="flex-col flex justify-center items-center space-y-10 py-[10%]">
        <div className="text-4xl font-bold">Stromsparen</div>
        <div className="space-y-6 fixed top-[15%] right-[5%]">
          <div className="inline-flex items-center fixed top-[15%] right-[5%] space-x-2">
            <span className="text-xl font-bold">Bericht erhalten ja/nein</span>
            <Toggle></Toggle>
          </div>
          <div className="w-96 h-28 border-black border-solid border-2 bg-gray-100 right-[5%] p-3">
            <span>Der Bericht beinhaltet eine Zusammenfassung von verschiedenen Informationen über den Stromverbrauch und das Stromsparen. Solch ein Bericht wird monatlich erstellt.</span>
          </div>
        </div>
        <div className="Trend">
          <div className="flex-col justify-end items-start border-2 bg-indigo-50 border-black border-solid p-4">
            <div className="text-xl font-bold justify-center items-center inline-flex space-x-4 space-y-3">
              <span>Trend positiv/ negativ</span>
              <Dropdown title="Zeitraum wählen" values={["Tag", "Monat", "Jahr"]}></Dropdown>
            </div>
          </div>
        </div>
        <div className="SavingGoal">
          <div className="flex-col justify-end items-start border-2 bg-indigo-50 border-black border-solid p-4">
            <div className="Edit w-96 h-28 justify-center items-center">
              <div className="space-y-1 inline-flex space-x-5">
                <div className="Stromsparziel text-2xl font-bold">Stromsparziel</div>
                <div className="Edit justify-center items-center inline-flex space-x-3">
                  <div className="Bearbeiten text-lg">Bearbeiten</div>
                  <FaEdit></FaEdit>
                </div>
              </div><br />
              <span className="space-y-2">Einsparung von 10% im Vergleich zum Vormonat</span>
            </div>
          </div>
        </div>
        <div className="Recommendation">
          <div className="flex-col justify-end items-start p-4 inline-flex border-2 bg-indigo-50 border-black border-solid">
            <div className="Tarifempfehlung text-2xl font-bold">Tarifempfehlung</div>
            <div className="Beschreibung w-96 h-20">
              <span>Basierend auf Ihrem Verbrauch, wird folgender Tarif empfohlen: </span>
              <span className="text-lg font-bold">VKW StromTagNacht</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}