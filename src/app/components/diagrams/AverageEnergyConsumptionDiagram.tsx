import getEnergyValues from '@/app/api/queries/Energy';
import { Period } from '@/app/models/EnergyMeasurementPoint';
import { XAxis, ResponsiveContainer, BarChart, Bar } from 'recharts';

// as long as there is no dropdown to select period, lets just fetch data
// from the last seven days here for now
let startDate = new Date();
let endDate = new Date();
startDate.setDate(startDate.getDate() - 7);
console.log("dates", startDate, endDate);

const data = getEnergyValues(Period.DAY, startDate, endDate);


export const AverageEnergyConsumptionDiagram = () => {
    return <>
        <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
                <Bar type="monotone" dataKey="averageEnergyForPeriod_ws" fill="#007aff" />
                <XAxis dataKey="untilDayShortName" />
            </BarChart>
        </ResponsiveContainer>
    </>
}