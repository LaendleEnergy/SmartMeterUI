"use client";

import Navigation from "../../components/navigation/NavBar";
import React, {PureComponent} from 'react';
import EnergyConsumptionDiagram from "../../components/diagrams/EnergyConsumptionDiagram";
import AverageEnergyConsumptionDiagram from "@/app/components/diagrams/AverageEnergyConsumptionDiagram";
import EnergyCostsDiagram from "@/app/components/diagrams/EnergyCostsDiagram";

export default function EnergyConsumption() {
    //const [value1, onChange1] = useState<Value>(new Date());
    //const [value, onChange] = useState<Value>(new Date());
    return (
        <div className="EnergyConsumption">
            <header><Navigation /></header>
            <div className="flex flex-col justify-center items-center space-y-10">
                <div className="text-xl sm:text-2xl md:text-4xl font-bold">Stromverbrauch</div>
                <div className="w-150 h-130 bg-indigo-50 rounded-lg border-2 border-zinc-400">
                    <EnergyConsumptionDiagram/>
                </div>
                <div className="text-2xl font-bold">Durchschnittswerte</div>
                <div className="w-96 h-52 bg-indigo-50 rounded-lg border-2 border-zinc-400">
                    <AverageEnergyConsumptionDiagram />
                </div>
                <div className="text-2xl font-bold">Stromkosten</div>
                <div className="w-150 h-100 bg-indigo-50 rounded-lg border-2 border-zinc-400">
                    <EnergyCostsDiagram></EnergyCostsDiagram>
                </div>
            </div>
        </div>
    )
}