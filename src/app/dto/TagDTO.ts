
export class TagDto {
    startTime: Date;
    endTime: Date;
    caption: string | undefined;
    deviceCategoryName: string | undefined;

    constructor(startTime: Date, endTime: Date, caption: string | undefined, deviceCategoryName: string | undefined) {
        this.startTime = startTime;
        this.endTime = endTime;
        this.caption = caption;
        this.deviceCategoryName = deviceCategoryName;
    }

    /*toJSON() {
        return {
            startTime: this.formatDateToISOString(this.startTime),
            endTime: this.formatDateToISOString(this.endTime),
            caption: this.caption,
            deviceCategoryName: this.deviceCategoryName,
        };
    }
    */

    private formatDateToISOString(date: Date): string {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is zero-based
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');

        const string = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
        return string;
    }
}

