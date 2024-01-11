import { EnergyMeasurementPoint, MeasurementPeriod, Period } from "@/app/models/EnergyMeasurementPoint";

function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  
export default function mockGetFiveSecondValues(resolution: Period, startDate: Date, endDate: Date): EnergyMeasurementPoint[] {
  if (startDate > endDate) throw new Error("startdate may not be after enddate");
  
  let data: EnergyMeasurementPoint[] = [];
  let period_seconds = Math.round(Math.abs((endDate.getTime() - startDate.getTime()))) / 1000;

  let valuePoints = period_seconds / resolution;

  data.push(new EnergyMeasurementPoint(
    new MeasurementPeriod(
      resolution,
      1),
    new Date(startDate),
    getRandomInt(100, 3000) * 1000)
  );
  
  for (let i = 0; i < valuePoints; ++i) {
    const lastEntry = data[data.length - 1];
  
    data.push(
      new EnergyMeasurementPoint(
        new MeasurementPeriod(resolution, 1),
        new Date(lastEntry.until.getTime() + resolution * 1000),
        getRandomInt(100, 3000) * 1000)
      );
  }

  return data;
}