export class Livetracking {
    public closedtrips: number;
    public opentrips: number;
    public totaltrips: number;
    public length: number;
}


export class Routedeviation {
    public count: number;
    public tripCount: number;
    public type: string;
    public length: number;
}

export class vehicleAuth {
    public auth: number;
    public unauth: number;
    public total: number;
    public length: number;
}

export class PanicAlerts {
    public openWeb: number;
    public closedWeb: number;
    public openMobile: number;
    public closedMobile: number;
    public openDevice: number;
    public closedDevice: number;
    public openDevicePanic : number;
    public total: number;
    public length: number;
}
export class DeviceStatus {
    public total: Number = 0;
    public on: Number = 0;
    public off: Number = 0;
    public action: string;
    public length: Number;
}