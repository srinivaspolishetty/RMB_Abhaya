export const APIEndPoints = {
    dashboard : {
        liveTracking : '/getTripsSummary',
        outedeviation : '/getRouteDeviatedAndPanicSummary',
        vehicleauth : '/getAuthVehicles',
        panicAlerts : '/trip/panicSummary',
        devicePanic : '/device/devicePanicSummary',
        devicestatus : '/devices/deviceCommunication/summary'
    },
    devices : {
        devicecommunication : 'devices/deviceCommunication',
        liveDevices : 'devices/deviceCommunication?status=Communicating',
        movement : 'devices/deviceCommunication',
        deviceDetails: 'devices/deviceDetails',
        locationDetails: 'devices/lmpPacketData',
        emergancydetails: 'devices/ebpPacketData',
        healthDetails: 'devices/hmpPacketData',
        rawdata: 'devices/rawData',
        simDetails: '/simDetails',
    },
    drivers : {
        driverDetails: 'drivers/driverDetails',
        driverdutydetails: 'drivers/driverDutyDetails',
        editRfId : '/mapRFCard'
    },
    vehicles : {
        vehicledetails: 'vehicles/vehicleDetails',
        suspiciousvehicles: 'vehicles/watchVehicle',
        authVehicles:'vehicles/vehicleAuthList'
    },
    users : {
        userdetails: 'userDetails'
    },
    admin : {
        createDistrict: '/createDistrict',
        createCity : '/createCity'
    },
    command: {
        executeTask: '/command/executeTask',
        smsPacketTypes: '/command/smsPacketTypes',
        taskDetails: '/command/taskDetails'
    },
    
    trip:{
        tripDetails:'/trip/tripDetails',
        panicDetails: '/distress',
        devicePanicDetails: '/deviceDistress',
        routeDeviation : '/routeDeviation'
    },
    common : {
        comboData : '/comboData',
        config : '/systemProperties',
    }
};
