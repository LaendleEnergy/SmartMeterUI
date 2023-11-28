import getEnergyValues from '@/app/api/queries/Energy';
import { EnergyMeasurementPoint, Period } from '@/app/models/EnergyMeasurementPoint';
import { XAxis, ResponsiveContainer, BarChart, Bar, YAxis, Tooltip, Legend } from 'recharts';

function mapkWsTokWh(measurementPoint: EnergyMeasurementPoint): EnergyMeasurementPoint {
    return new EnergyMeasurementPoint(
        measurementPoint.measurementPeriod,
        measurementPoint.until,
        measurementPoint.averageEnergyForPeriod_ws / (60 * 60),
    );
}

// as long as there is no dropdown to select period, lets just fetch data
// from the last seven days here for now
let startDate = new Date();
let endDate = new Date();
startDate.setDate(startDate.getDate() - 7);
console.log("dates", startDate, endDate);

const data = getEnergyValues(Period.DAY, startDate, endDate).map(mapkWsTokWh);

export const AverageEnergyConsumptionDiagram = () => {
    return <>
        <h1>Verbrauch (kwh)</h1>
        <ResponsiveContainer width="100%" height="90%">
            <BarChart data={data}>
                <Bar type="monotone" dataKey="averageEnergyForPeriod_ws" name='Verbrach (kWh)'  fill="#007aff" />
                <XAxis dataKey="untilDayShortName" />
                <YAxis />
                <Tooltip />
            </BarChart>
        </ResponsiveContainer>
    </>
}