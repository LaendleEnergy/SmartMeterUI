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
import Toggle from "@/app/components/input/Toggle";
import Creatable from "react-select/creatable";
import Select from "react-select";
import React, {FormEvent, useState} from "react";
import { MeasurementDTO } from "@/app/dto/MeasurementDTO";
import {AverageMeasurementDTO} from "@/app/dto/AveragedMeasurementDTO";
import {DeviceCategoryDTO} from "@/app/dto/DeviceCategoryDTO";
import {TagDto} from "@/app/dto/TagDTO";
import {PacmanLoader} from "react-spinners";



interface EnergyConsumptionDiagramProps {
    data1: any;
}

export default function EnergyConsumptionDiagram({data1}: EnergyConsumptionDiagramProps) {

    // Initial data state
    const [barChartData, setBarChartData] = useState([
        {name: "", "Durchschnittliche Leistung in Watt": 0},
        {name: "", "Durchschnittliche Leistung in Watt": 0}
    ]);

    const [averagedMeasurements, setAveragedMeasurements] = useState<AverageMeasurementDTO[]>([]);

    const [isInitialized, setIsInitialized] = useState(false);

    const [optionsLabel, setOptionsLabel] = useState(
        [
            {value: "Stub Value", label: "Stub Label"},
        ]
    );

    const [optionsDeviceCategory, setOptionsDeviceCategory] = useState(
        [
            {value: "Stub Value", label: "Stub Label"}
        ]
    )



    const [endDate, setEndDate] = useState(new Date());
    const startDate1 = new Date(endDate);
    startDate1.setHours(startDate1.getHours() - 1);
    const [startDate, setStartDate] = useState(startDate1);

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
    const formattedDate = formatDateToISOString(currentDate);


    const getMeasurementAveragedUrl = "http://localhost:8080/measurements/averaged/?"
    const getTagNamesUrl = "http://localhost:8080/measurements/tags/names/all"
    const getDeviceCategoriesUrl = "http://localhost:8080/deviceCategories/all"
    const labellingFormUrl = "http://localhost:8080/measurements/tags"


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
            method: "GET"
        }).then((async res => {
            return res.json();
        })).then((res: DeviceCategoryDTO[]) => {
            return res.map(d => (
                    {
                        value: d.name, label: d.description
                    }
                )
            );
        }).then((data) => {
            setOptionsDeviceCategory(data);
        }).catch(
            //do nothing
        );
    }

    async function fetchTagNames() {
        fetch(getTagNamesUrl, {
            method: "GET"
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
            method: "GET"
        }).then((async res => {
            return res.json();
        })).then((res: AverageMeasurementDTO[]) => {
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
            alert("Du musst einen validen Zeitbereich auswählen und bezeichnen!")
            return;
        }

        setIsLoading(true);
        let pacManLoader = document.getElementById('myDiv');
        if (pacManLoader) {
            pacManLoader.focus();
        }
        fetch(labellingFormUrl, {
            method: "POST",
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(
                new TagDto(
                    averagedMeasurements[selectedBrushDateRange.startIndex].timeStart,
                    averagedMeasurements[selectedBrushDateRange.endIndex].timeEnd,
                    selectedLabel, selectedDeviceCategory
                )
            ),
        }).then((res) => {
            if(res.ok){
                alert("Daten erfolgreich beschrieben!");
            }
            else{
                alert("Fehler beim Senden der Daten!")
            }
        }).finally(() => {setIsLoading(false)});
    }


    if(!isInitialized) {
        setIsInitialized(true);
        //fetch for initialization
        //fetchMeasurementData(startDate, endDate);
        fetchTagNames();
        fetchDeviceCategories();
    }




        return (
            <div>
                {!isLoading && (
                <div style={{textAlignLast: "center"}}>
                    <div style={{textAlignLast: "center"}}>
                        <span className="text-xl font-bold"> Aktiviere Leistungshistorie für Annotierung (ja/nein): </span>
                        <br/>
                        <Toggle enabled={barChartIsActivated} setEnabled={setBarChartIsActivated}></Toggle>
                    </div>
                    <br/>
                    <br/>
                    <div style={{width: "100%", display: "inline-block"}}>
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
                    <div style={{margin: "10px"}}>
                        Eigene Bezeichnung:
                        <Creatable
                            options={optionsLabel} onChange={selected => setLabel(selected?.value)}
                        />
                        Gerätetyp:
                        <Select onChange={selected => setDeviceCategory(selected?.value)} options={optionsDeviceCategory}/>
                    </div>
                    <div style={{margin: "10px"}}
                         className="ConfirmButton bg-primary-600 border-2 rounded-full p-3 transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow">
                        <button onClick={submitLabellingData} className="Default text-sm font-medium text-white">Bezeichnung hinzufügen</button>
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


