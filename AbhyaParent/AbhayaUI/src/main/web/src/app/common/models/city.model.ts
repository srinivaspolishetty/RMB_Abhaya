export class City {
    public cityId: number;
    public name: string;
    public code: string;
    public districtId: string;
    public districtName: string;
    public stateId: number;
    public stateName: string;
    constructor(name: string, code: string, districtId: string, districtName: string,
        stateId: number, stateName: string) {
        this.name = name;
        this.code = code;
        this.districtId = districtId;
        this.districtName = districtName;
        this.stateId = stateId;
        this.stateName = stateName;
    }
}
