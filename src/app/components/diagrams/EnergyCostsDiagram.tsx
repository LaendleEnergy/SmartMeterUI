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
import Dropdown from "../input/Dropdown";
import React, {FormEvent, useState} from "react";
import {PacmanLoader} from "react-spinners";
import {AccumulatedMeasurementDTO} from "@/app/dto/AccumulatedMeasurementDTO";
import Select from "react-select";





export default function EnergyCostsDiagram() {

    // Initial data state
    const [barChartData, setBarChartData] = useState<{name: String, "Akkumulierte Kosten in Euro": number}[]>();

    const [isInitialized, setIsInitialized] = useState(false);

    const [endDate, setEndDate] = useState(new Date());
    let lastMonth = new Date();
    lastMonth.setMonth(lastMonth.getMonth() - 1);
    const [startDate, setStartDate] = useState(lastMonth);

    const [isLoading, setIsLoading] = useState(false);
    const [dataIsAvialable, setDataIsAvailable] = useState(false);



    const [isAlreadyFetching, setIsAlreadyFetching] = useState(false);

    function formatDateToISOString(date: Date): string {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is zero-based
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');

        const string = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
        return string;
    }

    const currentDate = new Date();
    const getMeasurementAccumulatedUrl = "http://localhost:9000/measurements/accumulated/?"
    const [selectedInterval, setInterval] = useState<string>("week");



    async function fetchMeasurementData(startDate: Date, endDate: Date, interval: String) {

        fetch(getMeasurementAccumulatedUrl + "startDate=" + formatDateToISOString(startDate)
            + "&endDate=" + formatDateToISOString(endDate) + "&interval=" + interval, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then((async res => {
            return res.json();
        })).then((res: AccumulatedMeasurementDTO[]) => {
            if(res.length == 0){
                setDataIsAvailable(false);
            }
            else{
                setDataIsAvailable(true);
            }
            return res.map((measurement: AccumulatedMeasurementDTO) => ({
                        name: (measurement.timeStart + " - " + measurement.timeEnd).replace(
                            new RegExp("T", "g"), " "
                        ),
                        "Akkumulierte Kosten in Euro": measurement.energyConsumedPriceEuro
                    }
                ));
        }).then((data) => {
            setBarChartData(data);
            setIsAlreadyFetching(false);
            setIsLoading(false);
        })
            .catch(
                //do nothing
            ).finally(() => {
            setIsAlreadyFetching(false);
        });
    }


    if(!isInitialized) {
        setIsInitialized(true);
        setIsLoading(true);
        fetchMeasurementData(startDate, endDate, selectedInterval);
    }

        return (
            <div style={{textAlign: 'center', alignItems: "center", alignContent: "center"}}>
                {!isLoading && (
                <div>
                    <div style={{margin: "1vw"}}>
                        <label><b>Ausgewaehlter Zeitraum:</b></label>
                        <div style={{width: "100%", display: "inline-block", margin: "1vw"}}>
                            <div style={{width: "50%", display: "inline-block"}}>
                                <DatePicker
                                    showTimeSelect
                                    selected={startDate}
                                    selectsStart
                                    startDate={startDate}
                                    endDate={endDate}
                                    onChange={date => {
                                        if (date != null) {
                                            setStartDate(date);
                                            if (!isAlreadyFetching) {
                                                setIsAlreadyFetching(true);
                                                fetchMeasurementData(startDate, endDate, selectedInterval);
                                            }
                                        }
                                    }
                                    }
                                />
                            </div>
                            <div style={{width: "50%", display: "inline-block"}}>
                                <DatePicker
                                    showTimeSelect
                                    selected={endDate}
                                    selectsEnd
                                    startDate={startDate}
                                    endDate={endDate}
                                    minDate={startDate}
                                    onChange={date => {
                                        if (date != null) {
                                            setEndDate(date)
                                            fetchMeasurementData(startDate, endDate, selectedInterval);
                                        } else {
                                            console.log("date is null");
                                        }
                                    }
                                    }
                                />
                            </div>
                        </div>
                    </div>
                    <div style={{margin: "1vw"}}>
                        <label><b>Ausgewaehltes Interval:</b></label>
                        <Select onChange={(selected) => {
                            setInterval(selected!.value)
                            fetchMeasurementData(startDate, endDate, selected!.value);
                        }}  defaultValue={{ value: "week", label: "Woche" }} options={[
                            { value: "day", label: "Tag" },
                            { value: "week", label: "Woche" },
                            { value: "month", label: "Monat" },
                            { value: "year", label: "Jahr" }
                        ]} />
                    </div>
                    {dataIsAvialable && (<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <BarChart
                            width={600}
                            height={300}
                            data={barChartData}
                            margin={{top: 5, right: 30, left: 20, bottom: 5}}
                        >
                            <CartesianGrid strokeDasharray="3 3"/>
                            <XAxis dataKey="name" height={50} tick={false} allowDataOverflow={true}>
                                <Label value="Zeit" dy={8}>
                                    Zeit
                                </Label>
                            </XAxis>
                            <YAxis>
                                <Label angle={270} position="left" style={{textAnchor: "middle"}}>
                                    Akkumulierte Kosten in Euro
                                </Label>
                            </YAxis>
                            <Tooltip/>
                            <Legend verticalAlign="top" wrapperStyle={{lineHeight: "40px"}}/>
                            <ReferenceLine y={0} stroke="#000"/>
                            <Bar dataKey="Akkumulierte Kosten in Euro" fill="#007aff"/>
                        </BarChart>
                    </div>)}
                    {!dataIsAvialable && (
                        <div style={{margin: "1vw"}}>
                            <div style={{margin: "1vw"}} className="w-150 h-100 bg-indigo-200 rounded-lg border-2 border-zinc-400">
                                Keine Daten fuer ausgewaehlten Zeitraum verfuegbar!
                            </div>
                        </div>
                    )}
                </div>)}
                {isLoading && (
                    <div id="pacManLoader" style={{margin: "1vw"}}>
                        <span className="line-break" style={{margin: "1vw"}}>
                            Bitte warten, wir verarbeiten deine Anfrage...<br/>
                        </span>
                        <div style={{display: "flex", justifyContent: "center", margin: "1vw"}}>
                            <PacmanLoader/>
                        </div>
                    </div>
                )}
            </div>
        )
}


