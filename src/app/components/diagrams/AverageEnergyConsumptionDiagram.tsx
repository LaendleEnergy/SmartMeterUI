import getEnergyValues from '@/app/api/queries/Energy';
import { EnergyMeasurementPoint, Period } from '@/app/models/EnergyMeasurementPoint';
import { useEffect, useState } from 'react';
import { XAxis, ResponsiveContainer, BarChart, Bar, YAxis, Tooltip, Legend } from 'recharts';

function mapkWsTokWh(measurementPoint: EnergyMeasurementPoint): EnergyMeasurementPoint {
    return new EnergyMeasurementPoint(
        measurementPoint.measurementPeriod,
        measurementPoint.until,
        measurementPoint.averageEnergyForPeriod_ws / (60 * 60),
    );
}

export default function AverageEnergyConsumptionDiagram() {
    const [data, setData] = useState<EnergyMeasurementPoint[] | null>(null);

    useEffect(() => {
        async function fetchData() {
            try {
                // const startDate = new Date();
                // startDate.setDate(startDate.getDate() - 7);
                // const endDate = new Date();

                const startDate = new Date(2023, 3, 5);
                const endDate = new Date(2023, 4, 17)
                const result = await getEnergyValues(Period.DAY, startDate, endDate);
                const mappedData = result.map(mapkWsTokWh);
                setData(mappedData);
            } catch (error) {
                console.error('Error fetching data:', error);
                setData([]); // Set an empty array or handle the error as needed
            }
        }

        fetchData();
    }, []);

    if (data === null) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <h1>Verbrauch (kWh)</h1>
            <ResponsiveContainer width="100%" height="90%">
                <BarChart data={data}>
                    <Bar type="monotone" dataKey="averageEnergyForPeriod_ws" name='Verbrach (kWh)' fill="#007aff" />
                    <XAxis dataKey="untilDayShortName" />
                    <YAxis />
                    <Tooltip />
                </BarChart>
            </ResponsiveContainer>
        </>
    );
}
