(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["drivers-drivers-module"],{

/***/ "./src/app/common/models/driverDuty.model.ts":
/*!***************************************************!*\
  !*** ./src/app/common/models/driverDuty.model.ts ***!
  \***************************************************/
/*! exports provided: DriverDuty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverDuty", function() { return DriverDuty; });
var DriverDuty = /** @class */ (function () {
    function DriverDuty() {
    }
    return DriverDuty;
}());



/***/ }),

/***/ "./src/app/common/models/drivers-model.ts":
/*!************************************************!*\
  !*** ./src/app/common/models/drivers-model.ts ***!
  \************************************************/
/*! exports provided: driversModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "driversModel", function() { return driversModel; });
var driversModel = /** @class */ (function () {
    function driversModel() {
    }
    return driversModel;
}());



/***/ }),

/***/ "./src/app/mainComponents/drivers/driverduty/driverduty.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/mainComponents/drivers/driverduty/driverduty.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container top-header p-b-3\">\n  <div class=\"row head-block no-gutters bdr-bottom m-b-3 p-t-1\">\n    <div class=\"col-md-6 p-l-0\">\n      <h4>Drivers Duty Details</h4>\n    </div>\n    <div class=\"col-md-5 text-right\">\n        <span class=\"btn-circle\"><i class=\"icon-ab_download\"></i></span>\n        <span class=\"btn-circle m-r-1\" (click)=\"refreshPage()\"><i class=\"icon-ab-refresh\"></i></span>\n    </div>\n    <div class=\"col-md-1 p-r-0 text-right\">\n      <div class=\"filters\">\n        <button type=\"button\" class=\"filters-button\" [ngClass]=\"{ 'active': showFilters}\" (click)=\"toggleFilters()\">\n          <i class=\"icon-ab-searchfilter\"></i>\n          <span>Filters</span>\n        </button>\n        <div class=\"filters-body \" *ngIf=\"showFilters\">\n          <div class=\"arrow-up\"></div>\n          <form name=\"form\" (ngSubmit)=\"f.form.valid && applyFilters(f)\" #f=\"ngForm\" novalidate>\n            <app-citydistrict #validateCityDistrict (isCityDistrictValid)=\"isCityDistrictValid($event)\"\n              [cityDistrictConfig]='cityDistrictConfig'></app-citydistrict>\n\n            <div class=\"form-group\">\n              <label>DATE</label>\n              <app-datepicker class=\"form-control bdr-none p-a-0\" name=\"searchDate\" [(ngModel)]=\"searchDate\"\n                #searchDatectrl=\"ngModel\" appForbiddenName=\"fred\"\n                [ngClass]=\"{ 'is-invalid': f.submitted && searchDatectrl.invalid }\"\n                [datePickerModel]=\"datePickerModel\" searchDatectrl>\n              </app-datepicker>\n              <div *ngIf=\"f.submitted && searchDatectrl.invalid\" class=\"invalid-feedback\">\n                <div *ngIf=\"searchDatectrl.errors.required\">Search Date is required</div>\n              </div>\n            </div>\n            <div class=\"form-group m-t-3\">\n              <button class=\"btn btn-primary w-100p\" type=\"submit\">Search</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-12 p-a-0 p-t-1\">\n      <nav aria-label=\"breadcrumb\">\n        <ol class=\"breadcrumb\">\n          <li class=\"breadcrumb-item\"><a class=\"text-abhaya\" [routerLink]=\"['/dashboard']\">Home</a></li>\n          <li class=\"breadcrumb-item\" aria-current=\"page\"><a class=\"text-abhaya\" [routerLink]=\"['/drivers']\">Drivers</a>\n          </li>\n          <li class=\"breadcrumb-item active text-secondary\" aria-current=\"page\">Driver Duty Details</li>\n        </ol>\n      </nav>\n    </div>\n  </div>\n  <div class=\"row no-gutters m-b-3\">\n      <div class=\"col-md-6 p-a-0\">\n          <div class=\"form-group abhaya-table-search\">\n            <i class=\"icon-ab-search\"></i>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchText\" (keydown.enter)=\"getDriverDutyDetails()\"\n              placeholder=\"Search Vehicle / IOT / RFID / DL / Owner No.\">\n            <span class=\"separator\"> </span>\n          </div>\n        </div>\n    <div class=\"col-md-6 p-a-0 text-primary text-right p-t-2\">\n      Total Records : <h5 class=\"total-records-text d-inline-block\"> {{page.totalElements}}</h5>\n    </div>\n  </div>\n  <div class=\"row no-gutters pt-8\">\n    <table class=\"abhaya-table\">\n      <thead>\n        <tr>\n          <th>Vehicle Number</th>\n          <th>Serial Number</th>\n          <th>Driver DL</th>\n          <th>Driver Name</th>\n          <th>Driver Contact</th>\n          <th>Duty Date</th>\n          <th>Duty Time</th>\n          <th>RFID</th>\n          <th></th>\n        </tr>\n      </thead>\n      <tbody *ngIf=\"isDataExists\">\n        <tr\n          *ngFor=\"let driverDuty of driverDutyDetails | paginate: { id: 'paginationCtrl', itemsPerPage: page.size, currentPage: p, totalItems: page.totalElements }\">\n          <td>{{driverDuty.rcNumber}}</td>\n          <td>{{driverDuty.serialNumber}}</td>\n          <td>{{driverDuty.dlNumber}}</td>\n          <td>{{driverDuty.driverName}}</td>\n          <td>{{driverDuty.driverContactNumber}}</td>\n          <td>{{driverDuty.packetDate}}</td>\n          <td>{{driverDuty.packetTime}}</td>\n          <td>{{driverDuty.rfId}}</td>\n          <td>\n            <a class=\"\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n              aria-expanded=\"false\"><i class=\"icon-ab_more\"></i></a>\n            <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdown\">\n              <div class=\"arrow-up\"></div>\n              <a (click)=\"editviewdriver(driverDuty)\" class=\"dropdown-item\">View Details</a>\n            </div>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n    <app-nodata class=\"w-100p\" *ngIf=\"!isDataExists\" [noDataText]='noDataText'></app-nodata>\n    <!--Pagination-->\n    <div class=\"row no-gutters w-100p m-t-5\">\n        <div *ngIf=\"isDataExists\" class=\"float-left p-t-1 page-size\">\n            <span>Page Size :</span>\n            <select (change)=\"changePageSize()\" [(ngModel)]=\"pageSize\">\n              <option *ngFor=\"let number of pageSizeValues\" value=\"{{number}}\">{{number}}</option>\n            </select>\n          </div>\n      <div *ngIf=\"isDataExists\" style=\"margin:0px auto;\">\n        <pagination-controls id=\"paginationCtrl\" class=\"pagination float-right\" (pageChange)=\"pageChanged($event)\"\n          maxSize=\"6\" directionLinks=\"true\" autoHide=\"true\" responsive=\"true\" previousLabel=\"Prev\" nextLabel=\"Next\">\n        </pagination-controls>\n\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/mainComponents/drivers/driverduty/driverduty.component.sass":
/*!*****************************************************************************!*\
  !*** ./src/app/mainComponents/drivers/driverduty/driverduty.component.sass ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW5Db21wb25lbnRzL2RyaXZlcnMvZHJpdmVyZHV0eS9kcml2ZXJkdXR5LmNvbXBvbmVudC5zYXNzIn0= */"

/***/ }),

/***/ "./src/app/mainComponents/drivers/driverduty/driverduty.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/mainComponents/drivers/driverduty/driverduty.component.ts ***!
  \***************************************************************************/
/*! exports provided: DriverdutyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverdutyComponent", function() { return DriverdutyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_services_driversServiceApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/services/driversServiceApi */ "./src/app/common/services/driversServiceApi.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! .././../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _common_models_page_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/models/page.model */ "./src/app/common/models/page.model.ts");
/* harmony import */ var _common_components_citydistrict_citydistrict_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/components/citydistrict/citydistrict.component */ "./src/app/common/components/citydistrict/citydistrict.component.ts");
/* harmony import */ var _common_models_date_picker_model_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/models/date-picker-model.model */ "./src/app/common/models/date-picker-model.model.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _modalpopup_editviewdriverduty_editviewdriverduty_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modalpopup/editviewdriverduty/editviewdriverduty.component */ "./src/app/mainComponents/drivers/modalpopup/editviewdriverduty/editviewdriverduty.component.ts");









var DriverdutyComponent = /** @class */ (function () {
    function DriverdutyComponent(driversApi, modalService) {
        this.driversApi = driversApi;
        this.modalService = modalService;
        this.pageSizeValues = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].pageSizeValues;
        this.pageSize = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].pageSize;
        this.intilPageNumber = 0;
        this.isDataExists = false;
        this.page = new _common_models_page_model__WEBPACK_IMPORTED_MODULE_4__["PageModel"]();
        this.searchText = '';
        this.districtId = '';
        this.cityId = '';
        this.rtoId = '';
        this.showFilters = false;
        this.datePickerModel = new _common_models_date_picker_model_model__WEBPACK_IMPORTED_MODULE_6__["DatePickerModel"];
        this.searchDate = '';
        this.noDataText = 'No Driver Duty Details Available';
    }
    DriverdutyComponent.prototype.isCityDistrictValid = function (formValid) {
        this.cityDistrictCompData = formValid;
    };
    DriverdutyComponent.prototype.ngOnInit = function () {
        // this.searchDate = this.datePickerModel.newDate = new Date().toString();
        this.getDriverDutyDetails();
    };
    DriverdutyComponent.prototype.toggleFilters = function () {
        this.showFilters = !this.showFilters;
    };
    DriverdutyComponent.prototype.applyFilters = function (parentForm) {
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
            this.getDriverDutyDetails();
        }
    };
    DriverdutyComponent.prototype.changePageSize = function () {
        this.getDriverDutyDetails();
    };
    DriverdutyComponent.prototype.pageChanged = function (event) {
        this.p = event;
        this.intilPageNumber = event - 1;
        this.getDriverDutyDetails();
    };
    DriverdutyComponent.prototype.editviewdriver = function (driverDuty) {
        var modalRef = this.modalService.open(_modalpopup_editviewdriverduty_editviewdriverduty_component__WEBPACK_IMPORTED_MODULE_8__["EditviewdriverdutyComponent"], {
            size: 'lg', backdrop: 'static',
            keyboard: false
        });
        modalRef.componentInstance.selectedDriverDutyDetails = driverDuty;
    };
    DriverdutyComponent.prototype.refreshPage = function () {
        this.intilPageNumber = 0;
        this.pageSize = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].pageSize;
        this.searchDate = '';
        this.searchText = '';
        this.districtId = '';
        this.cityId = '';
        this.getDriverDutyDetails();
    };
    DriverdutyComponent.prototype.getDriverDutyDetails = function () {
        var _this = this;
        this.driversApi.getAllDriverDutyDetails(this.intilPageNumber, this.pageSize, this.searchDate, this.searchText, this.districtId, this.cityId, this.rtoId)
            .subscribe(function (_data) {
            _this.driverDutyDetails = _data.content;
            _this.page = _data.page;
            _this.isDataExists = (_this.driverDutyDetails.length > 0);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('validateCityDistrict'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _common_components_citydistrict_citydistrict_component__WEBPACK_IMPORTED_MODULE_5__["CitydistrictComponent"])
    ], DriverdutyComponent.prototype, "CitydistrictComponent", void 0);
    DriverdutyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-driverduty',
            template: __webpack_require__(/*! ./driverduty.component.html */ "./src/app/mainComponents/drivers/driverduty/driverduty.component.html"),
            styles: [__webpack_require__(/*! ./driverduty.component.sass */ "./src/app/mainComponents/drivers/driverduty/driverduty.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_services_driversServiceApi__WEBPACK_IMPORTED_MODULE_2__["DriversService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"]])
    ], DriverdutyComponent);
    return DriverdutyComponent;
}());



/***/ }),

/***/ "./src/app/mainComponents/drivers/drivers.component.html":
/*!***************************************************************!*\
  !*** ./src/app/mainComponents/drivers/drivers.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container top-header p-b-3\">\n  <div class=\"row head-block no-gutters bdr-bottom m-b-3 p-t-1\">\n    <div class=\"col-md-6 p-l-0\">\n      <h4>Driver Details</h4>\n    </div>\n    <div class=\"col-md-5 text-right\">\n        <span class=\"btn-circle\"><i class=\"icon-ab_download\"></i></span>\n        <span class=\"btn-circle m-r-1\" (click)=\"refreshPage()\"><i class=\"icon-ab-refresh\"></i></span>\n    </div>\n    <div class=\"col-md-1 p-r-0 text-right\">\n      <div class=\"filters\">\n        <button type=\"button\" class=\"filters-button\" [ngClass]=\"{ 'active': showFilters}\" (click)=\"toggleFilters()\">\n          <i class=\"icon-ab-searchfilter\"></i>\n          <span>Filters</span>\n        </button>\n        <div class=\"filters-body \" *ngIf=\"showFilters\">\n          <div class=\"arrow-up\"></div>\n          <form name=\"form\" (ngSubmit)=\"f.form.valid && applyFilters(f)\" #f=\"ngForm\" novalidate>\n            <app-citydistrict #validateCityDistrict (isCityDistrictValid)=\"isCityDistrictValid($event)\"\n              [cityDistrictConfig]='cityDistrictConfig'></app-citydistrict>\n\n            <div class=\"form-group\">\n              <label>DATE</label>\n              <app-datepicker class=\"form-control bdr-none p-a-0\" name=\"searchDate\" [(ngModel)]=\"searchDate\"\n                #searchDatectrl=\"ngModel\" appForbiddenName=\"fred\"\n                [ngClass]=\"{ 'is-invalid': f.submitted && searchDatectrl.invalid }\"\n                [datePickerModel]=\"datePickerModel\" searchDatectrl>\n              </app-datepicker>\n              <div *ngIf=\"f.submitted && searchDatectrl.invalid\" class=\"invalid-feedback\">\n                <div *ngIf=\"searchDatectrl.errors.required\">Search Date is required</div>\n              </div>\n            </div>\n            <div class=\"form-group m-t-3\">\n              <button class=\"btn btn-primary w-100p\" type=\"submit\">Search</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-12 p-a-0 p-t-1\">\n      <nav aria-label=\"breadcrumb\">\n        <ol class=\"breadcrumb\">\n          <li class=\"breadcrumb-item\"><a class=\"text-abhaya\" [routerLink]=\"['/dashboard']\">Home</a></li>\n          <li class=\"breadcrumb-item active text-secondary\" aria-current=\"page\">Driver Details</li>\n        </ol>\n      </nav>\n    </div>\n  </div>\n  <div class=\"row no-gutters m-b-3\">\n      <div class=\"col-md-6 p-a-0\">\n          <div class=\"form-group abhaya-table-search\">\n            <i class=\"icon-ab-search\"></i>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchText\" (keydown.enter)=\"getDriverDetails()\"\n              placeholder=\"Search by DL / RFID / Contact No.\">\n            <span class=\"separator\"> </span>\n          </div>\n        </div>\n    <div class=\"col-md-6 p-a-0 text-primary text-right p-t-2\">\n      Total Records : <h5 class=\"total-records-text d-inline-block\"> {{page.totalElements}}</h5>\n    </div>\n    \n  </div>\n  <div class=\"row no-gutters pt-8\">\n    <table class=\"abhaya-table\">\n      <thead>\n        <tr>\n          <th>DL NO</th>\n          <th>Driver Name</th>\n          <th>RFID</th>\n          <th>#Mobile Number</th>\n          <th>Gender</th>\n          <th>City</th>\n          <th>District</th>\n          <th>DL Expiry Date</th>\n          <th></th>\n        </tr>\n      </thead>\n      <tbody *ngIf=\"isDataExists\">\n        <tr\n          *ngFor=\"let driver of driverDetails | paginate: { id: 'paginationCtrl', itemsPerPage: page.size, currentPage: p, totalItems: page.totalElements }\">\n          <td>{{driver.dlNumber}}</td>\n          <td>{{driver.driverName}}</td>\n          <td>{{driver.rfId}}</td>\n          <td>{{driver.contactNumber}}</td>\n          <td>{{driver.gender}}</td>\n          <td>{{driver.cityName}}</td>\n          <td>{{driver.districtName}}</td>\n          <td>{{driver.dlExpiryDate}}</td>\n          <td>\n            <a class=\"\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n              aria-expanded=\"false\"><i class=\"icon-ab_more\"></i></a>\n            <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdown\">\n              <div class=\"arrow-up\"></div>\n              <a (click)=\"editviewdriver(driver)\" class=\"dropdown-item\">View Details</a>\n              <a (click)=\"mapRfId(driver)\" class=\"dropdown-item\">Map RFID</a>\n            </div>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n    <app-nodata class=\"w-100p\" *ngIf=\"!isDataExists\" [noDataText]='noDataText'></app-nodata>\n    <!--Pagination-->\n    <div class=\"row no-gutters w-100p m-t-5\">\n        <div *ngIf=\"isDataExists\" class=\"float-left p-t-1 page-size\">\n            <span>Page Size :</span>\n            <select (change)=\"changePageSize()\" [(ngModel)]=\"pageSize\">\n              <option *ngFor=\"let number of pageSizeValues\" value=\"{{number}}\">{{number}}</option>\n            </select>\n          </div>\n      <div *ngIf=\"isDataExists\" style=\"margin:0px auto;\">\n        <pagination-controls id=\"paginationCtrl\" class=\"pagination float-right\" (pageChange)=\"pageChanged($event)\"\n          maxSize=\"6\" directionLinks=\"true\" autoHide=\"true\" responsive=\"true\" previousLabel=\"Prev\" nextLabel=\"Next\">\n        </pagination-controls>\n    \n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/mainComponents/drivers/drivers.component.sass":
/*!***************************************************************!*\
  !*** ./src/app/mainComponents/drivers/drivers.component.sass ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW5Db21wb25lbnRzL2RyaXZlcnMvZHJpdmVycy5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/mainComponents/drivers/drivers.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/mainComponents/drivers/drivers.component.ts ***!
  \*************************************************************/
/*! exports provided: DriversComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriversComponent", function() { return DriversComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_services_driversServiceApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/services/driversServiceApi */ "./src/app/common/services/driversServiceApi.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _common_models_page_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/models/page.model */ "./src/app/common/models/page.model.ts");
/* harmony import */ var _common_components_citydistrict_citydistrict_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/components/citydistrict/citydistrict.component */ "./src/app/common/components/citydistrict/citydistrict.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _modalpopup_editviewdriver_editviewdriver_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modalpopup/editviewdriver/editviewdriver.component */ "./src/app/mainComponents/drivers/modalpopup/editviewdriver/editviewdriver.component.ts");
/* harmony import */ var _modalpopup_maprfid_maprfid_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modalpopup/maprfid/maprfid.component */ "./src/app/mainComponents/drivers/modalpopup/maprfid/maprfid.component.ts");









var DriversComponent = /** @class */ (function () {
    function DriversComponent(driversApi, modalService) {
        this.driversApi = driversApi;
        this.modalService = modalService;
        this.driverDetails = []; //driversModel;
        this.pageSizeValues = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].pageSizeValues;
        this.pageSize = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].pageSize;
        this.intilPageNumber = 0;
        this.isDataExists = false;
        this.page = new _common_models_page_model__WEBPACK_IMPORTED_MODULE_4__["PageModel"]();
        this.searchText = '';
        this.districtId = '';
        this.cityId = '';
        this.rtoId = '';
        this.showFilters = false;
        this.searchDate = '';
        this.noDataText = 'No Driver Details Available';
    }
    ;
    DriversComponent.prototype.isCityDistrictValid = function (formValid) {
        this.cityDistrictCompData = formValid;
    };
    DriversComponent.prototype.ngOnInit = function () {
        this.getDriverDetails();
    };
    DriversComponent.prototype.toggleFilters = function () {
        this.showFilters = !this.showFilters;
    };
    DriversComponent.prototype.applyFilters = function (parentForm) {
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
            this.getDriverDetails();
        }
    };
    DriversComponent.prototype.changePageSize = function () {
        this.getDriverDetails();
    };
    DriversComponent.prototype.pageChanged = function (event) {
        this.p = event;
        this.intilPageNumber = event - 1;
        this.getDriverDetails();
    };
    DriversComponent.prototype.editviewdriver = function (selectedDriver) {
        var modalRef = this.modalService.open(_modalpopup_editviewdriver_editviewdriver_component__WEBPACK_IMPORTED_MODULE_7__["EditviewdriverComponent"], {
            size: 'lg', backdrop: 'static',
            keyboard: false
        });
        modalRef.componentInstance.selectedDriverDetails = selectedDriver;
    };
    DriversComponent.prototype.mapRfId = function (selectedDriver) {
        var modalRef = this.modalService.open(_modalpopup_maprfid_maprfid_component__WEBPACK_IMPORTED_MODULE_8__["MaprfidComponent"], {
            size: 'lg', backdrop: 'static',
            keyboard: false
        });
        modalRef.componentInstance.selectedDriverDetails = selectedDriver;
    };
    DriversComponent.prototype.refreshPage = function () {
        this.intilPageNumber = 0;
        this.pageSize = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].pageSize;
        this.searchDate = '';
        this.searchText = '';
        this.districtId = '';
        this.cityId = '';
        this.getDriverDetails();
    };
    DriversComponent.prototype.getDriverDetails = function () {
        var _this = this;
        this.driversApi.getAllDriverDetails(this.intilPageNumber, this.pageSize, this.searchDate, this.searchText, this.districtId, this.cityId, this.rtoId)
            .subscribe(function (_data) {
            _this.driverDetails = _data.content;
            _this.page = _data.page;
            _this.isDataExists = (_this.driverDetails.length > 0);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('validateCityDistrict'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _common_components_citydistrict_citydistrict_component__WEBPACK_IMPORTED_MODULE_5__["CitydistrictComponent"])
    ], DriversComponent.prototype, "CitydistrictComponent", void 0);
    DriversComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-drivers',
            template: __webpack_require__(/*! ./drivers.component.html */ "./src/app/mainComponents/drivers/drivers.component.html"),
            styles: [__webpack_require__(/*! ./drivers.component.sass */ "./src/app/mainComponents/drivers/drivers.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_services_driversServiceApi__WEBPACK_IMPORTED_MODULE_2__["DriversService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]])
    ], DriversComponent);
    return DriversComponent;
}());



/***/ }),

/***/ "./src/app/mainComponents/drivers/drivers.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/mainComponents/drivers/drivers.module.ts ***!
  \**********************************************************/
/*! exports provided: DriversModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriversModule", function() { return DriversModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _drivers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./drivers.component */ "./src/app/mainComponents/drivers/drivers.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _driversRoutingModule__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./driversRoutingModule */ "./src/app/mainComponents/drivers/driversRoutingModule.ts");
/* harmony import */ var _driverduty_driverduty_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./driverduty/driverduty.component */ "./src/app/mainComponents/drivers/driverduty/driverduty.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/core.module */ "./src/app/mainComponents/core/core.module.ts");
/* harmony import */ var _modalpopup_editviewdriver_editviewdriver_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modalpopup/editviewdriver/editviewdriver.component */ "./src/app/mainComponents/drivers/modalpopup/editviewdriver/editviewdriver.component.ts");
/* harmony import */ var _modalpopup_editviewdriverduty_editviewdriverduty_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modalpopup/editviewdriverduty/editviewdriverduty.component */ "./src/app/mainComponents/drivers/modalpopup/editviewdriverduty/editviewdriverduty.component.ts");
/* harmony import */ var _modalpopup_maprfid_maprfid_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modalpopup/maprfid/maprfid.component */ "./src/app/mainComponents/drivers/modalpopup/maprfid/maprfid.component.ts");













var DriversModule = /** @class */ (function () {
    function DriversModule() {
    }
    DriversModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_drivers_component__WEBPACK_IMPORTED_MODULE_4__["DriversComponent"],
                _driverduty_driverduty_component__WEBPACK_IMPORTED_MODULE_8__["DriverdutyComponent"],
                _modalpopup_maprfid_maprfid_component__WEBPACK_IMPORTED_MODULE_12__["MaprfidComponent"],
                _modalpopup_editviewdriver_editviewdriver_component__WEBPACK_IMPORTED_MODULE_10__["EditviewdriverComponent"],
                _modalpopup_editviewdriverduty_editviewdriverduty_component__WEBPACK_IMPORTED_MODULE_11__["EditviewdriverdutyComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _driversRoutingModule__WEBPACK_IMPORTED_MODULE_7__["DriversRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_9__["CoreModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]
            ],
            entryComponents: [
                _modalpopup_editviewdriver_editviewdriver_component__WEBPACK_IMPORTED_MODULE_10__["EditviewdriverComponent"],
                _modalpopup_maprfid_maprfid_component__WEBPACK_IMPORTED_MODULE_12__["MaprfidComponent"],
                _modalpopup_editviewdriverduty_editviewdriverduty_component__WEBPACK_IMPORTED_MODULE_11__["EditviewdriverdutyComponent"]
            ],
        })
    ], DriversModule);
    return DriversModule;
}());



/***/ }),

/***/ "./src/app/mainComponents/drivers/driversRoutingModule.ts":
/*!****************************************************************!*\
  !*** ./src/app/mainComponents/drivers/driversRoutingModule.ts ***!
  \****************************************************************/
/*! exports provided: DriversRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriversRoutingModule", function() { return DriversRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _drivers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drivers.component */ "./src/app/mainComponents/drivers/drivers.component.ts");
/* harmony import */ var _driverduty_driverduty_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./driverduty/driverduty.component */ "./src/app/mainComponents/drivers/driverduty/driverduty.component.ts");





var routes = [
    { path: '', component: _drivers_component__WEBPACK_IMPORTED_MODULE_3__["DriversComponent"], },
    { path: 'driverdury', component: _driverduty_driverduty_component__WEBPACK_IMPORTED_MODULE_4__["DriverdutyComponent"], },
];
var DriversRoutingModule = /** @class */ (function () {
    function DriversRoutingModule() {
    }
    DriversRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DriversRoutingModule);
    return DriversRoutingModule;
}());



/***/ }),

/***/ "./src/app/mainComponents/drivers/modalpopup/editviewdriver/editviewdriver.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/mainComponents/drivers/modalpopup/editviewdriver/editviewdriver.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h5 class=\"modal-title\">Driver Details of {{selectedDriverDetails.driverName}}</h5>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.close('refreshContent')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body p-r-2\">\n  <div class=\"row\">\n    <div class=\"col-md-6 trip-driver-img\">\n      <h5>Driver Name</h5>\n      <h4>{{selectedDriverDetails.driverName}}</h4>\n      <img [src]=\"driverImage\">\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Gender</h5>\n      <h4>{{selectedDriverDetails.gender}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Driver Licence No</h5>\n      <h4>{{selectedDriverDetails.dlNumber}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n        <h5>DL Expiry Date</h5>\n        <h4>{{selectedDriverDetails.dlExpiryDate}}</h4>\n      </div>\n    <div class=\"col-md-6\">\n      <h5>Contact No</h5>\n      <h4>{{selectedDriverDetails.contactNumber}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Created Date</h5>\n      <h4>{{selectedDriverDetails.createdDate}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n        <h5>ID</h5>\n        <h4>{{selectedDriverDetails.driverId}}</h4>\n      </div>\n      <div class=\"col-md-6\">\n        <h5>RF ID</h5>\n        <h4>{{selectedDriverDetails.rfId}}</h4>\n      </div>\n    <div class=\"col-md-6\">\n      <h5>State</h5>\n      <h4>{{selectedDriverDetails.stateName}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>District</h5>\n      <h4>{{selectedDriverDetails.districtName}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>City</h5>\n      <h4>{{selectedDriverDetails.cityName}}</h4>\n    </div>\n  </div>\n\n\n\n</div>"

/***/ }),

/***/ "./src/app/mainComponents/drivers/modalpopup/editviewdriver/editviewdriver.component.sass":
/*!************************************************************************************************!*\
  !*** ./src/app/mainComponents/drivers/modalpopup/editviewdriver/editviewdriver.component.sass ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW5Db21wb25lbnRzL2RyaXZlcnMvbW9kYWxwb3B1cC9lZGl0dmlld2RyaXZlci9lZGl0dmlld2RyaXZlci5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/mainComponents/drivers/modalpopup/editviewdriver/editviewdriver.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/mainComponents/drivers/modalpopup/editviewdriver/editviewdriver.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: EditviewdriverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditviewdriverComponent", function() { return EditviewdriverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _common_models_drivers_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/models/drivers-model */ "./src/app/common/models/drivers-model.ts");




var EditviewdriverComponent = /** @class */ (function () {
    function EditviewdriverComponent(activeModal) {
        this.activeModal = activeModal;
    }
    EditviewdriverComponent.prototype.ngOnInit = function () {
        this.driverImage = 'data:image/jpeg;base64,' + this.selectedDriverDetails.image;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _common_models_drivers_model__WEBPACK_IMPORTED_MODULE_3__["driversModel"])
    ], EditviewdriverComponent.prototype, "selectedDriverDetails", void 0);
    EditviewdriverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editviewdriver',
            template: __webpack_require__(/*! ./editviewdriver.component.html */ "./src/app/mainComponents/drivers/modalpopup/editviewdriver/editviewdriver.component.html"),
            styles: [__webpack_require__(/*! ./editviewdriver.component.sass */ "./src/app/mainComponents/drivers/modalpopup/editviewdriver/editviewdriver.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]])
    ], EditviewdriverComponent);
    return EditviewdriverComponent;
}());



/***/ }),

/***/ "./src/app/mainComponents/drivers/modalpopup/editviewdriverduty/editviewdriverduty.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/mainComponents/drivers/modalpopup/editviewdriverduty/editviewdriverduty.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h5 class=\"modal-title\">Driver Duty Details of {{selectedDriverDutyDetails.ownerName}}</h5>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.close('refreshContent')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body p-r-2\">\n  <div class=\"row\">\n        <div class=\"col-md-6\">\n          <h5>ID No</h5>\n          <h4>{{selectedDriverDutyDetails.sourceId}}</h4>\n        </div>\n        <div class=\"col-md-6\">\n          <h5>RF Id</h5>\n          <h4>{{selectedDriverDutyDetails.rfId}}</h4>\n        </div>\n        <div class=\"col-md-6\">\n          <h5>RC Number</h5>\n          <h4>{{selectedDriverDutyDetails.rcNumber}}</h4>\n        </div>\n        <div class=\"col-md-6\">\n          <h5>RC Expiry Date</h5>\n          <h4>{{selectedDriverDutyDetails.rcExpiryDate}}</h4>\n        </div>\n        <div class=\"col-md-6\">\n          <h5>Owner Name</h5>\n          <h4>{{selectedDriverDutyDetails.ownerName}}</h4>\n        </div>\n        <div class=\"col-md-6\">\n          <h5>Owner Contact Number</h5>\n          <h4>{{selectedDriverDutyDetails.ownerContactNumber}}</h4>\n        </div> \n        <div class=\"col-md-6\">\n          <h5>Vehicle Name</h5>\n          <h4>{{selectedDriverDutyDetails.vehicleName}}</h4>\n        </div>\n        <div class=\"col-md-6\">\n          <h5>DL Number</h5>\n          <h4>{{selectedDriverDutyDetails.dlNumber}}</h4>\n        </div>\n        <div class=\"col-md-6\">\n          <h5>DL Expiry Date</h5>\n          <h4>{{selectedDriverDutyDetails.dlExpiryDate}}</h4>\n        </div>\n        <div class=\"col-md-6\">\n          <h5>Driver Name</h5>\n          <h4>{{selectedDriverDutyDetails.driverName}}</h4>\n        </div>\n        <div class=\"col-md-6\">\n          <h5>Driver Contact Number</h5>\n          <h4>{{selectedDriverDutyDetails.driverContactNumber}}</h4>\n        </div>\n        <div class=\"col-md-6\">\n          <h5>Serial Number</h5>\n          <h4>{{selectedDriverDutyDetails.serialNumber}}</h4>\n        </div>\n        <div class=\"col-md-6\">\n          <h5>Packet Date</h5>\n          <h4>{{selectedDriverDutyDetails.packetDate}}</h4>\n        </div>\n        <div class=\"col-md-6\">\n          <h5>packetTime</h5>\n          <h4>{{selectedDriverDutyDetails.packetTime}}</h4>\n        </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/mainComponents/drivers/modalpopup/editviewdriverduty/editviewdriverduty.component.sass":
/*!********************************************************************************************************!*\
  !*** ./src/app/mainComponents/drivers/modalpopup/editviewdriverduty/editviewdriverduty.component.sass ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW5Db21wb25lbnRzL2RyaXZlcnMvbW9kYWxwb3B1cC9lZGl0dmlld2RyaXZlcmR1dHkvZWRpdHZpZXdkcml2ZXJkdXR5LmNvbXBvbmVudC5zYXNzIn0= */"

/***/ }),

/***/ "./src/app/mainComponents/drivers/modalpopup/editviewdriverduty/editviewdriverduty.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/mainComponents/drivers/modalpopup/editviewdriverduty/editviewdriverduty.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: EditviewdriverdutyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditviewdriverdutyComponent", function() { return EditviewdriverdutyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_common_models_driverDuty_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/models/driverDuty.model */ "./src/app/common/models/driverDuty.model.ts");




var EditviewdriverdutyComponent = /** @class */ (function () {
    function EditviewdriverdutyComponent(activeModal) {
        this.activeModal = activeModal;
    }
    EditviewdriverdutyComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_common_models_driverDuty_model__WEBPACK_IMPORTED_MODULE_3__["DriverDuty"])
    ], EditviewdriverdutyComponent.prototype, "selectedDriverDutyDetails", void 0);
    EditviewdriverdutyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editviewdriverduty',
            template: __webpack_require__(/*! ./editviewdriverduty.component.html */ "./src/app/mainComponents/drivers/modalpopup/editviewdriverduty/editviewdriverduty.component.html"),
            styles: [__webpack_require__(/*! ./editviewdriverduty.component.sass */ "./src/app/mainComponents/drivers/modalpopup/editviewdriverduty/editviewdriverduty.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]])
    ], EditviewdriverdutyComponent);
    return EditviewdriverdutyComponent;
}());



/***/ }),

/***/ "./src/app/mainComponents/drivers/modalpopup/maprfid/maprfid.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/mainComponents/drivers/modalpopup/maprfid/maprfid.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h5 class=\"modal-title\">Driver Details of {{selectedDriverDetails.driverName}}</h5>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.close('refreshContent')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body p-r-2\">\n\n  <form #rfidmapping=\"ngForm\" name=\"form\" novalidate\n    (ngSubmit)=\"rfidmapping.valid && mapRfId()\">\n    <div class=\"row\">\n      <div class=\"col-md-4 form-group\">\n        <label class=\"required\">DL Number</label>\n        <input type=\"text\" class=\"form-control\" name=\"dlNumber\" [(ngModel)]=\"selectedDriverDetails.dlNumber\" readonly>\n      </div>\n      <div class=\"col-md-4 form-group\">\n        <label class=\"required\">Driver Name</label>\n        <input type=\"text\" class=\"form-control\" name=\"driverName\" [(ngModel)]=\"selectedDriverDetails.driverName\" readonly>\n      </div>\n      <div class=\"col-md-4 form-group\" [class.has-error]=\"rfidmapping.submitted && rfidctrl.invalid\">\n        <label class=\"required\">RFID</label>\n        <input type=\"text\" class=\"form-control\" name=\"rfid\" required #rfidctrl=\"ngModel\" [(ngModel)]=\"selectedDriverDetails.rfId\">\n        <span class=\"help-block\" *ngIf=\"rfidmapping.submitted && rfidctrl.invalid\">\n          RFID is required</span>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-6 form-group\">\n        <button type=\"submit\" class=\"btn btn-primary\">Map RFID</button>\n      </div>\n    </div>\n  </form>\n\n\n</div>"

/***/ }),

/***/ "./src/app/mainComponents/drivers/modalpopup/maprfid/maprfid.component.sass":
/*!**********************************************************************************!*\
  !*** ./src/app/mainComponents/drivers/modalpopup/maprfid/maprfid.component.sass ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW5Db21wb25lbnRzL2RyaXZlcnMvbW9kYWxwb3B1cC9tYXByZmlkL21hcHJmaWQuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/mainComponents/drivers/modalpopup/maprfid/maprfid.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/mainComponents/drivers/modalpopup/maprfid/maprfid.component.ts ***!
  \********************************************************************************/
/*! exports provided: MaprfidComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaprfidComponent", function() { return MaprfidComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _common_models_drivers_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/models/drivers-model */ "./src/app/common/models/drivers-model.ts");
/* harmony import */ var _common_services_driversServiceApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/services/driversServiceApi */ "./src/app/common/services/driversServiceApi.ts");





var MaprfidComponent = /** @class */ (function () {
    function MaprfidComponent(activeModal, driversApi) {
        this.activeModal = activeModal;
        this.driversApi = driversApi;
    }
    MaprfidComponent.prototype.ngOnInit = function () {
    };
    MaprfidComponent.prototype.mapRfId = function () {
        console.log(this.selectedDriverDetails);
        this.driversApi.editDriverDetails(JSON.stringify(this.selectedDriverDetails))
            .subscribe(function (data) {
            console.log(data);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _common_models_drivers_model__WEBPACK_IMPORTED_MODULE_3__["driversModel"])
    ], MaprfidComponent.prototype, "selectedDriverDetails", void 0);
    MaprfidComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-maprfid',
            template: __webpack_require__(/*! ./maprfid.component.html */ "./src/app/mainComponents/drivers/modalpopup/maprfid/maprfid.component.html"),
            styles: [__webpack_require__(/*! ./maprfid.component.sass */ "./src/app/mainComponents/drivers/modalpopup/maprfid/maprfid.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"],
            _common_services_driversServiceApi__WEBPACK_IMPORTED_MODULE_4__["DriversService"]])
    ], MaprfidComponent);
    return MaprfidComponent;
}());



/***/ })

}]);
//# sourceMappingURL=drivers-drivers-module.js.map