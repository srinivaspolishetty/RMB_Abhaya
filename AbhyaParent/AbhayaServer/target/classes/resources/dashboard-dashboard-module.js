(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./src/app/common/services/dashboardserviceapi.ts":
/*!********************************************************!*\
  !*** ./src/app/common/services/dashboardserviceapi.ts ***!
  \********************************************************/
/*! exports provided: DashboardsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardsService", function() { return DashboardsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _constants_apiendpointconstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/apiendpointconstants */ "./src/app/common/constants/apiendpointconstants.ts");





var DashboardsService = /** @class */ (function () {
    function DashboardsService(httpClient) {
        this.httpClient = httpClient;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                'Authorization': 'my-auth-token'
            })
        };
    }
    DashboardsService.prototype.getLiveTracking = function (searchDate, districtId, cityId) {
        var url = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBase + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].version + _constants_apiendpointconstants__WEBPACK_IMPORTED_MODULE_4__["APIEndPoints"].dashboard.liveTracking;
        url += "?searchDate=" + searchDate + "&districtId=" + districtId + "&cityId=" + cityId;
        return this.httpClient.get(url);
    };
    DashboardsService.prototype.getRouteDeviation = function (searchDate, districtId, cityId) {
        var url = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBase + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].version + _constants_apiendpointconstants__WEBPACK_IMPORTED_MODULE_4__["APIEndPoints"].dashboard.outedeviation;
        url += "?searchDate=" + searchDate + "&districtId=" + districtId + "&cityId=" + cityId;
        return this.httpClient.get(url);
    };
    DashboardsService.prototype.getAuthDetails = function (searchDate, districtId, cityId) {
        var url = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBase + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].version + _constants_apiendpointconstants__WEBPACK_IMPORTED_MODULE_4__["APIEndPoints"].dashboard.vehicleauth;
        url += "?searchDate=" + searchDate + "&districtId=" + districtId + "&cityId=" + cityId;
        return this.httpClient.get(url);
    };
    DashboardsService.prototype.getPanicDetails = function (searchDate, districtId, cityId) {
        var url = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBase + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].version + _constants_apiendpointconstants__WEBPACK_IMPORTED_MODULE_4__["APIEndPoints"].dashboard.panicAlerts;
        url += "?searchDate=" + searchDate + "&districtId=" + districtId + "&cityId=" + cityId;
        return this.httpClient.get(url);
    };
    DashboardsService.prototype.getDevicePanic = function (searchDate, districtId, cityId) {
        var url = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBase + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].version + _constants_apiendpointconstants__WEBPACK_IMPORTED_MODULE_4__["APIEndPoints"].dashboard.devicePanic;
        url += "?searchDate=" + searchDate + "&districtId=" + districtId + "&cityId=" + cityId;
        return this.httpClient.get(url);
    };
    DashboardsService.prototype.getDeviceDetails = function (searchDate, districtId, cityId, actions) {
        var url = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBase + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].version + _constants_apiendpointconstants__WEBPACK_IMPORTED_MODULE_4__["APIEndPoints"].dashboard.devicestatus;
        url += "?searchDate=" + searchDate + "&districtId=" + districtId + "&cityId=" + cityId + "&action=" + actions;
        return this.httpClient.get(url);
    };
    DashboardsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DashboardsService);
    return DashboardsService;
}());



/***/ }),

/***/ "./src/app/mainComponents/dashboard/dashboard-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/mainComponents/dashboard/dashboard-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dashboard/dashboard.component */ "./src/app/mainComponents/dashboard/dashboard.component.ts");
/* harmony import */ var _mapview_mapview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mapview/mapview.component */ "./src/app/mainComponents/dashboard/mapview/mapview.component.ts");





var routes = [
    { path: '', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], },
    { path: 'mapview', component: _mapview_mapview_component__WEBPACK_IMPORTED_MODULE_4__["MapviewComponent"], }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/mainComponents/dashboard/dashboard.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/mainComponents/dashboard/dashboard.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container top-header p-b-2\">\r\n  <div class=\"row head-block no-gutters bdr-bottom m-b-3 p-t-1\">\r\n    <div class=\"col-md-10 p-l-0\">\r\n      <h4>Dashboard</h4>\r\n    </div>\r\n    <div class=\"col-md-1 p-t-1\">\r\n      <a title=\"Live Tracking\" [routerLink]=\"['/dashboard']\" class=\"btn-mapviewleft active\">\r\n        <i class=\"icon-ab-listview\"></i>\r\n      </a>\r\n      <a title=\"Map View\" [routerLink]=\"['/dashboard/mapview']\" class=\"btn-mapviewright\">\r\n        <i class=\"icon-ab-mapview\"></i>\r\n      </a>\r\n    </div>\r\n    <div class=\"col-md-1 p-r-0 text-right\">\r\n      <div class=\"filters p-t-1\">\r\n        <button type=\"button\" class=\"filters-button\" [ngClass]=\"{ 'active': showFilters}\" (click)=\"toggleFilters()\">\r\n          <i class=\"icon-ab-searchfilter\"></i>\r\n          <span>Filters</span>\r\n        </button>\r\n        <div class=\"filters-body \" *ngIf=\"showFilters\">\r\n          <div class=\"arrow-up\"></div>\r\n          <form name=\"form\" (ngSubmit)=\"f.form.valid && applyFilters(f)\" #f=\"ngForm\" novalidate>\r\n              <app-citydistrict #validateCityDistrict (isCityDistrictValid)=\"isCityDistrictValid($event)\"\r\n                [cityDistrictConfig]='cityDistrictConfig'></app-citydistrict>\r\n  \r\n              <div class=\"form-group\">\r\n                <label>DATE</label>\r\n                <app-datepicker class=\"form-control bdr-none p-a-0\" name=\"searchDate\" [(ngModel)]=\"searchDate\"\r\n                  #searchDatectrl=\"ngModel\" appForbiddenName=\"fred\"\r\n                  [ngClass]=\"{ 'is-invalid': f.submitted && searchDatectrl.invalid }\"\r\n                  [datePickerModel]=\"datePickerModel\" searchDatectrl>\r\n                </app-datepicker>\r\n                <div *ngIf=\"f.submitted && searchDatectrl.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"searchDatectrl.errors.required\">Search Date is required</div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group m-t-3\">\r\n                <button class=\"btn btn-primary w-100p\" type=\"submit\">Search</button>\r\n              </div>\r\n            </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12 p-a-0\">\r\n      <nav aria-label=\"breadcrumb\">\r\n        <ol class=\"breadcrumb\">\r\n          <li class=\"breadcrumb-item\"><a [routerLink]=\"['/dashboard']\" class=\"active text-secondary\">Dashboard</a>\r\n          </li>\r\n        </ol>\r\n      </nav>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n  <div class=\"row p-t-1 no-gutters\">\r\n\r\n    <div class=\"main-container-left p-r-10  \">\r\n      <app-livetracking #liveTrackingView></app-livetracking>\r\n      <app-panicalerts #panicAlertsView></app-panicalerts>\r\n      <app-vehicleauth #vehicleAuthView></app-vehicleauth>\r\n      <app-devicestatus #deviceStatusView></app-devicestatus>\r\n    </div>\r\n    <div class=\"main-container-right p-l-2\">\r\n      <app-quickaction #quickActionView></app-quickaction>\r\n    </div>"

/***/ }),

/***/ "./src/app/mainComponents/dashboard/dashboard.component.sass":
/*!*******************************************************************!*\
  !*** ./src/app/mainComponents/dashboard/dashboard.component.sass ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW5Db21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/mainComponents/dashboard/dashboard.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/mainComponents/dashboard/dashboard.component.ts ***!
  \*****************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_components_citydistrict_citydistrict_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/components/citydistrict/citydistrict.component */ "./src/app/common/components/citydistrict/citydistrict.component.ts");
/* harmony import */ var _livetracking_livetracking_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./livetracking/livetracking.component */ "./src/app/mainComponents/dashboard/livetracking/livetracking.component.ts");
/* harmony import */ var _vehicleauth_vehicleauth_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vehicleauth/vehicleauth.component */ "./src/app/mainComponents/dashboard/vehicleauth/vehicleauth.component.ts");
/* harmony import */ var _panicalerts_panicalerts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./panicalerts/panicalerts.component */ "./src/app/mainComponents/dashboard/panicalerts/panicalerts.component.ts");
/* harmony import */ var _devicestatus_devicestatus_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./devicestatus/devicestatus.component */ "./src/app/mainComponents/dashboard/devicestatus/devicestatus.component.ts");
/* harmony import */ var _quickaction_quickaction_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./quickaction/quickaction.component */ "./src/app/mainComponents/dashboard/quickaction/quickaction.component.ts");








var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
        this.showFilters = false;
        this.districtId = '';
        this.cityId = '';
        this.rtoId = '';
        this.searchDate = '';
    }
    ;
    DashboardComponent.prototype.isCityDistrictValid = function (formValid) {
        this.cityDistrictCompData = formValid;
    };
    DashboardComponent.prototype.ngOnInit = function () {
        this.getAllDashboardData();
    };
    DashboardComponent.prototype.toggleFilters = function () {
        this.showFilters = !this.showFilters;
    };
    DashboardComponent.prototype.applyFilters = function (parentForm) {
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
        }
        this.getAllDashboardData();
    };
    DashboardComponent.prototype.getAllDashboardData = function () {
        this.liveTrackingView.getLiveTrackData(this.searchDate, this.districtId, this.cityId);
        this.vehicleAuthView.getAuthData(this.searchDate, this.districtId, this.cityId);
        this.panicAlertsView.getPanicData(this.searchDate, this.districtId, this.cityId);
        this.deviceStatusView.getDeviceData(this.searchDate, this.districtId, this.cityId);
        this.quickActionView.getPanicData(this.searchDate, this.districtId, this.cityId, this.rtoId);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('liveTrackingView'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _livetracking_livetracking_component__WEBPACK_IMPORTED_MODULE_3__["LivetrackingComponent"])
    ], DashboardComponent.prototype, "liveTrackingView", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('vehicleAuthView'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _vehicleauth_vehicleauth_component__WEBPACK_IMPORTED_MODULE_4__["VehicleauthComponent"])
    ], DashboardComponent.prototype, "vehicleAuthView", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('panicAlertsView'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _panicalerts_panicalerts_component__WEBPACK_IMPORTED_MODULE_5__["PanicalertsComponent"])
    ], DashboardComponent.prototype, "panicAlertsView", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('deviceStatusView'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _devicestatus_devicestatus_component__WEBPACK_IMPORTED_MODULE_6__["DevicestatusComponent"])
    ], DashboardComponent.prototype, "deviceStatusView", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('quickActionView'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _quickaction_quickaction_component__WEBPACK_IMPORTED_MODULE_7__["QuickactionComponent"])
    ], DashboardComponent.prototype, "quickActionView", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('validateCityDistrict'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _common_components_citydistrict_citydistrict_component__WEBPACK_IMPORTED_MODULE_2__["CitydistrictComponent"])
    ], DashboardComponent.prototype, "CitydistrictComponent", void 0);
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/mainComponents/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.sass */ "./src/app/mainComponents/dashboard/dashboard.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/mainComponents/dashboard/dashboard.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/mainComponents/dashboard/dashboard.module.ts ***!
  \**************************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _dashboard_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dashboard/dashboard-routing.module */ "./src/app/mainComponents/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/mainComponents/dashboard/dashboard.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/core.module */ "./src/app/mainComponents/core/core.module.ts");
/* harmony import */ var _mapview_mapview_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mapview/mapview.component */ "./src/app/mainComponents/dashboard/mapview/mapview.component.ts");
/* harmony import */ var _livetracking_livetracking_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./livetracking/livetracking.component */ "./src/app/mainComponents/dashboard/livetracking/livetracking.component.ts");
/* harmony import */ var _panicalerts_panicalerts_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./panicalerts/panicalerts.component */ "./src/app/mainComponents/dashboard/panicalerts/panicalerts.component.ts");
/* harmony import */ var _vehicleauth_vehicleauth_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./vehicleauth/vehicleauth.component */ "./src/app/mainComponents/dashboard/vehicleauth/vehicleauth.component.ts");
/* harmony import */ var _devicestatus_devicestatus_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./devicestatus/devicestatus.component */ "./src/app/mainComponents/dashboard/devicestatus/devicestatus.component.ts");
/* harmony import */ var _quickaction_quickaction_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./quickaction/quickaction.component */ "./src/app/mainComponents/dashboard/quickaction/quickaction.component.ts");















var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"], _mapview_mapview_component__WEBPACK_IMPORTED_MODULE_9__["MapviewComponent"], _livetracking_livetracking_component__WEBPACK_IMPORTED_MODULE_10__["LivetrackingComponent"], _panicalerts_panicalerts_component__WEBPACK_IMPORTED_MODULE_11__["PanicalertsComponent"], _vehicleauth_vehicleauth_component__WEBPACK_IMPORTED_MODULE_12__["VehicleauthComponent"], _devicestatus_devicestatus_component__WEBPACK_IMPORTED_MODULE_13__["DevicestatusComponent"], _quickaction_quickaction_component__WEBPACK_IMPORTED_MODULE_14__["QuickactionComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _dashboard_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_6__["DashboardRoutingModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmCoreModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsDatepickerModule"].forRoot(),
                _core_core_module__WEBPACK_IMPORTED_MODULE_8__["CoreModule"]
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/mainComponents/dashboard/devicestatus/devicestatus.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/mainComponents/dashboard/devicestatus/devicestatus.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row no-gutters bdr-bottom p-t-4 p-b-4\" *ngIf=\"isDataExists\">\n    <div class=\"col-md-4\">\n      <div class=\"content-left clearfix\">\n        <img src=\"assets/images/ab-devicestatus.svg\">\n      </div>\n      <div class=\"content-right\">\n        <h6 class=\"p-t-2\">Device</h6>\n        <h6>Status</h6>\n        </div>\n    </div>\n    <div class=\"col-md-3\">\n      <h6 class=\"p-t-2\">Communicating</h6>\n      <h5 class=\"\">{{COMMUNICATING.on}}</h5>\n    </div>\n    <div class=\"col-md-3\">\n      <h6 class=\"p-t-2\">Not Communicating</h6>\n      <h5 class=\"\">{{COMMUNICATING.off}}</h5>\n    </div>\n    <div class=\"col-md-2\">\n        <h6 class=\"p-t-2\">Low Battery</h6>\n        <h5 class=\"\">{{BATTERY_PERCENTAGE.off}}</h5>\n      </div>\n      <div class=\"col-md-4\">\n        </div>\n          <div class=\"col-md-3\">\n            <h6 class=\"p-t-2\">Ignation ON</h6>\n            <h5 class=\"\">{{IGNITION.on}}</h5>\n          </div>\n          <div class=\"col-md-3\">\n            <h6 class=\"p-t-2\">Ignation OFF</h6>\n            <h5 class=\"\">{{IGNITION.off}}</h5>\n          </div>\n  </div>\n  <app-nodata class=\"w-100p\" *ngIf=\"!isDataExists\" [noDataText]='noDataText'></app-nodata>"

/***/ }),

/***/ "./src/app/mainComponents/dashboard/devicestatus/devicestatus.component.sass":
/*!***********************************************************************************!*\
  !*** ./src/app/mainComponents/dashboard/devicestatus/devicestatus.component.sass ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW5Db21wb25lbnRzL2Rhc2hib2FyZC9kZXZpY2VzdGF0dXMvZGV2aWNlc3RhdHVzLmNvbXBvbmVudC5zYXNzIn0= */"

/***/ }),

/***/ "./src/app/mainComponents/dashboard/devicestatus/devicestatus.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/mainComponents/dashboard/devicestatus/devicestatus.component.ts ***!
  \*********************************************************************************/
/*! exports provided: DevicestatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicestatusComponent", function() { return DevicestatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_services_dashboardserviceapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/services/dashboardserviceapi */ "./src/app/common/services/dashboardserviceapi.ts");



var DevicestatusComponent = /** @class */ (function () {
    function DevicestatusComponent(dashboardapi) {
        this.dashboardapi = dashboardapi;
        this.isDataExists = false;
        this.noDataText = 'Device Status Data Not Available';
    }
    DevicestatusComponent.prototype.ngOnInit = function () {
    };
    DevicestatusComponent.prototype.getDeviceData = function (searchDate, districtId, cityId) {
        var _this = this;
        var actionsArray = ['IGNITION', 'MAIN_POWER_STATUS', 'TAMPER_ALERT', 'EMERGENCY', 'COMMUNICATING', 'MEMORY_PERCENTAGE', 'BATTERY_PERCENTAGE'];
        this.dashboardapi.getDeviceDetails(searchDate, districtId, cityId, actionsArray)
            .subscribe(function (_data) {
            _this.deviceStatus = _data;
            for (var i = 0; i < _data.length; i++) {
                _this[_data[i].action] = _data[i];
            }
            _this.isDataExists = (_data.length > 0);
        });
    };
    DevicestatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-devicestatus',
            template: __webpack_require__(/*! ./devicestatus.component.html */ "./src/app/mainComponents/dashboard/devicestatus/devicestatus.component.html"),
            styles: [__webpack_require__(/*! ./devicestatus.component.sass */ "./src/app/mainComponents/dashboard/devicestatus/devicestatus.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_services_dashboardserviceapi__WEBPACK_IMPORTED_MODULE_2__["DashboardsService"]])
    ], DevicestatusComponent);
    return DevicestatusComponent;
}());



/***/ }),

/***/ "./src/app/mainComponents/dashboard/livetracking/livetracking.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/mainComponents/dashboard/livetracking/livetracking.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row no-gutters bdr-bottom p-b-4 p-t-1\" *ngIf=\"isDataExists\">\n    <div class=\"col-md-4\">\n      <div class=\"content-left clearfix\">\n        <img src=\"assets/images/ab-triptracking.svg\">\n      </div>\n      <div class=\"content-right\">\n        <h6 class=\"p-t-2\">Trips</h6>\n        <h5>{{liveTrackingData.totaltrips}}</h5>\n        </div>\n    </div>\n    <div class=\"col-md-3\">\n      <h6 class=\"text-abhaya p-t-2\">Open</h6>\n      <h5 [routerLink]=\"['/trip']\" class=\"text-abhaya cursor-hand\">{{liveTrackingData.opentrips}}</h5>\n    </div>\n    <div class=\"col-md-3\">\n      <h6 class=\"text-yellow p-t-2\">Route Deviation</h6>\n      <h5 [routerLink]=\"['/trip/routedeviation']\" class=\"text-yellow cursor-hand\">{{routeDeviationData[0].count}}</h5>\n    </div>\n    <div class=\"col-md-2\"></div>\n  </div>\n  <app-nodata class=\"w-100p\" *ngIf=\"!isDataExists\" [noDataText]='noDataText'></app-nodata>"

/***/ }),

/***/ "./src/app/mainComponents/dashboard/livetracking/livetracking.component.sass":
/*!***********************************************************************************!*\
  !*** ./src/app/mainComponents/dashboard/livetracking/livetracking.component.sass ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW5Db21wb25lbnRzL2Rhc2hib2FyZC9saXZldHJhY2tpbmcvbGl2ZXRyYWNraW5nLmNvbXBvbmVudC5zYXNzIn0= */"

/***/ }),

/***/ "./src/app/mainComponents/dashboard/livetracking/livetracking.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/mainComponents/dashboard/livetracking/livetracking.component.ts ***!
  \*********************************************************************************/
/*! exports provided: LivetrackingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LivetrackingComponent", function() { return LivetrackingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_services_dashboardserviceapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/services/dashboardserviceapi */ "./src/app/common/services/dashboardserviceapi.ts");



var LivetrackingComponent = /** @class */ (function () {
    function LivetrackingComponent(dashboardapi) {
        this.dashboardapi = dashboardapi;
        this.isDataExists = false;
        this.noDataText = 'No Live Tracking Data Available';
    }
    LivetrackingComponent.prototype.ngOnInit = function () {
    };
    LivetrackingComponent.prototype.getLiveTrackData = function (searchDate, districtId, cityId) {
        var _this = this;
        this.dashboardapi.getLiveTracking(searchDate, districtId, cityId)
            .subscribe(function (_data) {
            _this.liveTrackingData = _data[0];
            _this.dashboardapi.getRouteDeviation(searchDate, districtId, cityId)
                .subscribe(function (_data) {
                _this.routeDeviationData = _data;
                _this.isDataExists = (_data.length > 0);
            });
        });
    };
    LivetrackingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-livetracking',
            template: __webpack_require__(/*! ./livetracking.component.html */ "./src/app/mainComponents/dashboard/livetracking/livetracking.component.html"),
            styles: [__webpack_require__(/*! ./livetracking.component.sass */ "./src/app/mainComponents/dashboard/livetracking/livetracking.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_services_dashboardserviceapi__WEBPACK_IMPORTED_MODULE_2__["DashboardsService"]])
    ], LivetrackingComponent);
    return LivetrackingComponent;
}());



/***/ }),

/***/ "./src/app/mainComponents/dashboard/mapview/mapview.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/mainComponents/dashboard/mapview/mapview.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container top-header p-b-2\">\n  <div class=\"row head-block no-gutters bdr-bottom m-b-3 p-t-1\">\n    <div class=\"col-md-10 p-l-0\">\n      <h4>Map View</h4>\n    </div>\n    <div class=\"col-md-1 p-t-1\">\n      <a title=\"Live Tracking\" [routerLink]=\"['/dashboard']\" class=\"btn-mapviewleft\">\n        <i class=\"icon-ab-listview\"></i>\n      </a>\n      <a title=\"Map View\" [routerLink]=\"['/dashboard/mapview']\" class=\"btn-mapviewright active\">\n        <i class=\"icon-ab-mapview\"></i>\n      </a>\n    </div>\n    <div class=\"col-md-1 p-r-0 text-right\">\n      <div class=\"filters p-t-1\">\n        <button type=\"button\" class=\"filters-button\" [ngClass]=\"{ 'active': showFilters}\" (click)=\"toggleFilters()\">\n          <i class=\"icon-ab-searchfilter\"></i>\n          <span>Filters</span>\n        </button>\n        <div class=\"filters-body \" *ngIf=\"showFilters\">\n          <div class=\"arrow-up\"></div>\n          <form name=\"form\" (ngSubmit)=\"f.form.valid && applyFilters(f)\" #f=\"ngForm\" novalidate>\n            <app-citydistrict #vaidateChildComponentForm (isChildFormValid)=\"isChildFormValid($event)\"\n              [cityDistrictConfig]='cityDistrictConfig'></app-citydistrict>\n\n            <div class=\"form-group\">\n              <label for=\"email\">DATE</label>\n              <app-datepicker class=\"form-control bdr-none p-a-0\" name=\"searchDate\" [(ngModel)]=\"searchDate\"\n                #searchDatectrl=\"ngModel\" appForbiddenName=\"fred\"\n                [ngClass]=\"{ 'is-invalid': f.submitted && searchDatectrl.invalid }\" required\n                [datePickerModel]=\"datePickerModel\" searchDatectrl>\n              </app-datepicker>\n              <div *ngIf=\"f.submitted && searchDatectrl.invalid\" class=\"invalid-feedback\">\n                <div *ngIf=\"searchDatectrl.errors.required\">BOD is required</div>\n              </div>\n            </div>\n\n\n            <div class=\"form-group m-t-3\">\n              <button class=\"btn btn-primary w-100p\" type=\"submit\">Search</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-12 p-a-0\">\n      <nav aria-label=\"breadcrumb\">\n        <ol class=\"breadcrumb\">\n          <li class=\"breadcrumb-item\"><a [routerLink]=\"['/dashboard']\" class=\"active text-secondary\">Live Tracking</a>\n          </li>\n        </ol>\n      </nav>\n    </div>\n  </div>\n\n\n\n\n\n\n  <div class=\"row pt-8 no-gutters\">\n\n\n\n    <div id=\"googleMap\" class=\"w-100p\">\n      <agm-map [zoom]=\"10\" [latitude]=\"lat\" [longitude]=\"lng\" [disableDefaultUI]=\"false\" [zoomControl]=\"false\"\n        (mapClick)=\"mapClicked($event)\" (mapReady)=\"mapReady($event)\">\n        <agm-marker *ngFor=\"let m of liveVehicleArray; let i = index\"\n          (markerClick)=\"clickedMarker(m.rcNumber, i, $event)\" [latitude]=\"m.latitude\" [longitude]=\"m.langitude\"\n          [label]=\"\" [markerDraggable]=\"false\" [iconUrl]=\"iconURL\" (dragEnd)=\"markerDragEnd(m, $event)\">\n          <agm-info-window>\n            <div class=\"map-tool-tip\">\n              <h6>Vehicle No: <span>{{m.vehicleRegNo}}</span></h6><br>\n              <h6>Location: <span>{{m.location}}</span></h6>\n            </div>\n          </agm-info-window>\n        </agm-marker>\n      </agm-map>\n    </div>\n\n\n\n\n  </div>"

/***/ }),

/***/ "./src/app/mainComponents/dashboard/mapview/mapview.component.sass":
/*!*************************************************************************!*\
  !*** ./src/app/mainComponents/dashboard/mapview/mapview.component.sass ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW5Db21wb25lbnRzL2Rhc2hib2FyZC9tYXB2aWV3L21hcHZpZXcuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/mainComponents/dashboard/mapview/mapview.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/mainComponents/dashboard/mapview/mapview.component.ts ***!
  \***********************************************************************/
/*! exports provided: MapviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapviewComponent", function() { return MapviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_components_citydistrict_citydistrict_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/components/citydistrict/citydistrict.component */ "./src/app/common/components/citydistrict/citydistrict.component.ts");
/* harmony import */ var _common_services_deviceserviceapi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/services/deviceserviceapi */ "./src/app/common/services/deviceserviceapi.ts");




var MapviewComponent = /** @class */ (function () {
    function MapviewComponent(deviceapi) {
        this.deviceapi = deviceapi;
        this.showFilters = false;
        this.lat = 16.53760681989354;
        this.lng = 80.6536762404969;
        this.iconURL = '../../../../assets/images/ic_auto.png';
        this.userDetails = JSON.parse(localStorage.getItem('userdetails'));
    }
    MapviewComponent.prototype.mapReady = function (map) {
        this.map = map;
    };
    MapviewComponent.prototype.isChildFormValid = function (formValid) {
        this.cityDistrictCompData = formValid;
    };
    MapviewComponent.prototype.ngOnInit = function () {
        this.cityDistrictConfig = {
            isDistrictRequired: true,
            isCityRequired: true
        };
        this.getLiveVehicles();
    };
    MapviewComponent.prototype.toggleFilters = function () {
        this.showFilters = !this.showFilters;
    };
    MapviewComponent.prototype.applyFilters = function (parentForm) {
        this.parentFormSubmitted = true;
        this.CitydistrictComponent.validateChildForm(this.parentFormSubmitted);
        if (!parentForm.valid || !this.cityDistrictCompData.isFormValid) {
            return;
        }
        else {
            console.log(this.cityDistrictCompData.districtName);
            console.log(this.cityDistrictCompData.cityName);
        }
        console.log(this.searchDate);
    };
    MapviewComponent.prototype.mapClicked = function ($event) {
        console.log($event);
    };
    MapviewComponent.prototype.getLiveVehicles = function () {
        var _this = this;
        this.deviceapi.getLiveDevices(this.userDetails.stateId)
            .subscribe(function (data) {
            _this.liveVehicleArray = data.content;
            console.log(_this.liveVehicleArray);
        });
    };
    MapviewComponent.prototype.clickedMarker = function (label, index, $event) {
        this.lat = $event.latitude;
        this.lng = $event.longitude;
        this.map.setCenter({ lat: $event.latitude, lng: $event.longitude });
        var position = new google.maps.LatLng($event.latitude, $event.longitude);
        this.map.panTo(position);
        this.map.setZoom(15);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('vaidateChildComponentForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _common_components_citydistrict_citydistrict_component__WEBPACK_IMPORTED_MODULE_2__["CitydistrictComponent"])
    ], MapviewComponent.prototype, "CitydistrictComponent", void 0);
    MapviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mapview',
            template: __webpack_require__(/*! ./mapview.component.html */ "./src/app/mainComponents/dashboard/mapview/mapview.component.html"),
            styles: [__webpack_require__(/*! ./mapview.component.sass */ "./src/app/mainComponents/dashboard/mapview/mapview.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_services_deviceserviceapi__WEBPACK_IMPORTED_MODULE_3__["DevicesService"]])
    ], MapviewComponent);
    return MapviewComponent;
}());



/***/ }),

/***/ "./src/app/mainComponents/dashboard/panicalerts/panicalerts.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/mainComponents/dashboard/panicalerts/panicalerts.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row no-gutters bdr-bottom p-t-4 p-b-4\" *ngIf=\"isDataExists\">\n  <div class=\"col-md-4\">\n    <div class=\"content-left clearfix\">\n      <img src=\"assets/images/ab-panivalerts.svg\">\n    </div>\n    <div class=\"content-right\">\n      <h6 class=\"p-t-2\">Panic Alerts</h6>\n      <h5>{{totalPanic}}</h5>\n    </div>\n  </div>\n  <div class=\"col-md-3\">\n    <h6 class=\"text-red p-t-2\">Device Panic</h6>\n    <h5 class=\"text-red cursor-hand\" (click)=\"panicDetailView('DEVICE')\">{{devicePanicData.openDevicePanic}}</h5>\n  </div>\n  <div class=\"col-md-2\">\n    <h6 class=\"text-red p-t-2\">Mobile Panic</h6>\n    <h5 class=\"text-red cursor-hand\" (click)=\"panicDetailView('WEB')\">{{panicData.openWeb}}</h5>\n  </div>\n  <div class=\"col-md-3\">\n    <h6 class=\"text-red p-t-2\">Video Panic</h6>\n    <h5 class=\"text-red cursor-hand\" (click)=\"panicDetailView('MOBILE')\">{{panicData.openMobile}}</h5>\n  </div>\n</div>\n<app-nodata class=\"w-100p\" *ngIf=\"!isDataExists\" [noDataText]='noDataText'></app-nodata>"

/***/ }),

/***/ "./src/app/mainComponents/dashboard/panicalerts/panicalerts.component.sass":
/*!*********************************************************************************!*\
  !*** ./src/app/mainComponents/dashboard/panicalerts/panicalerts.component.sass ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW5Db21wb25lbnRzL2Rhc2hib2FyZC9wYW5pY2FsZXJ0cy9wYW5pY2FsZXJ0cy5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/mainComponents/dashboard/panicalerts/panicalerts.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/mainComponents/dashboard/panicalerts/panicalerts.component.ts ***!
  \*******************************************************************************/
/*! exports provided: PanicalertsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanicalertsComponent", function() { return PanicalertsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_services_dashboardserviceapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/services/dashboardserviceapi */ "./src/app/common/services/dashboardserviceapi.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var PanicalertsComponent = /** @class */ (function () {
    function PanicalertsComponent(dashboardapi, router) {
        this.dashboardapi = dashboardapi;
        this.router = router;
        this.isDataExists = false;
        this.noDataText = 'No Panic Data Available';
    }
    PanicalertsComponent.prototype.ngOnInit = function () {
    };
    PanicalertsComponent.prototype.panicDetailView = function (panicType) {
        this.router.navigate(['/trip/panicalerts'], {
            queryParams: { panicType: panicType },
            queryParamsHandling: 'merge'
        });
    };
    PanicalertsComponent.prototype.getPanicData = function (searchDate, districtId, cityId) {
        var _this = this;
        this.dashboardapi.getPanicDetails(searchDate, districtId, cityId)
            .subscribe(function (_data) {
            _this.panicData = _data[0];
            _this.dashboardapi.getDevicePanic(searchDate, districtId, cityId)
                .subscribe(function (_data) {
                _this.devicePanicData = _data[0];
                _this.totalPanic = _this.panicData.openWeb + _this.panicData.openMobile + _this.devicePanicData.openDevicePanic;
                _this.isDataExists = (_data.length > 0);
            });
        });
        ;
    };
    PanicalertsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-panicalerts',
            template: __webpack_require__(/*! ./panicalerts.component.html */ "./src/app/mainComponents/dashboard/panicalerts/panicalerts.component.html"),
            styles: [__webpack_require__(/*! ./panicalerts.component.sass */ "./src/app/mainComponents/dashboard/panicalerts/panicalerts.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_services_dashboardserviceapi__WEBPACK_IMPORTED_MODULE_2__["DashboardsService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], PanicalertsComponent);
    return PanicalertsComponent;
}());



/***/ }),

/***/ "./src/app/mainComponents/dashboard/quickaction/quickaction.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/mainComponents/dashboard/quickaction/quickaction.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-empty\">\n    <div class=\"bg-empty-left\">\n      <img src=\"assets/images/ab-alertsquickview.svg\">\n    </div>\n    <div class=\"bg-empty-right\">\n      <h6>Panic Alerts</h6>\n      <h5>Quick Action</h5>\n    </div>\n  </div>\n  <div class=\"bg-scroll\">\n  <div class=\"bg-red m-t-1\" *ngFor=\"let panic of panicData\">\n    <div class=\"bg-red-left\" (click)=\"tripMapView(panic)\">\n      <h6>Vehicle</h6>\n      <h5>{{panic.rcNumber}}</h5>\n      <p><img src=\"assets/images/ab_time.svg\" />{{panic.packetTime}}</p>\n    </div>\n    <div class=\"bg-red-right\" (click)=\"tripMapView(panic)\">\n      <img src=\"assets/images/map.png\">\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/mainComponents/dashboard/quickaction/quickaction.component.sass":
/*!*********************************************************************************!*\
  !*** ./src/app/mainComponents/dashboard/quickaction/quickaction.component.sass ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW5Db21wb25lbnRzL2Rhc2hib2FyZC9xdWlja2FjdGlvbi9xdWlja2FjdGlvbi5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/mainComponents/dashboard/quickaction/quickaction.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/mainComponents/dashboard/quickaction/quickaction.component.ts ***!
  \*******************************************************************************/
/*! exports provided: QuickactionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickactionComponent", function() { return QuickactionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_services_tripserviceapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/services/tripserviceapi */ "./src/app/common/services/tripserviceapi.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var QuickactionComponent = /** @class */ (function () {
    function QuickactionComponent(tripserviceApi, router) {
        this.tripserviceApi = tripserviceApi;
        this.router = router;
        this.isDataExists = false;
    }
    QuickactionComponent.prototype.ngOnInit = function () {
    };
    QuickactionComponent.prototype.tripMapView = function (tripDetails) {
        this.router.navigate(['/trip/triptracking'], {
            queryParams: { tripId: tripDetails.tripId },
            queryParamsHandling: 'merge'
        });
    };
    QuickactionComponent.prototype.getPanicData = function (searchDate, districtId, cityId, rtoId) {
        var _this = this;
        this.tripserviceApi.getPanicDetails(0, 100, searchDate, '', '', false, districtId, cityId, rtoId)
            .subscribe(function (_data) {
            _this.panicData = _data.content;
            _this.isDataExists = (_this.panicData.length > 0);
        });
    };
    QuickactionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quickaction',
            template: __webpack_require__(/*! ./quickaction.component.html */ "./src/app/mainComponents/dashboard/quickaction/quickaction.component.html"),
            styles: [__webpack_require__(/*! ./quickaction.component.sass */ "./src/app/mainComponents/dashboard/quickaction/quickaction.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_services_tripserviceapi__WEBPACK_IMPORTED_MODULE_2__["TripServiceApi"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], QuickactionComponent);
    return QuickactionComponent;
}());



/***/ }),

/***/ "./src/app/mainComponents/dashboard/vehicleauth/vehicleauth.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/mainComponents/dashboard/vehicleauth/vehicleauth.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row no-gutters bdr-bottom p-t-4 p-b-4\" *ngIf=\"isDataExists\">\n    <div class=\"col-md-4\">\n      <div class=\"content-left clearfix\">\n        <img src=\"assets/images/ab-vehicleauth.svg\">\n      </div>\n      <div class=\"content-right\">\n        <h6 class=\"p-t-2\">Vehicle</h6>\n        <h6 class=\"\">Authentication</h6>\n        <h5>{{vehicleAuthData.total}}</h5>\n        </div>\n    </div>\n    <div class=\"col-md-3\">\n      <h6 class=\"p-t-2\">Authenticated</h6>\n      <h5>{{vehicleAuthData.auth}}</h5>\n    </div>\n    <div class=\"col-md-3\">\n      <h6 class=\"p-t-2\">Un Authenticated</h6>\n      <h5>{{vehicleAuthData.unauth}}</h5>\n    </div>\n    <div class=\"col-md-2\"></div>\n  </div>\n  <app-nodata class=\"w-100p\" *ngIf=\"!isDataExists\" [noDataText]='noDataText'></app-nodata>"

/***/ }),

/***/ "./src/app/mainComponents/dashboard/vehicleauth/vehicleauth.component.sass":
/*!*********************************************************************************!*\
  !*** ./src/app/mainComponents/dashboard/vehicleauth/vehicleauth.component.sass ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW5Db21wb25lbnRzL2Rhc2hib2FyZC92ZWhpY2xlYXV0aC92ZWhpY2xlYXV0aC5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/mainComponents/dashboard/vehicleauth/vehicleauth.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/mainComponents/dashboard/vehicleauth/vehicleauth.component.ts ***!
  \*******************************************************************************/
/*! exports provided: VehicleauthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleauthComponent", function() { return VehicleauthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_services_dashboardserviceapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/services/dashboardserviceapi */ "./src/app/common/services/dashboardserviceapi.ts");



var VehicleauthComponent = /** @class */ (function () {
    function VehicleauthComponent(dashboardapi) {
        this.dashboardapi = dashboardapi;
        this.isDataExists = false;
        this.noDataText = 'Vehicle Auth Data Not Available';
    }
    VehicleauthComponent.prototype.ngOnInit = function () {
    };
    VehicleauthComponent.prototype.getAuthData = function (searchDate, districtId, cityId) {
        var _this = this;
        this.dashboardapi.getAuthDetails(searchDate, districtId, cityId)
            .subscribe(function (_data) {
            _this.vehicleAuthData = _data[0];
            _this.isDataExists = (_data.length > 0);
        });
    };
    VehicleauthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vehicleauth',
            template: __webpack_require__(/*! ./vehicleauth.component.html */ "./src/app/mainComponents/dashboard/vehicleauth/vehicleauth.component.html"),
            styles: [__webpack_require__(/*! ./vehicleauth.component.sass */ "./src/app/mainComponents/dashboard/vehicleauth/vehicleauth.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_services_dashboardserviceapi__WEBPACK_IMPORTED_MODULE_2__["DashboardsService"]])
    ], VehicleauthComponent);
    return VehicleauthComponent;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map