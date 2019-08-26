import { PageModel } from './page.model';
export class HealthModel {
    public analogIOStatus: string;
    public batteryPercentage: string;
    public createdDate: string;
    public dataUpdateOFF: string;
    public dataUpdateON: string;    
    public digitalIOStatus: string;
    public endOfPacket: string;
    public firmwareVersion: string;
    public hmpPacketDataId: Number;
    public imeiNumber: string;
    public lowBatteryThrValue: string;
    public memoryPercentage: string;
    public vendorId: string;
    public networkDate: string;
    public networkTime: string;
    public page: PageModel;
    public content: any;
}
