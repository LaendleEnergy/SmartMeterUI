"use client";

import Navigation from "../../components/navigation/NavBar";
import React, {PureComponent} from 'react';
import EnergyConsumptionDiagram from "../../components/diagrams/EnergyConsumptionDiagram";


const data = [
    { name: "2023-11-15T21:19:10", "Leistung in Watt": 1591 },
    { name: "2023-11-15T21:19:15", "Leistung in Watt": 1491 },
    { name: "2023-11-15T21:19:20", "Leistung in Watt": 1266 },
    { name: "2023-11-15T21:19:25", "Leistung in Watt": 1309 },
    { name: "2023-11-15T21:19:30", "Leistung in Watt": 1838 },
    { name: "2023-11-15T21:19:35", "Leistung in Watt": 1660 },
    { name: "2023-11-15T21:19:40", "Leistung in Watt": 1629 },
    { name: "2023-11-15T21:19:45", "Leistung in Watt": 1376 },
    { name: "2023-11-15T21:19:50", "Leistung in Watt": 1733 },
    { name: "2023-11-15T21:19:55", "Leistung in Watt": 1968 },
    { name: "2023-11-15T21:20:00", "Leistung in Watt": 1028 },
    { name: "2023-11-15T21:20:05", "Leistung in Watt": 1430 },
    { name: "2023-11-15T21:20:10", "Leistung in Watt": 1294 },
    { name: "2023-11-15T21:20:15", "Leistung in Watt": 1499 },
    { name: "2023-11-15T21:20:20", "Leistung in Watt": 1860 },
    { name: "2023-11-15T21:20:25", "Leistung in Watt": 1218 },
    { name: "2023-11-15T21:20:30", "Leistung in Watt": 1654 },
    { name: "2023-11-15T21:20:35", "Leistung in Watt": 1159 },
    { name: "2023-11-15T21:20:40", "Leistung in Watt": 1396 },
    { name: "2023-11-15T21:20:45", "Leistung in Watt": 1125 }
];


export default function EnergyConsumption() {
    //const [value1, onChange1] = useState<Value>(new Date());
    //const [value, onChange] = useState<Value>(new Date());
    return (
        <div className="EnergyConsumption">
            <header><Navigation /></header>
            <div className="flex flex-col justify-center items-center space-y-10 py-[10%]">
                <div className="text-4xl font-bold">Stromverbrauch</div>
                <EnergyConsumptionDiagram data1={data}/>
                <div className="w-96 h-52 bg-indigo-50 rounded-lg border-2 border-zinc-400">
                </div>
                <div className="text-2xl font-bold">Durchschnittswerte</div>
                <div className="w-96 h-52 bg-indigo-50 rounded-lg border-2 border-zinc-400" />
                <div className="text-2xl font-bold">Stromkosten</div>
                <div className="w-96 h-52 bg-indigo-50 rounded-lg border-2 border-zinc-400" />
            </div>
        </div>
    )
}