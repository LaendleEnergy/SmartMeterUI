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





export default function EnergyCostsDiagram() {

    // Initial data state
    const [barChartData, setBarChartData] = useState([
        {name: "", "Akkumulierte Kosten in Euro": 0},
        {name: "", "Akkumulierte Kosten in Euro": 0}
    ]);

    const [isInitialized, setIsInitialized] = useState(false);

    const [endDate, setEndDate] = useState(new Date(2023, 5, 1));
    const yesterday = new Date(endDate.getFullYear(), endDate.getMonth() - 1, endDate.getDate());
    const [startDate, setStartDate] = useState(yesterday);

    const [isLoading, setIsLoading] = useState(false);

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
    const [selectedInterval, setInterval] = useState<string>("day");



    async function fetchMeasurementData(startDate: Date, endDate: Date) {

        fetch(getMeasurementAccumulatedUrl + "startDate=" + formatDateToISOString(startDate)
            + "&endDate=" + formatDateToISOString(endDate) + "&interval=" + selectedInterval, {
            method: "GET"
        }).then((async res => {
            return res.json();
        })).then((res: AccumulatedMeasurementDTO[]) => {
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
        })
            .catch(
                //do nothing
            ).finally(() => {
            setIsAlreadyFetching(false);
            setIsLoading(false);
        });
    }


    if(!isInitialized) {
        setIsInitialized(true);
        setIsLoading(true);
        fetchMeasurementData(startDate, endDate);
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
                                                fetchMeasurementData(startDate, endDate);
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
                                            fetchMeasurementData(startDate, endDate);
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
                        <Dropdown handleInput={(input: string) => {
                            switch (input) {
                                case 'Tag':
                                    setInterval("day");
                                    break;
                                case 'Woche':
                                    setInterval("week");
                                    break;
                                case 'Monat':
                                    setInterval("month");
                                    break;
                                case 'Jahr':
                                    setInterval("year");
                                    break;
                                default:
                                    setInterval("week");
                                    break;
                            }
                        }} value="Woche" values={["Tag", "Woche", "Monat", "Jahr"]}></Dropdown>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
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
                    </div>
                </div>)}
                {isLoading && (
                    <div id="pacManLoader" style={{textAlign: "center"}}>
                    <span className="line-break">
                        Bitte warten, wir verarbeiten deine Anfrage...
                    </span>
                        <PacmanLoader/>
                    </div>
                )}
            </div>
        )
}


