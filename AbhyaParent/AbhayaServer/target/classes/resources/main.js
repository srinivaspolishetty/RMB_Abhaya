(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../admin/admin.module": [
		"./src/app/mainComponents/admin/admin.module.ts",
		"default~admin-admin-module~commandmanagement-commandmanagement-module~devices-devices-module~drivers~6cca66cd",
		"common",
		"admin-admin-module"
	],
	"../commandmanagement/commandmanagement.module": [
		"./src/app/mainComponents/commandmanagement/commandmanagement.module.ts",
		"default~admin-admin-module~commandmanagement-commandmanagement-module~devices-devices-module~drivers~6cca66cd",
		"common",
		"commandmanagement-commandmanagement-module"
	],
	"../dashboard/dashboard.module": [
		"./src/app/mainComponents/dashboard/dashboard.module.ts",
		"common",
		"dashboard-dashboard-module"
	],
	"../devices/devices.module": [
		"./src/app/mainComponents/devices/devices.module.ts",
		"default~admin-admin-module~commandmanagement-commandmanagement-module~devices-devices-module~drivers~6cca66cd",
		"common",
		"devices-devices-module"
	],
	"../drivers/drivers.module": [
		"./src/app/mainComponents/drivers/drivers.module.ts",
		"default~admin-admin-module~commandmanagement-commandmanagement-module~devices-devices-module~drivers~6cca66cd",
		"common",
		"drivers-drivers-module"
	],
	"../reports/reports.module": [
		"./src/app/mainComponents/reports/reports.module.ts",
		"default~admin-admin-module~commandmanagement-commandmanagement-module~devices-devices-module~drivers~6cca66cd",
		"common",
		"reports-reports-module"
	],
	"../trip/trip.module": [
		"./src/app/mainComponents/trip/trip.module.ts",
		"default~admin-admin-module~commandmanagement-commandmanagement-module~devices-devices-module~drivers~6cca66cd",
		"common",
		"trip-trip-module"
	],
	"../users/users.module": [
		"./src/app/mainComponents/users/users.module.ts",
		"default~admin-admin-module~commandmanagement-commandmanagement-module~devices-devices-module~drivers~6cca66cd",
		"common",
		"users-users-module"
	],
	"../vehicles/vehicles.module": [
		"./src/app/mainComponents/vehicles/vehicles.module.ts",
		"default~admin-admin-module~commandmanagement-commandmanagement-module~devices-devices-module~drivers~6cca66cd",
		"common",
		"vehicles-vehicles-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _mainComponents_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mainComponents/login/login.component */ "./src/app/mainComponents/login/login.component.ts");




var appRoutes = [
    { path: '', component: _mainComponents_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], data: { message: 'Login Page' } },
    { path: 'login', component: _mainComponents_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], data: { message: 'Login Page' } },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes, { onSameUrlNavigation: 'reload' })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'web';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _mainComponents_core_core_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mainComponents/core/core.module */ "./src/app/mainComponents/core/core.module.ts");
/* harmony import */ var _common_components_autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./common/components/autocomplete/autocomplete.component */ "./src/app/common/components/autocomplete/autocomplete.component.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _common_components_autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_11__["AutocompleteComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _mainComponents_core_core_module__WEBPACK_IMPORTED_MODULE_10__["CoreModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"].forRoot(),
                _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyC79q-pUc8WbTxviL8GCu9agKR4Tl6PDEI',
                    libraries: ['geometry']
                })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common/components/autocomplete/autocomplete.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/common/components/autocomplete/autocomplete.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #autoCompleteForm=\"ngForm\">\r\n<div class=\"form-group\">\r\n<input type=\"text\" class=\"form-control\" placeholder=\"Search By IMEI/Vehicle No\" [(ngModel)]=\"searchValue\"  name=\"searchcontrol\" #searchcontrol=\"ngModel\" (keyup)=\"autoCompleteForm.valid && autocompleteData($event.target.value)\" (change)=\"autoCompleteForm.valid && searchFileterData($event.target.value)\" pattern=\"{{ validations.CMDEXE_VAL_PATTERN }}\" list=\"dynmicData\" autocomplete=\"off\" />\r\n<datalist id=\"dynmicData\">\r\n<option *ngFor=\"let item of masterArray\" [value]=\"item.imeiNumber\">{{item.imeiNumber}}</option>\r\n</datalist>\r\n<span class=\"text-red help-block\" *ngIf=\"searchcontrol.errors?.pattern\">Special Characters are not allowed</span>\r\n<!-- <button type=\"button\" class=\"btn-close close\" aria-label=\"Close\">\r\n<span aria-hidden=\"true\" (click)=\"clearSearch();\" *ngIf=\"showSearchClear\">&times;</span>\r\n</button> -->\r\n</div>\r\n</form>"

/***/ }),

/***/ "./src/app/common/components/autocomplete/autocomplete.component.sass":
/*!****************************************************************************!*\
  !*** ./src/app/common/components/autocomplete/autocomplete.component.sass ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9jb21wb25lbnRzL2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/common/components/autocomplete/autocomplete.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/common/components/autocomplete/autocomplete.component.ts ***!
  \**************************************************************************/
/*! exports provided: AutocompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteComponent", function() { return AutocompleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constants_validationconstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/validationconstants */ "./src/app/common/constants/validationconstants.ts");



var AutocompleteComponent = /** @class */ (function () {
    function AutocompleteComponent() {
        this.validations = _constants_validationconstants__WEBPACK_IMPORTED_MODULE_2__["Validations"];
        this.acSearch = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.searchData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.searchValue = '';
    }
    AutocompleteComponent.prototype.ngOnInit = function () { };
    AutocompleteComponent.prototype.autocompleteData = function (searchValue) {
        this.acSearch.emit(searchValue);
    };
    AutocompleteComponent.prototype.searchFileterData = function (searchValue) {
        this.searchData.emit(searchValue);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], AutocompleteComponent.prototype, "masterArray", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], AutocompleteComponent.prototype, "acSearch", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], AutocompleteComponent.prototype, "searchData", void 0);
    AutocompleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-autocomplete',
            template: __webpack_require__(/*! ./autocomplete.component.html */ "./src/app/common/components/autocomplete/autocomplete.component.html"),
            styles: [__webpack_require__(/*! ./autocomplete.component.sass */ "./src/app/common/components/autocomplete/autocomplete.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AutocompleteComponent);
    return AutocompleteComponent;
}());



/***/ }),

/***/ "./src/app/common/components/citydistrict/citydistrict.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/common/components/citydistrict/citydistrict.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form name=\"form\" #childForm=\"ngForm\" novalidate>\n  <div class=\"row\">\n    <div [className]=\"cityDistrictConfig.districtElemSize\">\n      <div class=\"form-group\">\n        <label for=\"email\">DISTRICT</label>\n        <select class=\"form-control\" [disabled]=\"cityDistrictConfig.disableDistrict\"\n          [(ngModel)]=\"cityDistrictConfig.districtName\" (change)=\"getCities(cityDistrictConfig.districtName)\"\n          [required]=\"cityDistrictConfig.isDistrictRequired ? 'required' : null\" name=\"districtName\"\n          #districtNamectrl=\"ngModel\" [ngClass]=\"{ 'is-invalid': childForm.submitted && districtNamectrl.invalid }\">\n          <option value=\"\">-- Select District --</option>\n          <option *ngFor=\"let district of districtArray\" [ngValue]=\"district.id\">{{district.name}}\n          </option>\n        </select>\n        <div *ngIf=\"childForm.submitted && districtNamectrl.invalid\" class=\"invalid-feedback\">\n          <span *ngIf=\"districtNamectrl.errors.required\">District is Required</span>\n        </div>\n      </div>\n    </div>\n    <div [className]=\"cityDistrictConfig.cityElemSize\">\n      <div class=\"form-group\">\n        <label for=\"email\">CITY</label>\n        <select class=\"form-control\" [disabled]=\"cityDistrictConfig.disableCity\"\n          [(ngModel)]=\"cityDistrictConfig.cityName\" (change)=\"getRtoOffice(cityDistrictConfig.cityName)\"\n          [required]=\"cityDistrictConfig.isCityRequired ? 'required' : null\" name=\"cityName\" #cityNamectrl=\"ngModel\"\n          [ngClass]=\"{ 'is-invalid': childForm.submitted && cityNamectrl.invalid }\">\n          <option value=\"\">-- Select City --</option>\n          <option *ngFor=\"let city of cityarray\" [ngValue]=\"city.id\">{{city.name}}\n          </option>\n        </select>\n        <div *ngIf=\"childForm.submitted && cityNamectrl.invalid\" class=\"invalid-feedback\">\n          <span *ngIf=\"cityNamectrl.errors.required\">City is Required</span>\n        </div>\n      </div>\n    </div>\n    <div [className]=\"cityDistrictConfig.rtoOfficeElemSize\">\n      <div class=\"form-group\">\n        <label for=\"email\">RTO OFFICE</label>\n        <select class=\"form-control\" [disabled]=\"cityDistrictConfig.disablertoOffice\"\n          [(ngModel)]=\"cityDistrictConfig.rtoOfficeName\"\n          [required]=\"cityDistrictConfig.isrtoOfficeRequired ? 'required' : null\" name=\"rtoOfficeName\" #rtoOfficeNamectrl=\"ngModel\"\n          [ngClass]=\"{ 'is-invalid': childForm.submitted && rtoOfficeNamectrl.invalid }\">\n          <option value=\"\">-- Select RTO Office --</option>\n          <option *ngFor=\"let rto of rtoOfficeArray\" [ngValue]=\"rto.id\">{{rto.name}}\n          </option>\n        </select>\n        <div *ngIf=\"childForm.submitted && rtoOfficeNamectrl.invalid\" class=\"invalid-feedback\">\n          <span *ngIf=\"rtoOfficeNamectrl.errors.required\">RTO Office is Required</span>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/common/components/citydistrict/citydistrict.component.sass":
/*!****************************************************************************!*\
  !*** ./src/app/common/components/citydistrict/citydistrict.component.sass ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9jb21wb25lbnRzL2NpdHlkaXN0cmljdC9jaXR5ZGlzdHJpY3QuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/common/components/citydistrict/citydistrict.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/common/components/citydistrict/citydistrict.component.ts ***!
  \**************************************************************************/
/*! exports provided: CitydistrictComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitydistrictComponent", function() { return CitydistrictComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_citydristict_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/citydristict.model */ "./src/app/common/models/citydristict.model.ts");
/* harmony import */ var _services_commonserviceapi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/commonserviceapi */ "./src/app/common/services/commonserviceapi.ts");





var CitydistrictComponent = /** @class */ (function () {
    function CitydistrictComponent(httpClient, commonapi) {
        this.httpClient = httpClient;
        this.commonapi = commonapi;
        this.defaultconfig = new _models_citydristict_model__WEBPACK_IMPORTED_MODULE_3__["CityDristict"]();
        this.isCityDistrictValid = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isDistrictRequuired = false;
        this.userDetails = JSON.parse(localStorage.getItem('userdetails'));
    }
    CitydistrictComponent.prototype.validateChildForm = function (data) {
        this.form.submitted = data;
        if (data == true) {
            if (this.form.valid == true) {
                this.cityDistrictConfig.isFormValid = true;
                this.isCityDistrictValid.emit(this.cityDistrictConfig);
            }
            else {
                this.isCityDistrictValid.emit(this.cityDistrictConfig);
            }
        }
    };
    CitydistrictComponent.prototype.ngOnInit = function () {
        this.cityDistrictConfig = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.defaultconfig, this.cityDistrictConfig);
        this.getAllDistricts();
    };
    CitydistrictComponent.prototype.getAllDistricts = function () {
        var _this = this;
        this.commonapi.getComboData('districtService', this.userDetails.stateId)
            .subscribe(function (data) {
            _this.districtArray = data;
        });
    };
    CitydistrictComponent.prototype.getCities = function (dristrictId) {
        var _this = this;
        this.cityDistrictConfig.cityName = '';
        if (dristrictId !== '') {
            this.commonapi.getComboData('cityService', dristrictId)
                .subscribe(function (data) {
                _this.cityarray = data;
            });
        }
    };
    CitydistrictComponent.prototype.getRtoOffice = function (cityId) {
        var _this = this;
        this.cityDistrictConfig.cityName = '';
        if (cityId !== '') {
            this.commonapi.getComboData('rtoOfficeService', cityId)
                .subscribe(function (data) {
                _this.rtoOfficeArray = data;
            });
        }
    };
    CitydistrictComponent.prototype.cityChange = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_citydristict_model__WEBPACK_IMPORTED_MODULE_3__["CityDristict"])
    ], CitydistrictComponent.prototype, "cityDistrictConfig", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], CitydistrictComponent.prototype, "isCityDistrictValid", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('childForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CitydistrictComponent.prototype, "form", void 0);
    CitydistrictComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-citydistrict',
            template: __webpack_require__(/*! ./citydistrict.component.html */ "./src/app/common/components/citydistrict/citydistrict.component.html"),
            styles: [__webpack_require__(/*! ./citydistrict.component.sass */ "./src/app/common/components/citydistrict/citydistrict.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_commonserviceapi__WEBPACK_IMPORTED_MODULE_4__["CommonsService"]])
    ], CitydistrictComponent);
    return CitydistrictComponent;
}());



/***/ }),

/***/ "./src/app/common/components/datepicker/datepicker.component.html":
/*!************************************************************************!*\
  !*** ./src/app/common/components/datepicker/datepicker.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<input type=\"text\"\nbsDatepicker\n#dp=\"bsDatepicker\" \n[value]=\"value\" \n[minDate]=\"minDate\"\n[(bsValue)]=\"datePickerModel.newDate\"\n[maxDate]=\"maxDate\"\n[datesDisabled]=\"datePickerModel.disabledDates\"\n[daysDisabled]=\"datePickerModel.daysDisabled\"\n[placement]=\"datePickerModel.placement\"\nplaceholder=\" -- Search Date --\"\n[outsideClick]=\"datePickerModel.outsideClick\"\n[bsConfig] = \"{showWeekNumbers:datePickerModel.showWeekNumbers,containerClass: datePickerModel.containerClass,adaptivePosition:datePickerModel.adaptivePosition}\"\n(bsValueChange)=\"valueChanged($event)\"\n>\n<!--(change)=\"valueChanged($event.target.value)\"-->\n<button *ngIf=\"datePickerModel.buttonRequired\" type=\"button\" style=\"position: absolute\" (click)=\"dp.toggle()\" [attr.aria-expanded]=\"dp.isOpen\" class=\"btn btn-primary\" style=\"position: absolute;right: 16px;margin-top: -7px;\"\n>{{datePickerModel.buttonName}}</button>\n\n"

/***/ }),

/***/ "./src/app/common/components/datepicker/datepicker.component.sass":
/*!************************************************************************!*\
  !*** ./src/app/common/components/datepicker/datepicker.component.sass ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9jb21wb25lbnRzL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/common/components/datepicker/datepicker.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/common/components/datepicker/datepicker.component.ts ***!
  \**********************************************************************/
/*! exports provided: DatepickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatepickerComponent", function() { return DatepickerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_date_picker_model_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/date-picker-model.model */ "./src/app/common/models/date-picker-model.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _directives_app_forbidden_name_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../directives/app-forbidden-name.directive */ "./src/app/common/directives/app-forbidden-name.directive.ts");






var DatepickerComponent = /** @class */ (function () {
    function DatepickerComponent(datepipe) {
        this.datepipe = datepipe;
        this.mainModel = new _models_date_picker_model_model__WEBPACK_IMPORTED_MODULE_2__["DatePickerModel"]();
        this.value = '';
        this.validateFn = Object(_directives_app_forbidden_name_directive__WEBPACK_IMPORTED_MODULE_5__["createForbiddenNameValidator"])('tom');
        this.onChange = function (value) { };
        this.onTouched = function () { };
    }
    DatepickerComponent_1 = DatepickerComponent;
    DatepickerComponent.prototype.validate = function (c) {
        return this.validateFn(c);
    };
    DatepickerComponent.prototype.valueChanged = function (value) {
        this.changedValue = value.toString();
        if (this.changedValue.length !== 10) {
            this.writeValue(this.datepipe.transform(value, this.datePickerModel.dateInputFormat));
        }
        else {
            this.value = value;
        }
    };
    DatepickerComponent.prototype.writeValue = function (value) {
        if (value === void 0) { value = ''; }
        if (value !== null && (value.indexOf('-') > -1)) {
            this.value = value;
            this.onChange(this.value);
        }
    };
    DatepickerComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    DatepickerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    DatepickerComponent.prototype.ngOnInit = function () {
        this.datePickerModel = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.mainModel, this.datePickerModel);
        //for mindate and mixdate
        this.minDate = new Date();
        this.maxDate = new Date();
        this.minDate.setDate(this.minDate.getDate() - parseInt(this.datePickerModel.minDate));
        this.maxDate.setDate(this.maxDate.getDate() + parseInt(this.datePickerModel.maxDate));
    };
    var DatepickerComponent_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_date_picker_model_model__WEBPACK_IMPORTED_MODULE_2__["DatePickerModel"])
    ], DatepickerComponent.prototype, "datePickerModel", void 0);
    DatepickerComponent = DatepickerComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-datepicker',
            template: __webpack_require__(/*! ./datepicker.component.html */ "./src/app/common/components/datepicker/datepicker.component.html"),
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return DatepickerComponent_1; }),
                    multi: true
                },
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return DatepickerComponent_1; }),
                    multi: true
                }, _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]
            ],
            styles: [__webpack_require__(/*! ./datepicker.component.sass */ "./src/app/common/components/datepicker/datepicker.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]])
    ], DatepickerComponent);
    return DatepickerComponent;
}());



/***/ }),

/***/ "./src/app/common/components/footer/footer.component.html":
/*!****************************************************************!*\
  !*** ./src/app/common/components/footer/footer.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<footer class=\"footer page-footer font-small indigo\">\r\n  <div class=\"container\">\r\n  <div class=\"row no-gutters\">\r\n    <div class=\"col-md-3 p-t-1 text-left footer-login-left\">\r\n    <img src=\"assets/images/ap-logo.svg\">\r\n    </div>\r\n    <div class=\"col-md-6 p-t-2\">\r\n        <div class=\"footer-copyright text-center py-3\"><span class=\"text-footer\">© 2019</span><span class=\"text-primary text-bold\"> Rajanna Mahila Bhadratha </span> <span class=\"text-footer\">| All rights reserved</span>\r\n                <!-- <a href=\"https://mdbootstrap.com/education/bootstrap/\"> MDBootstrap.com</a> -->\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3 p-t-4 text-right footer-login-right\">\r\n          <span>Developed By</span>\r\n          <img src=\"assets/images/otsi-logo.svg\">\r\n      </div>\r\n  </div>\r\n</div>\r\n    </footer>"

/***/ }),

/***/ "./src/app/common/components/footer/footer.component.sass":
/*!****************************************************************!*\
  !*** ./src/app/common/components/footer/footer.component.sass ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/common/components/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/common/components/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/common/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.sass */ "./src/app/common/components/footer/footer.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/common/components/header/header.component.html":
/*!****************************************************************!*\
  !*** ./src/app/common/components/header/header.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-main fixed-top\">\r\n  <nav class=\"navbar navbar-expand-lg navbar-dark abhaya-color\">\r\n    <button class=\"navbar-toggler navbar-toggle\" type=\"button\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"container collapse navbar-collapse\" id=\"myNavbar\">\r\n      <a class=\"navbar-brand text-white\"><i class=\"icon-ab-helpdesk\"></i>HELP DESK</a>\r\n      <ul class=\"ml-auto nav navbar-nav\">\r\n        <!-- <li class=\"nav-item\">\r\n          <a [routerLink]=\"['/administrativelist/prodtest']\" [routerLinkActive]=\"['active']\" class=\"nav-link\">PROD TEST</a>\r\n        </li> -->\r\n        <li class=\"nav-item\">\r\n          <a [routerLink]=\"['/dashboard']\" [routerLinkActive]=\"['active']\" class=\"nav-link\">DASHBOARD</a>\r\n        </li>\r\n        <li class=\"nav-item dropdown\">\r\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\"\r\n            aria-haspopup=\"true\" aria-expanded=\"false\">VEHICLES</a>\r\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n            <a [routerLink]=\"['/vehicles']\" [routerLinkActive]=\"['active']\" class=\"dropdown-item\">Vehicle Details</a>\r\n            <a [routerLink]=\"['/vehicles/suspiciousvehicles']\" [routerLinkActive]=\"['active']\"\r\n              class=\"dropdown-item\">Suspicious Vehicles</a>\r\n          </div>\r\n        </li>\r\n        <li class=\"nav-item dropdown\">\r\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\"\r\n            aria-haspopup=\"true\" aria-expanded=\"false\">DRIVERS</a>\r\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n            <a [routerLink]=\"['/drivers']\" class=\"dropdown-item\">Driver Details</a>\r\n            <a [routerLink]=\"['/drivers/driverdury']\" class=\"dropdown-item\">Driver Duty Details</a>\r\n          </div>\r\n        </li>\r\n        <li class=\"nav-item dropdown\">\r\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\"\r\n            aria-haspopup=\"true\" aria-expanded=\"false\">TRIPS</a>\r\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n            <a [routerLink]=\"['/trip']\" class=\"dropdown-item\">Trip Details</a>\r\n            <!-- <a [routerLink]=\"['/trip/triptracking']\"  class=\"dropdown-item\">Trip Tracking</a> -->\r\n            <a [routerLink]=\"['/trip/panicalerts']\" class=\"dropdown-item\">Panic Alerts</a>\r\n            <a [routerLink]=\"['/trip/routedeviation']\" class=\"dropdown-item\">Route Deviation</a>\r\n            <a [routerLink]=\"['/trip/videostreaming']\" class=\"dropdown-item\">Video Streaming</a>\r\n          </div>\r\n        </li>\r\n        <li class=\"nav-item dropdown\">\r\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\"\r\n            aria-haspopup=\"true\" aria-expanded=\"false\">DEVICES</a>\r\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n            <a [routerLink]=\"['/devices']\" class=\"dropdown-item\">Device Details</a>\r\n            <a [routerLink]=\"['/devices/communication']\" class=\"dropdown-item\">Device Communication</a>\r\n            <a [routerLink]=\"['/devices/movement']\" class=\"dropdown-item\">Movement Details</a>\r\n            <a [routerLink]=\"['/devices/rawdata']\" class=\"dropdown-item\">Raw Data</a>\r\n            <a [routerLink]=\"['/devices/locationmonitoring']\" class=\"dropdown-item\">Location Monitoring</a>\r\n            <a [routerLink]=\"['/devices/emergencymonitoring']\" class=\"dropdown-item\">Emergency Monitoring</a>\r\n            <a [routerLink]=\"['/devices/healthmonitoring']\" class=\"dropdown-item\">Health Monitoring</a>\r\n            <a [routerLink]=\"['/commandmanagement/commandexecute']\" class=\"dropdown-item\">Command Execute</a>\r\n            <a [routerLink]=\"['/commandmanagement/commandhistory']\" class=\"dropdown-item\">Command History</a>\r\n          </div>\r\n        </li>\r\n        <!-- <li class=\"nav-item dropdown\">\r\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\"\r\n            aria-haspopup=\"true\" aria-expanded=\"false\">COMMAND MANAGEMENT</a>\r\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n            <a [routerLink]=\"['/commandmanagement/commandexecute']\" class=\"dropdown-item\">Command Execute</a>\r\n            <a [routerLink]=\"['/commandmanagement/commandhistory']\" class=\"dropdown-item\">Command History</a>\r\n          </div>\r\n        </li> -->\r\n        <li class=\"nav-item dropdown\">\r\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\"\r\n              aria-haspopup=\"true\" aria-expanded=\"false\">REPORTS</a>\r\n            <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n              <!-- <li class=\"dropdown-submenu\">\r\n                  <a [routerLink]=\"['/reports']\" class=\"nav-link dropdown-toggle\">Trips<span class=\"caret\"></span></a>\r\n                  <ul class=\"dropdown-menu\">\r\n                    <li> <a [routerLink]=\"['/reports']\" class=\"dropdown-item\">Panic</a></li>\r\n                    <li> <a [routerLink]=\"['/reports']\" class=\"dropdown-item\">Panic</a></li>\r\n                    <li> <a [routerLink]=\"['/reports']\" class=\"dropdown-item\">Panic</a></li>\r\n                    \r\n                  </ul>\r\n                \r\n              </li> -->\r\n              <a [routerLink]=\"['/reports']\" class=\"dropdown-item\">Trips</a>\r\n                <a [routerLink]=\"['/reports']\" class=\"dropdown-item\">Panic</a>\r\n                <a [routerLink]=\"['/reports']\" class=\"dropdown-item\">Vehicle</a>\r\n            </div>\r\n          </li>\r\n        <!-- <li class=\"nav-item\">\r\n          <a [routerLink]=\"['/reports']\" class=\"nav-link\">REPORTS</a>\r\n        </li> -->\r\n        <li class=\"nav-item dropdown\">\r\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\"\r\n            aria-haspopup=\"true\" aria-expanded=\"false\">ADMIN</a>\r\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n            <a [routerLink]=\"['/users']\" class=\"dropdown-item\">Users</a>\r\n            <a [routerLink]=\"['/administrativelist']\" class=\"dropdown-item\">Administrative Hierarchy</a>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n  <div class=\"header row\">\r\n    <div class=\"container\">\r\n      <div class=\"row no-gutters\">\r\n        <div class=\"col-md-5\">\r\n          <a [routerLink]=\"['/dashboard']\"> <img class=\"header-img p-t-2\" src=\"assets/images/Logo_RajannaMahilaBadratha.svg\" /></a>\r\n        </div>\r\n        <div class=\"col-md-7\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-8 p-t-3\">\r\n              <div class=\"header-filter bg-grey-light\">\r\n                <form class=\"form-group\">\r\n                  <div class=\"header-filter-select float-left\">\r\n                    <select class=\"form-control\">\r\n                      <option class=\"dropdown-item\" href=\"#\">Vehicle No.</option>\r\n                      <option class=\"dropdown-item\" href=\"#\">Another</option>\r\n                    </select>\r\n                  </div>\r\n                  <div class=\"focal-point header-filter-search float-left\">\r\n                    <input class=\"p-l-2 header-filter-search-box form-control\" type=\"text\" placeholder=\"Search Records\">\r\n                    <button type=\"button\" class=\"btn-search\"><i class=\"icon-ab-search\"></i></button>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n\r\n              <div class=\"header-profile p-t-3\">\r\n                <span class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                  <span class=\"float-left\">\r\n                    <img src=\"assets/images/profile_png.png\">\r\n                  </span>\r\n                  <h5>{{userDetails.username}}\r\n                    <br>\r\n                    <span>Admin</span>\r\n                  </h5>\r\n                  <span class=\"arrow-down\"></span>\r\n                </span>\r\n\r\n                <ul class=\"dropdown-menu dropdown-menu-right m-t-4 m-l-9\">\r\n                  <div class=\"arrow-up\"></div>\r\n                  <li>\r\n                    <a class=\"dropdown-item cursor-hand\"> Change Password</a>\r\n                  </li>\r\n                  <li><a class=\"dropdown-item cursor-hand\"> Settings</a></li>\r\n                  <li><a class=\"dropdown-item cursor-hand\" ng-reflect-router-link=\"/login\" href=\"/login\"> Sign Out</a>\r\n                  </li>\r\n                </ul>\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/common/components/header/header.component.sass":
/*!****************************************************************!*\
  !*** ./src/app/common/components/header/header.component.sass ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/common/components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/common/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.userDetails = JSON.parse(localStorage.getItem('userdetails'));
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/common/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.sass */ "./src/app/common/components/header/header.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/common/components/nodata/nodata.component.html":
/*!****************************************************************!*\
  !*** ./src/app/common/components/nodata/nodata.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nodata m-t-5\" w-100p>\r\n<i class=\"icon-ic_warning\"></i><span>{{noDataText}}</span>\r\n</div>"

/***/ }),

/***/ "./src/app/common/components/nodata/nodata.component.sass":
/*!****************************************************************!*\
  !*** ./src/app/common/components/nodata/nodata.component.sass ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9jb21wb25lbnRzL25vZGF0YS9ub2RhdGEuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/common/components/nodata/nodata.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/common/components/nodata/nodata.component.ts ***!
  \**************************************************************/
/*! exports provided: NodataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodataComponent", function() { return NodataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NodataComponent = /** @class */ (function () {
    function NodataComponent() {
    }
    NodataComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NodataComponent.prototype, "noDataText", void 0);
    NodataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nodata',
            template: __webpack_require__(/*! ./nodata.component.html */ "./src/app/common/components/nodata/nodata.component.html"),
            styles: [__webpack_require__(/*! ./nodata.component.sass */ "./src/app/common/components/nodata/nodata.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NodataComponent);
    return NodataComponent;
}());



/***/ }),

/***/ "./src/app/common/constants/apiendpointconstants.ts":
/*!**********************************************************!*\
  !*** ./src/app/common/constants/apiendpointconstants.ts ***!
  \**********************************************************/
/*! exports provided: APIEndPoints */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIEndPoints", function() { return APIEndPoints; });
var APIEndPoints = {
    dashboard: {
        liveTracking: '/getTripsSummary',
        outedeviation: '/getRouteDeviatedAndPanicSummary',
        vehicleauth: '/getAuthVehicles',
        panicAlerts: '/trip/panicSummary',
        devicePanic: '/device/devicePanicSummary',
        devicestatus: '/devices/deviceCommunication/summary'
    },
    devices: {
        devicecommunication: 'devices/deviceCommunication',
        liveDevices: 'devices/deviceCommunication?status=Communicating',
        movement: 'devices/deviceCommunication',
        deviceDetails: 'devices/deviceDetails',
        locationDetails: 'devices/lmpPacketData',
        emergancydetails: 'devices/ebpPacketData',
        healthDetails: 'devices/hmpPacketData',
        rawdata: 'devices/rawData',
        simDetails: '/simDetails',
    },
    drivers: {
        driverDetails: 'drivers/driverDetails',
        driverdutydetails: 'drivers/driverDutyDetails',
        editRfId: '/mapRFCard'
    },
    vehicles: {
        vehicledetails: 'vehicles/vehicleDetails',
        suspiciousvehicles: 'vehicles/watchVehicle'
    },
    users: {
        userdetails: 'userDetails'
    },
    admin: {
        createDistrict: '/createDistrict',
        createCity: '/createCity'
    },
    command: {
        executeTask: '/command/executeTask',
        smsPacketTypes: '/command/smsPacketTypes',
        taskDetails: '/command/taskDetails'
    },
    trip: {
        tripDetails: '/trip/tripDetails',
        panicDetails: '/distress',
        devicePanicDetails: '/deviceDistress',
        routeDeviation: '/routeDeviation'
    },
    common: {
        comboData: '/comboData',
    }
};


/***/ }),

/***/ "./src/app/common/constants/validationconstants.ts":
/*!*********************************************************!*\
  !*** ./src/app/common/constants/validationconstants.ts ***!
  \*********************************************************/
/*! exports provided: Validations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validations", function() { return Validations; });
var Validations = {
    MOBILE_MIN_LENGTH: '10',
    MOBILE_MAX_LENGTH: '10',
    MOBILE_PATTERN: '^[0-9]*$',
    CMDEXE_VAL_PATTERN: '^[a-zA-Z0-9]+$',
    VEHICLE_PATTERN: '^[a-zA-Z0-9- ]+$'
};


/***/ }),

/***/ "./src/app/common/directives/app-forbidden-name.directive.ts":
/*!*******************************************************************!*\
  !*** ./src/app/common/directives/app-forbidden-name.directive.ts ***!
  \*******************************************************************/
/*! exports provided: AppForbiddenNameDirective, createForbiddenNameValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppForbiddenNameDirective", function() { return AppForbiddenNameDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createForbiddenNameValidator", function() { return createForbiddenNameValidator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var AppForbiddenNameDirective = /** @class */ (function () {
    function AppForbiddenNameDirective() {
    }
    AppForbiddenNameDirective_1 = AppForbiddenNameDirective;
    AppForbiddenNameDirective.prototype.validate = function (control) {
        if (control.value === this.forbiddenName) {
            return { 'forbiddenName': { value: control.value } };
        }
        return null;
    };
    var AppForbiddenNameDirective_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('appForbiddenName'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AppForbiddenNameDirective.prototype, "forbiddenName", void 0);
    AppForbiddenNameDirective = AppForbiddenNameDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appAppForbiddenName]',
            providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], useExisting: AppForbiddenNameDirective_1, multi: true }]
        })
    ], AppForbiddenNameDirective);
    return AppForbiddenNameDirective;
}());

function createForbiddenNameValidator(forbiddenName) {
    return function validateCounterRange(c) {
        var err = {
            forbiddenName: {
                value: c.value
            }
        };
        return (c.value === forbiddenName) ? err : null;
    };
}


/***/ }),

/***/ "./src/app/common/models/citydristict.model.ts":
/*!*****************************************************!*\
  !*** ./src/app/common/models/citydristict.model.ts ***!
  \*****************************************************/
/*! exports provided: CityDristict */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityDristict", function() { return CityDristict; });
var CityDristict = /** @class */ (function () {
    function CityDristict() {
        this.districtElemSize = 'col-md-12';
        this.cityElemSize = 'col-md-12';
        this.rtoOfficeElemSize = 'col-md-12';
        this.districtName = '';
        this.cityName = '';
        this.rtoOfficeName = '';
        this.disableDistrict = false;
        this.disableCity = false;
        this.disablertoOffice = false;
        this.isDistrictRequired = false;
        this.isCityRequired = false;
        this.isrtoOfficeRequired = false;
        this.isFormValid = false;
    }
    return CityDristict;
}());



/***/ }),

/***/ "./src/app/common/models/date-picker-model.model.ts":
/*!**********************************************************!*\
  !*** ./src/app/common/models/date-picker-model.model.ts ***!
  \**********************************************************/
/*! exports provided: DatePickerModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePickerModel", function() { return DatePickerModel; });
var DatePickerModel = /** @class */ (function () {
    function DatePickerModel() {
        this.rangeInputFormat = "DD-MM-YYYY";
        this.dateInputFormat = "dd-MM-yyyy";
        this.showWeekNumbers = false;
        this.containerClass = "theme-blue";
        this.placement = "top";
    }
    return DatePickerModel;
}());



/***/ }),

/***/ "./src/app/common/models/locationmonitoring.model.ts":
/*!***********************************************************!*\
  !*** ./src/app/common/models/locationmonitoring.model.ts ***!
  \***********************************************************/
/*! exports provided: LocationModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationModel", function() { return LocationModel; });
var LocationModel = /** @class */ (function () {
    function LocationModel() {
    }
    return LocationModel;
}());



/***/ }),

/***/ "./src/app/common/models/login.model.ts":
/*!**********************************************!*\
  !*** ./src/app/common/models/login.model.ts ***!
  \**********************************************/
/*! exports provided: Login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
var Login = /** @class */ (function () {
    function Login() {
    }
    return Login;
}());



/***/ }),

/***/ "./src/app/common/services/commonserviceapi.ts":
/*!*****************************************************!*\
  !*** ./src/app/common/services/commonserviceapi.ts ***!
  \*****************************************************/
/*! exports provided: CommonsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonsService", function() { return CommonsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _constants_apiendpointconstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/apiendpointconstants */ "./src/app/common/constants/apiendpointconstants.ts");





var CommonsService = /** @class */ (function () {
    function CommonsService(httpClient) {
        this.httpClient = httpClient;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                'Authorization': 'my-auth-token'
            })
        };
    }
    CommonsService.prototype.getComboData = function (action, id) {
        var url = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBase + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].version + _constants_apiendpointconstants__WEBPACK_IMPORTED_MODULE_4__["APIEndPoints"].common.comboData;
        url += "?actionType=" + action + "&extraParams=" + id;
        return this.httpClient.get(url);
    };
    CommonsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CommonsService);
    return CommonsService;
}());



/***/ }),

/***/ "./src/app/mainComponents/core/core-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/mainComponents/core/core-routing.module.ts ***!
  \************************************************************/
/*! exports provided: CoreRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreRoutingModule", function() { return CoreRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core.component */ "./src/app/mainComponents/core/core.component.ts");




var routes = [
    {
        path: '', component: _core_component__WEBPACK_IMPORTED_MODULE_3__["CoreComponent"],
        children: [
            { path: 'dashboard', loadChildren: '../dashboard/dashboard.module#DashboardModule' },
            { path: 'vehicles', loadChildren: '../vehicles/vehicles.module#VehiclesModule' },
            { path: 'drivers', loadChildren: '../drivers/drivers.module#DriversModule' },
            { path: 'trip', loadChildren: '../trip/trip.module#TripModule' },
            { path: 'devices', loadChildren: '../devices/devices.module#DevicesModule' },
            { path: 'reports', loadChildren: '../reports/reports.module#ReportsModule' },
            { path: 'users', loadChildren: '../users/users.module#UsersModule' },
            { path: 'administrativelist', loadChildren: '../admin/admin.module#AdminModule' },
            { path: 'commandmanagement', loadChildren: '../commandmanagement/commandmanagement.module#CommandmanagementModule' }
        ]
    }
];
var CoreRoutingModule = /** @class */ (function () {
    function CoreRoutingModule() {
    }
    CoreRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CoreRoutingModule);
    return CoreRoutingModule;
}());



/***/ }),

/***/ "./src/app/mainComponents/core/core.component.html":
/*!*********************************************************!*\
  !*** ./src/app/mainComponents/core/core.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <app-header></app-header>\r\n  <br><br>\r\n\r\n\r\n\r\n\r\n\r\n  \r\n\r\n\r\n<router-outlet></router-outlet>\r\n<ng-http-loader [backgroundColor]=\"'#ff0000'\" spinner=\"sk-wave\" class=\"spinner\"></ng-http-loader>            \r\n\r\n<br><br>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/mainComponents/core/core.component.sass":
/*!*********************************************************!*\
  !*** ./src/app/mainComponents/core/core.component.sass ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW5Db21wb25lbnRzL2NvcmUvY29yZS5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/mainComponents/core/core.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/mainComponents/core/core.component.ts ***!
  \*******************************************************/
/*! exports provided: CoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreComponent", function() { return CoreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-http-loader */ "./node_modules/ng-http-loader/fesm5/ng-http-loader.js");



var CoreComponent = /** @class */ (function () {
    function CoreComponent() {
        this.spinkit = ng_http_loader__WEBPACK_IMPORTED_MODULE_2__["Spinkit"];
    }
    CoreComponent.prototype.ngOnInit = function () {
    };
    CoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-core',
            template: __webpack_require__(/*! ./core.component.html */ "./src/app/mainComponents/core/core.component.html"),
            styles: [__webpack_require__(/*! ./core.component.sass */ "./src/app/mainComponents/core/core.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CoreComponent);
    return CoreComponent;
}());



/***/ }),

/***/ "./src/app/mainComponents/core/core.module.ts":
/*!****************************************************!*\
  !*** ./src/app/mainComponents/core/core.module.ts ***!
  \****************************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var ng_http_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-http-loader */ "./node_modules/ng-http-loader/fesm5/ng-http-loader.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _core_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core-routing.module */ "./src/app/mainComponents/core/core-routing.module.ts");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core.component */ "./src/app/mainComponents/core/core.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../login/login.component */ "./src/app/mainComponents/login/login.component.ts");
/* harmony import */ var _common_directives_app_forbidden_name_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/directives/app-forbidden-name.directive */ "./src/app/common/directives/app-forbidden-name.directive.ts");
/* harmony import */ var _common_components_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/components/header/header.component */ "./src/app/common/components/header/header.component.ts");
/* harmony import */ var _common_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/components/footer/footer.component */ "./src/app/common/components/footer/footer.component.ts");
/* harmony import */ var _common_components_citydistrict_citydistrict_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/components/citydistrict/citydistrict.component */ "./src/app/common/components/citydistrict/citydistrict.component.ts");
/* harmony import */ var _common_components_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../common/components/datepicker/datepicker.component */ "./src/app/common/components/datepicker/datepicker.component.ts");
/* harmony import */ var _common_components_nodata_nodata_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../common/components/nodata/nodata.component */ "./src/app/common/components/nodata/nodata.component.ts");
/* harmony import */ var _devices_modalpopup_editview_location_editview_location_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../devices/modalpopup/editview-location/editview-location.component */ "./src/app/mainComponents/devices/modalpopup/editview-location/editview-location.component.ts");





 // Http reuest response loader
 // Http reuest response










var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_core_component__WEBPACK_IMPORTED_MODULE_8__["CoreComponent"],
                _common_directives_app_forbidden_name_directive__WEBPACK_IMPORTED_MODULE_10__["AppForbiddenNameDirective"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _common_components_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                _common_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                _common_components_citydistrict_citydistrict_component__WEBPACK_IMPORTED_MODULE_13__["CitydistrictComponent"],
                _common_components_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_14__["DatepickerComponent"],
                _common_components_nodata_nodata_component__WEBPACK_IMPORTED_MODULE_15__["NodataComponent"],
                _devices_modalpopup_editview_location_editview_location_component__WEBPACK_IMPORTED_MODULE_16__["EditviewLocationComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _core_routing_module__WEBPACK_IMPORTED_MODULE_7__["CoreRoutingModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsDatepickerModule"].forRoot(),
                ng_http_loader__WEBPACK_IMPORTED_MODULE_5__["NgHttpLoaderModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
            ],
            entryComponents: [
                _devices_modalpopup_editview_location_editview_location_component__WEBPACK_IMPORTED_MODULE_16__["EditviewLocationComponent"]
            ],
            exports: [_common_components_citydistrict_citydistrict_component__WEBPACK_IMPORTED_MODULE_13__["CitydistrictComponent"],
                _common_components_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_14__["DatepickerComponent"],
                _common_components_nodata_nodata_component__WEBPACK_IMPORTED_MODULE_15__["NodataComponent"]
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/mainComponents/devices/modalpopup/editview-location/editview-location.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/mainComponents/devices/modalpopup/editview-location/editview-location.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h5 class=\"modal-title\">Location Details of {{selectedLocationDetails.imei}}</h5>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.close('refreshContent')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body p-r-2\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <h5>ID</h5>\n      <h4>{{selectedLocationDetails.id}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>IMEI No</h5>\n      <h4>{{selectedLocationDetails.imei}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Vendor ID</h5>\n      <h4>{{selectedLocationDetails.vendorId}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>RFID</h5>\n      <h4>{{selectedLocationDetails.rfid}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Altitude</h5>\n      <h4>{{selectedLocationDetails.altitude}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Digital Input Status</h5>\n      <h4>{{selectedLocationDetails.digitalInputStatus}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Digital Output Status</h5>\n      <h4>{{selectedLocationDetails.digitalOutputStatus}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Firmware Version</h5>\n      <h4>{{selectedLocationDetails.firmwareVersion}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Frame Number</h5>\n      <h4>{{selectedLocationDetails.frameNumber}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Latitude</h5>\n      <h4>{{selectedLocationDetails.latitude}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Latitude Direction</h5>\n      <h4>{{selectedLocationDetails.latitudeDirection}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Longitude</h5>\n      <h4>{{selectedLocationDetails.longitude}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Longitude Direction</h5>\n      <h4>{{selectedLocationDetails.longitudeDirection}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>GPS Fix</h5>\n      <h4>{{selectedLocationDetails.gpsFix}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>GSM Signal Strength</h5>\n      <h4>{{selectedLocationDetails.gsmSignalStrength}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>HDoP</h5>\n      <h4>{{selectedLocationDetails.hdop}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Heading</h5>\n      <h4>{{selectedLocationDetails.heading}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Emergency Status</h5>\n      <h4>{{selectedLocationDetails.emergencyStatus}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Ignition</h5>\n      <h4>{{selectedLocationDetails.ignition}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Internal Battery Voltage %</h5>\n      <h4>{{selectedLocationDetails.internalBatteryVoltage}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>No Of Satellites</h5>\n      <h4>{{selectedLocationDetails.noOfSatellites}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Main Input Voltage</h5>\n      <h4>{{selectedLocationDetails.mainInputVoltage}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Main Power Status</h5>\n      <h4>{{selectedLocationDetails.mainPowerStatus}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Network Operator Name</h5>\n      <h4>{{selectedLocationDetails.networkOperatorName}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>LAC</h5>\n      <h4>{{selectedLocationDetails.lac}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>MCC</h5>\n      <h4>{{selectedLocationDetails.mcc}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Packet Type</h5>\n      <h4>{{selectedLocationDetails.packetType}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Packet Status</h5>\n      <h4>{{selectedLocationDetails.packetStatus}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Network Date</h5>\n      <h4>{{selectedLocationDetails.networkDate}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Network Time</h5>\n      <h4>{{selectedLocationDetails.networkTime}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>PDOP</h5>\n      <h4>{{selectedLocationDetails.pdop}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Speed</h5>\n      <h4>{{selectedLocationDetails.speed}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Date</h5>\n      <h4>{{selectedLocationDetails.date}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Time</h5>\n      <h4>{{selectedLocationDetails.time}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Tamper Alert</h5>\n      <h4>{{selectedLocationDetails.tamperAlert}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Created Date</h5>\n      <h4>{{selectedLocationDetails.createdDate}}</h4>\n    </div>\n\n    <div class=\"col-md-6\">\n      <h5>Vehicle Number</h5>\n      <h4>{{selectedLocationDetails.vehicleRegNo}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Main Power Status</h5>\n      <h4>{{selectedLocationDetails.mainPowerStatus}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Internal Battery Voltage</h5>\n      <h4>{{selectedLocationDetails.internalBatteryVoltage}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Cell Id</h5>\n      <h4>{{selectedLocationDetails.cellId}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Vehicle Mode</h5>\n      <h4>{{selectedLocationDetails.vehicleMode}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Vehicle Mode Id</h5>\n      <h4>{{selectedLocationDetails.vehicleModeId}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Engine Status</h5>\n      <h4>{{selectedLocationDetails.engineStatus}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Over Network Ip</h5>\n      <h4>{{selectedLocationDetails.overNetworkIp}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Over Sms Number</h5>\n      <h4>{{selectedLocationDetails.overSmsNumber}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Analog Zero</h5>\n      <h4>{{selectedLocationDetails.analogZero}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Analog One</h5>\n      <h4>{{selectedLocationDetails.analogOne}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Over The Air Parameter</h5>\n      <h4>{{selectedLocationDetails.overTheAirParameter}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Valve Status</h5>\n      <h4>{{selectedLocationDetails.valveStatus}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Complete AlertS tatus</h5>\n      <h4>{{selectedLocationDetails.completeAlertStatus}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Reserved</h5>\n      <h4>{{selectedLocationDetails.reserved}}</h4>\n    </div>\n    <div class=\"col-md-12\">\n      <h5>NMR</h5>\n      <h4>{{selectedLocationDetails.nmr}}</h4>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"modal-subheading\">Location Alert Details</div>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Alert Id</h5>\n      <h4>{{selectedLocationDetails.alertsStatusVO[0].alertId}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Ignition Off</h5>\n      <h4>{{selectedLocationDetails.alertsStatusVO[0].ignitionOff}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Emergency Wire Disconnected</h5>\n      <h4>{{selectedLocationDetails.alertsStatusVO[0].emergencyWireDisc}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>IOT Device Disconnect</h5>\n      <h4>{{selectedLocationDetails.alertsStatusVO[0].iotDeviceDisconnect}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Panic Press</h5>\n      <h4>{{selectedLocationDetails.alertsStatusVO[0].panicPress}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>RFID Swiped</h5>\n      <h4>{{selectedLocationDetails.alertsStatusVO[0].rfidSwiped}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Harsh Acceleration</h5>\n      <h4>{{selectedLocationDetails.alertsStatusVO[0].harshAcceleration}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Panic Disable</h5>\n      <h4>{{selectedLocationDetails.alertsStatusVO[0].panicDisable}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Vehicle Battery Disconnect</h5>\n      <h4>{{selectedLocationDetails.alertsStatusVO[0].vehicleBatteryDiscon}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>IOT Device Tamper</h5>\n      <h4>{{selectedLocationDetails.alertsStatusVO[0].iotDeviceTamper}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Panic Engine Off</h5>\n      <h4>{{selectedLocationDetails.alertsStatusVO[0].panicEngineOff}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Over Speed</h5>\n      <h4>{{selectedLocationDetails.alertsStatusVO[0].overSpeed}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Sleep Mode</h5>\n      <h4>{{selectedLocationDetails.alertsStatusVO[0].sleepMode}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Vehicle Sudden Turn</h5>\n      <h4>{{selectedLocationDetails.alertsStatusVO[0].vehicleSuddenTurn}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Auto Battery Low</h5>\n      <h4>{{selectedLocationDetails.alertsStatusVO[0].autoBatteryLow}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>External Battery Low</h5>\n      <h4>{{selectedLocationDetails.alertsStatusVO[0].externalBatteryLow}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Buzzer</h5>\n      <h4>{{selectedLocationDetails.alertsStatusVO[0].buzzer}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Valve</h5>\n      <h4>{{selectedLocationDetails.alertsStatusVO[0].valve}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Harsh Breaking</h5>\n      <h4>{{selectedLocationDetails.alertsStatusVO[0].harshBreaking}}</h4>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/mainComponents/devices/modalpopup/editview-location/editview-location.component.sass":
/*!******************************************************************************************************!*\
  !*** ./src/app/mainComponents/devices/modalpopup/editview-location/editview-location.component.sass ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW5Db21wb25lbnRzL2RldmljZXMvbW9kYWxwb3B1cC9lZGl0dmlldy1sb2NhdGlvbi9lZGl0dmlldy1sb2NhdGlvbi5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/mainComponents/devices/modalpopup/editview-location/editview-location.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/mainComponents/devices/modalpopup/editview-location/editview-location.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: EditviewLocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditviewLocationComponent", function() { return EditviewLocationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _common_models_locationmonitoring_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/models/locationmonitoring.model */ "./src/app/common/models/locationmonitoring.model.ts");




var EditviewLocationComponent = /** @class */ (function () {
    function EditviewLocationComponent(activeModal) {
        this.activeModal = activeModal;
    }
    EditviewLocationComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _common_models_locationmonitoring_model__WEBPACK_IMPORTED_MODULE_3__["LocationModel"])
    ], EditviewLocationComponent.prototype, "selectedLocationDetails", void 0);
    EditviewLocationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editview-location',
            template: __webpack_require__(/*! ./editview-location.component.html */ "./src/app/mainComponents/devices/modalpopup/editview-location/editview-location.component.html"),
            styles: [__webpack_require__(/*! ./editview-location.component.sass */ "./src/app/mainComponents/devices/modalpopup/editview-location/editview-location.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]])
    ], EditviewLocationComponent);
    return EditviewLocationComponent;
}());



/***/ }),

/***/ "./src/app/mainComponents/login/login.component.html":
/*!***********************************************************!*\
  !*** ./src/app/mainComponents/login/login.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-main\">\r\n  <div class=\"row no-gutters login-height\">\r\n    <div class=\"col-md-7\">\r\n      <div class=\"login-banner\">\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-5\">\r\n      <div class=\"row no-gutters\">\r\n        <div class=\"login-logo\">\r\n          <img style=\"float:right;\" src=\"assets/images/rajanna-mahila-bhadratha.svg\">\r\n        </div>\r\n      </div>\r\n      <div class=\"row no-gutters\">\r\n        <div class=\"login-block\">\r\n          <div class=\"form\">\r\n            <div class=\"loginerror\">{{loginError}}</div>\r\n            <form #loginfForm=\"ngForm\" name=\"form\" novalidate (ngSubmit)=\"loginfForm.valid && userLogin(login)\">\r\n              <div class=\"text-input form-group\" [class.has-error]=\"loginfForm.submitted && usernamectrl.invalid\">\r\n                <label class=\"required\">USER ID</label>\r\n                <input type=\"text\" autocomplete=\"off\" class=\"form-control\" [(ngModel)]=\"login.username\" name=\"username\" required #usernamectrl=\"ngModel\" />\r\n                <span class=\"separator\"> </span>\r\n                <span class=\"help-block\" *ngIf=\"loginfForm.submitted && usernamectrl.errors?.required\">\r\n                  Username is required</span>\r\n              </div>\r\n              <div class=\"text-input form-group\" [class.has-error]=\"loginfForm.submitted && passwordctrl.invalid\">\r\n                <label class=\"required\">PASSWORD</label>\r\n                <input type=\"password\" autocomplete=\"off\" class=\"form-control\" [(ngModel)]=\"login.password\" name=\"password\" required #passwordctrl=\"ngModel\" />\r\n                <span class=\"separator\"> </span>\r\n                <span class=\"help-block\" *ngIf=\"loginfForm.submitted && passwordctrl.errors?.required\">\r\n                  Username is required</span>\r\n              </div>\r\n              <div class=\"form-group p-t-3\">\r\n                <button type=\"submit\" class=\"btn-submit ripple\">LOGIN</button>\r\n                <!-- <a [routerLink]=\"['/dashboard']\" class=\"btn-submit ripple\">LOGIN</a> -->\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <footer class=\"footer-login fixed-bottom\">\r\n      <div class=\"row no-gutters\">\r\n        <div class=\"col-md-6 text-left footer-login-left p-l-5\">\r\n            <img src=\"assets/images/ap-logo.svg\">\r\n        </div>\r\n        <div class=\"col-md-6 text-right footer-login-right p-r-5\">\r\n            <span>Developed By</span>\r\n            <img src=\"assets/images/otsi-logo.svg\">\r\n        </div>\r\n      </div>\r\n     \r\n    </footer>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/mainComponents/login/login.component.sass":
/*!***********************************************************!*\
  !*** ./src/app/mainComponents/login/login.component.sass ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW5Db21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zYXNzIn0= */"

/***/ }),

/***/ "./src/app/mainComponents/login/login.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/mainComponents/login/login.component.ts ***!
  \*********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _common_models_login_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/models/login.model */ "./src/app/common/models/login.model.ts");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(httpClient, router) {
        this.httpClient = httpClient;
        this.router = router;
        this.login = new _common_models_login_model__WEBPACK_IMPORTED_MODULE_5__["Login"]();
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                'Authorization': 'Basic ' + window.btoa('abhaya-app' + ':' + 'abhaya-secret')
            })
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('userdetails');
    };
    LoginComponent.prototype.userLogin = function (loginForm) {
        var _this = this;
        console.log(loginForm);
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBase + "/oauth/token";
        this.httpClient.post(url + "?username=" + loginForm.username + "&password=" + loginForm.password + "&grant_type=password", {}, this.httpOptions).subscribe(function (data) {
            localStorage.setItem('token', 'Bearer ' + data.access_token);
            _this.getUserDetails();
        }, function (error) {
            console.log('error', error);
            _this.loginError = 'Invalid Username or Password';
        });
    };
    LoginComponent.prototype.getUserDetails = function () {
        var _this = this;
        var headers = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                'Authorization': localStorage.getItem('token')
            })
        };
        this.httpClient.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBase + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].version + "/readUser", headers)
            .subscribe(function (userDetailsdata) {
            localStorage.setItem('userdetails', JSON.stringify(userDetailsdata));
            console.log('Sucess', userDetailsdata);
            _this.router.navigate(['/dashboard']);
        }, function (error) {
            console.log('error', error);
            _this.loginError = 'Invalid Username or Password';
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/mainComponents/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.sass */ "./src/app/mainComponents/login/login.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    qa: false,
    //apiBase: 'http://14.98.164.17:8099',
    apiBase: 'http://111.93.16.251:8099',
    videoStream: 'https://abhaya.epragathi.org',
    version: '/v1',
    env: 'dev',
    setIntervalTime: 30000,
    pageSize: 10,
    pageSizeValues: [10, 50, 100, 200]
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\WorkingProjects\Abhaya\AbhyaParent\AbhayaUI\src\main\web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map