export class EnergyMeasurementPoint {
    public measurementPeriod: MeasurementPeriod;
    public until: Date;
    public averageEnergyForPeriod_ws: number;
    readonly untilDayAsNumber: string;
    readonly untilDayShortName: string;

    constructor(measurementResolution: MeasurementPeriod, until: Date, energy_ws: number) {
        this.measurementPeriod = measurementResolution;
        this.until = until;
        this.averageEnergyForPeriod_ws = energy_ws
        this.untilDayAsNumber = this.until.getDay().toString();
        this.untilDayShortName = this.until.toLocaleString('de-de', {  weekday: 'short' })
    }
}

export class MeasurementPeriod {
    public period: Period;
    public ammount: Number;

    constructor(period: Period, ammount: Number) {
        this.period = period;
        this.ammount = ammount;
    }
}

export enum Period {
    SECOND = 5,
    DAY = 86400,
    WEEK = 604800,
    MONTH = 2628000,
    YEAR = 31540000
}