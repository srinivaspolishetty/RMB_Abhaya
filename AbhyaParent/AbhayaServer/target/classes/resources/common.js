(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/common/services/deviceserviceapi.ts":
/*!*****************************************************!*\
  !*** ./src/app/common/services/deviceserviceapi.ts ***!
  \*****************************************************/
/*! exports provided: DevicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicesService", function() { return DevicesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _constants_apiendpointconstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/apiendpointconstants */ "./src/app/common/constants/apiendpointconstants.ts");





var DevicesService = /** @class */ (function () {
    function DevicesService(httpClient) {
        this.httpClient = httpClient;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                'Authorization': 'my-auth-token'
            })
        };
    }
    DevicesService.prototype.getAllDevices = function (page, size, searchDate, searchValue, districtId, cityId, rtoId) {
        var url = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBase + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].version + "/" + _constants_apiendpointconstants__WEBPACK_IMPORTED_MODULE_4__["APIEndPoints"].devices.deviceDetails;
        url += "?page=" + page + "&size=" + size + "&searchDate=" + searchDate + "&searchValue=" + searchValue + "&districtId=" + districtId + "&cityId=" + cityId + "&rtoOfficeId=" + rtoId;
        return this.httpClient.get(url);
    };
    DevicesService.prototype.getAllDevicesCommunication = function (page, size, searchDate, searchValue, districtId, cityId, rtoId) {
        var url = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBase + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].version + "/" + _constants_apiendpointconstants__WEBPACK_IMPORTED_MODULE_4__["APIEndPoints"].devices.devicecommunication;
        url += "?page=" + page + "&size=" + size + "&searchDate=" + searchDate + "&searchValue=" + searchValue + "&districtId=" + districtId + "&cityId=" + cityId + "&rtoOfficeId=" + rtoId;
        return this.httpClient.get(url);
    };
    DevicesService.prototype.getLiveDevices = function (stateId) {
        var url = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBase + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].version + "/" + _constants_apiendpointconstants__WEBPACK_IMPORTED_MODULE_4__["APIEndPoints"].devices.liveDevices;
        return this.httpClient.get(url + "&stateId=" + stateId);
        ;
    };
    DevicesService.prototype.getmovementDetails = function (page, size, searchDate, searchValue, status, vehicleMode, stateId, districtId, cityId, rtoId) {
        var url = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBase + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].version + "/" + _constants_apiendpointconstants__WEBPACK_IMPORTED_MODULE_4__["APIEndPoints"].devices.movement;
        url += "?page=" + page + "&size=" + size + "&status=" + status + "&vehicleMode=" + vehicleMode + "&stateId=" + stateId + "&districtId=" + districtId + "&cityId=" + cityId + "&searchValue=" + searchValue + "&searchDate=" + searchDate + "&rtoOfficeId=" + rtoId;
        return this.httpClient.get(url);
    };
    DevicesService.prototype.getLocationData = function (page, size, searchDate, searchValue) {
        var url = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBase + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].version + "/" + _constants_apiendpointconstants__WEBPACK_IMPORTED_MODULE_4__["APIEndPoints"].devices.locationDetails;
        url += "?page=" + page + "&size=" + size + "&searchDate=" + searchDate + "&searchValue=" + searchValue;
        return this.httpClient.get(url);
    };
    DevicesService.prototype.downloadLocation = function (page, searchDate, searchValue) {
        var url = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBase + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].version + "/" + _constants_apiendpointconstants__WEBPACK_IMPORTED_MODULE_4__["APIEndPoints"].devices.locationDetails;
        url += "?page=" + page + "&searchDate=" + searchDate + "&searchValue=" + searchValue;
        return this.httpClient.get(url);
    };
    DevicesService.prototype.getemergancyDetails = function (page, size, searchDate, searchValue) {
        var url = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBase + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].version + "/" + _constants_apiendpointconstants__WEBPACK_IMPORTED_MODULE_4__["APIEndPoints"].devices.emergancydetails;
        url += "?page=" + page + "&size=" + size + "&searchDate=" + searchDate + "&searchValue=" + searchValue;
        return this.httpClient.get(url);
    };
    DevicesService.prototype.getHealthData = function (page, size, searchDate, searchValue) {
        var url = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBase + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].version + "/" + _constants_apiendpointconstants__WEBPACK_IMPORTED_MODULE_4__["APIEndPoints"].devices.healthDetails;
        url += "?page=" + page + "&size=" + size + "&searchDate=" + searchDate + "&searchValue=" + searchValue;
        return this.httpClient.get(url);
    };
    DevicesService.prototype.getRawData = function (page, size, searchDate, searchValue, districtId, cityId) {
        var url = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBase + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].version + "/" + _constants_apiendpointconstants__WEBPACK_IMPORTED_MODULE_4__["APIEndPoints"].devices.rawdata;
        url += "?page=" + page + "&size=" + size + "&searchDate=" + searchDate + "&searchValue=" + searchValue + "&districtId=" + districtId + "&cityId=" + cityId;
        return this.httpClient.get(url);
    };
    DevicesService.prototype.updateDeviceDetails = function (deviceDetails) {
        var url = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBase + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].version + _constants_apiendpointconstants__WEBPACK_IMPORTED_MODULE_4__["APIEndPoints"].devices.simDetails;
        return this.httpClient.post(url, deviceDetails, this.httpOptions);
    };
    DevicesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DevicesService);
    return DevicesService;
}());



/***/ }),

/***/ "./src/app/common/services/driversServiceApi.ts":
/*!******************************************************!*\
  !*** ./src/app/common/services/driversServiceApi.ts ***!
  \******************************************************/
/*! exports provided: DriversService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriversService", function() { return DriversService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _constants_apiendpointconstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/apiendpointconstants */ "./src/app/common/constants/apiendpointconstants.ts");





var DriversService = /** @class */ (function () {
    function DriversService(httpClient) {
        this.httpClient = httpClient;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                'Authorization': 'my-auth-token'
            })
        };
    }
    DriversService.prototype.getAllDriverDetails = function (page, size, searchDate, searchValue, districtId, cityId, rtoId) {
        var url = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBase + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].version + "/" + _constants_apiendpointconstants__WEBPACK_IMPORTED_MODULE_4__["APIEndPoints"].drivers.driverDetails;
        url += "?page=" + page + "&size=" + size + "&searchDate=" + searchDate + "&searchValue=" + searchValue + "&districtId=" + districtId + "&cityId=" + cityId + "&rtoOfficeId=" + rtoId;
        return this.httpClient.get(url);
    };
    DriversService.prototype.getAllDriverDutyDetails = function (page, size, searchDate, searchValue, districtId, cityId, rtoId) {
        var url = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBase + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].version + "/" + _constants_apiendpointconstants__WEBPACK_IMPORTED_MODULE_4__["APIEndPoints"].drivers.driverdutydetails;
        url += "?page=" + page + "&size=" + size + "&searchDate=" + searchDate + "&searchValue=" + searchValue + "&districtId=" + districtId + "&cityId=" + cityId + "&rtoOfficeId=" + rtoId;
        return this.httpClient.get(url);
    };
    DriversService.prototype.editDriverDetails = function (driverobj) {
        var url = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBase + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].version + _constants_apiendpointconstants__WEBPACK_IMPORTED_MODULE_4__["APIEndPoints"].drivers.editRfId;
        return this.httpClient.post(url, driverobj, this.httpOptions);
        return this.httpClient.get(url);
    };
    DriversService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DriversService);
    return DriversService;
}());



/***/ }),

/***/ "./src/app/common/services/toaster.service.ts":
/*!****************************************************!*\
  !*** ./src/app/common/services/toaster.service.ts ***!
  \****************************************************/
/*! exports provided: ToasterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToasterService", function() { return ToasterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");



var ToasterService = /** @class */ (function () {
    // http://technoidlab.com/demos/ng6-toastr-notifications/
    function ToasterService(toastr) {
        this.toastr = toastr;
    }
    ToasterService.prototype.showSuccess = function (position, msg) {
        this.toastr.successToastr(msg, 'Success!', { position: position });
    };
    ToasterService.prototype.showError = function (position, msg) {
        this.toastr.errorToastr(msg, 'Oops!', { position: position });
    };
    ToasterService.prototype.showWarning = function (position, msg) {
        this.toastr.warningToastr(msg, 'Alert!', { position: position });
    };
    ToasterService.prototype.showInfo = function (position, msg) {
        this.toastr.infoToastr(msg, 'Info', { position: position });
    };
    ToasterService.prototype.showCustom = function (position) {
        this.toastr.customToastr("<span style='color: green; font - size: 16px; text - align: center; '>Custom Toast</span>", null, { enableHTML: true, position: position });
    };
    ToasterService.prototype.showToast = function (position) {
        if (position === void 0) { position = 'top-center'; }
        this.showSuccess(position, '');
        this.toastr.infoToastr('This is a toast.', 'Toast', { position: position });
    };
    ToasterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__["ToastrManager"]])
    ], ToasterService);
    return ToasterService;
}());



/***/ }),

/***/ "./src/app/common/services/tripserviceapi.ts":
/*!***************************************************!*\
  !*** ./src/app/common/services/tripserviceapi.ts ***!
  \***************************************************/
/*! exports provided: TripServiceApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripServiceApi", function() { return TripServiceApi; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _constants_apiendpointconstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/apiendpointconstants */ "./src/app/common/constants/apiendpointconstants.ts");





var TripServiceApi = /** @class */ (function () {
    function TripServiceApi(httpClient) {
        this.httpClient = httpClient;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                'Authorization': 'my-auth-token'
            })
        };
    }
    TripServiceApi.prototype.getTripDetails = function (page, size, searchDate, searchValue, tripClosed, districtId, cityId, rtoId) {
        var url = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBase + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].version + _constants_apiendpointconstants__WEBPACK_IMPORTED_MODULE_4__["APIEndPoints"].trip.tripDetails;
        url += "?page=" + page + "&size=" + size + "&searchDate=" + searchDate + "&searchValue=" + searchValue + "&isTripClosed=" + tripClosed + "&districtId=" + districtId + "&cityId=" + cityId + "&rtoOfficeId=" + rtoId;
        return this.httpClient.get(url);
    };
    TripServiceApi.prototype.getTripTracking = function (tripId) {
        var url = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBase + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].version + _constants_apiendpointconstants__WEBPACK_IMPORTED_MODULE_4__["APIEndPoints"].trip.tripDetails;
        url += "?tripId=" + tripId;
        return this.httpClient.get(url);
    };
    TripServiceApi.prototype.getPanicDetails = function (page, size, searchDate, searchValue, eventType, panicClosed, districtId, cityId, rtoId) {
        var url = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBase + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].version + _constants_apiendpointconstants__WEBPACK_IMPORTED_MODULE_4__["APIEndPoints"].trip.panicDetails;
        url += "?page=" + page + "&size=" + size + "&searchDate=" + searchDate + "&searchValue=" + searchValue + "&eventType=" + eventType + "&closed=" + panicClosed + "&districtId=" + districtId + "&cityId=" + cityId + "&rtoOfficeId=" + rtoId;
        return this.httpClient.get(url);
    };
    TripServiceApi.prototype.getDevicePanic = function (page, size, searchDate, searchValue, panicClosed, districtId, cityId, rtoId) {
        var url = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBase + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].version + _constants_apiendpointconstants__WEBPACK_IMPORTED_MODULE_4__["APIEndPoints"].trip.devicePanicDetails;
        url += "?page=" + page + "&size=" + size + "&searchDate=" + searchDate + "&searchValue=" + searchValue + "&districtId=" + districtId + "&closed=" + panicClosed + "&cityId=" + cityId + "&rtoOfficeId=" + rtoId;
        return this.httpClient.get(url);
    };
    TripServiceApi.prototype.getRouteDeviationDetails = function (page, size, searchDate, searchValue, districtId, cityId, rtoId) {
        var url = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBase + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].version + _constants_apiendpointconstants__WEBPACK_IMPORTED_MODULE_4__["APIEndPoints"].trip.routeDeviation;
        url += "?page=" + page + "&size=" + size + "&searchDate=" + searchDate + "&searchValue=" + searchValue + "&districtId=" + districtId + "&cityId=" + cityId + "&rtoOfficeId=" + rtoId;
        return this.httpClient.get(url);
    };
    TripServiceApi = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TripServiceApi);
    return TripServiceApi;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map