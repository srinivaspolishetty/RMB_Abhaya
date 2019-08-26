(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["devices-devices-module"],{

/***/ "./src/app/common/models/device-communication-model.ts":
/*!*************************************************************!*\
  !*** ./src/app/common/models/device-communication-model.ts ***!
  \*************************************************************/
/*! exports provided: deviceCommunicationModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deviceCommunicationModel", function() { return deviceCommunicationModel; });
var deviceCommunicationModel = /** @class */ (function () {
    function deviceCommunicationModel() {
    }
    return deviceCommunicationModel;
}());



/***/ }),

/***/ "./src/app/common/models/device-details-model.ts":
/*!*******************************************************!*\
  !*** ./src/app/common/models/device-details-model.ts ***!
  \*******************************************************/
/*! exports provided: deviceDetailsModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deviceDetailsModel", function() { return deviceDetailsModel; });
var deviceDetailsModel = /** @class */ (function () {
    function deviceDetailsModel() {
    }
    return deviceDetailsModel;
}());



/***/ }),

/***/ "./src/app/common/models/emergencymonitoring.model.ts":
/*!************************************************************!*\
  !*** ./src/app/common/models/emergencymonitoring.model.ts ***!
  \************************************************************/
/*! exports provided: EmergencyModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmergencyModel", function() { return EmergencyModel; });
var EmergencyModel = /** @class */ (function () {
    function EmergencyModel() {
    }
    return EmergencyModel;
}());



/***/ }),

/***/ "./src/app/common/models/healthmonitoring.model.ts":
/*!*********************************************************!*\
  !*** ./src/app/common/models/healthmonitoring.model.ts ***!
  \*********************************************************/
/*! exports provided: HealthModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthModel", function() { return HealthModel; });
var HealthModel = /** @class */ (function () {
    function HealthModel() {
    }
    return HealthModel;
}());



/***/ }),

/***/ "./src/app/common/models/rawdata.model.ts":
/*!************************************************!*\
  !*** ./src/app/common/models/rawdata.model.ts ***!
  \************************************************/
/*! exports provided: RawData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RawData", function() { return RawData; });
var RawData = /** @class */ (function () {
    function RawData() {
    }
    return RawData;
}());



/***/ }),

/***/ "./src/app/mainComponents/devices/devicecommunication/devicecommunication.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/mainComponents/devices/devicecommunication/devicecommunication.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container top-header p-b-3\">\n  <div class=\"row head-block no-gutters bdr-bottom m-b-3 p-t-1\">\n    <div class=\"col-md-6 p-l-0\">\n      <h4>Devices Communication</h4>\n    </div>\n    <div class=\"col-md-5 text-right\">\n      <span class=\"btn-circle\"><i class=\"icon-ab_download\"></i></span>\n      <span class=\"btn-circle m-r-1\" (click)=\"refreshPage()\"><i class=\"icon-ab-refresh\"></i></span>\n    </div>\n    <div class=\"col-md-1 p-r-0 text-right\">\n      <div class=\"filters\">\n        <button type=\"button\" class=\"filters-button\" [ngClass]=\"{ 'active': showFilters}\" (click)=\"toggleFilters()\">\n          <i class=\"icon-ab-searchfilter\"></i>\n          <span>Filters</span>\n        </button>\n        <div class=\"filters-body \" *ngIf=\"showFilters\">\n          <div class=\"arrow-up\"></div>\n          <form name=\"form\" (ngSubmit)=\"f.form.valid && applyFilters(f)\" #f=\"ngForm\" novalidate>\n            <app-citydistrict #validateCityDistrict (isCityDistrictValid)=\"isCityDistrictValid($event)\"\n              [cityDistrictConfig]='cityDistrictConfig'></app-citydistrict>\n\n              <div class=\"form-group\">\n                  <label>DATE</label>\n                  <app-datepicker\n                      class=\"form-control bdr-none p-a-0\"\n                      name=\"searchDate\" \n                      [(ngModel)]=\"searchDate\"\n                      #searchDatectrl= \"ngModel\"\n                      appForbiddenName=\"fred\"\n                      [ngClass]=\"{ 'is-invalid': f.submitted && searchDatectrl.invalid }\"\n                      [datePickerModel]=\"datePickerModel\"          \n                      searchDatectrl>\n                  </app-datepicker>\n               <div *ngIf=\"f.submitted && searchDatectrl.invalid\" class=\"invalid-feedback\">\n                  <div *ngIf=\"searchDatectrl.errors.required\">Search Date is required</div>\n               </div>\n              </div>\n            <div class=\"form-group m-t-3\">\n              <button class=\"btn btn-primary w-100p\" type=\"submit\">Search</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-12 p-a-0 p-t-1\">\n      <nav aria-label=\"breadcrumb\">\n        <ol class=\"breadcrumb\">\n          <li class=\"breadcrumb-item\"><a class=\"text-abhaya\" [routerLink]=\"['/dashboard']\">Home</a></li>\n          <li class=\"breadcrumb-item\" aria-current=\"page\"><a class=\"text-abhaya\" [routerLink]=\"['/devices']\">Devices</a></li>\n          <li class=\"breadcrumb-item active text-secondary\" aria-current=\"page\">Devices Communication</li>\n        </ol>\n      </nav>\n    </div>\n  </div>\n\n  <div class=\"row no-gutters m-b-3\">\n      <div class=\"col-md-6 p-a-0\">\n          <div class=\"form-group abhaya-table-search focal-point\">\n            <i class=\"icon-ab-search\"></i>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchText\" (keydown.enter)=\"getAllDevices()\" placeholder=\"Search by IMEI / Vehicle / IOT No.\">\n            <span class=\"separator\"> </span>\n          </div>\n        </div>\n    <div class=\"col-md-6 p-a-0 text-primary p-t-2 text-right\">\n      Total Records : <h5 class=\"total-records-text d-inline-block\"> {{page.totalElements}}</h5>\n    </div>\n    \n  </div>\n\n  <div class=\"row no-gutters pt-8\">\n    <table class=\"abhaya-table\">\n      <thead>\n        <tr>\n            <th>ID</th>\n            <th>IMEI No</th>\n            <th>Vehicle No</th>\n            <th>IoT No</th>\n            <th>Status</th>\n            <th *ngIf=\"action == 'vehicleMode'\">Vehicle Mode</th>\n            <th *ngIf=\"action == 'ignitionStatus'\">Ignition Status</th>\n            <th *ngIf=\"action == 'emergencyStatus'\">Emergency Status</th>\n            <th *ngIf=\"action == 'mainPowerStatus'\">Main Power Status</th>\n            <th *ngIf=\"action == 'tamperAlert'\">Tamper Alert</th>\n            <th *ngIf=\"action == 'memoryPercentage'\">Memory Percentage</th>\n            <th *ngIf=\"action == 'batteryPercentage'\">Battery Percentage</th>\n            <th>Latitude</th>\n            <th>Longitude</th>\n            <th>Network Date</th>\n            <th>Network Time</th>\n            <th>Is Over Speed</th>\n          <th></th>\n        </tr>\n      </thead>\n     <tbody *ngIf=\"isDataExists\">\n        <tr *ngFor=\"let details of deviceCommunicationData | paginate: { id: 'paginationCtrl', itemsPerPage: page.size, currentPage: p, totalItems: page.totalElements }\">\n            <td>{{details.deviceCommunicationId}}</td>\n            <td>{{details.imeiNumber}}</td>\n            <td>{{details.vehicleRegNo}}</td>\n            <td>{{details.serialNumber}}</td>\n            <td>{{details.status}}</td>\n            <td *ngIf=\"action == 'vehicleMode'\">{{details.vehicleMode}}</td>\n            <td *ngIf=\"action == 'ignitionStatus'\">{{details.ignitionStatus == 1 ? 'ON' : 'OFF'}}</td>\n            <td *ngIf=\"action == 'emergencyStatus'\">{{details.emergencyStatus == 1 ? 'ON' : 'OFF'}}</td>\n            <td *ngIf=\"action == 'mainPowerStatus'\">{{details.mainPowerStatus == 1 ? 'ON' : 'OFF'}}</td>\n            <td *ngIf=\"action == 'tamperAlert'\">{{details.tamperAlert == 'O' ? 'ON' : 'OFF'}}</td>\n            <td *ngIf=\"action == 'memoryPercentage'\">{{details.memoryPercentage > 40 ? 'Good' : 'Critical'}} ({{details.memoryPercentage}})</td>\n            <td *ngIf=\"action == 'batteryPercentage'\">{{details.batteryPercentage > 40 ? 'Good' : 'Critical'}} ({{details.batteryPercentage}})</td>\n            <td>{{details.latitude}}</td>\n            <td>{{details.langitude}}</td>\n            <td>{{details.networkDate}}</td>\n            <td>{{details.networkTime}}</td>\n            <td>{{details.isDeviceOverSpeed}}</td>\n            <td>\n              <a class=\"\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n                aria-expanded=\"false\"><i class=\"icon-ab_more\"></i></a>\n              <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdown\">\n                <div class=\"arrow-up\"></div>\n                <a (click)=\"editDeviceCommunication(details)\" class=\"dropdown-item\">Vehicles List</a>\n              </div>\n            </td>\n          </tr>\n     </tbody>\n    </table>\n    <app-nodata class=\"w-100p\" *ngIf=\"!isDataExists\" [noDataText]='noDataText'></app-nodata>\n    <div class=\"row no-gutters w-100p m-t-5\">\n        <div *ngIf=\"isDataExists\" class=\"float-left p-t-1 page-size\">\n            <span>Page Size :</span>\n            <select (change)=\"changePageSize()\" [(ngModel)]=\"pageSize\">\n              <option *ngFor=\"let number of pageSizeValues\" value=\"{{number}}\">{{number}}</option>\n            </select>\n          </div>\n        <div *ngIf=\"isDataExists\" style=\"margin:0px auto;\">\n          <pagination-controls id=\"paginationCtrl\" class=\"pagination float-right\" (pageChange)=\"pageChanged($event)\" maxSize=\"6\"\n            directionLinks=\"true\" autoHide=\"true\" responsive=\"true\" previousLabel=\"Prev\" nextLabel=\"Next\">\n          </pagination-controls>\n         \n        </div>\n      </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/mainComponents/devices/devicecommunication/devicecommunication.component.sass":
/*!***********************************************************************************************!*\
  !*** ./src/app/mainComponents/devices/devicecommunication/devicecommunication.component.sass ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW5Db21wb25lbnRzL2RldmljZXMvZGV2aWNlY29tbXVuaWNhdGlvbi9kZXZpY2Vjb21tdW5pY2F0aW9uLmNvbXBvbmVudC5zYXNzIn0= */"

/***/ }),

/***/ "./src/app/mainComponents/devices/devicecommunication/devicecommunication.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/mainComponents/devices/devicecommunication/devicecommunication.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: DevicecommunicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicecommunicationComponent", function() { return DevicecommunicationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _common_components_citydistrict_citydistrict_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/components/citydistrict/citydistrict.component */ "./src/app/common/components/citydistrict/citydistrict.component.ts");
/* harmony import */ var _common_services_deviceserviceapi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/services/deviceserviceapi */ "./src/app/common/services/deviceserviceapi.ts");
/* harmony import */ var _common_models_page_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/models/page.model */ "./src/app/common/models/page.model.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! .././../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _modalpopup_editviewdevicecomm_editviewdevicecomm_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modalpopup/editviewdevicecomm/editviewdevicecomm.component */ "./src/app/mainComponents/devices/modalpopup/editviewdevicecomm/editviewdevicecomm.component.ts");








var DevicecommunicationComponent = /** @class */ (function () {
    function DevicecommunicationComponent(deviceapi, modalService) {
        this.deviceapi = deviceapi;
        this.modalService = modalService;
        this.showFilters = false;
        this.searchText = '';
        this.page = new _common_models_page_model__WEBPACK_IMPORTED_MODULE_5__["PageModel"]();
        this.isDataExists = false;
        this.pageSizeValues = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].pageSizeValues;
        this.pageSize = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].pageSize;
        this.intilPageNumber = 0;
        this.searchDate = '';
        this.districtId = '';
        this.cityId = '';
        this.rtoId = '';
        this.noDataText = "No Device Communication Details Available";
    }
    DevicecommunicationComponent.prototype.isCityDistrictValid = function (formValid) {
        this.cityDistrictCompData = formValid;
    };
    DevicecommunicationComponent.prototype.ngOnInit = function () {
        this.getAllDevices();
    };
    DevicecommunicationComponent.prototype.toggleFilters = function () {
        this.showFilters = !this.showFilters;
    };
    DevicecommunicationComponent.prototype.editDeviceCommunication = function (seletecdDevice) {
        var modalRef = this.modalService.open(_modalpopup_editviewdevicecomm_editviewdevicecomm_component__WEBPACK_IMPORTED_MODULE_7__["EditviewdevicecommComponent"], {
            size: 'lg', backdrop: 'static',
            keyboard: false
        });
        modalRef.componentInstance.selectedCommDeviceDetails = seletecdDevice;
    };
    DevicecommunicationComponent.prototype.changePageSize = function () {
        this.getAllDevices();
    };
    DevicecommunicationComponent.prototype.pageChanged = function (event) {
        this.p = event;
        this.intilPageNumber = event - 1;
        this.getAllDevices();
    };
    DevicecommunicationComponent.prototype.applyFilters = function (parentForm) {
        this.parentFormSubmitted = true;
        this.CitydistrictComponent.validateChildForm(this.parentFormSubmitted);
        if (!parentForm.valid || !this.cityDistrictCompData.isFormValid) {
            return;
        }
        else {
            this.districtId = this.cityDistrictCompData.districtName;
            this.cityId = this.cityDistrictCompData.cityName;
            this.rtoId = this.cityDistrictCompData.rtoOfficeName;
            this.showFilters = false;
            this.getAllDevices();
        }
    };
    DevicecommunicationComponent.prototype.refreshPage = function () {
        this.intilPageNumber = 0;
        this.pageSize = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].pageSize;
        this.searchDate = '';
        this.searchText = '';
        this.getAllDevices();
    };
    DevicecommunicationComponent.prototype.getAllDevices = function () {
        var _this = this;
        this.deviceapi.getAllDevicesCommunication(this.intilPageNumber, this.pageSize, this.searchDate, this.searchText, this.districtId, this.cityId, this.rtoId)
            .subscribe(function (_data) {
            _this.deviceCommunicationData = _data.content;
            _this.page = _data.page;
            _this.isDataExists = (_this.deviceCommunicationData.length > 0);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('validateCityDistrict'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _common_components_citydistrict_citydistrict_component__WEBPACK_IMPORTED_MODULE_3__["CitydistrictComponent"])
    ], DevicecommunicationComponent.prototype, "CitydistrictComponent", void 0);
    DevicecommunicationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-devicecommunication',
            template: __webpack_require__(/*! ./devicecommunication.component.html */ "./src/app/mainComponents/devices/devicecommunication/devicecommunication.component.html"),
            styles: [__webpack_require__(/*! ./devicecommunication.component.sass */ "./src/app/mainComponents/devices/devicecommunication/devicecommunication.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_services_deviceserviceapi__WEBPACK_IMPORTED_MODULE_4__["DevicesService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], DevicecommunicationComponent);
    return DevicecommunicationComponent;
}());



/***/ }),

/***/ "./src/app/mainComponents/devices/devicereport/devicereport.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/mainComponents/devices/devicereport/devicereport.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container top-header p-b-3\">\n    <div class=\"row head-block no-gutters bdr-bottom m-b-3 p-t-1\">\n        <div class=\"col-md-5 p-l-0\">\n          <h4>Device Reports</h4>\n        </div>\n        \n        <div class=\"col-md-12 p-a-0 p-t-1\">\n          <nav aria-label=\"breadcrumb\">\n            <ol class=\"breadcrumb\">\n              <li class=\"breadcrumb-item\"><a class=\"text-abhaya\" [routerLink]=\"['/dashboard']\">Home</a></li>\n              <li class=\"breadcrumb-item\" aria-current=\"page\"><a class=\"text-abhaya\" [routerLink]=\"['/devices']\">Devices</a></li>\n              <li class=\"breadcrumb-item active text-secondary\" aria-current=\"page\">Device Reports</li>\n            </ol>\n          </nav>\n        </div>\n      </div>\n      <div class=\"row no-gutters m-b-3\">\n         <div class=\"col-md-6 p-a-0\">\n            <div class=\"form-group abhaya-table-search\">\n              <i class=\"icon-ab-search\"></i>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchText\" (keydown.enter)=\"getDriverDetails()\" placeholder=\"Search by Vehicle No./IOT No.\">\n              <span class=\"separator\"> </span>\n            </div>\n          </div>\n          <div class=\"col-md-6 p-a-0 text-primary text-right p-t-2\">\n            Total Records : <h5 class=\"total-records-text d-inline-block\"> {{page.totalElements}}</h5>\n          </div>\n         \n        </div>\n    <div class=\"row no-gutters pt-8\">\n        <table class=\"abhaya-table\">\n          <thead>\n            <tr>\n              <th>ID</th>\n              <th>IMEI No</th>\n              <th>Vehicle Reg No</th>\n              <th>Serial No</th>\n              <th>SIM No</th>\n              <th>IP Address</th>\n              <th>Date</th>\n              <th></th>\n            </tr>\n          </thead>\n         <tbody *ngIf=\"isDataExists\">\n            <tr *ngFor=\"let driver of driverDetails | paginate: { id: 'systemPropertiespage', itemsPerPage: page.size, currentPage: p, totalItems: page.totalElements }\">\n                <td>{{driver.id}}</td>\n                <td>{{driver.imeiNumber}}</td>\n                <td>{{driver.vehicleRegNo}}</td>\n                <td>{{driver.serialNumber}}</td>\n                <td>{{driver.simNumber}}</td>\n                <td>{{driver.ipAddress}}</td>\n                <td>{{driver.createdDate | date : 'dd-MM-yyyy'}}</td>\n                <td>\n                    <a class=\"\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n                aria-expanded=\"false\"><i class=\"icon-ab_more\"></i></a>\n                <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdown\">\n                    <div class=\"arrow-up\"></div>\n                    <a (click)=\"editDeviceCommunication(details)\" class=\"dropdown-item\">Report Details</a>\n                  </div>\n                </td>\n              </tr>\n         </tbody>\n         <!-- <div *ngIf=\"!isDataExists\">\n            <div class=\"grid-nodata text-center text-red-medium\">\n              <h6>No Data Found</h6>\n            </div>\n          </div> -->\n        </table>  \n        <!--Pagination-->\n        <app-nodata class=\"w-100p\" *ngIf=\"!isDataExists\" [noDataText]='noDataText'></app-nodata>\n        <div class=\"row no-gutters w-100p m-t-5\">\n            <div *ngIf=\"isDataExists\" class=\"float-left p-t-1 page-size\">\n                <span>Page Size :</span>\n                <select (change)=\"changePageSize()\" [(ngModel)]=\"pageSize\">\n                  <option *ngFor=\"let number of pageSizeValues\" value=\"{{number}}\">{{number}}</option>\n                </select>\n              </div>\n            <div *ngIf=\"isDataExists\" style=\"margin:0px auto;\">\n                <pagination-controls id=\"systemPropertiespage\" class=\"pagination float-right\" (pageChange)=\"pageChanged($event)\"\n                  maxSize=\"6\" directionLinks=\"true\" autoHide=\"true\" responsive=\"true\" previousLabel=\"Prev\" nextLabel=\"Next\">\n                </pagination-controls>\n              </div>\n          </div>\n      </div>\n</div>"

/***/ }),

/***/ "./src/app/mainComponents/devices/devicereport/devicereport.component.sass":
/*!*********************************************************************************!*\
  !*** ./src/app/mainComponents/devices/devicereport/devicereport.component.sass ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW5Db21wb25lbnRzL2RldmljZXMvZGV2aWNlcmVwb3J0L2RldmljZXJlcG9ydC5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/mainComponents/devices/devicereport/devicereport.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/mainComponents/devices/devicereport/devicereport.component.ts ***!
  \*******************************************************************************/
/*! exports provided: DevicereportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicereportComponent", function() { return DevicereportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _common_models_page_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/models/page.model */ "./src/app/common/models/page.model.ts");




var DevicereportComponent = /** @class */ (function () {
    function DevicereportComponent() {
        this.driverDetails = []; //driversModel;
        this.pageSizeValues = [10, 50, 100, 200];
        this.pageSize = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].pageSize;
        this.intilPageNumber = 0;
        this.isDataExists = false;
        this.page = new _common_models_page_model__WEBPACK_IMPORTED_MODULE_3__["PageModel"]();
        this.searchText = '';
    }
    DevicereportComponent.prototype.ngOnInit = function () {
        this.getDriverDetails();
    };
    DevicereportComponent.prototype.getDriverDetails = function () {
    };
    DevicereportComponent.prototype.changePageSize = function () {
        this.getDriverDetails();
    };
    DevicereportComponent.prototype.pageChanged = function (event) {
        this.p = event;
        this.intilPageNumber = event - 1;
        this.getDriverDetails();
    };
    DevicereportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-devicereport',
            template: __webpack_require__(/*! ./devicereport.component.html */ "./src/app/mainComponents/devices/devicereport/devicereport.component.html"),
            styles: [__webpack_require__(/*! ./devicereport.component.sass */ "./src/app/mainComponents/devices/devicereport/devicereport.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DevicereportComponent);
    return DevicereportComponent;
}());



/***/ }),

/***/ "./src/app/mainComponents/devices/devices.component.html":
/*!***************************************************************!*\
  !*** ./src/app/mainComponents/devices/devices.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container top-header p-b-3\">\n  <div class=\"row head-block no-gutters bdr-bottom m-b-3 p-t-1\">\n    <div class=\"col-md-6 p-l-0\">\n      <h4>Device Details</h4>\n    </div>\n    <div class=\"col-md-5 text-right\">\n        <span class=\"btn-circle\"><i class=\"icon-ab_download\"></i></span>\n        <span class=\"btn-circle m-r-1\" (click)=\"refreshPage()\"><i class=\"icon-ab-refresh\"></i></span>\n    </div>\n    <div class=\"col-md-1 p-r-0 text-right\">\n      <div class=\"filters\">\n        <button type=\"button\" class=\"filters-button\" [ngClass]=\"{ 'active': showFilters}\" (click)=\"toggleFilters()\">\n          <i class=\"icon-ab-searchfilter\"></i>\n          <span>Filters</span>\n        </button>\n        <div class=\"filters-body \" *ngIf=\"showFilters\">\n          <div class=\"arrow-up\"></div>\n          <form name=\"form\" (ngSubmit)=\"f.form.valid && applyFilters(f)\" #f=\"ngForm\" novalidate>\n            <app-citydistrict #validateCityDistrict (isCityDistrictValid)=\"isCityDistrictValid($event)\"\n              [cityDistrictConfig]='cityDistrictConfig'></app-citydistrict>\n\n            <div class=\"form-group\">\n              <label>DATE</label>\n              <app-datepicker class=\"form-control bdr-none p-a-0\" name=\"searchDate\" [(ngModel)]=\"searchDate\"\n                #searchDatectrl=\"ngModel\" appForbiddenName=\"fred\"\n                [ngClass]=\"{ 'is-invalid': f.submitted && searchDatectrl.invalid }\"\n                [datePickerModel]=\"datePickerModel\" searchDatectrl>\n              </app-datepicker>\n              <div *ngIf=\"f.submitted && searchDatectrl.invalid\" class=\"invalid-feedback\">\n                <div *ngIf=\"searchDatectrl.errors.required\">Search Date is required</div>\n              </div>\n            </div>\n            <div class=\"form-group m-t-3\">\n              <button class=\"btn btn-primary w-100p\" type=\"submit\">Search</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-12 p-a-0 p-t-1\">\n      <nav aria-label=\"breadcrumb\">\n        <ol class=\"breadcrumb\">\n          <li class=\"breadcrumb-item\"><a class=\"text-abhaya\" [routerLink]=\"['/dashboard']\">Home</a></li>\n          <li class=\"breadcrumb-item active text-secondary\" aria-current=\"page\">Device Details</li>\n        </ol>\n      </nav>\n    </div>\n  </div>\n\n  <div class=\"row no-gutters m-b-3\">\n      <div class=\"col-md-6 p-a-0\">\n          <div class=\"form-group abhaya-table-search focal-point\">\n            <i class=\"icon-ab-search\"></i>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchText\" (keydown.enter)=\"getAllDevices()\"\n              placeholder=\"Search IMEI / Vehicle / SIM / IoT No.\">\n            <span class=\"separator\"> </span>\n          </div>\n        </div>\n    <div class=\"col-md-6 p-a-0 text-primary text-right p-t-2\">\n      Total Records : <h5 class=\"total-records-text d-inline-block\"> {{page.totalElements}}</h5>\n    </div>\n   \n  </div>\n\n  <div class=\"row no-gutters pt-8\">\n    <table class=\"abhaya-table\">\n      <thead>\n        <tr>\n          <th>ID</th>\n          <th>IMEI No</th>\n          <th>Vehicle No</th>\n          <th>IoT No</th>\n          <th>SIM No</th>\n          <th>IP Address</th>\n          <th>Date</th>\n          <th></th>\n        </tr>\n      </thead>\n      <tbody *ngIf=\"isDataExists\">\n        <tr\n          *ngFor=\"let details of deviceData | paginate: { id: 'paginationCtrl', itemsPerPage: page.size, currentPage: p, totalItems: page.totalElements }\">\n          <td>{{details.id}}</td>\n          <td>{{details.imeiNumber}}</td>\n          <td>{{details.vehicleRegNo}}</td>\n          <td>{{details.serialNumber}}</td>\n          <td>{{details.simNumber}}</td>\n          <td>{{details.ipAddress}}</td>\n          <td>{{details.createdDate}}</td>\n          <td>\n            <a class=\"\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n              aria-expanded=\"false\"><i class=\"icon-ab_more\"></i></a>\n            <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdown\">\n              <div class=\"arrow-up\"></div>\n              <a (click)=\"editviewdevices(details, 'view')\" class=\"dropdown-item\">View Details</a>\n              <a (click)=\"editviewdevices(details, 'edit')\" class=\"dropdown-item\">Edit Details</a>\n            </div>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n    <app-nodata class=\"w-100p\" *ngIf=\"!isDataExists\" [noDataText]='noDataText'></app-nodata>\n    <div class=\"row no-gutters w-100p m-t-5\">\n        <div *ngIf=\"isDataExists\" class=\"float-left p-t-1 page-size\">\n            <span>Page Size :</span>\n            <select (change)=\"changePageSize()\" [(ngModel)]=\"pageSize\">\n              <option *ngFor=\"let number of pageSizeValues\" value=\"{{number}}\">{{number}}</option>\n            </select>\n          </div>\n      <div *ngIf=\"isDataExists\" style=\"margin:0px auto;\">\n        <pagination-controls id=\"paginationCtrl\" class=\"pagination float-right\" (pageChange)=\"pageChanged($event)\"\n          maxSize=\"6\" directionLinks=\"true\" autoHide=\"true\" responsive=\"true\" previousLabel=\"Prev\" nextLabel=\"Next\">\n        </pagination-controls>\n     \n      </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/mainComponents/devices/devices.component.sass":
/*!***************************************************************!*\
  !*** ./src/app/mainComponents/devices/devices.component.sass ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW5Db21wb25lbnRzL2RldmljZXMvZGV2aWNlcy5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/mainComponents/devices/devices.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/mainComponents/devices/devices.component.ts ***!
  \*************************************************************/
/*! exports provided: DevicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicesComponent", function() { return DevicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _common_components_citydistrict_citydistrict_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/components/citydistrict/citydistrict.component */ "./src/app/common/components/citydistrict/citydistrict.component.ts");
/* harmony import */ var _common_services_deviceserviceapi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/services/deviceserviceapi */ "./src/app/common/services/deviceserviceapi.ts");
/* harmony import */ var _common_models_page_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/models/page.model */ "./src/app/common/models/page.model.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _modalpopup_editviewdevices_editviewdevices_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modalpopup/editviewdevices/editviewdevices.component */ "./src/app/mainComponents/devices/modalpopup/editviewdevices/editviewdevices.component.ts");








var DevicesComponent = /** @class */ (function () {
    function DevicesComponent(deviceapi, modalService) {
        this.deviceapi = deviceapi;
        this.modalService = modalService;
        this.showFilters = false;
        this.searchText = '';
        this.page = new _common_models_page_model__WEBPACK_IMPORTED_MODULE_5__["PageModel"]();
        this.isDataExists = false;
        this.pageSizeValues = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].pageSizeValues;
        this.pageSize = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].pageSize;
        this.intilPageNumber = 0;
        this.searchDate = '';
        this.districtId = '';
        this.cityId = '';
        this.rtoId = '';
        this.noDataText = 'No Device Details Available';
    }
    DevicesComponent.prototype.isCityDistrictValid = function (formValid) {
        this.cityDistrictCompData = formValid;
    };
    DevicesComponent.prototype.ngOnInit = function () {
        this.getAllDevices();
    };
    DevicesComponent.prototype.toggleFilters = function () {
        this.showFilters = !this.showFilters;
    };
    DevicesComponent.prototype.editviewdevices = function (deviceDetails, eventType) {
        var _this = this;
        deviceDetails.selectedEvent = eventType;
        var modalRef = this.modalService.open(_modalpopup_editviewdevices_editviewdevices_component__WEBPACK_IMPORTED_MODULE_7__["EditviewdevicesComponent"], {
            size: 'lg', backdrop: 'static',
            keyboard: false
        });
        modalRef.componentInstance.selectedDeviceDetails = deviceDetails;
        modalRef.result.then(function (result) {
            if (result === 'refreshContent') {
                _this.intilPageNumber = 0;
                _this.getAllDevices();
                _this.p = 1;
            }
        });
    };
    DevicesComponent.prototype.changePageSize = function () {
        this.getAllDevices();
    };
    DevicesComponent.prototype.pageChanged = function (event) {
        this.p = event;
        this.intilPageNumber = event - 1;
        this.getAllDevices();
    };
    DevicesComponent.prototype.applyFilters = function (parentForm) {
        this.parentFormSubmitted = true;
        this.CitydistrictComponent.validateChildForm(this.parentFormSubmitted);
        if (!parentForm.valid || !this.cityDistrictCompData.isFormValid) {
            return;
        }
        else {
            this.districtId = this.cityDistrictCompData.districtName;
            this.cityId = this.cityDistrictCompData.cityName;
            this.rtoId = this.cityDistrictCompData.rtoOfficeName;
            this.showFilters = false;
            this.getAllDevices();
        }
    };
    DevicesComponent.prototype.refreshPage = function () {
        this.intilPageNumber = 0;
        this.pageSize = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].pageSize;
        this.searchDate = '';
        this.searchText = '';
        this.districtId = '';
        this.cityId = '';
        this.getAllDevices();
    };
    DevicesComponent.prototype.getAllDevices = function () {
        var _this = this;
        this.deviceapi.getAllDevices(this.intilPageNumber, this.pageSize, this.searchDate, this.searchText, this.districtId, this.cityId, this.rtoId)
            .subscribe(function (_data) {
            _this.deviceData = _data.content;
            _this.page = _data.page;
            _this.isDataExists = (_this.deviceData.length > 0);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('validateCityDistrict'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _common_components_citydistrict_citydistrict_component__WEBPACK_IMPORTED_MODULE_3__["CitydistrictComponent"])
    ], DevicesComponent.prototype, "CitydistrictComponent", void 0);
    DevicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-devices',
            template: __webpack_require__(/*! ./devices.component.html */ "./src/app/mainComponents/devices/devices.component.html"),
            styles: [__webpack_require__(/*! ./devices.component.sass */ "./src/app/mainComponents/devices/devices.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_services_deviceserviceapi__WEBPACK_IMPORTED_MODULE_4__["DevicesService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], DevicesComponent);
    return DevicesComponent;
}());



/***/ }),

/***/ "./src/app/mainComponents/devices/devices.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/mainComponents/devices/devices.module.ts ***!
  \**********************************************************/
/*! exports provided: DevicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicesModule", function() { return DevicesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/core.module */ "./src/app/mainComponents/core/core.module.ts");
/* harmony import */ var _devices_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./devices.component */ "./src/app/mainComponents/devices/devices.component.ts");
/* harmony import */ var _devicesRoutingModule__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./devicesRoutingModule */ "./src/app/mainComponents/devices/devicesRoutingModule.ts");
/* harmony import */ var _devicereport_devicereport_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./devicereport/devicereport.component */ "./src/app/mainComponents/devices/devicereport/devicereport.component.ts");
/* harmony import */ var _devicecommunication_devicecommunication_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./devicecommunication/devicecommunication.component */ "./src/app/mainComponents/devices/devicecommunication/devicecommunication.component.ts");
/* harmony import */ var _movement_movement_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./movement/movement.component */ "./src/app/mainComponents/devices/movement/movement.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _rawdata_rawdata_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./rawdata/rawdata.component */ "./src/app/mainComponents/devices/rawdata/rawdata.component.ts");
/* harmony import */ var _locationmonitoring_locationmonitoring_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./locationmonitoring/locationmonitoring.component */ "./src/app/mainComponents/devices/locationmonitoring/locationmonitoring.component.ts");
/* harmony import */ var _emergencymonitoring_emergencymonitoring_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./emergencymonitoring/emergencymonitoring.component */ "./src/app/mainComponents/devices/emergencymonitoring/emergencymonitoring.component.ts");
/* harmony import */ var _healthmonitoring_healthmonitoring_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./healthmonitoring/healthmonitoring.component */ "./src/app/mainComponents/devices/healthmonitoring/healthmonitoring.component.ts");
/* harmony import */ var _modalpopup_editviewdevices_editviewdevices_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modalpopup/editviewdevices/editviewdevices.component */ "./src/app/mainComponents/devices/modalpopup/editviewdevices/editviewdevices.component.ts");
/* harmony import */ var _modalpopup_editviewdevicecomm_editviewdevicecomm_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modalpopup/editviewdevicecomm/editviewdevicecomm.component */ "./src/app/mainComponents/devices/modalpopup/editviewdevicecomm/editviewdevicecomm.component.ts");
/* harmony import */ var _modalpopup_editviewmovement_editviewmovement_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./modalpopup/editviewmovement/editviewmovement.component */ "./src/app/mainComponents/devices/modalpopup/editviewmovement/editviewmovement.component.ts");
/* harmony import */ var _modalpopup_editviewemergency_editviewemergency_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./modalpopup/editviewemergency/editviewemergency.component */ "./src/app/mainComponents/devices/modalpopup/editviewemergency/editviewemergency.component.ts");
/* harmony import */ var _modalpopup_editviewhealth_editviewhealth_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./modalpopup/editviewhealth/editviewhealth.component */ "./src/app/mainComponents/devices/modalpopup/editviewhealth/editviewhealth.component.ts");
/* harmony import */ var _modalpopup_editviewrawdata_editviewrawdata_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./modalpopup/editviewrawdata/editviewrawdata.component */ "./src/app/mainComponents/devices/modalpopup/editviewrawdata/editviewrawdata.component.ts");























var DevicesModule = /** @class */ (function () {
    function DevicesModule() {
    }
    DevicesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_devices_component__WEBPACK_IMPORTED_MODULE_7__["DevicesComponent"],
                _devicereport_devicereport_component__WEBPACK_IMPORTED_MODULE_9__["DevicereportComponent"],
                _devicecommunication_devicecommunication_component__WEBPACK_IMPORTED_MODULE_10__["DevicecommunicationComponent"],
                _movement_movement_component__WEBPACK_IMPORTED_MODULE_11__["MovementComponent"],
                _rawdata_rawdata_component__WEBPACK_IMPORTED_MODULE_13__["RawdataComponent"],
                _locationmonitoring_locationmonitoring_component__WEBPACK_IMPORTED_MODULE_14__["LocationmonitoringComponent"],
                _emergencymonitoring_emergencymonitoring_component__WEBPACK_IMPORTED_MODULE_15__["EmergencymonitoringComponent"],
                _healthmonitoring_healthmonitoring_component__WEBPACK_IMPORTED_MODULE_16__["HealthmonitoringComponent"],
                _modalpopup_editviewdevices_editviewdevices_component__WEBPACK_IMPORTED_MODULE_17__["EditviewdevicesComponent"],
                _modalpopup_editviewdevicecomm_editviewdevicecomm_component__WEBPACK_IMPORTED_MODULE_18__["EditviewdevicecommComponent"],
                _modalpopup_editviewmovement_editviewmovement_component__WEBPACK_IMPORTED_MODULE_19__["EditviewmovementComponent"],
                _modalpopup_editviewemergency_editviewemergency_component__WEBPACK_IMPORTED_MODULE_20__["EditviewemergencyComponent"],
                _modalpopup_editviewhealth_editviewhealth_component__WEBPACK_IMPORTED_MODULE_21__["EditviewhealthComponent"],
                _modalpopup_editviewrawdata_editviewrawdata_component__WEBPACK_IMPORTED_MODULE_22__["EditviewrawdataComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _devicesRoutingModule__WEBPACK_IMPORTED_MODULE_8__["DevicesRoutingModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_12__["NgxPaginationModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsDatepickerModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"]
            ],
            entryComponents: [
                _modalpopup_editviewdevices_editviewdevices_component__WEBPACK_IMPORTED_MODULE_17__["EditviewdevicesComponent"],
                _modalpopup_editviewdevicecomm_editviewdevicecomm_component__WEBPACK_IMPORTED_MODULE_18__["EditviewdevicecommComponent"],
                _modalpopup_editviewmovement_editviewmovement_component__WEBPACK_IMPORTED_MODULE_19__["EditviewmovementComponent"],
                _modalpopup_editviewemergency_editviewemergency_component__WEBPACK_IMPORTED_MODULE_20__["EditviewemergencyComponent"],
                _modalpopup_editviewhealth_editviewhealth_component__WEBPACK_IMPORTED_MODULE_21__["EditviewhealthComponent"],
                _modalpopup_editviewrawdata_editviewrawdata_component__WEBPACK_IMPORTED_MODULE_22__["EditviewrawdataComponent"]
            ],
        })
    ], DevicesModule);
    return DevicesModule;
}());



/***/ }),

/***/ "./src/app/mainComponents/devices/devicesRoutingModule.ts":
/*!****************************************************************!*\
  !*** ./src/app/mainComponents/devices/devicesRoutingModule.ts ***!
  \****************************************************************/
/*! exports provided: DevicesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicesRoutingModule", function() { return DevicesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _devices_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./devices.component */ "./src/app/mainComponents/devices/devices.component.ts");
/* harmony import */ var _devicereport_devicereport_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./devicereport/devicereport.component */ "./src/app/mainComponents/devices/devicereport/devicereport.component.ts");
/* harmony import */ var _devicecommunication_devicecommunication_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./devicecommunication/devicecommunication.component */ "./src/app/mainComponents/devices/devicecommunication/devicecommunication.component.ts");
/* harmony import */ var _movement_movement_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./movement/movement.component */ "./src/app/mainComponents/devices/movement/movement.component.ts");
/* harmony import */ var _rawdata_rawdata_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rawdata/rawdata.component */ "./src/app/mainComponents/devices/rawdata/rawdata.component.ts");
/* harmony import */ var _locationmonitoring_locationmonitoring_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./locationmonitoring/locationmonitoring.component */ "./src/app/mainComponents/devices/locationmonitoring/locationmonitoring.component.ts");
/* harmony import */ var _emergencymonitoring_emergencymonitoring_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./emergencymonitoring/emergencymonitoring.component */ "./src/app/mainComponents/devices/emergencymonitoring/emergencymonitoring.component.ts");
/* harmony import */ var _healthmonitoring_healthmonitoring_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./healthmonitoring/healthmonitoring.component */ "./src/app/mainComponents/devices/healthmonitoring/healthmonitoring.component.ts");











var routes = [
    { path: '', component: _devices_component__WEBPACK_IMPORTED_MODULE_3__["DevicesComponent"], },
    { path: 'devicereport', component: _devicereport_devicereport_component__WEBPACK_IMPORTED_MODULE_4__["DevicereportComponent"], },
    { path: 'communication', component: _devicecommunication_devicecommunication_component__WEBPACK_IMPORTED_MODULE_5__["DevicecommunicationComponent"], },
    { path: 'movement', component: _movement_movement_component__WEBPACK_IMPORTED_MODULE_6__["MovementComponent"], },
    { path: 'rawdata', component: _rawdata_rawdata_component__WEBPACK_IMPORTED_MODULE_7__["RawdataComponent"], },
    { path: 'locationmonitoring', component: _locationmonitoring_locationmonitoring_component__WEBPACK_IMPORTED_MODULE_8__["LocationmonitoringComponent"], },
    { path: 'emergencymonitoring', component: _emergencymonitoring_emergencymonitoring_component__WEBPACK_IMPORTED_MODULE_9__["EmergencymonitoringComponent"], },
    { path: 'healthmonitoring', component: _healthmonitoring_healthmonitoring_component__WEBPACK_IMPORTED_MODULE_10__["HealthmonitoringComponent"], }
];
var DevicesRoutingModule = /** @class */ (function () {
    function DevicesRoutingModule() {
    }
    DevicesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DevicesRoutingModule);
    return DevicesRoutingModule;
}());



/***/ }),

/***/ "./src/app/mainComponents/devices/emergencymonitoring/emergencymonitoring.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/mainComponents/devices/emergencymonitoring/emergencymonitoring.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container top-header p-b-3\">\n  <div class=\"row head-block no-gutters bdr-bottom m-b-3 p-t-1\">\n    <div class=\"col-md-6 p-l-0\">\n      <h4>Emergency Monitoring</h4>\n    </div>\n    <div class=\"col-md-5 text-right\">\n        <span class=\"btn-circle\"><i class=\"icon-ab_download\"></i></span>\n        <span class=\"btn-circle m-r-1\" (click)=\"refreshPage()\"><i class=\"icon-ab-refresh\"></i></span>\n    </div>\n    <div class=\"col-md-1 p-r-0 text-right\">\n      <div class=\"filters\">\n        <button type=\"button\" class=\"filters-button\" [ngClass]=\"{ 'active': showFilters}\" (click)=\"toggleFilters()\">\n          <i class=\"icon-ab-searchfilter\"></i>\n          <span>Filters</span>\n        </button>\n        <div class=\"filters-body \" *ngIf=\"showFilters\">\n          <div class=\"arrow-up\"></div>\n          <form name=\"form\" (ngSubmit)=\"f.form.valid && applyFilters(f)\" #f=\"ngForm\" novalidate>\n            <app-citydistrict #validateCityDistrict (isCityDistrictValid)=\"isCityDistrictValid($event)\"\n              [cityDistrictConfig]='cityDistrictConfig'></app-citydistrict>\n\n            <div class=\"form-group\">\n              <label for=\"email\">DATE</label>\n              <app-datepicker class=\"form-control bdr-none p-a-0\" name=\"searchDate\" [(ngModel)]=\"searchDate\"\n                #searchDatectrl=\"ngModel\" appForbiddenName=\"fred\"\n                [ngClass]=\"{ 'is-invalid': f.submitted && searchDatectrl.invalid }\" required\n                [datePickerModel]=\"datePickerModel\" searchDatectrl>\n              </app-datepicker>\n              <div *ngIf=\"f.submitted && searchDatectrl.invalid\" class=\"invalid-feedback\">\n                <div *ngIf=\"searchDatectrl.errors.required\">BOD is required</div>\n              </div>\n            </div>\n            <div class=\"form-group m-t-3\">\n              <button class=\"btn btn-primary w-100p\" type=\"submit\">Search</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-12 p-a-0 p-t-1\">\n      <nav aria-label=\"breadcrumb\">\n        <ol class=\"breadcrumb\">\n          <li class=\"breadcrumb-item\"><a class=\"text-abhaya\" [routerLink]=\"['/dashboard']\">Home</a></li>\n          <li class=\"breadcrumb-item\" aria-current=\"page\"><a class=\"text-abhaya\" [routerLink]=\"['/devices']\">Devices</a>\n          </li>\n          <li class=\"breadcrumb-item active text-secondary\" aria-current=\"page\">Emergency Monitoring</li>\n        </ol>\n      </nav>\n    </div>\n  </div>\n\n  <div class=\"row no-gutters m-b-3\">\n      <div class=\"col-md-6 p-a-0\">\n          <div class=\"form-group abhaya-table-search focal-point\">\n            <i class=\"icon-ab-search\"></i>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchText\" (keydown.enter)=\"getEmergendyData()\"\n              placeholder=\"Search by IMEI / Vehicle No.\">\n            <span class=\"separator\"> </span>\n          </div>\n        </div>\n    <div class=\"col-md-6 p-a-0 text-primary text-right p-t-2\">\n      Total Records : <h5 class=\"total-records-text d-inline-block\"> {{page.totalElements}}</h5>\n    </div>\n   \n  </div>\n\n  <div class=\"row no-gutters pt-8\">\n    <table class=\"abhaya-table\">\n      <thead>\n        <tr>\n          <th>ID</th>\n          <th>IMEI No</th>\n          <th>Vehicle No</th>\n          <th>Latitude</th>\n          <th>Longitude</th>\n          <th>Network Date</th>\n          <th>Network Time</th>\n          <th>Reply No</th>\n          <th></th>\n        </tr>\n      </thead>\n      <tbody *ngIf=\"isDataExists\">\n        <tr\n          *ngFor=\"let details of emergencyDetails | paginate: { id: 'paginationCtrl', itemsPerPage: page.size, currentPage: p, totalItems: page.totalElements }\">\n          <td>{{details.ebpPacketDataId}}</td>\n          <td>{{details.imeiNumber}}</td>\n          <td>{{details.vehicleRegNo}}</td>\n          <td>{{details.latitude}}</td>\n          <td>{{details.longitude}}</td>\n          <td>{{details.networkDate}}</td>\n          <td>{{details.networkTime}}</td>\n          <td>{{details.replyNumber}}</td>\n          <td>\n            <a class=\"\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n              aria-expanded=\"false\"><i class=\"icon-ab_more\"></i></a>\n            <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdown\">\n              <div class=\"arrow-up\"></div>\n              <a (click)=\"ViewEmergancy(details)\" class=\"dropdown-item\">View Details</a>\n            </div>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n    <app-nodata class=\"w-100p\" *ngIf=\"!isDataExists\" [noDataText]='noDataText'></app-nodata>\n    <div class=\"row no-gutters w-100p m-t-5\">\n        <div *ngIf=\"isDataExists\" class=\"float-left p-t-1 page-size\">\n            <span>Page Size :</span>\n            <select (change)=\"changePageSize()\" [(ngModel)]=\"pageSize\">\n              <option *ngFor=\"let number of pageSizeValues\" value=\"{{number}}\">{{number}}</option>\n            </select>\n          </div>\n      <div *ngIf=\"isDataExists\" style=\"margin:0px auto;\">\n        <pagination-controls id=\"paginationCtrl\" class=\"pagination float-right\" (pageChange)=\"pageChanged($event)\"\n          maxSize=\"6\" directionLinks=\"true\" autoHide=\"true\" responsive=\"true\" previousLabel=\"Prev\" nextLabel=\"Next\">\n        </pagination-controls>\n       \n      </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/mainComponents/devices/emergencymonitoring/emergencymonitoring.component.sass":
/*!***********************************************************************************************!*\
  !*** ./src/app/mainComponents/devices/emergencymonitoring/emergencymonitoring.component.sass ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW5Db21wb25lbnRzL2RldmljZXMvZW1lcmdlbmN5bW9uaXRvcmluZy9lbWVyZ2VuY3ltb25pdG9yaW5nLmNvbXBvbmVudC5zYXNzIn0= */"

/***/ }),

/***/ "./src/app/mainComponents/devices/emergencymonitoring/emergencymonitoring.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/mainComponents/devices/emergencymonitoring/emergencymonitoring.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: EmergencymonitoringComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmergencymonitoringComponent", function() { return EmergencymonitoringComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _common_components_citydistrict_citydistrict_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/components/citydistrict/citydistrict.component */ "./src/app/common/components/citydistrict/citydistrict.component.ts");
/* harmony import */ var _common_services_deviceserviceapi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/services/deviceserviceapi */ "./src/app/common/services/deviceserviceapi.ts");
/* harmony import */ var _common_models_page_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/models/page.model */ "./src/app/common/models/page.model.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! .././../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _modalpopup_editviewemergency_editviewemergency_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modalpopup/editviewemergency/editviewemergency.component */ "./src/app/mainComponents/devices/modalpopup/editviewemergency/editviewemergency.component.ts");








var EmergencymonitoringComponent = /** @class */ (function () {
    function EmergencymonitoringComponent(deviceapi, modalService) {
        this.deviceapi = deviceapi;
        this.modalService = modalService;
        this.showFilters = false;
        this.searchText = '';
        this.page = new _common_models_page_model__WEBPACK_IMPORTED_MODULE_5__["PageModel"]();
        this.isDataExists = false;
        this.pageSizeValues = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].pageSizeValues;
        this.pageSize = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].pageSize;
        this.intilPageNumber = 0;
        this.noDataText = 'No Emergency Data Available';
    }
    EmergencymonitoringComponent.prototype.isCityDistrictValid = function (formValid) {
        this.cityDistrictCompData = formValid;
    };
    EmergencymonitoringComponent.prototype.ngOnInit = function () {
        this.searchDate = '';
        this.getEmergendyData();
    };
    EmergencymonitoringComponent.prototype.toggleFilters = function () {
        this.showFilters = !this.showFilters;
    };
    EmergencymonitoringComponent.prototype.ViewEmergancy = function (emergancyData) {
        var modalRef = this.modalService.open(_modalpopup_editviewemergency_editviewemergency_component__WEBPACK_IMPORTED_MODULE_7__["EditviewemergencyComponent"], {
            size: 'lg', backdrop: 'static',
            keyboard: false
        });
        modalRef.componentInstance.selectedEmergencydata = emergancyData;
    };
    EmergencymonitoringComponent.prototype.changePageSize = function () {
        this.getEmergendyData();
    };
    EmergencymonitoringComponent.prototype.pageChanged = function (event) {
        this.p = event;
        this.intilPageNumber = event - 1;
        this.getEmergendyData();
    };
    EmergencymonitoringComponent.prototype.applyFilters = function (parentForm) {
        this.parentFormSubmitted = true;
        this.CitydistrictComponent.validateChildForm(this.parentFormSubmitted);
        if (!parentForm.valid || !this.cityDistrictCompData.isFormValid) {
            return;
        }
        else {
            this.showFilters = false;
            this.getEmergendyData();
        }
    };
    EmergencymonitoringComponent.prototype.refreshPage = function () {
        this.intilPageNumber = 0;
        this.pageSize = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].pageSize;
        this.searchDate = '';
        this.searchText = '';
        this.getEmergendyData();
    };
    EmergencymonitoringComponent.prototype.getEmergendyData = function () {
        var _this = this;
        this.deviceapi.getemergancyDetails(this.intilPageNumber, this.pageSize, this.searchDate, this.searchText)
            .subscribe(function (_data) {
            _this.emergencyDetails = _data.content;
            _this.page = _data.page;
            _this.isDataExists = (_this.emergencyDetails.length > 0);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('validateCityDistrict'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _common_components_citydistrict_citydistrict_component__WEBPACK_IMPORTED_MODULE_3__["CitydistrictComponent"])
    ], EmergencymonitoringComponent.prototype, "CitydistrictComponent", void 0);
    EmergencymonitoringComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-emergencymonitoring',
            template: __webpack_require__(/*! ./emergencymonitoring.component.html */ "./src/app/mainComponents/devices/emergencymonitoring/emergencymonitoring.component.html"),
            styles: [__webpack_require__(/*! ./emergencymonitoring.component.sass */ "./src/app/mainComponents/devices/emergencymonitoring/emergencymonitoring.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_services_deviceserviceapi__WEBPACK_IMPORTED_MODULE_4__["DevicesService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], EmergencymonitoringComponent);
    return EmergencymonitoringComponent;
}());



/***/ }),

/***/ "./src/app/mainComponents/devices/healthmonitoring/healthmonitoring.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/mainComponents/devices/healthmonitoring/healthmonitoring.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container top-header p-b-3\">\n  <div class=\"row head-block no-gutters bdr-bottom m-b-3 p-t-1\">\n    <div class=\"col-md-6 p-l-0\">\n      <h4>Health Monitoring</h4>\n    </div>\n    <div class=\"col-md-5 text-right\">\n        <span class=\"btn-circle\"><i class=\"icon-ab_download\"></i></span>\n        <span class=\"btn-circle m-r-1\" (click)=\"refreshPage()\"><i class=\"icon-ab-refresh\"></i></span>\n    </div>\n    <div class=\"col-md-1 p-r-0 text-right\">\n      <div class=\"filters\">\n        <button type=\"button\" class=\"filters-button\" [ngClass]=\"{ 'active': showFilters}\" (click)=\"toggleFilters()\">\n          <i class=\"icon-ab-searchfilter\"></i>\n          <span>Filters</span>\n        </button>\n        <div class=\"filters-body \" *ngIf=\"showFilters\">\n          <div class=\"arrow-up\"></div>\n          <form name=\"form\" (ngSubmit)=\"f.form.valid && applyFilters(f)\" #f=\"ngForm\" novalidate>\n            <app-citydistrict #validateCityDistrict (isCityDistrictValid)=\"isCityDistrictValid($event)\"\n              [cityDistrictConfig]='cityDistrictConfig'></app-citydistrict>\n\n              <div class=\"form-group\">\n                  <label for=\"email\">DATE</label>\n                  <app-datepicker\n                      class=\"form-control bdr-none p-a-0\"\n                      name=\"searchDate\" \n                      [(ngModel)]=\"searchDate\"\n                      #searchDatectrl= \"ngModel\"\n                      appForbiddenName=\"fred\"\n                      [ngClass]=\"{ 'is-invalid': f.submitted && searchDatectrl.invalid }\"\n                      required \n                      [datePickerModel]=\"datePickerModel\"          \n                      searchDatectrl>\n                  </app-datepicker>\n               <div *ngIf=\"f.submitted && searchDatectrl.invalid\" class=\"invalid-feedback\">\n                  <div *ngIf=\"searchDatectrl.errors.required\">BOD is required</div>\n               </div>\n              </div>\n            <div class=\"form-group m-t-3\">\n              <button class=\"btn btn-primary w-100p\" type=\"submit\">Search</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-12 p-a-0 p-t-1\">\n      <nav aria-label=\"breadcrumb\">\n        <ol class=\"breadcrumb\">\n          <li class=\"breadcrumb-item\"><a class=\"text-abhaya\" [routerLink]=\"['/dashboard']\">Home</a></li>\n          <li class=\"breadcrumb-item\" aria-current=\"page\"><a class=\"text-abhaya\" [routerLink]=\"['/devices']\">Devices</a></li>\n          <li class=\"breadcrumb-item active text-secondary\" aria-current=\"page\">Health Monitoring</li>\n        </ol>\n      </nav>\n    </div>\n  </div>\n\n  <div class=\"row no-gutters m-b-3\">\n      <div class=\"col-md-6 p-a-0\">\n          <div class=\"form-group abhaya-table-search focal-point\">\n            <i class=\"icon-ab-search\"></i>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchText\" (keydown.enter)=\"getHealthData()\" placeholder=\"Search by IMEI Number\">\n            <span class=\"separator\"> </span>\n          </div>\n        </div>\n    <div class=\"col-md-6 p-a-0 text-primary text-right p-t-2\">\n      Total Records : <h5 class=\"total-records-text d-inline-block\"> {{page.totalElements}}</h5>\n    </div>\n  \n  </div>\n\n  <div class=\"row no-gutters pt-8\">\n    <table class=\"abhaya-table\">\n      <thead>\n        <tr>\n          <th>ID</th>\n            <th>IMEI No</th>\n            <th>Battery %</th>\n            <th>Digital IO Status</th>\n            <th>Low Battery Thr Value</th>\n            <th>Memory %</th>\n            <th>Network Date</th>\n            <th>Network Time</th>\n            <th>Vendor ID</th>\n          <th></th>\n        </tr>\n      </thead>\n     <tbody *ngIf=\"isDataExists\">\n        <tr *ngFor=\"let details of healthDetails | paginate: { id: 'paginationCtrl', itemsPerPage: page.size, currentPage: p, totalItems: page.totalElements }\">\n          <td>{{details.hmpPacketDataId}}</td>\n          <td>{{details.imeiNumber}}</td>\n          <td>{{details.batteryPercentage}}</td>\n          <td>{{details.digitalIOStatus}}</td>\n          <td>{{details.lowBatteryThrValue}}</td>\n          <td>{{details.memoryPercentage}}</td>\n          <td>{{details.networkDate}}</td>\n          <td>{{details.networkTime}}</td>\n          <td>{{details.vendorId}}</td>\n            <td>\n              <a class=\"\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n                aria-expanded=\"false\"><i class=\"icon-ab_more\"></i></a>\n              <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdown\">\n                <div class=\"arrow-up\"></div>\n                <a (click)=\"viewHealthDetails(details)\" class=\"dropdown-item\">View Details</a>\n              </div>\n            </td>\n          </tr>\n     </tbody>\n    </table>\n    <app-nodata class=\"w-100p\" *ngIf=\"!isDataExists\" [noDataText]='noDataText'></app-nodata>\n    <div class=\"row no-gutters w-100p m-t-5\">\n        <div *ngIf=\"isDataExists\" class=\"float-left p-t-1 page-size\">\n            <span>Page Size :</span>\n            <select (change)=\"changePageSize()\" [(ngModel)]=\"pageSize\">\n              <option *ngFor=\"let number of pageSizeValues\" value=\"{{number}}\">{{number}}</option>\n            </select>\n          </div>\n        <div *ngIf=\"isDataExists\" style=\"margin:0px auto;\">\n          <pagination-controls id=\"paginationCtrl\" class=\"pagination float-right\" (pageChange)=\"pageChanged($event)\" maxSize=\"6\"\n            directionLinks=\"true\" autoHide=\"true\" responsive=\"true\" previousLabel=\"Prev\" nextLabel=\"Next\">\n          </pagination-controls>\n         \n        </div>\n      </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/mainComponents/devices/healthmonitoring/healthmonitoring.component.sass":
/*!*****************************************************************************************!*\
  !*** ./src/app/mainComponents/devices/healthmonitoring/healthmonitoring.component.sass ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW5Db21wb25lbnRzL2RldmljZXMvaGVhbHRobW9uaXRvcmluZy9oZWFsdGhtb25pdG9yaW5nLmNvbXBvbmVudC5zYXNzIn0= */"

/***/ }),

/***/ "./src/app/mainComponents/devices/healthmonitoring/healthmonitoring.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/mainComponents/devices/healthmonitoring/healthmonitoring.component.ts ***!
  \***************************************************************************************/
/*! exports provided: HealthmonitoringComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthmonitoringComponent", function() { return HealthmonitoringComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _common_components_citydistrict_citydistrict_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/components/citydistrict/citydistrict.component */ "./src/app/common/components/citydistrict/citydistrict.component.ts");
/* harmony import */ var _common_services_deviceserviceapi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/services/deviceserviceapi */ "./src/app/common/services/deviceserviceapi.ts");
/* harmony import */ var _common_models_page_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/models/page.model */ "./src/app/common/models/page.model.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! .././../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _modalpopup_editviewhealth_editviewhealth_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modalpopup/editviewhealth/editviewhealth.component */ "./src/app/mainComponents/devices/modalpopup/editviewhealth/editviewhealth.component.ts");








var HealthmonitoringComponent = /** @class */ (function () {
    function HealthmonitoringComponent(deviceapi, modalService) {
        this.deviceapi = deviceapi;
        this.modalService = modalService;
        this.showFilters = false;
        this.searchText = '';
        this.page = new _common_models_page_model__WEBPACK_IMPORTED_MODULE_5__["PageModel"]();
        this.isDataExists = false;
        this.pageSizeValues = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].pageSizeValues;
        this.pageSize = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].pageSize;
        this.intilPageNumber = 0;
        this.noDataText = 'No Health Monitoring Details Available';
    }
    HealthmonitoringComponent.prototype.isCityDistrictValid = function (formValid) {
        this.cityDistrictCompData = formValid;
    };
    HealthmonitoringComponent.prototype.ngOnInit = function () {
        this.searchDate = '';
        this.getHealthData();
    };
    HealthmonitoringComponent.prototype.toggleFilters = function () {
        this.showFilters = !this.showFilters;
    };
    HealthmonitoringComponent.prototype.viewHealthDetails = function (healthDetails) {
        var modalRef = this.modalService.open(_modalpopup_editviewhealth_editviewhealth_component__WEBPACK_IMPORTED_MODULE_7__["EditviewhealthComponent"], {
            size: 'lg', backdrop: 'static',
            keyboard: false
        });
        modalRef.componentInstance.selectedHealthDetails = healthDetails;
    };
    HealthmonitoringComponent.prototype.changePageSize = function () {
        this.getHealthData();
    };
    HealthmonitoringComponent.prototype.pageChanged = function (event) {
        this.p = event;
        this.intilPageNumber = event - 1;
        this.getHealthData();
    };
    HealthmonitoringComponent.prototype.applyFilters = function (parentForm) {
        this.parentFormSubmitted = true;
        this.CitydistrictComponent.validateChildForm(this.parentFormSubmitted);
        if (!parentForm.valid || !this.cityDistrictCompData.isFormValid) {
            return;
        }
        else {
            this.showFilters = false;
            this.getHealthData();
        }
    };
    HealthmonitoringComponent.prototype.refreshPage = function () {
        this.intilPageNumber = 0;
        this.pageSize = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].pageSize;
        this.searchDate = '';
        this.searchText = '';
        this.getHealthData();
    };
    HealthmonitoringComponent.prototype.getHealthData = function () {
        var _this = this;
        this.deviceapi.getHealthData(this.intilPageNumber, this.pageSize, this.searchDate, this.searchText)
            .subscribe(function (_data) {
            _this.healthDetails = _data.content;
            _this.page = _data.page;
            _this.isDataExists = (_this.healthDetails.length > 0);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('validateCityDistrict'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _common_components_citydistrict_citydistrict_component__WEBPACK_IMPORTED_MODULE_3__["CitydistrictComponent"])
    ], HealthmonitoringComponent.prototype, "CitydistrictComponent", void 0);
    HealthmonitoringComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-healthmonitoring',
            template: __webpack_require__(/*! ./healthmonitoring.component.html */ "./src/app/mainComponents/devices/healthmonitoring/healthmonitoring.component.html"),
            styles: [__webpack_require__(/*! ./healthmonitoring.component.sass */ "./src/app/mainComponents/devices/healthmonitoring/healthmonitoring.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_services_deviceserviceapi__WEBPACK_IMPORTED_MODULE_4__["DevicesService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], HealthmonitoringComponent);
    return HealthmonitoringComponent;
}());



/***/ }),

/***/ "./src/app/mainComponents/devices/locationmonitoring/locationmonitoring.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/mainComponents/devices/locationmonitoring/locationmonitoring.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container top-header p-b-3\">\n  <div class=\"row head-block no-gutters bdr-bottom m-b-3 p-t-1\">\n    <div class=\"col-md-6 p-l-0\">\n      <h4>Location Details</h4>\n    </div>\n    <div class=\"col-md-5 text-right\">\n        <span class=\"m-r-2 btn-circle\"><i class=\"icon-ab_download\"></i></span>\n        <span (click)=\"refreshPage()\" class=\"btn-circle\"><i class=\"icon-ab-refresh\"></i></span>\n      </div>\n    <div class=\"col-md-1 p-r-0 text-right\">\n      <div class=\"filters\">\n        <button type=\"button\" class=\"filters-button\" [ngClass]=\"{ 'active': showFilters}\" (click)=\"toggleFilters()\">\n          <i class=\"icon-ab-searchfilter\"></i>\n          <span>Filters</span>\n        </button>\n        <div class=\"filters-body \" *ngIf=\"showFilters\">\n          <div class=\"arrow-up\"></div>\n          <form name=\"form\" (ngSubmit)=\"f.form.valid && applyFilters(f)\" #f=\"ngForm\" novalidate>\n            <app-citydistrict #validateCityDistrict (isCityDistrictValid)=\"isCityDistrictValid($event)\"\n              [cityDistrictConfig]='cityDistrictConfig'></app-citydistrict>\n\n            <div class=\"form-group\">\n              <label for=\"email\">DATE</label>\n              <app-datepicker class=\"form-control bdr-none p-a-0\" name=\"searchDate\" [(ngModel)]=\"searchDate\"\n                #searchDatectrl=\"ngModel\" appForbiddenName=\"fred\"\n                [ngClass]=\"{ 'is-invalid': f.submitted && searchDatectrl.invalid }\" required\n                [datePickerModel]=\"datePickerModel\" searchDatectrl>\n              </app-datepicker>\n              <div *ngIf=\"f.submitted && searchDatectrl.invalid\" class=\"invalid-feedback\">\n                <div *ngIf=\"searchDatectrl.errors.required\">BOD is required</div>\n              </div>\n            </div>\n            <div class=\"form-group m-t-3\">\n              <button class=\"btn btn-primary w-100p\" type=\"submit\">Search</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-12 p-a-0 p-t-1\">\n      <nav aria-label=\"breadcrumb\">\n        <ol class=\"breadcrumb\">\n          <li class=\"breadcrumb-item\"><a class=\"text-abhaya\" [routerLink]=\"['/dashboard']\">Home</a></li>\n          <li class=\"breadcrumb-item\" aria-current=\"page\"><a class=\"text-abhaya\" [routerLink]=\"['/devices']\">Devices</a></li>\n          <li class=\"breadcrumb-item active text-secondary\" aria-current=\"page\">Location Details</li>\n        </ol>\n      </nav>\n    </div>\n  </div>\n\n  <div class=\"row no-gutters m-b-3\">\n      <div class=\"col-md-4 p-a-0\">\n          <div class=\"form-group w-88p abhaya-table-search focal-point\">\n            <i class=\"icon-ab-search\"></i>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchText\" (keydown.enter)=\"getLocationData()\"\n              placeholder=\"Search by IMEI / Vehicle No.\">\n            <span class=\"separator\"> </span>\n          </div>\n        </div>\n    <div class=\"col-md-8 p-a-0 text-right text-primary p-t-2\">\n      Total Records : <h5 class=\"total-records-text d-inline-block\"> {{page.totalElements}}</h5>\n    </div>\n    \n\n  </div>\n\n  <div class=\"row no-gutters pt-8\">\n    <table class=\"abhaya-table\">\n      <thead>\n        <tr>\n          <th>ID</th>\n          <th>IMEI No</th>\n          <th>Vehicle No</th>\n          <th>Vendor ID</th>\n          <th>Latitude</th>\n          <th>Longitude</th>\n          <th>Network Date</th>\n          <th>Network Time</th>\n          <th></th>\n        </tr>\n      </thead>\n      <tbody *ngIf=\"isDataExists\">\n        <tr\n          *ngFor=\"let details of locationDetails | paginate: { id: 'paginationCtrl', itemsPerPage: page.size, currentPage: p, totalItems: page.totalElements }\">\n          <td>{{details.id}}</td>\n            <td>{{details.imei}}</td>\n            <td>{{details.vehicleRegNo}}</td>\n            <td>{{details.vendorId}}</td>\n            <td>{{details.latitude}}</td>\n            <td>{{details.longitude}}</td>\n            <td>{{details.networkDate}}</td>\n            <td>{{details.networkTime}}</td>\n          <td>\n            <a class=\"\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n              aria-expanded=\"false\"><i class=\"icon-ab_more\"></i></a>\n            <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdown\">\n              <div class=\"arrow-up\"></div>\n              <a (click)=\"editviewLocation(details)\" class=\"dropdown-item\">View Details</a>\n            </div>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n    <app-nodata class=\"w-100p\" *ngIf=\"!isDataExists\" [noDataText]='noDataText'></app-nodata>\n    <div class=\"row no-gutters w-100p m-t-5\">\n        <div *ngIf=\"isDataExists\" class=\"float-left p-t-1 page-size\">\n            <span>Page Size :</span>\n            <select (change)=\"changePageSize()\" [(ngModel)]=\"pageSize\">\n              <option *ngFor=\"let number of pageSizeValues\" value=\"{{number}}\">{{number}}</option>\n            </select>\n          </div>\n      <div *ngIf=\"isDataExists\" style=\"margin:0px auto;\">\n        <pagination-controls id=\"paginationCtrl\" class=\"pagination float-right\" (pageChange)=\"pageChanged($event)\"\n          maxSize=\"6\" directionLinks=\"true\" autoHide=\"true\" responsive=\"true\" previousLabel=\"Prev\" nextLabel=\"Next\">\n        </pagination-controls>\n     \n      </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/mainComponents/devices/locationmonitoring/locationmonitoring.component.sass":
/*!*********************************************************************************************!*\
  !*** ./src/app/mainComponents/devices/locationmonitoring/locationmonitoring.component.sass ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW5Db21wb25lbnRzL2RldmljZXMvbG9jYXRpb25tb25pdG9yaW5nL2xvY2F0aW9ubW9uaXRvcmluZy5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/mainComponents/devices/locationmonitoring/locationmonitoring.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/mainComponents/devices/locationmonitoring/locationmonitoring.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: LocationmonitoringComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationmonitoringComponent", function() { return LocationmonitoringComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _common_components_citydistrict_citydistrict_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/components/citydistrict/citydistrict.component */ "./src/app/common/components/citydistrict/citydistrict.component.ts");
/* harmony import */ var _common_services_deviceserviceapi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/services/deviceserviceapi */ "./src/app/common/services/deviceserviceapi.ts");
/* harmony import */ var _common_models_page_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/models/page.model */ "./src/app/common/models/page.model.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! .././../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _modalpopup_editview_location_editview_location_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modalpopup/editview-location/editview-location.component */ "./src/app/mainComponents/devices/modalpopup/editview-location/editview-location.component.ts");








var LocationmonitoringComponent = /** @class */ (function () {
    function LocationmonitoringComponent(deviceapi, modalService) {
        this.deviceapi = deviceapi;
        this.modalService = modalService;
        this.showFilters = false;
        this.searchText = '';
        this.page = new _common_models_page_model__WEBPACK_IMPORTED_MODULE_5__["PageModel"]();
        this.isDataExists = false;
        this.pageSizeValues = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].pageSizeValues;
        this.pageSize = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].pageSize;
        this.intilPageNumber = 0;
        this.searchDate = '';
        this.noDataText = "No Location Details Available";
    }
    LocationmonitoringComponent.prototype.isCityDistrictValid = function (formValid) {
        this.cityDistrictCompData = formValid;
    };
    LocationmonitoringComponent.prototype.ngOnInit = function () {
        this.getLocationData();
    };
    LocationmonitoringComponent.prototype.toggleFilters = function () {
        this.showFilters = !this.showFilters;
    };
    LocationmonitoringComponent.prototype.editviewLocation = function (locationDetail) {
        var modalRef = this.modalService.open(_modalpopup_editview_location_editview_location_component__WEBPACK_IMPORTED_MODULE_7__["EditviewLocationComponent"], {
            size: 'lg', backdrop: 'static',
            keyboard: false
        });
        modalRef.componentInstance.selectedLocationDetails = locationDetail;
    };
    LocationmonitoringComponent.prototype.changePageSize = function () {
        this.getLocationData();
    };
    LocationmonitoringComponent.prototype.pageChanged = function (event) {
        this.p = event;
        this.intilPageNumber = event - 1;
        this.getLocationData();
    };
    LocationmonitoringComponent.prototype.applyFilters = function (parentForm) {
        this.parentFormSubmitted = true;
        this.CitydistrictComponent.validateChildForm(this.parentFormSubmitted);
        if (!parentForm.valid || !this.cityDistrictCompData.isFormValid) {
            return;
        }
        else {
            this.showFilters = false;
            this.getLocationData();
        }
    };
    LocationmonitoringComponent.prototype.refreshPage = function () {
        this.intilPageNumber = 0;
        this.pageSize = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].pageSize;
        this.searchDate = '';
        this.searchText = '';
        this.getLocationData();
    };
    LocationmonitoringComponent.prototype.getLocationData = function () {
        var _this = this;
        this.deviceapi.getLocationData(this.intilPageNumber, this.pageSize, this.searchDate, this.searchText)
            .subscribe(function (_data) {
            _this.locationDetails = _data.content;
            _this.page = _data.page;
            _this.isDataExists = (_this.locationDetails.length > 0);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('validateCityDistrict'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _common_components_citydistrict_citydistrict_component__WEBPACK_IMPORTED_MODULE_3__["CitydistrictComponent"])
    ], LocationmonitoringComponent.prototype, "CitydistrictComponent", void 0);
    LocationmonitoringComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-locationmonitoring',
            template: __webpack_require__(/*! ./locationmonitoring.component.html */ "./src/app/mainComponents/devices/locationmonitoring/locationmonitoring.component.html"),
            styles: [__webpack_require__(/*! ./locationmonitoring.component.sass */ "./src/app/mainComponents/devices/locationmonitoring/locationmonitoring.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_services_deviceserviceapi__WEBPACK_IMPORTED_MODULE_4__["DevicesService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], LocationmonitoringComponent);
    return LocationmonitoringComponent;
}());



/***/ }),

/***/ "./src/app/mainComponents/devices/modalpopup/editviewdevicecomm/editviewdevicecomm.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/mainComponents/devices/modalpopup/editviewdevicecomm/editviewdevicecomm.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h5 class=\"modal-title\">Device Communication Details of {{selectedCommDeviceDetails.imeiNumber}}</h5>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.close('refreshContent')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body p-r-2\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <h5>ID No</h5>\n      <h4>{{selectedCommDeviceDetails.deviceCommunicationId}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>IMEIumber</h5>\n      <h4>{{selectedCommDeviceDetails.imeiNumber}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Longitude</h5>\n      <h4>{{selectedCommDeviceDetails.langitude}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Latitude</h5>\n      <h4>{{selectedCommDeviceDetails.latitude}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Engine Status</h5>\n      <h4>{{selectedCommDeviceDetails.engineStatus}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Ignition Status</h5>\n      <h4>{{selectedCommDeviceDetails.ignitionStatus}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Network Date</h5>\n      <h4>{{selectedCommDeviceDetails.networkDate}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Prev Langitude</h5>\n      <h4>{{selectedCommDeviceDetails.prevLangitude}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Prev Latitude</h5>\n      <h4>{{selectedCommDeviceDetails.prevLatitude}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Created Date</h5>\n      <h4>{{selectedCommDeviceDetails.createdDate}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Location</h5>\n      <h4>{{selectedCommDeviceDetails.location}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Prev Network Date</h5>\n      <h4>{{selectedCommDeviceDetails.prevNetworkDate}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Prev Network Time</h5>\n      <h4>{{selectedCommDeviceDetails.prevNetworkTime}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Panic Status</h5>\n      <h4>{{selectedCommDeviceDetails.emergencyStatus}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Tamper Status</h5>\n      <h4>{{selectedCommDeviceDetails.tamperAlert}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Status</h5>\n      <h4>{{selectedCommDeviceDetails.status}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Is Over Speed</h5>\n      <h4>{{selectedCommDeviceDetails.isDeviceOverSpeed}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Updated Date</h5>\n      <h4>{{selectedCommDeviceDetails.updatedDate}}</h4>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/mainComponents/devices/modalpopup/editviewdevicecomm/editviewdevicecomm.component.sass":
/*!********************************************************************************************************!*\
  !*** ./src/app/mainComponents/devices/modalpopup/editviewdevicecomm/editviewdevicecomm.component.sass ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW5Db21wb25lbnRzL2RldmljZXMvbW9kYWxwb3B1cC9lZGl0dmlld2RldmljZWNvbW0vZWRpdHZpZXdkZXZpY2Vjb21tLmNvbXBvbmVudC5zYXNzIn0= */"

/***/ }),

/***/ "./src/app/mainComponents/devices/modalpopup/editviewdevicecomm/editviewdevicecomm.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/mainComponents/devices/modalpopup/editviewdevicecomm/editviewdevicecomm.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: EditviewdevicecommComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditviewdevicecommComponent", function() { return EditviewdevicecommComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _common_models_device_communication_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/models/device-communication-model */ "./src/app/common/models/device-communication-model.ts");




var EditviewdevicecommComponent = /** @class */ (function () {
    function EditviewdevicecommComponent(activeModal) {
        this.activeModal = activeModal;
    }
    EditviewdevicecommComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _common_models_device_communication_model__WEBPACK_IMPORTED_MODULE_3__["deviceCommunicationModel"])
    ], EditviewdevicecommComponent.prototype, "selectedCommDeviceDetails", void 0);
    EditviewdevicecommComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editviewdevicecomm',
            template: __webpack_require__(/*! ./editviewdevicecomm.component.html */ "./src/app/mainComponents/devices/modalpopup/editviewdevicecomm/editviewdevicecomm.component.html"),
            styles: [__webpack_require__(/*! ./editviewdevicecomm.component.sass */ "./src/app/mainComponents/devices/modalpopup/editviewdevicecomm/editviewdevicecomm.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]])
    ], EditviewdevicecommComponent);
    return EditviewdevicecommComponent;
}());



/***/ }),

/***/ "./src/app/mainComponents/devices/modalpopup/editviewdevices/editviewdevices.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/mainComponents/devices/modalpopup/editviewdevices/editviewdevices.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h5 class=\"modal-title\">{{pageTitle}}</h5>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.close('refreshContent')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body p-r-2\">\n  <div class=\"row\" *ngIf=\"viewDetails\">\n    <div class=\"col-md-6\">\n      <h5>ID</h5>\n      <h4>{{selectedDeviceDetails.id}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>IMEI Number</h5>\n      <h4>{{selectedDeviceDetails.imeiNumber}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>IMSI Number</h5>\n      <h4>{{selectedDeviceDetails.imsiNumber}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Serial Number</h5>\n      <h4>{{selectedDeviceDetails.serialNumber}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Sim number</h5>\n      <h4>{{selectedDeviceDetails.simNumber}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Vehicle No</h5>\n      <h4>{{selectedDeviceDetails.vehicleRegNo}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>IP Address</h5>\n      <h4>{{selectedDeviceDetails.ipAddress}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Signal Strength</h5>\n      <h4>{{selectedDeviceDetails.signalStrength}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Network Date</h5>\n      <h4>{{selectedDeviceDetails.networkDate}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Ntework Time</h5>\n      <h4>{{selectedDeviceDetails.networkTime}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Created Date</h5>\n      <h4>{{selectedDeviceDetails.createdDate}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Updated Date</h5>\n      <h4>{{selectedDeviceDetails.updatedDate}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Version</h5>\n      <h4>{{selectedDeviceDetails.version}}</h4>\n    </div>\n  </div>\n  <div class=\"row\">\n      <div class=\"col-md-12\">\n        <form name=\"form\" (ngSubmit)=\"f.form.valid && editDeviceDetails()\" #f=\"ngForm\" novalidate>\n          <table class=\"abhaya-table popup m-t-4 text-left\">\n            <thead>\n              <tr>\n                <th class=\"w-25p\">IMSI No</th>\n                <th class=\"w-25p\">Provider</th>\n                <th class=\"w-25p\">Mobile No</th>\n                <th class=\"w-25p\">Status</th>\n              </tr>\n            </thead>\n            <tbody *ngIf=\"simDetails.length > 0\">\n              <tr *ngFor=\"let details of simDetails; let idx = index\">\n                <td class=\"w-25p\">{{details.imsiNumber}}</td>\n                <td class=\"w-25p\">{{details.telecomProvider}}</td>\n                <td class=\"w-25p\" *ngIf=\"!viewDetails\">\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"mobileNumber[idx]\" #mobileNumberctrl=\"ngModel\"\n                    name=\"mobileNumber{{idx}}\" [ngClass]=\"{ 'is-invalid': f.submitted && mobileNumberctrl.invalid }\"\n                    minlength=\"{{ Validations.MOBILE_MIN_LENGTH }}\" maxlength=\"{{ Validations.MOBILE_MAX_LENGTH }}\"\n                    pattern=\"{{ Validations.MOBILE_PATTERN }}\" />\n                  <div *ngIf=\"f.submitted && mobileNumberctrl.invalid\" class=\"invalid-feedback\">\n                    <div *ngIf=\"mobileNumberctrl.errors?.minlength\">Mobile number must be 10 characters</div>\n                    <div *ngIf=\"mobileNumberctrl.errors?.maxlength\">Mobile number must be 10 characters</div>\n                    <div *ngIf=\"mobileNumberctrl.errors?.pattern\">Mobile number must be numeric</div>\n                  </div>\n  \n                </td>\n                <td class=\"w-25p\" *ngIf=\"viewDetails\">{{details.mobileNumber}}</td>\n                <td class=\"w-25p\">{{details.status}}</td>\n              </tr>\n            </tbody>\n          </table>\n          <div class=\"row\" >\n            <div class=\"w-100\" *ngIf=\"simDetails.length === 0\">\n              <div >\n                <h6 class=\"text-center text-red-medium\">No Sim Details Found</h6>\n              </div>\n            </div>\n          </div>\n          <div *ngIf=\"!mobileNumberField\" class=\"text-red-medium\"> Atleast One Mobile Number required! </div>\n          <span *ngIf=\"simDetails.length > 0\">\n            <button *ngIf=\"!viewDetails\" type=\"submit\" class=\"btn btn-primary m-t-1\">Update</button>\n          </span>\n        </form>\n      </div>\n    </div>\n\n\n\n\n\n\n</div>"

/***/ }),

/***/ "./src/app/mainComponents/devices/modalpopup/editviewdevices/editviewdevices.component.sass":
/*!**************************************************************************************************!*\
  !*** ./src/app/mainComponents/devices/modalpopup/editviewdevices/editviewdevices.component.sass ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW5Db21wb25lbnRzL2RldmljZXMvbW9kYWxwb3B1cC9lZGl0dmlld2RldmljZXMvZWRpdHZpZXdkZXZpY2VzLmNvbXBvbmVudC5zYXNzIn0= */"

/***/ }),

/***/ "./src/app/mainComponents/devices/modalpopup/editviewdevices/editviewdevices.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/mainComponents/devices/modalpopup/editviewdevices/editviewdevices.component.ts ***!
  \************************************************************************************************/
/*! exports provided: EditviewdevicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditviewdevicesComponent", function() { return EditviewdevicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _common_models_device_details_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/models/device-details-model */ "./src/app/common/models/device-details-model.ts");
/* harmony import */ var _common_services_toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/services/toaster.service */ "./src/app/common/services/toaster.service.ts");
/* harmony import */ var _common_services_deviceserviceapi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../common/services/deviceserviceapi */ "./src/app/common/services/deviceserviceapi.ts");
/* harmony import */ var _common_constants_validationconstants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common/constants/validationconstants */ "./src/app/common/constants/validationconstants.ts");







var EditviewdevicesComponent = /** @class */ (function () {
    function EditviewdevicesComponent(activeModal, toasterService, devicesServiceapi) {
        this.activeModal = activeModal;
        this.toasterService = toasterService;
        this.devicesServiceapi = devicesServiceapi;
        this.viewDetails = true;
        this.simDetails = [];
        this.mobileNumber = [];
        this.Validations = _common_constants_validationconstants__WEBPACK_IMPORTED_MODULE_6__["Validations"];
        this.isDataExists = false;
        this.mobileNumberField = true;
        this.primaryProvider = '';
        this.secondaryProvider = '';
    }
    EditviewdevicesComponent.prototype.ngOnInit = function () {
        this.simDetails = this.selectedDeviceDetails.simDetails;
        this.viewDetails = !(this.selectedDeviceDetails.selectedEvent === 'edit');
        this.pageTitle = this.viewDetails ? 'View Device Details' : 'Edit Device Details';
        // this.pageTitle += this.selectedDeviceDetails.imeiNumber;
        // this.mobileNumber = !this.viewDetails ? [...this.simDetails] : this.mobileNumber;
        for (var i = 0; i < this.simDetails.length; i++) {
            this.mobileNumber.push(this.simDetails[i].mobileNumber);
        }
    };
    EditviewdevicesComponent.prototype.editDeviceDetails = function () {
        var _this = this;
        // we can write Array filter to remove all the null values please check it eg: list.filter((obj) => obj )
        for (var i = 0; i < this.mobileNumber.length; i++) {
            if (this.mobileNumber[i] !== null) {
                this.simDetails[i].mobileNumber = this.mobileNumber[i];
                this.simDetails[i].imeiNumber = this.selectedDeviceDetails.imeiNumber;
                this.simDetails[i].createdDate = this.simDetails[i].createdDate.split('+')[0].replace('T', ' ');
            }
        }
        // second one
        for (var i = 0; i < this.simDetails.length; i++) {
            if ('' === this.simDetails[i].mobileNumber) {
                this.mobileNumberField = false;
            }
            else {
                this.mobileNumberField = true;
                break;
            }
        }
        if (this.mobileNumberField) {
            this.devicesServiceapi.updateDeviceDetails(this.simDetails)
                .subscribe(function (_data) {
                _this.activeModal.close('refreshContent');
                _this.toasterService.showSuccess('bottom-right', 'Successfully updated the device details.');
            }, function (_error) {
                _this.activeModal.close('Close click');
                _this.toasterService.showError('bottom-right', 'ERROR: Unable to update the device details.');
            });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _common_models_device_details_model__WEBPACK_IMPORTED_MODULE_3__["deviceDetailsModel"])
    ], EditviewdevicesComponent.prototype, "selectedDeviceDetails", void 0);
    EditviewdevicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editviewdevices',
            template: __webpack_require__(/*! ./editviewdevices.component.html */ "./src/app/mainComponents/devices/modalpopup/editviewdevices/editviewdevices.component.html"),
            styles: [__webpack_require__(/*! ./editviewdevices.component.sass */ "./src/app/mainComponents/devices/modalpopup/editviewdevices/editviewdevices.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"], _common_services_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"],
            _common_services_deviceserviceapi__WEBPACK_IMPORTED_MODULE_5__["DevicesService"]])
    ], EditviewdevicesComponent);
    return EditviewdevicesComponent;
}());



/***/ }),

/***/ "./src/app/mainComponents/devices/modalpopup/editviewemergency/editviewemergency.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/mainComponents/devices/modalpopup/editviewemergency/editviewemergency.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h5 class=\"modal-title\">Emergancy Details of {{selectedEmergencydata.imeiNumber}}</h5>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.close('refreshContent')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body p-r-2\">\n  <div class=\"row\">\n\n    <div class=\"col-md-6\">\n      <h5>ID</h5>\n      <h4>{{selectedEmergencydata.ebpPacketDataId}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>IMEI No</h5>\n      <h4>{{selectedEmergencydata.imeiNumber}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Vehicle No</h5>\n      <h4>{{selectedEmergencydata.vehicleRegNo}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Reply No</h5>\n      <h4>{{selectedEmergencydata.replyNumber}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Latitude</h5>\n      <h4>{{selectedEmergencydata.latitude}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Latitude Direction</h5>\n      <h4>{{selectedEmergencydata.latitudeDirection}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Longitude</h5>\n      <h4>{{selectedEmergencydata.longitude}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Longitude Direction</h5>\n      <h4>{{selectedEmergencydata.longitudeDirection}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Distance</h5>\n      <h4>{{selectedEmergencydata.distance}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Speed</h5>\n      <h4>{{selectedEmergencydata.speed}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Network Date</h5>\n      <h4>{{selectedEmergencydata.networkDate}} {{selectedEmergencydata.networkTime}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Packet Status</h5>\n      <h4>{{selectedEmergencydata.packetStaus}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Altitude</h5>\n      <h4>{{selectedEmergencydata.altitude}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>GPS Validity</h5>\n      <h4>{{selectedEmergencydata.gpsValidity}}</h4>\n    </div>\n    <div class=\"col-md-6\" *ngIf=\"selectedEmergencydata.checksum\">\n      <h5>Checksum</h5>\n      <h4>{{selectedEmergencydata.checksum}}</h4>\n    </div>\n    <div class=\"col-md-6\" *ngIf=\"selectedEmergencydata.endCharacter\">\n      <h5>End Character</h5>\n      <h4>{{selectedEmergencydata.endCharacter}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Provider</h5>\n      <h4>{{selectedEmergencydata.provider}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Created Date</h5>\n      <h4>{{selectedEmergencydata.createdDate}}</h4>\n    </div>\n    <div class=\"col-md-6\" *ngIf=\"selectedEmergencydata.packetType\">\n      <h5>Packet Type</h5>\n      <h4>{{selectedEmergencydata.packetType}}</h4>\n    </div>\n    <div class=\"col-md-6\" *ngIf=\"selectedEmergencydata.packetType\">\n      <h5>Checksum</h5>\n      <h4>{{selectedEmergencydata.checksum}}</h4>\n    </div>\n    <div class=\"col-md-6\" *ngIf=\"selectedEmergencydata.packetType\">\n      <h5>Time Stamp</h5>\n      <h4>{{selectedEmergencydata.timestamp}}</h4>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/mainComponents/devices/modalpopup/editviewemergency/editviewemergency.component.sass":
/*!******************************************************************************************************!*\
  !*** ./src/app/mainComponents/devices/modalpopup/editviewemergency/editviewemergency.component.sass ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW5Db21wb25lbnRzL2RldmljZXMvbW9kYWxwb3B1cC9lZGl0dmlld2VtZXJnZW5jeS9lZGl0dmlld2VtZXJnZW5jeS5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/mainComponents/devices/modalpopup/editviewemergency/editviewemergency.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/mainComponents/devices/modalpopup/editviewemergency/editviewemergency.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: EditviewemergencyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditviewemergencyComponent", function() { return EditviewemergencyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _common_models_emergencymonitoring_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/models/emergencymonitoring.model */ "./src/app/common/models/emergencymonitoring.model.ts");




var EditviewemergencyComponent = /** @class */ (function () {
    function EditviewemergencyComponent(activeModal) {
        this.activeModal = activeModal;
    }
    EditviewemergencyComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _common_models_emergencymonitoring_model__WEBPACK_IMPORTED_MODULE_3__["EmergencyModel"])
    ], EditviewemergencyComponent.prototype, "selectedEmergencydata", void 0);
    EditviewemergencyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editviewemergency',
            template: __webpack_require__(/*! ./editviewemergency.component.html */ "./src/app/mainComponents/devices/modalpopup/editviewemergency/editviewemergency.component.html"),
            styles: [__webpack_require__(/*! ./editviewemergency.component.sass */ "./src/app/mainComponents/devices/modalpopup/editviewemergency/editviewemergency.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]])
    ], EditviewemergencyComponent);
    return EditviewemergencyComponent;
}());



/***/ }),

/***/ "./src/app/mainComponents/devices/modalpopup/editviewhealth/editviewhealth.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/mainComponents/devices/modalpopup/editviewhealth/editviewhealth.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h5 class=\"modal-title\">Health Details of {{selectedHealthDetails.imeiNumber}}</h5>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.close('refreshContent')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body p-r-2\">\n  <div class=\"row\">\n\n    <div class=\"col-md-6\">\n      <h5>ID</h5>\n      <h4>{{selectedHealthDetails.hmpPacketDataId}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>IMEI No</h5>\n      <h4>{{selectedHealthDetails.imeiNumber}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Vendor ID</h5>\n      <h4>{{selectedHealthDetails.vendorId}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Firmware Version</h5>\n      <h4>{{selectedHealthDetails.firmwareVersion}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Analog IO Status</h5>\n      <h4>{{selectedHealthDetails.analogIOStatus}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Digital IO Status</h5>\n      <h4>{{selectedHealthDetails.digitalIOStatus}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Battery Percentage</h5>\n      <h4>{{selectedHealthDetails.batteryPercentage}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Memory Percentage</h5>\n      <h4>{{selectedHealthDetails.memoryPercentage}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Network Date</h5>\n      <h4>{{selectedHealthDetails.networkDate}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Network Time</h5>\n      <h4>{{selectedHealthDetails.networkTime}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Low Battery Thr Value</h5>\n      <h4>{{selectedHealthDetails.lowBatteryThrValue}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>End Of Packet</h5>\n      <h4>{{selectedHealthDetails.endOfPacket}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Data Update ON</h5>\n      <h4>{{selectedHealthDetails.dataUpdateON}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Data Update OFF</h5>\n      <h4>{{selectedHealthDetails.dataUpdateOFF}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Created Date</h5>\n      <h4>{{selectedHealthDetails.createdDate}}</h4>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/mainComponents/devices/modalpopup/editviewhealth/editviewhealth.component.sass":
/*!************************************************************************************************!*\
  !*** ./src/app/mainComponents/devices/modalpopup/editviewhealth/editviewhealth.component.sass ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW5Db21wb25lbnRzL2RldmljZXMvbW9kYWxwb3B1cC9lZGl0dmlld2hlYWx0aC9lZGl0dmlld2hlYWx0aC5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/mainComponents/devices/modalpopup/editviewhealth/editviewhealth.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/mainComponents/devices/modalpopup/editviewhealth/editviewhealth.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: EditviewhealthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditviewhealthComponent", function() { return EditviewhealthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _common_models_healthmonitoring_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/models/healthmonitoring.model */ "./src/app/common/models/healthmonitoring.model.ts");




var EditviewhealthComponent = /** @class */ (function () {
    function EditviewhealthComponent(activeModal) {
        this.activeModal = activeModal;
    }
    EditviewhealthComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _common_models_healthmonitoring_model__WEBPACK_IMPORTED_MODULE_3__["HealthModel"])
    ], EditviewhealthComponent.prototype, "selectedHealthDetails", void 0);
    EditviewhealthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editviewhealth',
            template: __webpack_require__(/*! ./editviewhealth.component.html */ "./src/app/mainComponents/devices/modalpopup/editviewhealth/editviewhealth.component.html"),
            styles: [__webpack_require__(/*! ./editviewhealth.component.sass */ "./src/app/mainComponents/devices/modalpopup/editviewhealth/editviewhealth.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]])
    ], EditviewhealthComponent);
    return EditviewhealthComponent;
}());



/***/ }),

/***/ "./src/app/mainComponents/devices/modalpopup/editviewmovement/editviewmovement.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/mainComponents/devices/modalpopup/editviewmovement/editviewmovement.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <h5 class=\"modal-title\">Movement Details of {{selectedMovementDetails.imeiNumber}}</h5>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.close('refreshContent')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body p-r-2\">\n    <div class=\"row\">\n          <div class=\"col-md-6\">\n            <h5>ID No</h5>\n           <h4>{{selectedMovementDetails.deviceCommunicationId}}</h4>\n          </div>\n          <div class=\"col-md-6\">\n              <h5>IMEIumber</h5>\n              <h4>{{selectedMovementDetails.imeiNumber}}</h4>\n          </div>\n          <div class=\"col-md-6\">\n            <h5>Longitude</h5>\n            <h4>{{selectedMovementDetails.langitude}}</h4>\n          </div>\n          <div class=\"col-md-6\">\n            <h5>Latitude</h5>\n            <h4>{{selectedMovementDetails.latitude}}</h4>\n          </div>\n          <div class=\"col-md-6\">\n            <h5>Engine Status</h5>\n            <h4>{{selectedMovementDetails.engineStatus}}</h4>\n          </div>\n          <div class=\"col-md-6\">\n            <h5>Ignition Status</h5>\n            <h4>{{selectedMovementDetails.ignitionStatus}}</h4>\n          </div>\n          <div class=\"col-md-6\">\n            <h5>Network Date</h5>\n            <h4>{{selectedMovementDetails.networkDate}}</h4>\n          </div>\n          <div class=\"col-md-6\">\n            <h5>Prev Langitude</h5>\n            <h4>{{selectedMovementDetails.prevLangitude}}</h4>\n          </div>\n          <div class=\"col-md-6\">\n            <h5>Prev Latitude</h5>\n            <h4>{{selectedMovementDetails.prevLatitude}}</h4>\n          </div>\n          <div class=\"col-md-6\">\n            <h5>Created Date</h5>\n            <h4>{{selectedMovementDetails.createdDate}}</h4>\n          </div>\n          <div class=\"col-md-6\">\n            <h5>Location</h5>\n            <h4>{{selectedMovementDetails.location}}</h4>\n          </div>\n          <div class=\"col-md-6\">\n            <h5>Prev Network Date</h5>\n            <h4>{{selectedMovementDetails.prevNetworkDate}}</h4>\n          </div>\n          <div class=\"col-md-6\">\n            <h5>Prev Network Time</h5>\n            <h4>{{selectedMovementDetails.prevNetworkTime}}</h4>\n          </div>\n          <div class=\"col-md-6\">\n            <h5>Panic Status</h5>\n            <h4>{{selectedMovementDetails.emergencyStatus}}</h4>\n          </div>\n          <div class=\"col-md-6\">\n            <h5>Tamper Status</h5>\n            <h4>{{selectedMovementDetails.tamperAlert}}</h4>\n          </div>\n          <div class=\"col-md-6\">\n            <h5>Status</h5>\n            <h4>{{selectedMovementDetails.status}}</h4>\n          </div>\n          <div class=\"col-md-6\">\n            <h5>Is Over Speed</h5>\n            <h4>{{selectedMovementDetails.isDeviceOverSpeed}}</h4>\n          </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/mainComponents/devices/modalpopup/editviewmovement/editviewmovement.component.sass":
/*!****************************************************************************************************!*\
  !*** ./src/app/mainComponents/devices/modalpopup/editviewmovement/editviewmovement.component.sass ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW5Db21wb25lbnRzL2RldmljZXMvbW9kYWxwb3B1cC9lZGl0dmlld21vdmVtZW50L2VkaXR2aWV3bW92ZW1lbnQuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/mainComponents/devices/modalpopup/editviewmovement/editviewmovement.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/mainComponents/devices/modalpopup/editviewmovement/editviewmovement.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: EditviewmovementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditviewmovementComponent", function() { return EditviewmovementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _common_models_device_communication_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/models/device-communication-model */ "./src/app/common/models/device-communication-model.ts");




var EditviewmovementComponent = /** @class */ (function () {
    function EditviewmovementComponent(activeModal) {
        this.activeModal = activeModal;
    }
    EditviewmovementComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _common_models_device_communication_model__WEBPACK_IMPORTED_MODULE_3__["deviceCommunicationModel"])
    ], EditviewmovementComponent.prototype, "selectedMovementDetails", void 0);
    EditviewmovementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editviewmovement',
            template: __webpack_require__(/*! ./editviewmovement.component.html */ "./src/app/mainComponents/devices/modalpopup/editviewmovement/editviewmovement.component.html"),
            styles: [__webpack_require__(/*! ./editviewmovement.component.sass */ "./src/app/mainComponents/devices/modalpopup/editviewmovement/editviewmovement.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]])
    ], EditviewmovementComponent);
    return EditviewmovementComponent;
}());



/***/ }),

/***/ "./src/app/mainComponents/devices/modalpopup/editviewrawdata/editviewrawdata.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/mainComponents/devices/modalpopup/editviewrawdata/editviewrawdata.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h5 class=\"modal-title\">RawData Details of {{selectedrawdata.imeiNumber}}</h5>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.close('refreshContent')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body p-r-2\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <h5>ID No</h5>\n      <h4>{{selectedrawdata.rawDataId}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>IMEI No</h5>\n      <h4>{{selectedrawdata.imeiNumber}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Vehicle No</h5>\n      <h4>{{selectedrawdata.vehicleRegNo}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>CVP Type</h5>\n      <h4>{{selectedrawdata.cvpType}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Packet Type</h5>\n      <h4>{{selectedrawdata.packetType}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Alert ID</h5>\n      <h4>{{selectedrawdata.vehicleModeId}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Network Date</h5>\n      <h4>{{selectedrawdata.networkDate}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Network Time</h5>\n      <h4>{{selectedrawdata.networkTime}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Packet Status</h5>\n      <h4>{{selectedrawdata.packetStatus}}</h4>\n    </div>\n    <div class=\"col-md-12\">\n      <h5>Raw Data</h5>\n      <h4>{{selectedrawdata.rawData}}</h4>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/mainComponents/devices/modalpopup/editviewrawdata/editviewrawdata.component.sass":
/*!**************************************************************************************************!*\
  !*** ./src/app/mainComponents/devices/modalpopup/editviewrawdata/editviewrawdata.component.sass ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW5Db21wb25lbnRzL2RldmljZXMvbW9kYWxwb3B1cC9lZGl0dmlld3Jhd2RhdGEvZWRpdHZpZXdyYXdkYXRhLmNvbXBvbmVudC5zYXNzIn0= */"

/***/ }),

/***/ "./src/app/mainComponents/devices/modalpopup/editviewrawdata/editviewrawdata.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/mainComponents/devices/modalpopup/editviewrawdata/editviewrawdata.component.ts ***!
  \************************************************************************************************/
/*! exports provided: EditviewrawdataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditviewrawdataComponent", function() { return EditviewrawdataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _common_models_rawdata_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/models/rawdata.model */ "./src/app/common/models/rawdata.model.ts");




var EditviewrawdataComponent = /** @class */ (function () {
    function EditviewrawdataComponent(activeModal) {
        this.activeModal = activeModal;
    }
    EditviewrawdataComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _common_models_rawdata_model__WEBPACK_IMPORTED_MODULE_3__["RawData"])
    ], EditviewrawdataComponent.prototype, "selectedrawdata", void 0);
    EditviewrawdataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editviewrawdata',
            template: __webpack_require__(/*! ./editviewrawdata.component.html */ "./src/app/mainComponents/devices/modalpopup/editviewrawdata/editviewrawdata.component.html"),
            styles: [__webpack_require__(/*! ./editviewrawdata.component.sass */ "./src/app/mainComponents/devices/modalpopup/editviewrawdata/editviewrawdata.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]])
    ], EditviewrawdataComponent);
    return EditviewrawdataComponent;
}());



/***/ }),

/***/ "./src/app/mainComponents/devices/movement/movement.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/mainComponents/devices/movement/movement.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container top-header p-b-3\">\n  <div class=\"row head-block no-gutters bdr-bottom m-b-3 p-t-1\">\n    <div class=\"col-md-6 p-l-0\">\n      <h4>Movement Details</h4>\n    </div>\n    <div class=\"col-md-5 text-right\">\n        <span class=\"btn-circle\"><i class=\"icon-ab_download\"></i></span>\n        <span class=\"btn-circle m-r-1\" (click)=\"refreshPage()\"><i class=\"icon-ab-refresh\"></i></span>\n    </div>\n    <div class=\"col-md-1 p-r-0 text-right\">\n      <div class=\"filters\">\n        <button type=\"button\" class=\"filters-button\" [ngClass]=\"{ 'active': showFilters}\" (click)=\"toggleFilters()\">\n          <i class=\"icon-ab-searchfilter\"></i>\n          <span>Filters</span>\n        </button>\n        <div class=\"filters-body \" *ngIf=\"showFilters\">\n          <div class=\"arrow-up\"></div>\n          <form name=\"form\" (ngSubmit)=\"f.form.valid && applyFilters(f)\" #f=\"ngForm\" novalidate>\n            <app-citydistrict #validateCityDistrict (isCityDistrictValid)=\"isCityDistrictValid($event)\"\n              [cityDistrictConfig]='cityDistrictConfig'></app-citydistrict>\n\n            <div class=\"form-group\">\n              <label>DATE</label>\n              <app-datepicker class=\"form-control bdr-none p-a-0\" name=\"searchDate\" [(ngModel)]=\"searchDate\"\n                #searchDatectrl=\"ngModel\" appForbiddenName=\"fred\"\n                [ngClass]=\"{ 'is-invalid': f.submitted && searchDatectrl.invalid }\"\n                [datePickerModel]=\"datePickerModel\" searchDatectrl>\n              </app-datepicker>\n              <div *ngIf=\"f.submitted && searchDatectrl.invalid\" class=\"invalid-feedback\">\n                <div *ngIf=\"searchDatectrl.errors.required\">Search date is required</div>\n              </div>\n            </div>\n\n            <!-- <div class=\"form-group\">\n              <label for=\"email\">Status</label>\n              <select class=\"form-control\" [(ngModel)]=\"status\" (change)=\"getMovementDetails()\" name=\"status\"\n                #statusctrl=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && statusctrl.invalid }\">\n                <option value=\"\">-- Select Status --</option>\n                <option value='Communicating'>Communicating</option>\n                <option value='NOTCommunicating'>Not Communicating</option>\n              </select>\n              <div *ngIf=\"f.submitted && statusctrl.invalid\" class=\"invalid-feedback\">\n                <span *ngIf=\"statusctrl.errors.required\">Status is Required</span>\n              </div>\n            </div> -->\n\n\n            <div class=\"form-group\">\n              <label for=\"email\">Vehicle Move</label>\n              <select class=\"form-control\" [(ngModel)]=\"vehicleMode\" name=\"vehicleMode\"\n                #vehicleModectrl=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && vehicleModectrl.invalid }\">\n                <option value=\"\">-- Select Status --</option>\n                <option value='IDLEMODE'>Idle</option>\n                <option value='RUNNINGMODE'>Running</option>\n                <option value='SLEEPMODE'>Sleep</option>\n              </select>\n              <div *ngIf=\"f.submitted && vehicleModectrl.invalid\" class=\"invalid-feedback\">\n                <span *ngIf=\"vehicleModectrl.errors.required\">Status is Required</span>\n              </div>\n            </div>\n\n\n\n            <div class=\"form-group m-t-3\">\n              <button class=\"btn btn-primary w-100p\" type=\"submit\">Search</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-12 p-a-0 p-t-1\">\n      <nav aria-label=\"breadcrumb\">\n        <ol class=\"breadcrumb\">\n          <li class=\"breadcrumb-item\"><a class=\"text-abhaya\" [routerLink]=\"['/dashboard']\">Home</a></li>\n          <li class=\"breadcrumb-item\" aria-current=\"page\"><a class=\"text-abhaya\" [routerLink]=\"['/devices']\">Devices</a>\n          </li>\n          <li class=\"breadcrumb-item active text-secondary\" aria-current=\"page\">Movement Details</li>\n        </ol>\n      </nav>\n    </div>\n  </div>\n\n  <div class=\"row no-gutters m-b-3\">\n      <div class=\"col-md-6 p-a-0\">\n          <div class=\"form-group abhaya-table-search focal-point\">\n            <i class=\"icon-ab-search\"></i>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchText\" (keydown.enter)=\"getMovementDetails()\"\n              placeholder=\"Search IMEI / Vehicle / IoT No.\">\n            <span class=\"separator\"> </span>\n          </div>\n        </div>\n    <div class=\"col-md-6 p-a-0 text-primary text-right p-t-2\">\n      Total Records : <h5 class=\"total-records-text d-inline-block\"> {{page.totalElements}}</h5>\n    </div>\n   \n  </div>\n\n  <div class=\"row no-gutters pt-8\">\n    <table class=\"abhaya-table\">\n      <thead>\n        <tr>\n          <th>Vehicle No</th>\n          <th>IoT No</th>\n          <th>IMEI Number</th>\n          <th>Movement</th>\n          <th>Packet Date</th>\n          <th>Packet Time</th>\n          <th></th>\n        </tr>\n      </thead>\n      <tbody *ngIf=\"isDataExists\">\n        <tr\n          *ngFor=\"let device of movementData | paginate: { id: 'paginationCtrl', itemsPerPage: page.size, currentPage: p, totalItems: page.totalElements }\">\n          <td class=\"align-middle\">{{device.vehicleRegNo}}</td>\n          <td class=\"align-middle\">{{device.serialNumber}}</td>\n          <td class=\"align-middle\">{{device.imeiNumber}}</td>\n          <td class=\"align-middle\">{{device.vehicleMode}}</td>\n          <td class=\"align-middle\">{{device.prevNetworkDate}}</td>\n          <td class=\"align-middle\">{{device.prevNetworkTime}}</td>\n          <td>\n            <a class=\"\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n              aria-expanded=\"false\"><i class=\"icon-ab_more\"></i></a>\n            <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdown\">\n              <div class=\"arrow-up\"></div>\n              <a (click)=\"viewMovement(device)\" class=\"dropdown-item\">View Details</a>\n            </div>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n    <app-nodata class=\"w-100p\" *ngIf=\"!isDataExists\" [noDataText]='noDataText'></app-nodata>\n    <div class=\"row no-gutters w-100p m-t-5\">\n        <div *ngIf=\"isDataExists\" class=\"float-left p-t-1 page-size\">\n            <span>Page Size :</span>\n            <select (change)=\"changePageSize()\" [(ngModel)]=\"pageSize\">\n              <option *ngFor=\"let number of pageSizeValues\" value=\"{{number}}\">{{number}}</option>\n            </select>\n          </div>\n      <div *ngIf=\"isDataExists\" style=\"margin:0px auto;\">\n        <pagination-controls id=\"paginationCtrl\" class=\"pagination float-right\" (pageChange)=\"pageChanged($event)\"\n          maxSize=\"6\" directionLinks=\"true\" autoHide=\"true\" responsive=\"true\" previousLabel=\"Prev\" nextLabel=\"Next\">\n        </pagination-controls>\n     \n      </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/mainComponents/devices/movement/movement.component.sass":
/*!*************************************************************************!*\
  !*** ./src/app/mainComponents/devices/movement/movement.component.sass ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW5Db21wb25lbnRzL2RldmljZXMvbW92ZW1lbnQvbW92ZW1lbnQuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/mainComponents/devices/movement/movement.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/mainComponents/devices/movement/movement.component.ts ***!
  \***********************************************************************/
/*! exports provided: MovementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovementComponent", function() { return MovementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _common_components_citydistrict_citydistrict_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/components/citydistrict/citydistrict.component */ "./src/app/common/components/citydistrict/citydistrict.component.ts");
/* harmony import */ var _common_services_deviceserviceapi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/services/deviceserviceapi */ "./src/app/common/services/deviceserviceapi.ts");
/* harmony import */ var _common_models_page_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/models/page.model */ "./src/app/common/models/page.model.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! .././../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _modalpopup_editviewmovement_editviewmovement_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modalpopup/editviewmovement/editviewmovement.component */ "./src/app/mainComponents/devices/modalpopup/editviewmovement/editviewmovement.component.ts");








var MovementComponent = /** @class */ (function () {
    function MovementComponent(deviceapi, modalService) {
        this.deviceapi = deviceapi;
        this.modalService = modalService;
        this.showFilters = false;
        this.searchText = '';
        this.page = new _common_models_page_model__WEBPACK_IMPORTED_MODULE_5__["PageModel"]();
        this.isDataExists = false;
        this.pageSizeValues = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].pageSizeValues;
        this.pageSize = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].pageSize;
        this.intilPageNumber = 0;
        this.searchDate = '';
        this.noDataText = 'No Movement Details Available';
        this.status = 'Communicating';
        this.vehicleMode = '';
        this.stateId = '';
        this.districtId = '';
        this.cityId = '';
        this.rtoId = '';
    }
    MovementComponent.prototype.isCityDistrictValid = function (formValid) {
        this.cityDistrictCompData = formValid;
    };
    MovementComponent.prototype.ngOnInit = function () {
        this.getMovementDetails();
    };
    MovementComponent.prototype.toggleFilters = function () {
        this.showFilters = !this.showFilters;
    };
    MovementComponent.prototype.viewMovement = function (movementDetails) {
        var modalRef = this.modalService.open(_modalpopup_editviewmovement_editviewmovement_component__WEBPACK_IMPORTED_MODULE_7__["EditviewmovementComponent"], {
            size: 'lg', backdrop: 'static',
            keyboard: false
        });
        modalRef.componentInstance.selectedMovementDetails = movementDetails;
    };
    MovementComponent.prototype.changePageSize = function () {
        this.getMovementDetails();
    };
    MovementComponent.prototype.pageChanged = function (event) {
        this.p = event;
        this.intilPageNumber = event - 1;
        this.getMovementDetails();
    };
    MovementComponent.prototype.applyFilters = function (parentForm) {
        this.parentFormSubmitted = true;
        this.CitydistrictComponent.validateChildForm(this.parentFormSubmitted);
        if (!parentForm.valid || !this.cityDistrictCompData.isFormValid) {
            return;
        }
        else {
            this.districtId = this.cityDistrictCompData.districtName;
            this.cityId = this.cityDistrictCompData.cityName;
            this.rtoId = this.cityDistrictCompData.rtoOfficeName;
            this.showFilters = false;
            this.getMovementDetails();
        }
    };
    MovementComponent.prototype.refreshPage = function () {
        this.intilPageNumber = 0;
        this.pageSize = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].pageSize;
        this.searchDate = '';
        this.searchText = '';
        this.stateId = '';
        this.districtId = '';
        this.cityId = '';
        this.vehicleMode = '';
        this.getMovementDetails();
    };
    MovementComponent.prototype.getMovementDetails = function () {
        var _this = this;
        console.log(this.searchDate);
        this.deviceapi.getmovementDetails(this.intilPageNumber, this.pageSize, '', this.searchText, this.status, this.vehicleMode, this.stateId, this.districtId, this.cityId, this.rtoId)
            .subscribe(function (_data) {
            _this.movementData = _data.content;
            _this.page = _data.page;
            _this.isDataExists = (_this.movementData.length > 0);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('validateCityDistrict'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _common_components_citydistrict_citydistrict_component__WEBPACK_IMPORTED_MODULE_3__["CitydistrictComponent"])
    ], MovementComponent.prototype, "CitydistrictComponent", void 0);
    MovementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movement',
            template: __webpack_require__(/*! ./movement.component.html */ "./src/app/mainComponents/devices/movement/movement.component.html"),
            styles: [__webpack_require__(/*! ./movement.component.sass */ "./src/app/mainComponents/devices/movement/movement.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_services_deviceserviceapi__WEBPACK_IMPORTED_MODULE_4__["DevicesService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], MovementComponent);
    return MovementComponent;
}());



/***/ }),

/***/ "./src/app/mainComponents/devices/rawdata/rawdata.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/mainComponents/devices/rawdata/rawdata.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container top-header p-b-3\">\n  <div class=\"row head-block no-gutters bdr-bottom m-b-3 p-t-1\">\n    <div class=\"col-md-6 p-l-0\">\n      <h4>Raw Data</h4>\n    </div>\n    <div class=\"col-md-5 text-right\">\n        <span class=\"btn-circle\"><i class=\"icon-ab_download\"></i></span>\n        <span class=\"btn-circle m-r-1\" (click)=\"refreshPage()\"><i class=\"icon-ab-refresh\"></i></span>\n    </div>\n    <div class=\"col-md-1 p-r-0 text-right\">\n      <div class=\"filters\">\n        <button type=\"button\" class=\"filters-button\" [ngClass]=\"{ 'active': showFilters}\" (click)=\"toggleFilters()\">\n          <i class=\"icon-ab-searchfilter\"></i>\n          <span>Filters</span>\n        </button>\n        <div class=\"filters-body \" *ngIf=\"showFilters\">\n          <div class=\"arrow-up\"></div>\n          <form name=\"form\" (ngSubmit)=\"f.form.valid && applyFilters(f)\" #f=\"ngForm\" novalidate>\n            <app-citydistrict #validateCityDistrict (isCityDistrictValid)=\"isCityDistrictValid($event)\"\n              [cityDistrictConfig]='cityDistrictConfig'></app-citydistrict>\n\n              <div class=\"form-group\">\n                  <label>DATE</label>\n                  <app-datepicker\n                      class=\"form-control bdr-none p-a-0\"\n                      name=\"searchDate\" \n                      [(ngModel)]=\"searchDate\"\n                      #searchDatectrl= \"ngModel\"\n                      appForbiddenName=\"fred\"\n                      [ngClass]=\"{ 'is-invalid': f.submitted && searchDatectrl.invalid }\"\n                      [datePickerModel]=\"datePickerModel\"          \n                      searchDatectrl>\n                  </app-datepicker>\n               <div *ngIf=\"f.submitted && searchDatectrl.invalid\" class=\"invalid-feedback\">\n                  <div *ngIf=\"searchDatectrl.errors.required\">Search Date is required</div>\n               </div>\n              </div>\n            <div class=\"form-group m-t-3\">\n              <button class=\"btn btn-primary w-100p\" type=\"submit\">Search</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-12 p-a-0 p-t-1\">\n      <nav aria-label=\"breadcrumb\">\n        <ol class=\"breadcrumb\">\n          <li class=\"breadcrumb-item\"><a class=\"text-abhaya\" [routerLink]=\"['/dashboard']\">Home</a></li>\n          <li class=\"breadcrumb-item\" aria-current=\"page\"><a class=\"text-abhaya\" [routerLink]=\"['/devices']\">Devices</a></li>\n          <li class=\"breadcrumb-item active text-secondary\" aria-current=\"page\">Raw Data</li>\n        </ol>\n      </nav>\n    </div>\n  </div>\n\n  <div class=\"row no-gutters m-b-3\">\n      <div class=\"col-md-6 p-a-0\">\n          <div class=\"form-group abhaya-table-search focal-point\">\n            <i class=\"icon-ab-search\"></i>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchText\" (keydown.enter)=\"getRawData()\" placeholder=\"Search by IMEI / Vehicle No.\">\n            <span class=\"separator\"> </span>\n          </div>\n        </div>\n    <div class=\"col-md-6 p-a-0 text-primary text-right p-t-2\">\n      Total Records : <h5 class=\"total-records-text d-inline-block\"> {{page.totalElements}}</h5>\n    </div>\n  \n  </div>\n\n  <div class=\"row no-gutters pt-8\">\n    <table class=\"abhaya-table\">\n      <thead>\n        <tr>\n          <th>ID</th>\n            <th>IMEI No</th>\n            <th>Vehicle No</th>\n            <th>CVP Type</th>\n            <th>Packet Type</th>\n            <th>Alert ID</th>\n            <th>Network Date</th>\n            <th>Network Time</th>\n            <th>Packet Status</th>\n          <th></th>\n        </tr>\n      </thead>\n     <tbody *ngIf=\"isDataExists\">\n        <tr *ngFor=\"let data of rawData | paginate: { id: 'paginationCtrl', itemsPerPage: page.size, currentPage: p, totalItems: page.totalElements }\">\n          <td>{{data.rawDataId}}</td>\n          <td>{{data.imeiNumber}}</td>\n          <td>{{data.vehicleRegNo}}</td>\n          <td>{{data.cvpType}}</td>\n          <td>{{data.packetType == null ? '--' : data.packetType}}</td>\n          <td>{{data.vehicleModeId}}</td>\n          <td>{{data.networkDate}}</td>\n          <td>{{data.networkTime}}</td>\n          <td>{{data.packetStatus}}</td>\n            <td>\n              <a class=\"\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n                aria-expanded=\"false\"><i class=\"icon-ab_more\"></i></a>\n              <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdown\">\n                <div class=\"arrow-up\"></div>\n                <a (click)=\"viewRawData(data)\" class=\"dropdown-item\">View Details</a>\n              </div>\n            </td>\n          </tr>\n     </tbody>\n    </table>\n    <app-nodata class=\"w-100p\" *ngIf=\"!isDataExists\" [noDataText]='noDataText'></app-nodata>\n    <div class=\"row no-gutters w-100p m-t-5\">\n        <div *ngIf=\"isDataExists\" class=\"float-left p-t-1 page-size\">\n            <span>Page Size :</span>\n            <select (change)=\"changePageSize()\" [(ngModel)]=\"pageSize\">\n              <option *ngFor=\"let number of pageSizeValues\" value=\"{{number}}\">{{number}}</option>\n            </select>\n          </div>\n        <div *ngIf=\"isDataExists\" style=\"margin:0px auto;\">\n          <pagination-controls id=\"paginationCtrl\" class=\"pagination float-right\" (pageChange)=\"pageChanged($event)\" maxSize=\"6\"\n            directionLinks=\"true\" autoHide=\"true\" responsive=\"true\" previousLabel=\"Prev\" nextLabel=\"Next\">\n          </pagination-controls>\n          \n        </div>\n      </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/mainComponents/devices/rawdata/rawdata.component.sass":
/*!***********************************************************************!*\
  !*** ./src/app/mainComponents/devices/rawdata/rawdata.component.sass ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW5Db21wb25lbnRzL2RldmljZXMvcmF3ZGF0YS9yYXdkYXRhLmNvbXBvbmVudC5zYXNzIn0= */"

/***/ }),

/***/ "./src/app/mainComponents/devices/rawdata/rawdata.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/mainComponents/devices/rawdata/rawdata.component.ts ***!
  \*********************************************************************/
/*! exports provided: RawdataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RawdataComponent", function() { return RawdataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _common_components_citydistrict_citydistrict_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/components/citydistrict/citydistrict.component */ "./src/app/common/components/citydistrict/citydistrict.component.ts");
/* harmony import */ var _common_services_deviceserviceapi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/services/deviceserviceapi */ "./src/app/common/services/deviceserviceapi.ts");
/* harmony import */ var _common_models_page_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/models/page.model */ "./src/app/common/models/page.model.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! .././../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _modalpopup_editviewrawdata_editviewrawdata_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modalpopup/editviewrawdata/editviewrawdata.component */ "./src/app/mainComponents/devices/modalpopup/editviewrawdata/editviewrawdata.component.ts");








var RawdataComponent = /** @class */ (function () {
    function RawdataComponent(deviceapi, modalService) {
        this.deviceapi = deviceapi;
        this.modalService = modalService;
        this.showFilters = false;
        this.searchText = '';
        this.page = new _common_models_page_model__WEBPACK_IMPORTED_MODULE_5__["PageModel"]();
        this.isDataExists = false;
        this.pageSizeValues = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].pageSizeValues;
        this.pageSize = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].pageSize;
        this.intilPageNumber = 0;
        this.intervalTime = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].setIntervalTime;
        this.searchDate = '';
        this.districtId = '';
        this.cityId = '';
        this.noDataText = 'No Raw Data Available';
    }
    RawdataComponent.prototype.isCityDistrictValid = function (formValid) {
        this.cityDistrictCompData = formValid;
    };
    RawdataComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getRawData();
        this.updateRawdata = setInterval(function () {
            _this.p = 1;
            _this.getRawData();
        }, this.intervalTime);
    };
    RawdataComponent.prototype.toggleFilters = function () {
        this.showFilters = !this.showFilters;
    };
    RawdataComponent.prototype.viewRawData = function (selectedRawData) {
        var modalRef = this.modalService.open(_modalpopup_editviewrawdata_editviewrawdata_component__WEBPACK_IMPORTED_MODULE_7__["EditviewrawdataComponent"], {
            size: 'lg', backdrop: 'static',
            keyboard: false
        });
        modalRef.componentInstance.selectedrawdata = selectedRawData;
    };
    RawdataComponent.prototype.changePageSize = function () {
        this.getRawData();
    };
    RawdataComponent.prototype.pageChanged = function (event) {
        this.p = event;
        this.intilPageNumber = event - 1;
        this.getRawData();
    };
    RawdataComponent.prototype.applyFilters = function (parentForm) {
        this.parentFormSubmitted = true;
        this.CitydistrictComponent.validateChildForm(this.parentFormSubmitted);
        if (!parentForm.valid || !this.cityDistrictCompData.isFormValid) {
            return;
        }
        else {
            this.districtId = this.cityDistrictCompData.districtName;
            this.cityId = this.cityDistrictCompData.cityName;
            this.showFilters = false;
            this.getRawData();
        }
    };
    RawdataComponent.prototype.refreshPage = function () {
        this.intilPageNumber = 0;
        this.pageSize = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].pageSize;
        this.searchDate = '';
        this.searchText = '';
        this.districtId = '';
        this.cityId = '';
        this.getRawData();
    };
    RawdataComponent.prototype.getRawData = function () {
        var _this = this;
        this.deviceapi.getRawData(this.intilPageNumber, this.pageSize, this.searchDate, this.searchText, this.districtId, this.cityId)
            .subscribe(function (_data) {
            _this.rawData = _data.content;
            _this.page = _data.page;
            _this.isDataExists = (_this.rawData.length > 0);
        });
    };
    RawdataComponent.prototype.ngOnDestroy = function () {
        if (this.updateRawdata) {
            clearInterval(this.updateRawdata);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('validateCityDistrict'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _common_components_citydistrict_citydistrict_component__WEBPACK_IMPORTED_MODULE_3__["CitydistrictComponent"])
    ], RawdataComponent.prototype, "CitydistrictComponent", void 0);
    RawdataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rawdata',
            template: __webpack_require__(/*! ./rawdata.component.html */ "./src/app/mainComponents/devices/rawdata/rawdata.component.html"),
            styles: [__webpack_require__(/*! ./rawdata.component.sass */ "./src/app/mainComponents/devices/rawdata/rawdata.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_services_deviceserviceapi__WEBPACK_IMPORTED_MODULE_4__["DevicesService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], RawdataComponent);
    return RawdataComponent;
}());



/***/ })

}]);
//# sourceMappingURL=devices-devices-module.js.map