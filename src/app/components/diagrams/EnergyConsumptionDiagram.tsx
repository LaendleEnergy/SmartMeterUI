'use client';

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


import Toggle from "@/app/components/input/Toggle";
import Creatable from "react-select/creatable";
import Select from "react-select";
import React, {FormEvent, useEffect, useState} from "react";
import { MeasurementDTO } from "@/app/dto/MeasurementDTO";
import {AverageMeasurementDTO} from "@/app/dto/AveragedMeasurementDTO";
import {DeviceCategoryDTO} from "@/app/dto/DeviceCategoryDTO";
import {TagDto} from "@/app/dto/TagDTO";
import {PacmanLoader} from "react-spinners";
import ErrorAlert from "@/app/components/alerts/ErrorAlert";
import SuccessAlert from "@/app/components/alerts/SuccessAlert";





export default function EnergyConsumptionDiagram() {

    // Initial data state
    const [barChartData, setBarChartData] = useState<{name: string, "Durchschnittliche Leistung in Watt": number}[]>();

    const [submitIsPossible, setSubmitIsPossible] = useState<boolean>(true);
    const [submitHasFailed, setSubmitHasFailed] = useState<boolean>(false);
    const [submitSucceeded, setSubmitSucceeded] = useState<boolean>(false);

    const [averagedMeasurements, setAveragedMeasurements] = useState<AverageMeasurementDTO[]>([]);

    const [isInitialized, setIsInitialized] = useState(false);

    const [optionsLabel, setOptionsLabel] = useState<{value: string, label: string}[]>();

    const [optionsDeviceCategory, setOptionsDeviceCategory] = useState<{value: string, label: string}[]>();



    const [endDate, setEndDate] = useState(new Date());
    const startDate1 = new Date(endDate);
    startDate1.setHours(startDate1.getHours() - 1);
    const [startDate, setStartDate] = useState(startDate1);

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
    const formattedDate = formatDateToISOString(currentDate);


    const getMeasurementAveragedUrl = process.env.NEXT_PUBLIC_HOST_DATACOLLECTOR + "/measurements/averaged/?"
    const getTagNamesUrl = process.env.NEXT_PUBLIC_HOST_DATACOLLECTOR + "/measurements/tags/names/all"
    const getDeviceCategoriesUrl = process.env.NEXT_PUBLIC_HOST_DATACOLLECTOR + "/deviceCategories/all"
    const labellingFormUrl = process.env.NEXT_PUBLIC_HOST_DATACOLLECTOR + "/measurements/tags"


    const [barChartIsActivated, setBarChartIsActivated] = useState(true);
    const [selectedBrushDateRange, setBrushDateRange] = useState<{startIndex: number, endIndex: number}>();
    const [selectedDeviceCategory, setDeviceCategory] = useState<string>();
    const [selectedLabel, setLabel] = useState<string>();

    const handleBrushChange = (data: any) => {
        setBrushDateRange({startIndex: data.startIndex, endIndex: data.endIndex});
    };

    function handleCheckboxChange(event: React.ChangeEvent<HTMLInputElement>) {
        setBarChartIsActivated(event.target.checked);
    }


    async function fetchDeviceCategories() {
        fetch(getDeviceCategoriesUrl, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then((async res => {
            return res.json();
        })).then((res: DeviceCategoryDTO[]) => {
            return res.map(d => (
                    {
                        value: d.name, label: d.name
                    }
                )
            );
        }).then((data) => {
            setOptionsDeviceCategory(data);
            setIsLoading(false);
        }).catch(
            //do nothing
        );
    }

    async function fetchTagNames() {
        fetch(getTagNamesUrl, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then((async res => {
            return res.json();
        })).then((res: string[]) => {
            return res.map(n => (
                    {
                        value: n, label: n
                    }
                )
            );
        }).then((data) => {
            setOptionsLabel(data);
        }).catch(
            //do nothing
        );
    }

    async function fetchMeasurementData(startDate: Date, endDate: Date) {

        fetch(getMeasurementAveragedUrl + "startDate=" + formatDateToISOString(startDate)
            + "&endDate=" + formatDateToISOString(endDate) + "&numberOfGroups=100", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then((async res => {
            return res.json();
        })).then((res: AverageMeasurementDTO[]) => {
            if(res.length == 0){
                setDataIsAvailable(false);
            }
            else{
                setDataIsAvailable(true);
                setBrushDateRange({startIndex: 0 , endIndex: res.length - 1})
            }
            setAveragedMeasurements(res);
            return res.map((measurement: AverageMeasurementDTO) => ({
                        name: (measurement.timeStart + " - " + measurement.timeEnd).replace(
                            new RegExp("T", "g"), " "
                        ),
                        "Durchschnittliche Leistung in Watt": measurement.instantaneousActivePowerPlusWAvg
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
        });
    }


    async function submitLabellingData(){
        if (selectedBrushDateRange === undefined || selectedLabel === undefined || selectedDeviceCategory === undefined){
            //alert("Du musst einen validen Zeitbereich auswählen und bezeichnen!")
            setSubmitIsPossible(false);
            return;
        }
        setSubmitIsPossible(true);
        setIsLoading(true);
        let pacManLoader = document.getElementById('myDiv');
        if (pacManLoader) {
            pacManLoader.focus();
        }
        fetch(labellingFormUrl, {
            method: "POST",
            headers: {'content-type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                },
            body: JSON.stringify(
                new TagDto(
                    averagedMeasurements[selectedBrushDateRange.startIndex].timeStart,
                    averagedMeasurements[selectedBrushDateRange.endIndex].timeEnd,
                    selectedLabel, selectedDeviceCategory
                )
            ),
        }).then((res) => {
            if(res.ok){
                //alert("Daten erfolgreich beschrieben!");
                setSubmitSucceeded(true);
                setSubmitIsPossible(true);
                setSubmitHasFailed(false);
            }
            else{
                //alert("Fehler beim Senden der Daten!")
                setSubmitHasFailed(true);
            }
        }).finally(() => {setIsLoading(false)});
    }


    useEffect(() => {
        if(!isInitialized) {
            setIsInitialized(true);
            setIsLoading(true);
            //fetch for initialization
            fetchMeasurementData(startDate, endDate);
            fetchTagNames();
            fetchDeviceCategories();
        }
    }, [isInitialized, startDate, endDate, fetchMeasurementData, fetchTagNames, fetchDeviceCategories]);


        return (
            <div>
                {!isLoading && (
                <div style={{textAlignLast: "center", margin: "1vw"}}>
                    <div style={{textAlignLast: "center"}}>
                        <span className="text-xl font-bold"> Aktiviere Leistungshistorie für Annotierung (ja/nein): </span>
                        <br/>
                        <Toggle enabled={barChartIsActivated} setEnabled={setBarChartIsActivated}></Toggle>
                    </div>
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
                    {barChartIsActivated && (<div>
                        {dataIsAvialable && (<div>
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
                                        Durchschnittliche Leistung in Watt
                                    </Label>
                                </YAxis>
                                <Tooltip/>
                                <Legend verticalAlign="top" wrapperStyle={{lineHeight: "40px"}}/>
                                <ReferenceLine y={0} stroke="#000"/>
                                <Brush dataKey="name" height={30} stroke="#007aff" tickFormatter={(value) => ""}
                                       onChange={handleBrushChange}/>
                                <Bar dataKey="Durchschnittliche Leistung in Watt" fill="#007aff"/>
                            </BarChart>
                        </div>)}
                        {!dataIsAvialable && (<div>
                            <div className="w-150 h-100 bg-indigo-200 rounded-lg border-2 border-zinc-400">
                                Keine Daten für den ausgewählten Zeitraum verfügbar!
                            </div>
                        </div>)}
                    </div>)}
                    <div style={{margin: "10px"}}>
                        Eigene Bezeichnung:
                        <Creatable
                            options={optionsLabel} onChange={selected => setLabel(selected?.value)}
                        />
                        Gerätetyp:
                        <Select onChange={selected => setDeviceCategory(selected?.value)} options={optionsDeviceCategory}/>
                    </div>
                    <div>
                        <div style={{margin: "10px"}}
                             className="ConfirmButton bg-primary-600 border-2 rounded-full p-3 transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow">
                            <button onClick={submitLabellingData} className="Default text-sm font-medium text-white">Bezeichnung hinzufügen</button>
                        </div>
                        {!submitIsPossible && (ErrorAlert({message: "Du musst einen validen Zeitbereich auswählen und bezeichnen!"}))}
                        {submitSucceeded && (SuccessAlert({message: "Daten erfolgreich beschrieben!"}))}
                        {submitHasFailed && (ErrorAlert({message: "Fehler beim Senden der Daten!"}))}
                    </div>

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


