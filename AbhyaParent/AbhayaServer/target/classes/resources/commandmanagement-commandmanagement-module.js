(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["commandmanagement-commandmanagement-module"],{

/***/ "./src/app/common/models/commandmanagement.model.ts":
/*!**********************************************************!*\
  !*** ./src/app/common/models/commandmanagement.model.ts ***!
  \**********************************************************/
/*! exports provided: CommandManagement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandManagement", function() { return CommandManagement; });
var CommandManagement = /** @class */ (function () {
    function CommandManagement() {
    }
    return CommandManagement;
}());



/***/ }),

/***/ "./src/app/common/services/commandmanagementserviceapi.ts":
/*!****************************************************************!*\
  !*** ./src/app/common/services/commandmanagementserviceapi.ts ***!
  \****************************************************************/
/*! exports provided: CommandManagementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandManagementService", function() { return CommandManagementService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _constants_apiendpointconstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/apiendpointconstants */ "./src/app/common/constants/apiendpointconstants.ts");





var CommandManagementService = /** @class */ (function () {
    function CommandManagementService(httpClient) {
        this.httpClient = httpClient;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                'Authorization': 'my-auth-token'
            })
        };
    }
    CommandManagementService.prototype.sendActivationRequest = function (packetDetails) {
        var url = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBase + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].version + _constants_apiendpointconstants__WEBPACK_IMPORTED_MODULE_4__["APIEndPoints"].command.executeTask;
        return this.httpClient.post(url, packetDetails, this.httpOptions);
    };
    CommandManagementService.prototype.getCommandList = function (page, size, searchDate, searchValue) {
        var url = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBase + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].version + _constants_apiendpointconstants__WEBPACK_IMPORTED_MODULE_4__["APIEndPoints"].command.taskDetails;
        url += "?page=" + page + "&size=" + size + "&searchDate=" + searchDate + "&searchValue=" + searchValue;
        return this.httpClient.get(url);
    };
    CommandManagementService.prototype.getpayloadDetails = function (type) {
        var url = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBase + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].version + _constants_apiendpointconstants__WEBPACK_IMPORTED_MODULE_4__["APIEndPoints"].command.smsPacketTypes;
        url += "?commandType=" + type;
        return this.httpClient.get(url);
    };
    CommandManagementService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CommandManagementService);
    return CommandManagementService;
}());



/***/ }),

/***/ "./src/app/mainComponents/commandmanagement/commandexecute/commandexecute.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/mainComponents/commandmanagement/commandexecute/commandexecute.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container top-header  p-b-3\">\n  <div class=\"row head-block no-gutters bdr-bottom m-b-3 p-t-1\">\n     <div class=\"col-md-5 p-l-0\">\n        <h4>Command Execute</h4>\n     </div>\n     <div class=\"col-md-12 p-a-0 p-t-1\">\n        <nav aria-label=\"breadcrumb\">\n           <ol class=\"breadcrumb\">\n              <li class=\"breadcrumb-item\"><a class=\"text-abhaya\" [routerLink]=\"['/dashboard']\">Home</a></li>\n              <li class=\"breadcrumb-item active text-secondary\" aria-current=\"page\">Command Management</li>\n              <li class=\"breadcrumb-item active text-secondary\" aria-current=\"page\">Command Execute</li>\n           </ol>\n        </nav>\n     </div>\n  </div>\n  <form #commandExeForm=\"ngForm\" name=\"form\" novalidate\n  (ngSubmit)=\"commandExeForm.valid && executecommand(commandExeForm)\">\n  <div class=\"row p-t-6 p-r-4 m-a-0\">\n     <div class=\"col-md-4 p-r-0 form-group\"\n        [class.has-error]=\"commandExeForm.submitted && executeTypecontrol.invalid\">\n        <label class=\"required\">Execute Type</label>\n        <select class=\"form-control\" name=\"executeType\" required #executeTypecontrol=\"ngModel\"\n        [(ngModel)]=\"executeType\" (change)=\"executechange()\">\n        <option value=\"\">Select</option>\n        <option value=\"SET\">SET</option>\n        <option value=\"GET\">GET</option>\n        <option value=\"CLR\">CLR</option>\n        </select>\n        <span class=\"help-block\" *ngIf=\"commandExeForm.submitted && executeTypecontrol.invalid\">\n        Execute Type is required</span>\n     </div>\n     <div class=\"col-md-4 p-r-0 form-group\" [class.has-error]=\"commandExeForm.submitted && payLoadcontrol.invalid\">\n        <label class=\"required\">Payload</label>\n        <select class=\"form-control\" [(ngModel)]=\"payLoad\" name=\"payLoad\" required #payLoadcontrol=\"ngModel\"\n        (change)=\"payloadchange($event)\">\n        <option value=\"\">Select</option>\n        <option *ngFor=\"let data of payLoadData\" [value]=\"data.payload\">{{data.description}}</option>\n        </select>\n        <span class=\"help-block\" *ngIf=\"commandExeForm.submitted && payLoadcontrol.invalid\">\n        Payload is required</span>\n     </div>\n     <div class=\"col-md-4 p-r-0 form-group\"\n        [class.has-error]=\"commandExeForm.submitted && imeiNumbercontrol.invalid\">\n        <label class=\"required\">IMEI Number</label>\n        <select class=\"form-control\" [(ngModel)]=\"imeiNumber\" #imeiNumbercontrol=\"ngModel\" required\n        name=\"imeiNumber\">\n        <option value=\"\">Select IMEI Number</option>\n        <option *ngFor=\"let device of deviceData\" value=\"{{device.imeiNumber}}\">{{device.imeiNumber}}</option>\n        </select>\n        <span class=\"help-block\" *ngIf=\"commandExeForm.submitted && imeiNumbercontrol.invalid\">\n        IMEI Number is required</span>\n     </div>\n     <div class=\"col-md-4 p-r-0 form-group\"\n     [class.has-error]=\"commandExeForm.submitted && payloadValuecontrol.invalid\" *ngIf=\"propertyValue == true\">\n     <label class=\"required\">Value</label>\n     <input type=\"text\" class=\"form-control\" [(ngModel)]=\"payloadValue\" name=\"payloadValue\" \n     #payloadValuecontrol=\"ngModel\" required /> \n     <span class=\"help-block\" *ngIf=\"commandExeForm.submitted && payloadValuecontrol.errors?.required\">\n     Value is required</span>              \n       </div>\n</div>\n<div class=\"row m-a-0\">\n  <div class=\"col-md-6 form-group\" *ngIf=\"showBtn == true\">\n     <button type=\"submit\" class=\"btn btn-primary\">{{btnText}}</button>\n  </div>\n</div>\n</form>\n</div>"

/***/ }),

/***/ "./src/app/mainComponents/commandmanagement/commandexecute/commandexecute.component.sass":
/*!***********************************************************************************************!*\
  !*** ./src/app/mainComponents/commandmanagement/commandexecute/commandexecute.component.sass ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW5Db21wb25lbnRzL2NvbW1hbmRtYW5hZ2VtZW50L2NvbW1hbmRleGVjdXRlL2NvbW1hbmRleGVjdXRlLmNvbXBvbmVudC5zYXNzIn0= */"

/***/ }),

/***/ "./src/app/mainComponents/commandmanagement/commandexecute/commandexecute.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/mainComponents/commandmanagement/commandexecute/commandexecute.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: CommandexecuteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandexecuteComponent", function() { return CommandexecuteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_services_commandmanagementserviceapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/services/commandmanagementserviceapi */ "./src/app/common/services/commandmanagementserviceapi.ts");
/* harmony import */ var _common_services_deviceserviceapi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/services/deviceserviceapi */ "./src/app/common/services/deviceserviceapi.ts");
/* harmony import */ var _common_services_toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/services/toaster.service */ "./src/app/common/services/toaster.service.ts");





var CommandexecuteComponent = /** @class */ (function () {
    function CommandexecuteComponent(commandApi, devicesApi, toasterService) {
        this.commandApi = commandApi;
        this.devicesApi = devicesApi;
        this.toasterService = toasterService;
        this.deviceData = [];
        this.propertyValue = false;
        this.showBtn = false;
        this.executeType = '';
        this.payLoad = '';
        this.imeiNumber = '';
        this.commandType = '';
    }
    CommandexecuteComponent.prototype.ngOnInit = function () {
        this.getAllDeviceDetails();
    };
    CommandexecuteComponent.prototype.executechange = function () {
        this.getPayloadData(this.executeType);
        this.payLoad = '';
        this.imeiNumber = '';
        this.payloadValue = '';
        this.showBtn = true;
        this.propertyValue = (this.executeType === 'SET');
        this.btnText = this.executeType + ' Command';
        //this.resetForm(commandExeForm);
    };
    CommandexecuteComponent.prototype.getPayloadData = function (type) {
        var _this = this;
        this.commandApi.getpayloadDetails(type)
            .subscribe(function (data) {
            _this.payLoadData = data;
        });
    };
    CommandexecuteComponent.prototype.payloadchange = function (event) {
        var selectedOptions = event.target['options'];
        var selectedIndex = selectedOptions.selectedIndex;
        this.payloadDesc = selectedOptions[selectedIndex].text;
    };
    CommandexecuteComponent.prototype.getAllDeviceDetails = function () {
        var _this = this;
        this.devicesApi.getAllDevices(0, 0, '', '', '', '', '')
            .subscribe(function (data) {
            _this.deviceData = data.content;
        });
    };
    CommandexecuteComponent.prototype.resetForm = function (commandExeForm) {
        commandExeForm.resetForm();
        this.executeType = '';
        this.payLoad = '';
        this.imeiNumber = '';
        this.commandType = '';
        this.propertyValue = false;
    };
    CommandexecuteComponent.prototype.executecommand = function (commandExeForm) {
        var _this = this;
        var newobj = new Object({
            header: this.executeType,
            payload: this.payLoad + this.payloadValue,
            imeiNumber: this.imeiNumber,
            description: this.payloadDesc
        });
        this.commandApi.sendActivationRequest(JSON.stringify(newobj))
            .subscribe(function (data) {
            (data.message === 'Success') ? _this.toasterService.showSuccess('bottom-right', 'Successfully Executed ' + _this.executeType + ' Command.') :
                (data.message === 'Already Existed') ? _this.toasterService.showWarning('bottom-right', 'Command was already Sent Waiting for Response.') :
                    _this.toasterService.showError('bottom-right', '' + data.message);
            _this.resetForm(commandExeForm);
        }, function (error) {
            console.log('error', error);
        });
    };
    CommandexecuteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-commandexecute',
            template: __webpack_require__(/*! ./commandexecute.component.html */ "./src/app/mainComponents/commandmanagement/commandexecute/commandexecute.component.html"),
            styles: [__webpack_require__(/*! ./commandexecute.component.sass */ "./src/app/mainComponents/commandmanagement/commandexecute/commandexecute.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_services_commandmanagementserviceapi__WEBPACK_IMPORTED_MODULE_2__["CommandManagementService"],
            _common_services_deviceserviceapi__WEBPACK_IMPORTED_MODULE_3__["DevicesService"],
            _common_services_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"]])
    ], CommandexecuteComponent);
    return CommandexecuteComponent;
}());



/***/ }),

/***/ "./src/app/mainComponents/commandmanagement/commandhistory/commandhistory.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/mainComponents/commandmanagement/commandhistory/commandhistory.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container top-header p-b-3\">\n    <div class=\"row head-block no-gutters bdr-bottom m-b-3 p-t-1\">\n        <div class=\"col-md-6 p-l-0\">\n          <h4>Command History</h4>\n        </div>\n        <div class=\"col-md-5 text-right\">\n            <span class=\"btn-circle\"><i class=\"icon-ab_download\"></i></span>\n            <span class=\"btn-circle\" (click)=\"refreshPage()\"><i class=\"icon-ab-refresh\"></i></span>\n        </div>\n        <div class=\"col-md-1 p-r-0 text-right\">\n            <div class=\"filters\">\n              <button type=\"button\" class=\"filters-button\" [ngClass]=\"{ 'active': showFilters}\" (click)=\"toggleFilters()\">\n                <i class=\"icon-ab-searchfilter\"></i>\n                <span>Filters</span>\n              </button>\n              <div class=\"filters-body \" *ngIf=\"showFilters\">\n                <div class=\"arrow-up\"></div>\n                <form name=\"form\" (ngSubmit)=\"f.form.valid && applyFilters(f)\" #f=\"ngForm\" novalidate>\n                    <div class=\"form-group\">\n                        <label>DATE</label>\n                        <app-datepicker\n                            class=\"form-control bdr-none p-a-0\"\n                            name=\"searchDate\" \n                            [(ngModel)]=\"searchDate\"\n                            #searchDatectrl= \"ngModel\"\n                            appForbiddenName=\"fred\"\n                            [ngClass]=\"{ 'is-invalid': f.submitted && searchDatectrl.invalid }\"\n                            [datePickerModel]=\"datePickerModel\"          \n                            searchDatectrl>\n                        </app-datepicker>\n                     <div *ngIf=\"f.submitted && searchDatectrl.invalid\" class=\"invalid-feedback\">\n                        <div *ngIf=\"searchDatectrl.errors.required\">Search Date is required</div>\n                     </div>\n                    </div>\n                  <div class=\"form-group m-t-3\">\n                    <button class=\"btn btn-primary w-100p\" type=\"submit\">Search</button>\n                  </div>\n                </form>\n              </div>\n            </div>\n          </div>\n        <div class=\"col-md-12 p-a-0 p-t-1\">\n          <nav aria-label=\"breadcrumb\">\n            <ol class=\"breadcrumb\">\n              <li class=\"breadcrumb-item\"><a class=\"text-abhaya\" [routerLink]=\"['/dashboard']\">Home</a></li>\n              <li class=\"breadcrumb-item active text-secondary\" aria-current=\"page\">Command Management</li>\n              <li class=\"breadcrumb-item active text-secondary\" aria-current=\"page\">Command History</li>\n            </ol>\n          </nav>\n        </div>\n      </div>\n      <div class=\"row no-gutters m-b-3\">\n          <div class=\"col-md-6 p-a-0\">\n              <div class=\"form-group abhaya-table-search\">\n                <i class=\"icon-ab-search\"></i>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchText\" (keydown.enter)=\"getCommandDetails()\" placeholder=\"Search by IMEI / Mobile No.\">\n                <span class=\"separator\"> </span>\n              </div>\n            </div>\n        <div class=\"col-md-6 p-a-0 text-primary text-right p-t-2\">\n          Total Records : <h5 class=\"total-records-text d-inline-block\">  {{page.totalElements}} </h5>\n        </div>\n        \n      </div>\n      <div class=\"row no-gutters pt-8\">\n        <table class=\"abhaya-table\">\n          <thead>\n            <tr>\n              <th>ID</th>\n              <th>IMEI Number</th>\n              <th>Description</th>\n              <th>Mobile Number</th>\n              <th>Created Date</th>\n              <th></th>\n            </tr>\n          </thead>\n         <tbody *ngIf=\"isDataExists\">\n            <tr *ngFor=\"let commandList of commandListData\">\n                <td>{{commandList.taskId}}</td>\n                <td>{{commandList.imeiNumber}}</td>\n                <td>{{commandList.description}}</td>\n                <td>{{commandList.mobileNumber}}</td>\n                <td>{{commandList.createdDate}}</td>\n                <td>\n                    <a class=\"\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n                    aria-expanded=\"false\"><i class=\"icon-ab_more\"></i></a>\n                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdown\">\n                    <div class=\"arrow-up\"></div>\n                    <a (click)=\"editviewCommand(commandList)\" class=\"dropdown-item\">View Details</a>\n                    </div>\n                </td>\n              </tr>\n         </tbody>\n        </table>  \n        <!--Pagination-->\n        <app-nodata class=\"w-100p\" *ngIf=\"!isDataExists\" [noDataText]='noDataText'></app-nodata>\n         <div class=\"row no-gutters w-100p m-t-5\">\n            <div *ngIf=\"isDataExists\" class=\"float-left p-t-1 page-size\">\n                <span>Page Size :</span>\n                <select (change)=\"changePageSize()\" [(ngModel)]=\"pageSize\">\n                  <option *ngFor=\"let number of pageSizeValues\" value=\"{{number}}\">{{number}}</option>\n                </select>\n              </div>\n            <div *ngIf=\"isDataExists\" style=\"margin:0px auto;\">\n              <pagination-controls id=\"systemPropertiespage\" class=\"pagination float-right\" (pageChange)=\"pageChanged($event)\" maxSize=\"6\"\n                directionLinks=\"true\" autoHide=\"true\" responsive=\"true\" previousLabel=\"Prev\" nextLabel=\"Next\">\n              </pagination-controls>\n             \n            </div>\n          </div>\n      </div>\n</div>"

/***/ }),

/***/ "./src/app/mainComponents/commandmanagement/commandhistory/commandhistory.component.sass":
/*!***********************************************************************************************!*\
  !*** ./src/app/mainComponents/commandmanagement/commandhistory/commandhistory.component.sass ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW5Db21wb25lbnRzL2NvbW1hbmRtYW5hZ2VtZW50L2NvbW1hbmRoaXN0b3J5L2NvbW1hbmRoaXN0b3J5LmNvbXBvbmVudC5zYXNzIn0= */"

/***/ }),

/***/ "./src/app/mainComponents/commandmanagement/commandhistory/commandhistory.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/mainComponents/commandmanagement/commandhistory/commandhistory.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: CommandhistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandhistoryComponent", function() { return CommandhistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_services_commandmanagementserviceapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/services/commandmanagementserviceapi */ "./src/app/common/services/commandmanagementserviceapi.ts");
/* harmony import */ var src_app_common_models_page_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/models/page.model */ "./src/app/common/models/page.model.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _modalpopup_editviewcommhistory_editviewcommhistory_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modalpopup/editviewcommhistory/editviewcommhistory.component */ "./src/app/mainComponents/commandmanagement/modalpopup/editviewcommhistory/editviewcommhistory.component.ts");







var CommandhistoryComponent = /** @class */ (function () {
    function CommandhistoryComponent(commandApi, modalService) {
        this.commandApi = commandApi;
        this.modalService = modalService;
        this.isDataExists = false;
        this.page = new src_app_common_models_page_model__WEBPACK_IMPORTED_MODULE_3__["PageModel"]();
        this.noDataText = "No Command History Details Available";
        this.pageSizeValues = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].pageSizeValues;
        this.intilPageNumber = 0;
        this.showFilters = false;
        this.searchDate = '';
        this.searchText = '';
        this.pageSize = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].pageSize;
    }
    CommandhistoryComponent.prototype.ngOnInit = function () {
        this.getCommandDetails();
    };
    CommandhistoryComponent.prototype.toggleFilters = function () {
        this.showFilters = !this.showFilters;
    };
    CommandhistoryComponent.prototype.applyFilters = function (parentForm) {
        this.getCommandDetails();
    };
    CommandhistoryComponent.prototype.refreshPage = function () {
        this.intilPageNumber = 0;
        this.pageSize = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].pageSize;
        this.searchText = '';
        this.searchDate = '';
        this.getCommandDetails();
    };
    CommandhistoryComponent.prototype.getCommandDetails = function () {
        var _this = this;
        this.commandApi.getCommandList(this.intilPageNumber, this.pageSize, this.searchDate, this.searchText)
            .subscribe(function (data) {
            _this.commandListData = data.content;
            _this.isDataExists = (_this.commandListData.length > 0);
            _this.page = data.page;
        });
    };
    CommandhistoryComponent.prototype.changePageSize = function () {
        this.getCommandDetails();
    };
    CommandhistoryComponent.prototype.pageChanged = function (event) {
        this.p = event;
        this.intilPageNumber = event - 1;
        this.getCommandDetails();
    };
    CommandhistoryComponent.prototype.editviewCommand = function (commandList) {
        var modalRef = this.modalService.open(_modalpopup_editviewcommhistory_editviewcommhistory_component__WEBPACK_IMPORTED_MODULE_6__["EditviewcommhistoryComponent"], {
            size: 'lg', backdrop: 'static',
            keyboard: false
        });
        modalRef.componentInstance.selectedCommandDetails = commandList;
    };
    CommandhistoryComponent.prototype.getCommHistoryDetails = function () {
        console.log('testing');
    };
    CommandhistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-commandhistory',
            template: __webpack_require__(/*! ./commandhistory.component.html */ "./src/app/mainComponents/commandmanagement/commandhistory/commandhistory.component.html"),
            styles: [__webpack_require__(/*! ./commandhistory.component.sass */ "./src/app/mainComponents/commandmanagement/commandhistory/commandhistory.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_services_commandmanagementserviceapi__WEBPACK_IMPORTED_MODULE_2__["CommandManagementService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]])
    ], CommandhistoryComponent);
    return CommandhistoryComponent;
}());



/***/ }),

/***/ "./src/app/mainComponents/commandmanagement/commandmanagement-routing.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/mainComponents/commandmanagement/commandmanagement-routing.module.ts ***!
  \**************************************************************************************/
/*! exports provided: CommandManagementRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandManagementRoutingModule", function() { return CommandManagementRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _commandexecute_commandexecute_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./commandexecute/commandexecute.component */ "./src/app/mainComponents/commandmanagement/commandexecute/commandexecute.component.ts");
/* harmony import */ var _commandhistory_commandhistory_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./commandhistory/commandhistory.component */ "./src/app/mainComponents/commandmanagement/commandhistory/commandhistory.component.ts");





var appRoutes = [
    { path: 'commandexecute', component: _commandexecute_commandexecute_component__WEBPACK_IMPORTED_MODULE_3__["CommandexecuteComponent"] },
    { path: 'commandhistory', component: _commandhistory_commandhistory_component__WEBPACK_IMPORTED_MODULE_4__["CommandhistoryComponent"] },
];
var CommandManagementRoutingModule = /** @class */ (function () {
    function CommandManagementRoutingModule() {
    }
    CommandManagementRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CommandManagementRoutingModule);
    return CommandManagementRoutingModule;
}());



/***/ }),

/***/ "./src/app/mainComponents/commandmanagement/commandmanagement.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/mainComponents/commandmanagement/commandmanagement.module.ts ***!
  \******************************************************************************/
/*! exports provided: CommandmanagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandmanagementModule", function() { return CommandmanagementModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _commandmanagement_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./commandmanagement-routing.module */ "./src/app/mainComponents/commandmanagement/commandmanagement-routing.module.ts");
/* harmony import */ var _commandexecute_commandexecute_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./commandexecute/commandexecute.component */ "./src/app/mainComponents/commandmanagement/commandexecute/commandexecute.component.ts");
/* harmony import */ var _commandhistory_commandhistory_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./commandhistory/commandhistory.component */ "./src/app/mainComponents/commandmanagement/commandhistory/commandhistory.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/core.module */ "./src/app/mainComponents/core/core.module.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _modalpopup_editviewcommhistory_editviewcommhistory_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modalpopup/editviewcommhistory/editviewcommhistory.component */ "./src/app/mainComponents/commandmanagement/modalpopup/editviewcommhistory/editviewcommhistory.component.ts");












var CommandmanagementModule = /** @class */ (function () {
    function CommandmanagementModule() {
    }
    CommandmanagementModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_commandexecute_commandexecute_component__WEBPACK_IMPORTED_MODULE_5__["CommandexecuteComponent"], _commandhistory_commandhistory_component__WEBPACK_IMPORTED_MODULE_6__["CommandhistoryComponent"], _modalpopup_editviewcommhistory_editviewcommhistory_component__WEBPACK_IMPORTED_MODULE_11__["EditviewcommhistoryComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _commandmanagement_routing_module__WEBPACK_IMPORTED_MODULE_4__["CommandManagementRoutingModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["NgxPaginationModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["BsDatepickerModule"].forRoot(),
                _core_core_module__WEBPACK_IMPORTED_MODULE_8__["CoreModule"],
            ],
            entryComponents: [
                _modalpopup_editviewcommhistory_editviewcommhistory_component__WEBPACK_IMPORTED_MODULE_11__["EditviewcommhistoryComponent"]
            ],
        })
    ], CommandmanagementModule);
    return CommandmanagementModule;
}());



/***/ }),

/***/ "./src/app/mainComponents/commandmanagement/modalpopup/editviewcommhistory/editviewcommhistory.component.html":
/*!********************************************************************************************************************!*\
  !*** ./src/app/mainComponents/commandmanagement/modalpopup/editviewcommhistory/editviewcommhistory.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <h5 class=\"modal-title\">Command History Details of {{selectedCommandDetails.imeiNumber}}</h5>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.close('refreshContent')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body p-r-2\">\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <h5>ID</h5>\n        <h4>{{selectedCommandDetails.taskId}}</h4>\n      </div>\n      <div class=\"col-md-6\">\n        <h5>IMEI Number</h5>\n        <h4>{{selectedCommandDetails.imeiNumber}}</h4>\n      </div>\n      <div class=\"col-md-6\">\n        <h5>Mobile Number</h5>\n        <h4>{{selectedCommandDetails.mobileNumber}}</h4>\n      </div>\n      <div class=\"col-md-6\">\n        <h5>Description</h5>\n        <h4>{{selectedCommandDetails.description}}</h4>\n      </div>\n      <div class=\"col-md-6\">\n        <h5>Created Date</h5>\n        <h4>{{selectedCommandDetails.createdDate}}</h4>\n      </div>\n      <div class=\"col-md-6\">\n        <h5>Random Code</h5>\n        <h4>{{selectedCommandDetails.randomCode}}</h4>\n      </div>\n      <div class=\"col-md-6\">\n        <h5>Reply Gateway Number</h5>\n        <h4>{{selectedCommandDetails.replyGatewayNumber}}</h4>\n      </div>\n      <div class=\"col-md-6\">\n        <h5>Request Command Name</h5>\n        <h4>{{selectedCommandDetails.requestCommandName}}</h4>\n      </div>\n      <div class=\"col-md-6\">\n        <h5>SMS Status</h5>\n        <h4>{{selectedCommandDetails.smsStatus}}</h4>\n      </div>\n      <div class=\"col-md-6\">\n        <h5>Device Response Status</h5>\n        <h4>{{selectedCommandDetails.deviceResponseStatus}}</h4>\n      </div>\n      <div class=\"col-md-6\">\n          <h5>Header</h5>\n          <h4>{{selectedCommandDetails.header}}</h4>\n        </div>\n        <div class=\"col-md-6\">\n          <h5>Payload</h5>\n          <h4>{{selectedCommandDetails.payload}}</h4>\n        </div>\n  </div>"

/***/ }),

/***/ "./src/app/mainComponents/commandmanagement/modalpopup/editviewcommhistory/editviewcommhistory.component.sass":
/*!********************************************************************************************************************!*\
  !*** ./src/app/mainComponents/commandmanagement/modalpopup/editviewcommhistory/editviewcommhistory.component.sass ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW5Db21wb25lbnRzL2NvbW1hbmRtYW5hZ2VtZW50L21vZGFscG9wdXAvZWRpdHZpZXdjb21taGlzdG9yeS9lZGl0dmlld2NvbW1oaXN0b3J5LmNvbXBvbmVudC5zYXNzIn0= */"

/***/ }),

/***/ "./src/app/mainComponents/commandmanagement/modalpopup/editviewcommhistory/editviewcommhistory.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/mainComponents/commandmanagement/modalpopup/editviewcommhistory/editviewcommhistory.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: EditviewcommhistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditviewcommhistoryComponent", function() { return EditviewcommhistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _common_models_commandmanagement_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/models/commandmanagement.model */ "./src/app/common/models/commandmanagement.model.ts");




var EditviewcommhistoryComponent = /** @class */ (function () {
    function EditviewcommhistoryComponent(activeModal) {
        this.activeModal = activeModal;
    }
    EditviewcommhistoryComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _common_models_commandmanagement_model__WEBPACK_IMPORTED_MODULE_3__["CommandManagement"])
    ], EditviewcommhistoryComponent.prototype, "selectedCommandDetails", void 0);
    EditviewcommhistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editviewcommhistory',
            template: __webpack_require__(/*! ./editviewcommhistory.component.html */ "./src/app/mainComponents/commandmanagement/modalpopup/editviewcommhistory/editviewcommhistory.component.html"),
            styles: [__webpack_require__(/*! ./editviewcommhistory.component.sass */ "./src/app/mainComponents/commandmanagement/modalpopup/editviewcommhistory/editviewcommhistory.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]])
    ], EditviewcommhistoryComponent);
    return EditviewcommhistoryComponent;
}());



/***/ })

}]);
//# sourceMappingURL=commandmanagement-commandmanagement-module.js.map