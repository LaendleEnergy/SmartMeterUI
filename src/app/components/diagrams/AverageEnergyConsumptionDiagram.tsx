import React, { useEffect, useState } from 'react';
import {
  XAxis,
  ResponsiveContainer,
  BarChart,
  Bar,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts';
import getEnergyValues from '@/app/api/queries/Energy';
import { EnergyMeasurementPoint, Period } from '@/app/models/EnergyMeasurementPoint';

function mapkWsTokWh(measurementPoint: EnergyMeasurementPoint): EnergyMeasurementPoint {
  return new EnergyMeasurementPoint(
    measurementPoint.measurementPeriod,
    measurementPoint.until,
    measurementPoint.averageEnergyForPeriod_ws / (60 * 60),
  );
}

export default function AverageEnergyConsumptionDiagram() {
  const [data, setData] = useState<EnergyMeasurementPoint[] | null>(null);
  const [selectedPeriod, setSelectedPeriod] = useState<string>('week');

  useEffect(() => {
    async function fetchData() {
      try {
        let startDate, endDate;
        let period = Period.DAY;
        const currentDate = new Date();

        switch (selectedPeriod) {
          case 'week':
            startDate = new Date(currentDate);
            startDate.setDate(currentDate.getDate() - 7);
            endDate = new Date(currentDate);
            period = Period.DAY;
            break;
          case 'month':
            startDate = new Date(currentDate);
            startDate.setDate(currentDate.getDate() - 30);
            endDate = new Date(currentDate);
            period = Period.WEEK;
            break;
          case 'year':
            startDate = new Date(currentDate);
            startDate.setDate(currentDate.getDate() - 365);
            endDate = new Date(currentDate);
            period = Period.MONTH;
            break;
          default:
            startDate = new Date(currentDate);
            endDate = new Date(currentDate);
            break;
        }

        const result = await getEnergyValues(period, startDate, endDate);
        const mappedData = result.map(mapkWsTokWh);
        setData(mappedData);
      } catch (error) {
        console.error('Error fetching data:', error);
        setData([]); // Set an empty array or handle the error as needed
      }
    }

    fetchData();
  }, [selectedPeriod]);

  const handlePeriodChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPeriod(event.target.value);
  };

  if (data === null) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>Verbrauch (kWh)</h1>
      <div style={{ width: '100%', display: 'inline-block', margin: '1vw' }}>
        <label htmlFor="periodSelect">Zeitraum: </label>
        <select id="periodSelect" onChange={handlePeriodChange} value={selectedPeriod}>
          <option value="week">Woche</option>
          <option value="month">Monat</option>
          <option value="year">Jahr</option>
        </select>
        <ResponsiveContainer>
          <BarChart data={data}>
            <Bar type="monotone" dataKey="averageEnergyForPeriod_ws" name='Verbrach (kWh)' fill="#007aff" />
            <XAxis dataKey="untilDayShortName" />
            <YAxis />
            <Tooltip />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
