export class District {
    public districtId: number;
    public name: string;
    public description: string;
    public stateId: number;
    public stateName: string;

    constructor(name: string, description: string, stateId: number, stateName: string) {
        this.name = name;
        this.description = description;
        this.stateId = stateId;
        this.stateName = stateName;
    }
}
