import { PageModel } from './page.model';

export class deviceDetailsModel {
    public id: number;
    public createdDate: string;
    public imeiNumber: string;
    public imsiNumber: string;
    public ipAddress: string;
    public mobileNumber: string;
    public modemDeviceId: Number;
    public serialNumber: string;
    public signalStrength: string;
    public simNumber: string;
    public version: string;
    public selectedEvent: string;
    public simDetails: any;
    public page: PageModel;
    public content: any;
}
