export class AverageMeasurementDTO {
    timeStart: Date;
    timeEnd: Date;
    deviceId: string;
    currentL1AAvg: number;
    currentL2AAvg: number;
    currentL3AAvg: number;
    voltageL1VAvg: number;
    voltageL2VAvg: number;
    voltageL3VAvg: number;
    instantaneousActivePowerPlusWAvg: number;
    instantaneousActivePowerMinusWAvg: number;

    constructor(
        timeStart: Date,
        timeEnd: Date,
        deviceId: string,
        currentL1AAvg: number,
        currentL2AAvg: number,
        currentL3AAvg: number,
        voltageL1VAvg: number,
        voltageL2VAvg: number,
        voltageL3VAvg: number,
        instantaneousActivePowerPlusWAvg: number,
        instantaneousActivePowerMinusWAvg: number
    ) {
        this.timeStart = timeStart;
        this.timeEnd = timeEnd;
        this.deviceId = deviceId;
        this.currentL1AAvg = currentL1AAvg;
        this.currentL2AAvg = currentL2AAvg;
        this.currentL3AAvg = currentL3AAvg;
        this.voltageL1VAvg = voltageL1VAvg;
        this.voltageL2VAvg = voltageL2VAvg;
        this.voltageL3VAvg = voltageL3VAvg;
        this.instantaneousActivePowerPlusWAvg = instantaneousActivePowerPlusWAvg;
        this.instantaneousActivePowerMinusWAvg = instantaneousActivePowerMinusWAvg;
    }
}