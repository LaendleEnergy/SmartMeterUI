export class AccumulatedMeasurementDTO {
    timeStart: Date;
    timeEnd: Date;
    deviceId: string;
    energyConsumedWh: number;
    energyDeliveredWh: number;
    energyConsumedPriceEuro: number;

    constructor(
        timeStart: Date,
        timeEnd: Date,
        deviceId: string,
        energyConsumedWh: number,
        energyDeliveredWh: number,
        energyConsumedPriceEuro: number
    ) {
        this.timeStart = timeStart;
        this.timeEnd = timeEnd;
        this.deviceId = deviceId;
        this.energyConsumedWh = energyConsumedWh;
        this.energyDeliveredWh = energyDeliveredWh;
        this.energyConsumedPriceEuro = energyConsumedPriceEuro;
    }
}
