export class MeasurementDTO {
  deviceId: string;
  measurementTime: Date;
  instantaneousActivePowerPlusW: number;

  constructor(
    deviceId: string,
    measurementTime: Date,
    instantaneousActivePowerPlusW: number
  ) {
    this.deviceId = deviceId;
    this.measurementTime = measurementTime;
    this.instantaneousActivePowerPlusW = instantaneousActivePowerPlusW;
  }
}
