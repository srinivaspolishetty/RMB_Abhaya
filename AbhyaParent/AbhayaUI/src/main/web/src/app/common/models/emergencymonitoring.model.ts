import { PageModel } from './page.model';
export class EmergencyModel {
    public altitude: string;
    public checksum: string;
    public createdDate: string;
    public distance: string;
    public ebpPacketDataId: Number;
    public endCharacter: string;
    public gpsValidity: string;
    public imeiNumber: string;
    public latitude: string;
    public latitudeDirection: string;
    public longitude: string;
    public longitudeDirection: string;
    public packetStaus: string;
    public packetType: string;
    public provider: string;
    public replyNumber: string;
    public speed: string;
    public timestamp: string;
    public vehicleRegNo: string;
    public networkDate: string;
    public networkTime: string;
    public page: PageModel;
    public content: any;
}
