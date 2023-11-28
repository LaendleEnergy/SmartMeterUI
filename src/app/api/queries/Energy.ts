import { EnergyMeasurementPoint, Period } from "@/app/models/EnergyMeasurementPoint";
import mockGetFiveSecondValues from "../mockdata/EnergyTimeSeries"

const env = process.env.NODE_ENV

export default function getEnergyValues(resolution: Period, startDate: Date, endDate: Date): EnergyMeasurementPoint[] {
    let data: EnergyMeasurementPoint[] = [];

    if(env == "development"){
        data = mockGetFiveSecondValues(resolution, startDate, endDate);
    }
    else if (env == "production"){
       // get data from actual api
    }
    
    return data;
}