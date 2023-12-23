import React, { useState } from "react";
import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Label,
    BarChart,
    Brush,
    Bar,
    ReferenceLine
} from "recharts";

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



type Value = ValuePiece | [ValuePiece, ValuePiece];
type ValuePiece = Date | string | null;

import Dropdown from "../input/TimeframeDropdown";
import Toggle from "@/app/components/input/Toggle";


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


interface EnergyConsumptionDiagramProps {
    data1: any;
}

export default function EnergyConsumptionDiagram({data1}: EnergyConsumptionDiagramProps) {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [barChartIsActivated, setBarChartIsActivated] = useState(true);

    function handleCheckboxChange(event: React.ChangeEvent<HTMLInputElement>) {
        setBarChartIsActivated(event.target.checked);
    }


    return (
        <div style={{ textAlignLast: "center" }}>
            <div style={{ textAlignLast: "center" }}>
                <span className="text-xl font-bold"> Aktiviere Leistungshistorie für Annotierung (ja/nein): </span>
                <br/>
                <Toggle enabled={barChartIsActivated} setEnabled={setBarChartIsActivated}></Toggle>
            </div>
            <br/>
            <br/>
            <div style={{width:"100%", display:"inline-block"}}>
                <div style={{width:"50%", display:"inline-block"}}>
                    <DatePicker
                        showTimeSelect
                        selected={startDate}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        onChange={date => {
                            if(date != null){
                                setStartDate(date)
                                }
                            }
                        }
                    />
                </div>
                <div style={{width:"50%", display:"inline-block"}}>
                    <DatePicker
                        showTimeSelect
                        selected={endDate}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                        onChange={date => {
                        if(date != null){
                            setEndDate(date)
                        }
                    }
                    }
                    />
                </div>
            </div>
            { barChartIsActivated && (<div>
                <BarChart
                    width={600}
                    height={300}
                    data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" height={50}>
                        <Label value="Zeit" dy={8}>
                            Zeit
                        </Label>
                    </XAxis>
                    <YAxis>
                        <Label angle={270} position="left" style={{ textAnchor: "middle" }}>
                            Leistung in Watt
                        </Label>
                    </YAxis>
                    <Tooltip />
                    <Legend verticalAlign="top" wrapperStyle={{ lineHeight: "40px" }} />
                    <ReferenceLine y={0} stroke="#000" />
                    <Brush dataKey="name" height={30} stroke="#007aff" />
                    <Bar dataKey="Leistung in Watt" fill="#007aff" />
                </BarChart>
            </div>) }
            <div style={{margin: "10px"}}>
                <Dropdown title={"Eigene Bezeichnung"} values={["Waschmaschine 1", "Waschmaschine 2", "Toaster", "Label hinzufügen"]}/>
                <Dropdown title={"Gerätetyp"} values={["Waschmaschine", "Toaster", "Gerätetyp hinzufügen"]}/>
            </div>
            <div style={{margin: "10px"}} className="ConfirmButton bg-primary-600 border-2 rounded-full p-3 transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow">
                <button className="Default text-sm font-medium text-white">Bezeichnung(en) hinzufügen</button>
            </div>
        </div>
    )
}


