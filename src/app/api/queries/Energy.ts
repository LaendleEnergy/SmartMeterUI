import { EnergyMeasurementPoint, MeasurementPeriod, Period } from "@/app/models/EnergyMeasurementPoint";
import mockGetFiveSecondValues from "../mockdata/EnergyTimeSeries"

const env = process.env.NODE_ENV

function formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
  
    const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
    return formattedDate;
  }
  

export default async function getEnergyValues(resolution: Period, startDate: Date, endDate: Date): Promise<EnergyMeasurementPoint[]> {
    console.log("fetch data", resolution, startDate, endDate);
    if (startDate > endDate) throw new Error("startdate may not be after enddate");
    let data: EnergyMeasurementPoint[] = [];

    // if(env == "development"){
    //     data = mockGetFiveSecondValues(resolution, startDate, endDate);
    // }
    // else if (env == "production"){
    //    data = await fetchData(resolution, startDate, endDate);
    // }

    data = await fetchData(resolution, startDate, endDate);
    
    return data;
}

async function fetchData(resolution: Period, startDate: Date, endDate: Date): Promise<EnergyMeasurementPoint[]> {
    const groups = (endDate.getTime() - startDate.getTime()) / 1000 / resolution;
    let data: EnergyMeasurementPoint[] = [];

    const params = new URLSearchParams({
        'startDate': formatDate(startDate),
        'endDate': formatDate(endDate),
        'numberOfGroups': groups.toString()
    });

    const url = process.env.NEXT_PUBLIC_HOST_DATACOLLECTOR + "/measurements/averaged?"
    // const url = `process.env.NEXT_PUBLIC_HOST_DATACOLLECTOR/measurements/averaged?${params}`
    // const url = "process.env.NEXT_PUBLIC_HOST_DATACOLLECTOR/measurements?startDate=2022-05-01T00:00:00&endDate=2024-06-01T00:00:00&numberOfGroups=4";
    // const url = "process.env.NEXT_PUBLIC_HOST_DATACOLLECTOR/measurements?startDate=2022-05-01T00:00:00&endDate=2024-06-01T00:00:00&numberOfGroups=4"

    const fetched = await fetch(url + params)
    .then(response => response.json());

    console.log("fetched", fetched);

    fetched.forEach((element: { deviceId: number, timeEnd: string; instantaneousActivePowerPlusWAvg: number; }) => {
        var c = new EnergyMeasurementPoint(new MeasurementPeriod(resolution, 1), new Date(element.timeEnd), element.instantaneousActivePowerPlusWAvg * resolution / 60 / 60);
        data.push(c)
    });


    return data;
}