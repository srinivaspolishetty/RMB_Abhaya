(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["trip-trip-module"],{

/***/ "./node_modules/agm-direction/fesm5/agm-direction.js":
/*!***********************************************************!*\
  !*** ./node_modules/agm-direction/fesm5/agm-direction.js ***!
  \***********************************************************/
/*! exports provided: AgmDirectionModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmDirectionModule", function() { return AgmDirectionModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return AgmDirection; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var AgmDirection = /** @class */ (function () {
    function AgmDirection(gmapsApi) {
        this.gmapsApi = gmapsApi;
        // Options
        this.travelMode = 'DRIVING';
        this.transitOptions = undefined;
        this.drivingOptions = undefined;
        this.waypoints = [];
        this.optimizeWaypoints = true;
        this.provideRouteAlternatives = false;
        this.avoidHighways = false;
        this.avoidTolls = false;
        // Remove or draw direction
        this.visible = true;
        // Direction change event handler
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // Direction response for the new request
        this.onResponse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // Send a custom infowindow
        this.sendInfoWindow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // Status of Directions Query (google.maps.DirectionsStatus.OVER_QUERY_LIMIT)
        this.status = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // Marker drag event handler
        this.originDrag = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.destinationDrag = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.directionsService = undefined;
        this.directionsDisplay = undefined;
        this.waypointsMarker = [];
        // Use for visible flag
        this.isFirstChange = true;
    }
    /**
     * @return {?}
     */
    AgmDirection.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.visible === true) {
            this.directionDraw();
        }
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    AgmDirection.prototype.ngOnChanges = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        /**
         * When visible is false then remove the direction layer
         */
        if (!this.visible) {
            try {
                this.removeMarkers();
                this.removeDirections();
            }
            catch (e) { }
        }
        else {
            if (this.isFirstChange) {
                /**
                 * When visible is false at the first time
                 */
                if (typeof this.directionsDisplay === 'undefined') {
                    this.directionDraw();
                }
                this.isFirstChange = false;
                return;
            }
            /**
             * When renderOptions are not first change then reset the display
             */
            if (typeof obj.renderOptions !== 'undefined') {
                if (obj.renderOptions.firstChange === false) {
                    this.removeMarkers();
                    this.removeDirections();
                }
            }
            this.directionDraw();
        }
    };
    /**
     * @return {?}
     */
    AgmDirection.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroyMarkers();
        this.removeDirections();
    };
    /**
     * This event is fired when the user creating or updating this direction
     */
    /**
     * This event is fired when the user creating or updating this direction
     * @return {?}
     */
    AgmDirection.prototype.directionDraw = /**
     * This event is fired when the user creating or updating this direction
     * @return {?}
     */
    function () {
        var _this = this;
        this.gmapsApi.getNativeMap().then(function (map) {
            if (typeof _this.directionsDisplay === 'undefined') {
                _this.directionsDisplay = new google.maps.DirectionsRenderer(_this.renderOptions);
                _this.directionsDisplay.setMap(map);
                _this.directionsDisplay.addListener('directions_changed', function () {
                    _this.onChange.emit(_this.directionsDisplay.getDirections());
                });
            }
            if (typeof _this.directionsService === 'undefined') {
                _this.directionsService = new google.maps.DirectionsService;
            }
            if (typeof _this.panel === 'undefined') {
                _this.directionsDisplay.setPanel(null);
            }
            else {
                _this.directionsDisplay.setPanel(_this.panel);
            }
            // Render exist direction
            if (typeof _this.renderRoute === 'object' && _this.renderRoute !== null) {
                _this.directionsDisplay.setDirections(_this.renderRoute);
                _this.renderRoute = null; // or set undefined, ''
            }
            else {
                // Request new direction
                _this.directionsService.route({
                    origin: _this.origin,
                    destination: _this.destination,
                    travelMode: _this.travelMode,
                    transitOptions: _this.transitOptions,
                    drivingOptions: _this.drivingOptions,
                    waypoints: _this.waypoints,
                    optimizeWaypoints: _this.optimizeWaypoints,
                    provideRouteAlternatives: _this.provideRouteAlternatives,
                    avoidHighways: _this.avoidHighways,
                    avoidTolls: _this.avoidTolls,
                }, function (response, status) {
                    _this.onResponse.emit(response);
                    // Emit Query Status
                    _this.status.emit(status);
                    /**
                     * DirectionsStatus
                     * https://developers.google.com/maps/documentation/javascript/directions#DirectionsStatus
                     */
                    switch (status) {
                        case 'OK':
                            _this.directionsDisplay.setDirections(response);
                            /**
                             * Emit The DirectionsResult Object
                             * https://developers.google.com/maps/documentation/javascript/directions?hl=en#DirectionsResults
                             */
                            // Custom Markers
                            if (typeof _this.markerOptions !== 'undefined') {
                                _this.destroyMarkers();
                                // Set custom markers
                                /** @type {?} */
                                var _route_1 = response.routes[0].legs[0];
                                try {
                                    // Origin Marker
                                    if (typeof _this.markerOptions.origin !== 'undefined') {
                                        _this.markerOptions.origin.map = map;
                                        _this.markerOptions.origin.position = _route_1.start_location;
                                        _this.originMarker = _this.setMarker(map, _this.originMarker, _this.markerOptions.origin, _route_1.start_address);
                                        if (_this.markerOptions.origin.draggable) {
                                            _this.originMarker.addListener('dragend', function () {
                                                _this.origin = _this.originMarker.position;
                                                _this.directionDraw();
                                                _this.originDrag.emit(_this.origin);
                                            });
                                        }
                                    }
                                    // Destination Marker
                                    if (typeof _this.markerOptions.destination !== 'undefined') {
                                        _this.markerOptions.destination.map = map;
                                        _this.markerOptions.destination.position = _route_1.end_location;
                                        _this.destinationMarker = _this.setMarker(map, _this.destinationMarker, _this.markerOptions.destination, _route_1.end_address);
                                        if (_this.markerOptions.destination.draggable) {
                                            _this.destinationMarker.addListener('dragend', function () {
                                                _this.destination = _this.destinationMarker.position;
                                                _this.directionDraw();
                                                _this.destinationDrag.emit(_this.destination);
                                            });
                                        }
                                    }
                                    // Waypoints Marker
                                    if (typeof _this.markerOptions.waypoints !== 'undefined') {
                                        _this.waypoints.forEach(function (waypoint, index) {
                                            // If waypoints are not array then set all the same
                                            if (!Array.isArray(_this.markerOptions.waypoints)) {
                                                _this.markerOptions.waypoints.map = map;
                                                _this.markerOptions.waypoints.position = _route_1.via_waypoints[index];
                                                _this.waypointsMarker.push(_this.setMarker(map, waypoint, _this.markerOptions.waypoints, _route_1.via_waypoints[index]));
                                            }
                                            else {
                                                _this.markerOptions.waypoints[index].map = map;
                                                _this.markerOptions.waypoints[index].position = _route_1.via_waypoints[index];
                                                _this.waypointsMarker.push(_this.setMarker(map, waypoint, _this.markerOptions.waypoints[index], _route_1.via_waypoints[index]));
                                            }
                                        }); // End forEach
                                    }
                                }
                                catch (err) {
                                    console.error('MarkerOptions error.', err);
                                }
                            }
                            break;
                        default:
                            // console.warn(status);
                            break;
                    } // End switch
                });
            }
        });
    };
    /**
     * Custom Origin and Destination Icon
     * @param map map
     * @param marker marker
     * @param markerOpts properties
     * @param content marker's infowindow content
     * @returns new marker
     * @memberof AgmDirection
     */
    /**
     * Custom Origin and Destination Icon
     * \@memberof AgmDirection
     * @param {?} map map
     * @param {?} marker marker
     * @param {?} markerOpts properties
     * @param {?} content marker's infowindow content
     * @return {?} new marker
     */
    AgmDirection.prototype.setMarker = /**
     * Custom Origin and Destination Icon
     * \@memberof AgmDirection
     * @param {?} map map
     * @param {?} marker marker
     * @param {?} markerOpts properties
     * @param {?} content marker's infowindow content
     * @return {?} new marker
     */
    function (map, marker, markerOpts, content) {
        var _this = this;
        if (typeof this.infoWindow === 'undefined') {
            this.infoWindow = new google.maps.InfoWindow({});
            this.sendInfoWindow.emit(this.infoWindow);
        }
        marker = new google.maps.Marker(markerOpts);
        marker.addListener('click', function () {
            /** @type {?} */
            var infowindoContent = typeof markerOpts.infoWindow === 'undefined' ? content : markerOpts.infoWindow;
            _this.infoWindow.setContent(infowindoContent);
            _this.infoWindow.open(map, marker);
        });
        return marker;
    };
    /**
     * This event is fired when remove markers
     */
    /**
     * This event is fired when remove markers
     * @return {?}
     */
    AgmDirection.prototype.removeMarkers = /**
     * This event is fired when remove markers
     * @return {?}
     */
    function () {
        if (typeof this.originMarker !== 'undefined') {
            this.originMarker.setMap(null);
        }
        if (typeof this.destinationMarker !== 'undefined') {
            this.destinationMarker.setMap(null);
        }
        this.waypointsMarker.forEach(function (w) {
            if (typeof w !== 'undefined') {
                w.setMap(null);
            }
        });
    };
    /**
     * This event is fired when remove directions
     */
    /**
     * This event is fired when remove directions
     * @return {?}
     */
    AgmDirection.prototype.removeDirections = /**
     * This event is fired when remove directions
     * @return {?}
     */
    function () {
        if (this.directionsDisplay !== undefined) {
            this.directionsDisplay.setPanel(null);
            this.directionsDisplay.setMap(null);
            this.directionsDisplay = undefined;
        }
    };
    /**
     * This event is fired when destroy markers
     */
    /**
     * This event is fired when destroy markers
     * @return {?}
     */
    AgmDirection.prototype.destroyMarkers = /**
     * This event is fired when destroy markers
     * @return {?}
     */
    function () {
        // Remove origin markers
        try {
            if (typeof this.originMarker !== 'undefined') {
                google.maps.event.clearListeners(this.originMarker, 'click');
                if (this.markerOptions.origin.draggable) {
                    google.maps.event.clearListeners(this.originMarker, 'dragend');
                }
            }
            if (typeof this.destinationMarker !== 'undefined') {
                google.maps.event.clearListeners(this.destinationMarker, 'click');
                if (this.markerOptions.origin.draggable) {
                    google.maps.event.clearListeners(this.destinationMarker, 'dragend');
                }
            }
            this.waypointsMarker.forEach(function (w) {
                if (typeof w !== 'undefined') {
                    google.maps.event.clearListeners(w, 'click');
                }
            });
            this.removeMarkers();
        }
        catch (err) {
            console.error('Can not reset custom marker.', err);
        }
    };
    AgmDirection.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'agm-direction',
                },] }
    ];
    /** @nocollapse */
    AgmDirection.ctorParameters = function () { return [
        { type: _agm_core__WEBPACK_IMPORTED_MODULE_1__["GoogleMapsAPIWrapper"] }
    ]; };
    AgmDirection.propDecorators = {
        origin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        destination: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        travelMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        transitOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        drivingOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        waypoints: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        optimizeWaypoints: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        provideRouteAlternatives: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        avoidHighways: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        avoidTolls: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        renderOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        panel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        markerOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        infoWindow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        visible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        renderRoute: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        onChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onResponse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        sendInfoWindow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        status: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        originDrag: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        destinationDrag: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return AgmDirection;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var AgmDirectionModule = /** @class */ (function () {
    function AgmDirectionModule() {
    }
    /**
     * @return {?}
     */
    AgmDirectionModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: AgmDirectionModule,
        };
    };
    AgmDirectionModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [],
                    declarations: [
                        AgmDirection,
                    ],
                    exports: [
                        AgmDirection,
                    ]
                },] }
    ];
    return AgmDirectionModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */


//# sourceMappingURL=agm-direction.js.map


/***/ }),

/***/ "./src/app/common/models/panic.model.ts":
/*!**********************************************!*\
  !*** ./src/app/common/models/panic.model.ts ***!
  \**********************************************/
/*! exports provided: PanicAlert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanicAlert", function() { return PanicAlert; });
var PanicAlert = /** @class */ (function () {
    function PanicAlert() {
    }
    return PanicAlert;
}());



/***/ }),

/***/ "./src/app/common/models/routedeviation.model.ts":
/*!*******************************************************!*\
  !*** ./src/app/common/models/routedeviation.model.ts ***!
  \*******************************************************/
/*! exports provided: RouteDeviation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteDeviation", function() { return RouteDeviation; });
var RouteDeviation = /** @class */ (function () {
    function RouteDeviation() {
    }
    return RouteDeviation;
}());



/***/ }),

/***/ "./src/app/common/models/trip.model.ts":
/*!*********************************************!*\
  !*** ./src/app/common/models/trip.model.ts ***!
  \*********************************************/
/*! exports provided: TripModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripModel", function() { return TripModel; });
var TripModel = /** @class */ (function () {
    function TripModel() {
    }
    return TripModel;
}());



/***/ }),

/***/ "./src/app/mainComponents/trip/modalpopup/viewpanic-details/viewpanic-details.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/mainComponents/trip/modalpopup/viewpanic-details/viewpanic-details.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h5 class=\"modal-title\">Panic Details of {{selectedPanicDetails.distressId}}</h5>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.close('refreshContent')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body p-r-2\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <h5>ID</h5>\n      <h4>{{selectedPanicDetails.distressId}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>RF ID</h5>\n      <h4>{{selectedPanicDetails.rfId}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Driver Name</h5>\n      <h4>{{selectedPanicDetails.driverName}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>DL Number</h5>\n      <h4>{{selectedPanicDetails.dlNumber}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Vehicle No No</h5>\n      <h4>{{selectedPanicDetails.rcNumber}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Serial Number</h5>\n      <h4>{{selectedPanicDetails.serialNumber}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Driver Mobile No</h5>\n      <h4>{{selectedPanicDetails.driverMobileNumber}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Citizen Mobile No</h5>\n      <h4>{{selectedPanicDetails.citizenMobileNumber}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Trip Request Id</h5>\n      <h4>{{selectedPanicDetails.tripRequestId}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Trip Id</h5>\n      <h4>{{selectedPanicDetails.tripId}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Source LatLng</h5>\n      <h4>{{selectedPanicDetails.sourceLatLang}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Source Location</h5>\n      <h4>{{selectedPanicDetails.sourceLocation}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Destination LatLng</h5>\n      <h4>{{selectedPanicDetails.destiLatLang}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Destination Location</h5>\n      <h4>{{selectedPanicDetails.destiLocation}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Trip Request Time</h5>\n      <h4>{{selectedPanicDetails.tripRequestTime}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Trip Closed</h5>\n      <h4>{{selectedPanicDetails.closed}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Panic Location</h5>\n      <h4>{{selectedPanicDetails.distressLocation}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Panic Type</h5>\n      <h4>{{selectedPanicDetails.eventType}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Date</h5>\n      <h4>{{selectedPanicDetails.packetDate}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Time</h5>\n      <h4>{{selectedPanicDetails.packetTime}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Created Date</h5>\n      <h4>{{selectedPanicDetails.createdDate}}</h4>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/mainComponents/trip/modalpopup/viewpanic-details/viewpanic-details.component.sass":
/*!***************************************************************************************************!*\
  !*** ./src/app/mainComponents/trip/modalpopup/viewpanic-details/viewpanic-details.component.sass ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW5Db21wb25lbnRzL3RyaXAvbW9kYWxwb3B1cC92aWV3cGFuaWMtZGV0YWlscy92aWV3cGFuaWMtZGV0YWlscy5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/mainComponents/trip/modalpopup/viewpanic-details/viewpanic-details.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/mainComponents/trip/modalpopup/viewpanic-details/viewpanic-details.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ViewpanicDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewpanicDetailsComponent", function() { return ViewpanicDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _common_models_panic_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/models/panic.model */ "./src/app/common/models/panic.model.ts");




var ViewpanicDetailsComponent = /** @class */ (function () {
    function ViewpanicDetailsComponent(activeModal) {
        this.activeModal = activeModal;
    }
    ViewpanicDetailsComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _common_models_panic_model__WEBPACK_IMPORTED_MODULE_3__["PanicAlert"])
    ], ViewpanicDetailsComponent.prototype, "selectedPanicDetails", void 0);
    ViewpanicDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-viewpanic-details',
            template: __webpack_require__(/*! ./viewpanic-details.component.html */ "./src/app/mainComponents/trip/modalpopup/viewpanic-details/viewpanic-details.component.html"),
            styles: [__webpack_require__(/*! ./viewpanic-details.component.sass */ "./src/app/mainComponents/trip/modalpopup/viewpanic-details/viewpanic-details.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]])
    ], ViewpanicDetailsComponent);
    return ViewpanicDetailsComponent;
}());



/***/ }),

/***/ "./src/app/mainComponents/trip/modalpopup/viewroutedeviation/viewroutedeviation.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/mainComponents/trip/modalpopup/viewroutedeviation/viewroutedeviation.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h5 class=\"modal-title\">RouteDeviation Details of {{routedeviationData.tripId}}</h5>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.close('refreshContent')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body p-r-2\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <h5>ID</h5>\n      <h4>{{routedeviationData.tripId}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Trip Request ID</h5>\n      <h4>{{routedeviationData.tripRequestId}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Citizen Mobile No</h5>\n      <h4>{{routedeviationData.citizenMobileNumber}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Vehicle Number</h5>\n      <h4>{{routedeviationData.rcNumber}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>RFID</h5>\n      <h4>{{routedeviationData.rfId}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Request ID</h5>\n      <h4>{{routedeviationData.requestId}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>DL Number</h5>\n      <h4>{{routedeviationData.dlNumber}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Serial No</h5>\n      <h4>{{routedeviationData.serialNumber}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Driver Name</h5>\n      <h4>{{routedeviationData.driverName}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Driver Contact No</h5>\n      <h4>{{routedeviationData.driverContactNumber}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Owner Name</h5>\n      <h4>{{routedeviationData.ownerName}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Owner Contact No</h5>\n      <h4>{{routedeviationData.ownerContactNumber}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Source LatLng</h5>\n      <h4>{{routedeviationData.slatLng}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Destination LatLng</h5>\n      <h4>{{routedeviationData.dlatLng}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Source Location</h5>\n      <h4>{{routedeviationData.slocation}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Destination Location</h5>\n      <h4>{{routedeviationData.dlocation}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Deviation LatLng</h5>\n      <h4>{{routedeviationData.location}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Deviation Location</h5>\n      <h4>{{routedeviationData.geoLocation}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Deviatione Time</h5>\n      <h4>{{routedeviationData.deviationTime}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>State ID</h5>\n      <h4>{{routedeviationData.stateId}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>District ID</h5>\n      <h4>{{routedeviationData.districtId}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>City ID</h5>\n      <h4>{{routedeviationData.cityId}}</h4>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/mainComponents/trip/modalpopup/viewroutedeviation/viewroutedeviation.component.sass":
/*!*****************************************************************************************************!*\
  !*** ./src/app/mainComponents/trip/modalpopup/viewroutedeviation/viewroutedeviation.component.sass ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW5Db21wb25lbnRzL3RyaXAvbW9kYWxwb3B1cC92aWV3cm91dGVkZXZpYXRpb24vdmlld3JvdXRlZGV2aWF0aW9uLmNvbXBvbmVudC5zYXNzIn0= */"

/***/ }),

/***/ "./src/app/mainComponents/trip/modalpopup/viewroutedeviation/viewroutedeviation.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/mainComponents/trip/modalpopup/viewroutedeviation/viewroutedeviation.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ViewroutedeviationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewroutedeviationComponent", function() { return ViewroutedeviationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _common_models_routedeviation_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/models/routedeviation.model */ "./src/app/common/models/routedeviation.model.ts");




var ViewroutedeviationComponent = /** @class */ (function () {
    function ViewroutedeviationComponent(activeModal) {
        this.activeModal = activeModal;
    }
    ViewroutedeviationComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _common_models_routedeviation_model__WEBPACK_IMPORTED_MODULE_3__["RouteDeviation"])
    ], ViewroutedeviationComponent.prototype, "routedeviationData", void 0);
    ViewroutedeviationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-viewroutedeviation',
            template: __webpack_require__(/*! ./viewroutedeviation.component.html */ "./src/app/mainComponents/trip/modalpopup/viewroutedeviation/viewroutedeviation.component.html"),
            styles: [__webpack_require__(/*! ./viewroutedeviation.component.sass */ "./src/app/mainComponents/trip/modalpopup/viewroutedeviation/viewroutedeviation.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]])
    ], ViewroutedeviationComponent);
    return ViewroutedeviationComponent;
}());



/***/ }),

/***/ "./src/app/mainComponents/trip/modalpopup/viewtripdetails/viewtripdetails.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/mainComponents/trip/modalpopup/viewtripdetails/viewtripdetails.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h5 class=\"modal-title\">Trip Details of {{selectedTripModel.tripId}}</h5>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.close('refreshContent')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body p-r-2\">\n  <div class=\"row row-m-b\">\n    <div class=\"col-md-6\">\n      <h5>ID</h5>\n      <h4>{{selectedTripModel.tripId}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Source</h5>\n      <h4>{{selectedTripModel.sourceLatLang}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Destination</h5>\n      <h4>{{selectedTripModel.destiLatLang}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Destination Location</h5>\n      <h4>{{selectedTripModel.destiLocation}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Request ID</h5>\n      <h4>{{selectedTripModel.requestId}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Created Date</h5>\n      <h4>{{selectedTripModel.createdDate}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Close Time</h5>\n      <h4>{{selectedTripModel.closeTime}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Request Time</h5>\n      <h4>{{selectedTripModel.requestTime}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Citizen Mobile</h5>\n      <h4>{{selectedTripModel.citizenMobileNumber}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Class of Vehicle</h5>\n      <h4>{{selectedTripModel.classOfVehicle}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>City ID</h5>\n      <h4>{{selectedTripModel.cityId}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>District ID</h5>\n      <h4>{{selectedTripModel.districtId}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>DL Number</h5>\n      <h4>{{selectedTripModel.dlNumber}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Driver Name</h5>\n      <h4>{{selectedTripModel.driverName}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Driver Contact</h5>\n      <h4>{{selectedTripModel.driverContactNumber}}</h4>\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Driver Address</h5>\n      <h4>{{selectedTripModel.driverAddress }}</h4>\n    </div>\n    \n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/mainComponents/trip/modalpopup/viewtripdetails/viewtripdetails.component.sass":
/*!***********************************************************************************************!*\
  !*** ./src/app/mainComponents/trip/modalpopup/viewtripdetails/viewtripdetails.component.sass ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW5Db21wb25lbnRzL3RyaXAvbW9kYWxwb3B1cC92aWV3dHJpcGRldGFpbHMvdmlld3RyaXBkZXRhaWxzLmNvbXBvbmVudC5zYXNzIn0= */"

/***/ }),

/***/ "./src/app/mainComponents/trip/modalpopup/viewtripdetails/viewtripdetails.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/mainComponents/trip/modalpopup/viewtripdetails/viewtripdetails.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ViewtripdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewtripdetailsComponent", function() { return ViewtripdetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _common_models_trip_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/models/trip.model */ "./src/app/common/models/trip.model.ts");




var ViewtripdetailsComponent = /** @class */ (function () {
    function ViewtripdetailsComponent(activeModal) {
        this.activeModal = activeModal;
    }
    ViewtripdetailsComponent.prototype.ngOnInit = function () {
        console.log(this.selectedTripModel);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _common_models_trip_model__WEBPACK_IMPORTED_MODULE_3__["TripModel"])
    ], ViewtripdetailsComponent.prototype, "selectedTripModel", void 0);
    ViewtripdetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-viewtripdetails',
            template: __webpack_require__(/*! ./viewtripdetails.component.html */ "./src/app/mainComponents/trip/modalpopup/viewtripdetails/viewtripdetails.component.html"),
            styles: [__webpack_require__(/*! ./viewtripdetails.component.sass */ "./src/app/mainComponents/trip/modalpopup/viewtripdetails/viewtripdetails.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]])
    ], ViewtripdetailsComponent);
    return ViewtripdetailsComponent;
}());



/***/ }),

/***/ "./src/app/mainComponents/trip/panicalerts/panicalerts.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/mainComponents/trip/panicalerts/panicalerts.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container top-header p-b-3\">\n  <div class=\"row head-block no-gutters bdr-bottom m-b-3 p-t-1\">\n    <div class=\"col-md-5 p-l-0\">\n      <h4>Panic Details</h4>\n    </div>\n    <div class=\"col-md-6 text-right\">\n      <span class=\"btn-circle\"><i class=\"icon-ab_download\"></i></span>\n      <span class=\"btn-circle m-r-1\" (click)=\"refreshPage()\"><i class=\"icon-ab-refresh\"></i></span>\n    </div>\n    <div class=\"col-md-1 p-r-0 text-right\">\n      <div class=\"filters\">\n        <button type=\"button\" class=\"filters-button\" [ngClass]=\"{ 'active': showFilters}\" (click)=\"toggleFilters()\">\n          <i class=\"icon-ab-searchfilter\"></i>\n          <span>Filters</span>\n        </button>\n        <div class=\"filters-body \" *ngIf=\"showFilters\">\n          <div class=\"arrow-up\"></div>\n          <form name=\"form\" (ngSubmit)=\"f.form.valid && applyFilters(f)\" #f=\"ngForm\" novalidate>\n            <app-citydistrict #validateCityDistrict (isCityDistrictValid)=\"isCityDistrictValid($event)\"\n              [cityDistrictConfig]='cityDistrictConfig'></app-citydistrict>\n            <div class=\"form-group\">\n              <label>DATE</label>\n              <app-datepicker class=\"form-control bdr-none p-a-0\" name=\"searchDate\" [(ngModel)]=\"searchDate\"\n                #searchDatectrl=\"ngModel\" appForbiddenName=\"fred\"\n                [ngClass]=\"{ 'is-invalid': f.submitted && searchDatectrl.invalid }\" [datePickerModel]=\"datePickerModel\"\n                searchDatectrl>\n              </app-datepicker>\n              <div *ngIf=\"f.submitted && searchDatectrl.invalid\" class=\"invalid-feedback\">\n                <div *ngIf=\"searchDatectrl.errors.required\">Search Date is required</div>\n              </div>\n            </div>\n            <div class=\"form-group m-t-3\">\n              <button class=\"btn btn-primary w-100p\" type=\"submit\">Search</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-12 p-a-0 p-t-1\">\n      <nav aria-label=\"breadcrumb\">\n        <ol class=\"breadcrumb\">\n          <li class=\"breadcrumb-item\"><a class=\"text-abhaya\" [routerLink]=\"['/dashboard']\">Home</a></li>\n          <li class=\"breadcrumb-item active text-secondary\" aria-current=\"page\">Trip</li>\n          <li class=\"breadcrumb-item active text-secondary\" aria-current=\"page\">Panic Details</li>\n        </ol>\n      </nav>\n    </div>\n  </div>\n\n  <div class=\"row no-gutters m-b-3\">\n    <div class=\"col-md-5\">\n      <!-- <div class=\"form-group p-t-1 p-r-2\">\n        <select class=\"form-control\"> \n        <option value=\"\"> Panic Source </option>\n        <option value='WEB'>Web</option>\n        <option value='MOBILE'>Mobile</option>\n      </select>\n    </div> -->\n      <ul class=\"nav nav-tabs\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link cursor-hand\" [ngClass]=\"{ 'active': panicSource==='WEB' }\" (click)=\"getselectedpanic('WEB')\">WEB</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link cursor-hand\" [ngClass]=\"{ 'active': panicSource==='MOBILE' }\"\n            (click)=\"getselectedpanic('MOBILE')\">MOBILE</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link cursor-hand\" [ngClass]=\"{ 'active': panicSource==='DEVICE' }\"\n            (click)=\"getselectedpanic('DEVICE')\">DEVICE</a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"col-md-3 p-a-0 text-left\">\n      <div class=\"form-group w-88p abhaya-table-search\">\n        <i class=\"icon-ab-search\"></i>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchText\" (keydown.enter)=\"getPanicData()\"\n          placeholder=\"Search Vehicle / DL / RFID / Citizen No.\">\n        <span class=\"separator\"> </span>\n      </div>\n    </div>\n\n    <div class=\"col-md-2 p-t-2\">\n      <span class=\"switch-text\">Show Closed Panics</span>\n      <label class=\"switch\" style=\"margin-top:0px; margin-bottom:0px;\">\n        <input type=\"checkbox\" (click)=\"panicViewToggle()\">\n        <div class=\"slider round\">\n          <!--ADDED HTML --><span class=\"off\"></span>\n          <!--END-->\n        </div>\n      </label>\n    </div>\n    <div class=\"col-md-2 p-a-0 text-primary p-t-2 text-right\">\n      Total Records : <h5 class=\"total-records-text d-inline-block\">{{page.totalElements}}</h5> <br />\n      <!-- <button class=\"btn btn-primary\" (click)=\"tripViewToggel(false)\">Open</button> || <button class=\"btn btn-primary\"\n            (click)=\"tripViewToggel(true)\">Closed</button> -->\n    </div>\n  </div>\n\n  <div class=\"row no-gutters pt-8\">\n    <table class=\"abhaya-table\">\n      <thead>\n        <tr>\n          <th>Vehicle Number</th>\n          <th class=\"number\">Driver Name</th>\n          <th>DL Number</th>\n          <th>RFID</th>\n          <th>Citizen Mobile Number</th>\n          <th>Panic Source</th>\n          <th>IsClosed</th>\n          <th>Date</th>\n          <th></th>\n        </tr>\n      </thead>\n      <tbody *ngIf=\"isDataExists\">\n        <tr\n          *ngFor=\"let panicAlert of panicData | paginate: { id: 'paginationCtrl', itemsPerPage: page.size, currentPage: p, totalItems: page.totalElements }\">\n          <td>{{panicAlert.rcNumber}}</td>\n          <td>{{panicAlert.driverName}}</td>\n          <td>{{panicAlert.dlNumber}}</td>\n          <td>{{panicAlert.rfId}}</td>\n          <td>{{panicAlert.citizenMobileNumber == undefined ? '--' : panicAlert.citizenMobileNumber}}</td>\n          <td>{{panicAlert.eventType}}</td>\n          <td>{{panicAlert.closed}}</td>\n          <td>{{panicAlert.packetDate}}</td>\n          <td>\n            <a class=\"\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n              aria-expanded=\"false\"><i class=\"icon-ab_more\"></i></a>\n            <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdown\">\n              <div class=\"arrow-up\"></div>\n              <a (click)=\"viewDetails(panicAlert)\" class=\"dropdown-item\">View Details</a>\n              <a (click)=\"tripMapView(panicAlert)\" class=\"dropdown-item\">Map View</a>\n            </div>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n    <app-nodata class=\"w-100p\" *ngIf=\"!isDataExists\" [noDataText]='noDataText'></app-nodata>\n    <div class=\"row no-gutters w-100p m-t-5\">\n      <div *ngIf=\"isDataExists\" class=\"float-left p-t-1 page-size\">\n        <span>Page Size :</span>\n        <select (change)=\"changePageSize()\" [(ngModel)]=\"pageSize\">\n          <option *ngFor=\"let number of pageSizeValues\" value=\"{{number}}\">{{number}}</option>\n        </select>\n      </div>\n      <div *ngIf=\"isDataExists\" style=\"margin:0px auto;\">\n        <pagination-controls id=\"paginationCtrl\" class=\"pagination float-right\" (pageChange)=\"pageChanged($event)\"\n          maxSize=\"6\" directionLinks=\"true\" autoHide=\"true\" responsive=\"true\" previousLabel=\"Prev\" nextLabel=\"Next\">\n        </pagination-controls>\n\n      </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/mainComponents/trip/panicalerts/panicalerts.component.sass":
/*!****************************************************************************!*\
  !*** ./src/app/mainComponents/trip/panicalerts/panicalerts.component.sass ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW5Db21wb25lbnRzL3RyaXAvcGFuaWNhbGVydHMvcGFuaWNhbGVydHMuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/mainComponents/trip/panicalerts/panicalerts.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/mainComponents/trip/panicalerts/panicalerts.component.ts ***!
  \**************************************************************************/
/*! exports provided: PanicalertsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanicalertsComponent", function() { return PanicalertsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_components_citydistrict_citydistrict_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/components/citydistrict/citydistrict.component */ "./src/app/common/components/citydistrict/citydistrict.component.ts");
/* harmony import */ var _common_services_tripserviceapi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/services/tripserviceapi */ "./src/app/common/services/tripserviceapi.ts");
/* harmony import */ var _common_models_page_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/models/page.model */ "./src/app/common/models/page.model.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! .././../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _modalpopup_viewpanic_details_viewpanic_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modalpopup/viewpanic-details/viewpanic-details.component */ "./src/app/mainComponents/trip/modalpopup/viewpanic-details/viewpanic-details.component.ts");









var PanicalertsComponent = /** @class */ (function () {
    function PanicalertsComponent(tripserviceApi, modalService, router, activatedRoute) {
        var _this = this;
        this.tripserviceApi = tripserviceApi;
        this.modalService = modalService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.showFilters = false;
        this.searchText = '';
        this.page = new _common_models_page_model__WEBPACK_IMPORTED_MODULE_6__["PageModel"]();
        this.isDataExists = false;
        this.pageSizeValues = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].pageSizeValues;
        this.pageSize = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].pageSize;
        this.intilPageNumber = 0;
        this.searchDate = '';
        this.districtId = '';
        this.cityId = '';
        this.rtoId = '';
        this.noDataText = "No Panic Data Available";
        this.panicSource = 'WEB';
        this.panicClosed = false;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.panicType = params['panicType'] !== undefined ? params['panicType'] : '';
        });
    }
    PanicalertsComponent.prototype.isCityDistrictValid = function (formValid) {
        this.cityDistrictCompData = formValid;
    };
    PanicalertsComponent.prototype.ngOnInit = function () {
        console.log(this.panicType);
        if (this.panicType !== '') {
            this.getselectedpanic(this.panicType);
        }
        else {
            this.getPanicData();
        }
    };
    PanicalertsComponent.prototype.toggleFilters = function () {
        this.showFilters = !this.showFilters;
    };
    PanicalertsComponent.prototype.viewDetails = function (selectedPanic) {
        var modalRef = this.modalService.open(_modalpopup_viewpanic_details_viewpanic_details_component__WEBPACK_IMPORTED_MODULE_8__["ViewpanicDetailsComponent"], {
            size: 'lg', backdrop: 'static',
            keyboard: false
        });
        modalRef.componentInstance.selectedPanicDetails = selectedPanic;
    };
    PanicalertsComponent.prototype.changePageSize = function () {
        this.getPanicData();
    };
    PanicalertsComponent.prototype.pageChanged = function (event) {
        this.p = event;
        this.intilPageNumber = event - 1;
        this.getPanicData();
    };
    PanicalertsComponent.prototype.tripMapView = function (tripDetails) {
        this.router.navigate(['/trip/triptracking'], {
            queryParams: { tripId: tripDetails.tripId },
            queryParamsHandling: 'merge'
        });
    };
    PanicalertsComponent.prototype.applyFilters = function (parentForm) {
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
            this.getPanicData();
        }
    };
    PanicalertsComponent.prototype.refreshPage = function () {
        this.intilPageNumber = 0;
        this.pageSize = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].pageSize;
        this.panicSource = 'WEB';
        this.searchDate = '';
        this.searchText = '';
        this.getPanicData();
    };
    PanicalertsComponent.prototype.panicViewToggle = function () {
        this.p = 1;
        this.panicClosed = !this.panicClosed;
        this.getPanicData();
    };
    PanicalertsComponent.prototype.getselectedpanic = function (panicSource) {
        this.intilPageNumber = 0;
        this.panicSource = panicSource;
        this.getPanicData();
    };
    PanicalertsComponent.prototype.getPanicData = function () {
        var _this = this;
        if (this.panicSource == 'DEVICE') {
            this.tripserviceApi.getDevicePanic(this.intilPageNumber, this.pageSize, this.searchDate, this.searchText, this.panicClosed, this.districtId, this.cityId, this.rtoId)
                .subscribe(function (_data) {
                _this.panicData = _data.content;
                _this.page = _data.page;
                _this.isDataExists = (_this.panicData.length > 0);
                console.log(_this.panicData);
            });
        }
        else {
            this.tripserviceApi.getPanicDetails(this.intilPageNumber, this.pageSize, this.searchDate, this.searchText, this.panicSource, this.panicClosed, this.districtId, this.cityId, this.rtoId)
                .subscribe(function (_data) {
                _this.panicData = _data.content;
                _this.page = _data.page;
                _this.isDataExists = (_this.panicData.length > 0);
                console.log(_this.panicData);
            });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('validateCityDistrict'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _common_components_citydistrict_citydistrict_component__WEBPACK_IMPORTED_MODULE_4__["CitydistrictComponent"])
    ], PanicalertsComponent.prototype, "CitydistrictComponent", void 0);
    PanicalertsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-panicalerts',
            template: __webpack_require__(/*! ./panicalerts.component.html */ "./src/app/mainComponents/trip/panicalerts/panicalerts.component.html"),
            styles: [__webpack_require__(/*! ./panicalerts.component.sass */ "./src/app/mainComponents/trip/panicalerts/panicalerts.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_services_tripserviceapi__WEBPACK_IMPORTED_MODULE_5__["TripServiceApi"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], PanicalertsComponent);
    return PanicalertsComponent;
}());



/***/ }),

/***/ "./src/app/mainComponents/trip/routedeviation/routedeviation.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/mainComponents/trip/routedeviation/routedeviation.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container top-header p-b-3\">\n  <div class=\"row head-block no-gutters bdr-bottom m-b-3 p-t-1\">\n    <div class=\"col-md-6 p-l-0\">\n      <h4>Route Deviation</h4>\n    </div>\n    <div class=\"col-md-5 text-right\">\n        <span class=\"btn-circle\"><i class=\"icon-ab_download\"></i></span>\n        <span class=\"btn-circle m-r-1\" (click)=\"refreshPage()\"><i class=\"icon-ab-refresh\"></i></span>\n      </div>\n    <div class=\"col-md-1 p-r-0 text-right\">\n      <div class=\"filters\">\n        <button type=\"button\" class=\"filters-button\" [ngClass]=\"{ 'active': showFilters}\" (click)=\"toggleFilters()\">\n          <i class=\"icon-ab-searchfilter\"></i>\n          <span>Filters</span>\n        </button>\n        <div class=\"filters-body \" *ngIf=\"showFilters\">\n          <div class=\"arrow-up\"></div>\n          <form name=\"form\" (ngSubmit)=\"f.form.valid && applyFilters(f)\" #f=\"ngForm\" novalidate>\n            <app-citydistrict #validateCityDistrict (isCityDistrictValid)=\"isCityDistrictValid($event)\"\n              [cityDistrictConfig]='cityDistrictConfig'></app-citydistrict>\n\n            <div class=\"form-group\">\n              <label>DATE</label>\n              <app-datepicker class=\"form-control bdr-none p-a-0\" name=\"searchDate\" [(ngModel)]=\"searchDate\"\n                #searchDatectrl=\"ngModel\" appForbiddenName=\"fred\"\n                [ngClass]=\"{ 'is-invalid': f.submitted && searchDatectrl.invalid }\"\n                [datePickerModel]=\"datePickerModel\" searchDatectrl>\n              </app-datepicker>\n              <div *ngIf=\"f.submitted && searchDatectrl.invalid\" class=\"invalid-feedback\">\n                <div *ngIf=\"searchDatectrl.errors.required\">Search Date is required</div>\n              </div>\n            </div>\n            <div class=\"form-group m-t-3\">\n              <button class=\"btn btn-primary w-100p\" type=\"submit\">Search</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-12 p-a-0 p-t-1\">\n      <nav aria-label=\"breadcrumb\">\n        <ol class=\"breadcrumb\">\n          <li class=\"breadcrumb-item\"><a class=\"text-abhaya\" [routerLink]=\"['/dashboard']\">Home</a></li>\n          <li class=\"breadcrumb-item active text-secondary\" aria-current=\"page\">Trip</li>\n          <li class=\"breadcrumb-item active text-secondary\" aria-current=\"page\">Route Deviation</li>\n        </ol>\n      </nav>\n    </div>\n  </div>\n\n  <div class=\"row no-gutters m-b-3\">\n      <div class=\"col-md-6 p-a-0\">\n          <div class=\"form-group abhaya-table-search focal-point\">\n            <i class=\"icon-ab-search\"></i>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchText\" (keydown.enter)=\"getRouteeviation()\"\n              placeholder=\"Search Vehicle / IOT / RFID / DL / Citizen No.\">\n            <span class=\"separator\"> </span>\n          </div>\n        </div>\n    <div class=\"col-md-6 p-a-0 text-primary p-t-2 text-right\">\n      Total Records : <h5 class=\"total-records-text d-inline-block\"> {{page.totalElements}}</h5>\n    </div>\n   \n  </div>\n\n  <div class=\"row no-gutters pt-8\">\n    <table class=\"abhaya-table\">\n      <thead>\n        <tr>\n          <th>Trip ID</th>\n          <th>Citizen Mobile No</th>\n          <th>Vehicle No</th>\n          <th>IoT No</th>\n          <th>DL No </th>\n          <th>RFID</th>\n          <th>Deviation Date</th>\n          <th>Deviation Location </th>\n          <th>Action</th>\n        </tr>\n      </thead>\n      <tbody *ngIf=\"isDataExists\">\n        <tr\n          *ngFor=\"let routeDeviation of routeDeviationData | paginate: { id: 'paginationCtrl', itemsPerPage: page.size, currentPage: p, totalItems: page.totalElements }\">\n          <td>{{routeDeviation.tripId}}</td>\n          <td>{{routeDeviation.citizenMobileNumber}}</td>\n          <td>{{routeDeviation.rcNumber}}</td>\n          <td>{{routeDeviation.serialNumber}}</td>\n          <td>{{routeDeviation.driverName}}</td>\n          <td>{{routeDeviation.rfId}}</td>\n          <td>{{routeDeviation.deviationTime}}</td>\n          <td>{{routeDeviation.deviatedLocation}}</td>\n          <td>\n            <a class=\"\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n              aria-expanded=\"false\"><i class=\"icon-ab_more\"></i></a>\n            <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdown\">\n              <div class=\"arrow-up\"></div>\n              <a (click)=\"viewDetails(routeDeviation)\" class=\"dropdown-item\">View Details</a>\n              <a (click)=\"tripMapView(routeDeviation)\" class=\"dropdown-item\">Map View</a>\n            </div>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n    <app-nodata class=\"w-100p\" *ngIf=\"!isDataExists\" [noDataText]='noDataText'></app-nodata>\n    <div class=\"row no-gutters w-100p m-t-5\">\n      <div *ngIf=\"isDataExists\" style=\"margin:0px auto;\">\n        <pagination-controls id=\"paginationCtrl\" class=\"pagination float-right\" (pageChange)=\"pageChanged($event)\"\n          maxSize=\"6\" directionLinks=\"true\" autoHide=\"true\" responsive=\"true\" previousLabel=\"Prev\" nextLabel=\"Next\">\n        </pagination-controls>\n        <div class=\"float-left p-t-1\">\n          Page Size :\n          <select (change)=\"changePageSize()\" [(ngModel)]=\"pageSize\">\n            <option *ngFor=\"let number of pageSizeValues\" value=\"{{number}}\">{{number}}</option>\n          </select>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/mainComponents/trip/routedeviation/routedeviation.component.sass":
/*!**********************************************************************************!*\
  !*** ./src/app/mainComponents/trip/routedeviation/routedeviation.component.sass ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW5Db21wb25lbnRzL3RyaXAvcm91dGVkZXZpYXRpb24vcm91dGVkZXZpYXRpb24uY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/mainComponents/trip/routedeviation/routedeviation.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/mainComponents/trip/routedeviation/routedeviation.component.ts ***!
  \********************************************************************************/
/*! exports provided: RoutedeviationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutedeviationComponent", function() { return RoutedeviationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_components_citydistrict_citydistrict_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/components/citydistrict/citydistrict.component */ "./src/app/common/components/citydistrict/citydistrict.component.ts");
/* harmony import */ var _common_services_tripserviceapi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/services/tripserviceapi */ "./src/app/common/services/tripserviceapi.ts");
/* harmony import */ var _common_models_page_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/models/page.model */ "./src/app/common/models/page.model.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! .././../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _modalpopup_viewroutedeviation_viewroutedeviation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modalpopup/viewroutedeviation/viewroutedeviation.component */ "./src/app/mainComponents/trip/modalpopup/viewroutedeviation/viewroutedeviation.component.ts");









var RoutedeviationComponent = /** @class */ (function () {
    function RoutedeviationComponent(tripserviceApi, modalService, router) {
        this.tripserviceApi = tripserviceApi;
        this.modalService = modalService;
        this.router = router;
        this.showFilters = false;
        this.searchText = '';
        this.page = new _common_models_page_model__WEBPACK_IMPORTED_MODULE_6__["PageModel"]();
        this.isDataExists = false;
        this.pageSizeValues = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].pageSizeValues;
        this.pageSize = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].pageSize;
        this.intilPageNumber = 0;
        this.searchDate = '';
        this.districtId = '';
        this.cityId = '';
        this.rtoId = '';
        this.noDataText = 'No Route Deviation Data Available';
    }
    RoutedeviationComponent.prototype.isCityDistrictValid = function (formValid) {
        this.cityDistrictCompData = formValid;
    };
    RoutedeviationComponent.prototype.ngOnInit = function () {
        this.getRouteeviation();
    };
    RoutedeviationComponent.prototype.toggleFilters = function () {
        this.showFilters = !this.showFilters;
    };
    RoutedeviationComponent.prototype.viewDetails = function (routeDeviation) {
        var modalRef = this.modalService.open(_modalpopup_viewroutedeviation_viewroutedeviation_component__WEBPACK_IMPORTED_MODULE_8__["ViewroutedeviationComponent"], {
            size: 'lg', backdrop: 'static',
            keyboard: false
        });
        modalRef.componentInstance.routedeviationData = routeDeviation;
    };
    RoutedeviationComponent.prototype.changePageSize = function () {
        this.getRouteeviation();
    };
    RoutedeviationComponent.prototype.pageChanged = function (event) {
        this.p = event;
        this.intilPageNumber = event - 1;
        this.getRouteeviation();
    };
    RoutedeviationComponent.prototype.applyFilters = function (parentForm) {
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
            this.getRouteeviation();
        }
    };
    RoutedeviationComponent.prototype.tripMapView = function (tripDetails) {
        this.router.navigate(['/trip/triptracking'], {
            queryParams: { tripId: tripDetails.tripId },
            queryParamsHandling: 'merge'
        });
    };
    RoutedeviationComponent.prototype.refreshPage = function () {
        this.intilPageNumber = 0;
        this.pageSize = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].pageSize;
        this.searchDate = '';
        this.searchText = '';
        this.districtId = '';
        this.cityId = '';
        this.getRouteeviation();
    };
    RoutedeviationComponent.prototype.getRouteeviation = function () {
        var _this = this;
        this.tripserviceApi.getRouteDeviationDetails(this.intilPageNumber, this.pageSize, this.searchDate, this.searchText, this.districtId, this.cityId, this.rtoId)
            .subscribe(function (_data) {
            _this.routeDeviationData = _data.content;
            _this.page = _data.page;
            _this.isDataExists = (_this.routeDeviationData.length > 0);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('validateCityDistrict'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _common_components_citydistrict_citydistrict_component__WEBPACK_IMPORTED_MODULE_4__["CitydistrictComponent"])
    ], RoutedeviationComponent.prototype, "CitydistrictComponent", void 0);
    RoutedeviationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-routedeviation',
            template: __webpack_require__(/*! ./routedeviation.component.html */ "./src/app/mainComponents/trip/routedeviation/routedeviation.component.html"),
            styles: [__webpack_require__(/*! ./routedeviation.component.sass */ "./src/app/mainComponents/trip/routedeviation/routedeviation.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_services_tripserviceapi__WEBPACK_IMPORTED_MODULE_5__["TripServiceApi"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RoutedeviationComponent);
    return RoutedeviationComponent;
}());



/***/ }),

/***/ "./src/app/mainComponents/trip/trip-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/mainComponents/trip/trip-routing.module.ts ***!
  \************************************************************/
/*! exports provided: TripRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripRoutingModule", function() { return TripRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _trip_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trip.component */ "./src/app/mainComponents/trip/trip.component.ts");
/* harmony import */ var _triptracking_triptracking_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./triptracking/triptracking.component */ "./src/app/mainComponents/trip/triptracking/triptracking.component.ts");
/* harmony import */ var _panicalerts_panicalerts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./panicalerts/panicalerts.component */ "./src/app/mainComponents/trip/panicalerts/panicalerts.component.ts");
/* harmony import */ var _routedeviation_routedeviation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routedeviation/routedeviation.component */ "./src/app/mainComponents/trip/routedeviation/routedeviation.component.ts");
/* harmony import */ var _videostreaming_videostreaming_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./videostreaming/videostreaming.component */ "./src/app/mainComponents/trip/videostreaming/videostreaming.component.ts");








var routes = [
    { path: '', component: _trip_component__WEBPACK_IMPORTED_MODULE_3__["TripComponent"], },
    { path: 'triptracking', component: _triptracking_triptracking_component__WEBPACK_IMPORTED_MODULE_4__["TriptrackingComponent"], },
    { path: 'panicalerts', component: _panicalerts_panicalerts_component__WEBPACK_IMPORTED_MODULE_5__["PanicalertsComponent"], },
    { path: 'routedeviation', component: _routedeviation_routedeviation_component__WEBPACK_IMPORTED_MODULE_6__["RoutedeviationComponent"], },
    { path: 'videostreaming', component: _videostreaming_videostreaming_component__WEBPACK_IMPORTED_MODULE_7__["VideostreamingComponent"], },
];
var TripRoutingModule = /** @class */ (function () {
    function TripRoutingModule() {
    }
    TripRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TripRoutingModule);
    return TripRoutingModule;
}());



/***/ }),

/***/ "./src/app/mainComponents/trip/trip.component.html":
/*!*********************************************************!*\
  !*** ./src/app/mainComponents/trip/trip.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container top-header p-b-3\">\n  <div class=\"row head-block no-gutters bdr-bottom m-b-3 p-t-1\">\n    <div class=\"col-md-6 p-l-0\">\n      <h4>Trip Details</h4>\n    </div>\n    <div class=\"col-md-5 text-right\">\n        <span class=\"btn-circle\"><i class=\"icon-ab_download\"></i></span>\n        <span class=\"btn-circle m-r-1\" (click)=\"refreshPage()\"><i class=\"icon-ab-refresh\"></i></span>\n      </div>\n    <div class=\"col-md-1 p-r-0 text-right\">\n      <div class=\"filters\">\n        <button type=\"button\" class=\"filters-button\" [ngClass]=\"{ 'active': showFilters}\" (click)=\"toggleFilters()\">\n          <i class=\"icon-ab-searchfilter\"></i>\n          <span>Filters</span>\n        </button>\n        <div class=\"filters-body \" *ngIf=\"showFilters\">\n          <div class=\"arrow-up\"></div>\n          <form name=\"form\" (ngSubmit)=\"f.form.valid && applyFilters(f)\" #f=\"ngForm\" novalidate>\n            <app-citydistrict #validateCityDistrict (isCityDistrictValid)=\"isCityDistrictValid($event)\"\n              [cityDistrictConfig]='cityDistrictConfig'></app-citydistrict>\n\n            <div class=\"form-group\">\n              <label>DATE</label>\n              <app-datepicker class=\"form-control bdr-none p-a-0\" name=\"searchDate\" [(ngModel)]=\"searchDate\"\n                #searchDatectrl=\"ngModel\" appForbiddenName=\"fred\"\n                [ngClass]=\"{ 'is-invalid': f.submitted && searchDatectrl.invalid }\"\n                [datePickerModel]=\"datePickerModel\" searchDatectrl>\n              </app-datepicker>\n              <div *ngIf=\"f.submitted && searchDatectrl.invalid\" class=\"invalid-feedback\">\n                <div *ngIf=\"searchDatectrl.errors.required\">Search Date is required</div>\n              </div>\n            </div>\n            <div class=\"form-group m-t-3\">\n              <button class=\"btn btn-primary w-100p\" type=\"submit\">Search</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-12 p-a-0 p-t-1\">\n      <nav aria-label=\"breadcrumb\">\n        <ol class=\"breadcrumb\">\n          <li class=\"breadcrumb-item\"><a class=\"text-abhaya\" [routerLink]=\"['/dashboard']\">Home</a></li>\n          <li class=\"breadcrumb-item active text-secondary\" aria-current=\"page\">Trip Details</li>\n        </ol>\n      </nav>\n    </div>\n  </div>\n  <div class=\"row no-gutters m-b-3\">\n      <div class=\"col-md-3  p-a-0\">\n          <div class=\"form-group w-88p abhaya-table-search\">\n            <i class=\"icon-ab-search\"></i>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchText\" (keydown.enter)=\"getTripDetails()\"\n              placeholder=\"Search Vehicle / IOT / Citizen Mobile.\">\n            <span class=\"separator\"> </span>\n          </div>\n        </div>\n        <div class=\"col-md-2 p-t-2\">\n            <span class=\"switch-text\">Show Closed Trips</span>\n            <label class=\"switch m-t-0 m-b-0\">\n                <input type=\"checkbox\" (click)=\"tripViewToggel()\">\n                <div class=\"slider round\">\n                  <!--ADDED HTML --><span class=\"off\"></span>\n                  <!--END-->\n                </div>\n             </label>\n          </div>\n    <div class=\"col-md-7 p-a-0 text-primary text-right p-t-2\">\n      Total Records : <h5 class=\"total-records-text d-inline-block\">{{page.totalElements}}</h5> <br />\n      <!-- <button class=\"btn btn-primary\" (click)=\"tripViewToggel(false)\">Open</button> || <button class=\"btn btn-primary\"\n        (click)=\"tripViewToggel(true)\">Closed</button> -->\n    </div>\n\n  </div>\n  <div class=\"row no-gutters pt-8\">\n    <table class=\"abhaya-table\">\n      <thead>\n        <tr>\n          <th>Trip ID</th>\n          <th>Citizen Mobile No</th>\n          <th>Vehicle Number</th>\n          <th>Serial Number</th>\n          <th>Request ID</th>\n          <th>Start Time</th>\n          <th>End Time</th>\n          <th>Source</th>\n          <th>Destination</th>\n          <th></th>\n        </tr>\n      </thead>\n      <tbody *ngIf=\"isDataExists\">\n        <tr\n          *ngFor=\"let tripDetails of tripDetails | paginate: { id: 'systemPropertiespage', itemsPerPage: page.size, currentPage: p, totalItems: page.totalElements }\">\n          <td>{{tripDetails.tripId}}</td>\n          <td>{{tripDetails.citizenMobileNumber}}</td>\n          <td>{{tripDetails.rcNumber}}</td>\n          <td>{{tripDetails.serialNumber}}</td>\n          <td>{{tripDetails.requestId}}</td>\n          <td>{{tripDetails.requestTime}}</td>\n          <td>{{tripDetails.closeTime}}</td>\n          <td>{{tripDetails.sourceLocation}}</td>\n          <td>{{tripDetails.destiLocation}}</td>\n          <td>\n            <a class=\"\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n              aria-expanded=\"false\"><i class=\"icon-ab_more\"></i></a>\n            <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdown\">\n              <div class=\"arrow-up\"></div>\n              <a (click)=\"edittrip(tripDetails)\" class=\"dropdown-item\">View Details</a>\n              <a (click)=\"tripMapView(tripDetails)\" class=\"dropdown-item\">Map View</a>\n            </div>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n    <app-nodata class=\"w-100p\" *ngIf=\"!isDataExists\" [noDataText]='noDataText'></app-nodata>\n    <!--Pagination-->\n    <div class=\"row w-100p m-t-5\">\n        <div *ngIf=\"isDataExists\" class=\"float-left p-t-1 page-size\">\n            <span>Page Size :</span>\n            <select (change)=\"changePageSize()\" [(ngModel)]=\"pageSize\">\n              <option *ngFor=\"let number of pageSizeValues\" value=\"{{number}}\">{{number}}</option>\n            </select>\n          </div>\n      <div *ngIf=\"isDataExists\" style=\"margin:0px auto;\">\n        <pagination-controls id=\"systemPropertiespage\" class=\"pagination float-right\" (pageChange)=\"pageChanged($event)\"\n          maxSize=\"6\" directionLinks=\"true\" autoHide=\"true\" responsive=\"true\" previousLabel=\"Prev\" nextLabel=\"Next\">\n        </pagination-controls>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/mainComponents/trip/trip.component.sass":
/*!*********************************************************!*\
  !*** ./src/app/mainComponents/trip/trip.component.sass ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW5Db21wb25lbnRzL3RyaXAvdHJpcC5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/mainComponents/trip/trip.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/mainComponents/trip/trip.component.ts ***!
  \*******************************************************/
/*! exports provided: TripComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripComponent", function() { return TripComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_common_models_page_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/models/page.model */ "./src/app/common/models/page.model.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _common_services_tripserviceapi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/services/tripserviceapi */ "./src/app/common/services/tripserviceapi.ts");
/* harmony import */ var _modalpopup_viewtripdetails_viewtripdetails_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modalpopup/viewtripdetails/viewtripdetails.component */ "./src/app/mainComponents/trip/modalpopup/viewtripdetails/viewtripdetails.component.ts");
/* harmony import */ var _common_components_citydistrict_citydistrict_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/components/citydistrict/citydistrict.component */ "./src/app/common/components/citydistrict/citydistrict.component.ts");









var TripComponent = /** @class */ (function () {
    function TripComponent(tripserviceApi, router, modalService) {
        this.tripserviceApi = tripserviceApi;
        this.router = router;
        this.modalService = modalService;
        this.pageSizeValues = [10, 50, 100, 200];
        this.pageSize = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].pageSize;
        this.intilPageNumber = 0;
        this.isDataExists = false;
        this.page = new src_app_common_models_page_model__WEBPACK_IMPORTED_MODULE_4__["PageModel"]();
        this.searchDate = '';
        this.searchText = '';
        this.districtId = '';
        this.cityId = '';
        this.rtoId = '';
        this.noDataText = 'No Trip Details Available';
        this.showFilters = false;
        this.isTripClosed = false;
    }
    TripComponent.prototype.isCityDistrictValid = function (formValid) {
        this.cityDistrictCompData = formValid;
    };
    TripComponent.prototype.ngOnInit = function () {
        this.getTripDetails();
    };
    TripComponent.prototype.toggleFilters = function () {
        this.showFilters = !this.showFilters;
    };
    TripComponent.prototype.applyFilters = function (parentForm) {
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
            this.getTripDetails();
        }
    };
    TripComponent.prototype.refreshPage = function () {
        this.intilPageNumber = 0;
        this.pageSize = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].pageSize;
        this.searchDate = '';
        this.searchText = '';
        this.districtId = '';
        this.cityId = '';
        this.getTripDetails();
    };
    TripComponent.prototype.getTripDetails = function () {
        var _this = this;
        this.tripserviceApi.getTripDetails(this.intilPageNumber, this.pageSize, this.searchDate, this.searchText, this.isTripClosed, this.districtId, this.cityId, this.rtoId)
            .subscribe(function (_data) {
            _this.tripDetails = _data.content;
            _this.page = _data.page;
            _this.isDataExists = (_this.tripDetails.length > 0);
        });
    };
    TripComponent.prototype.tripMapView = function (tripDetails) {
        this.router.navigate(['/trip/triptracking'], {
            queryParams: { tripId: tripDetails.tripId },
            queryParamsHandling: 'merge'
        });
    };
    TripComponent.prototype.changePageSize = function () {
        this.getTripDetails();
    };
    TripComponent.prototype.pageChanged = function (event) {
        this.p = event;
        this.intilPageNumber = event - 1;
        this.getTripDetails();
    };
    TripComponent.prototype.edittrip = function (trip) {
        var modalRef = this.modalService.open(_modalpopup_viewtripdetails_viewtripdetails_component__WEBPACK_IMPORTED_MODULE_7__["ViewtripdetailsComponent"], {
            size: 'lg', backdrop: 'static',
            keyboard: false
        });
        modalRef.componentInstance.selectedTripModel = trip;
    };
    TripComponent.prototype.tripViewToggel = function () {
        this.p = 1;
        this.isTripClosed = !this.isTripClosed;
        this.getTripDetails();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('validateCityDistrict'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _common_components_citydistrict_citydistrict_component__WEBPACK_IMPORTED_MODULE_8__["CitydistrictComponent"])
    ], TripComponent.prototype, "CitydistrictComponent", void 0);
    TripComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-trip',
            template: __webpack_require__(/*! ./trip.component.html */ "./src/app/mainComponents/trip/trip.component.html"),
            styles: [__webpack_require__(/*! ./trip.component.sass */ "./src/app/mainComponents/trip/trip.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_services_tripserviceapi__WEBPACK_IMPORTED_MODULE_6__["TripServiceApi"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]])
    ], TripComponent);
    return TripComponent;
}());



/***/ }),

/***/ "./src/app/mainComponents/trip/trip.module.ts":
/*!****************************************************!*\
  !*** ./src/app/mainComponents/trip/trip.module.ts ***!
  \****************************************************/
/*! exports provided: TripModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripModule", function() { return TripModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var agm_direction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! agm-direction */ "./node_modules/agm-direction/fesm5/agm-direction.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/core.module */ "./src/app/mainComponents/core/core.module.ts");
/* harmony import */ var _trip_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./trip.component */ "./src/app/mainComponents/trip/trip.component.ts");
/* harmony import */ var _trip_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./trip-routing.module */ "./src/app/mainComponents/trip/trip-routing.module.ts");
/* harmony import */ var _triptracking_triptracking_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./triptracking/triptracking.component */ "./src/app/mainComponents/trip/triptracking/triptracking.component.ts");
/* harmony import */ var _panicalerts_panicalerts_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./panicalerts/panicalerts.component */ "./src/app/mainComponents/trip/panicalerts/panicalerts.component.ts");
/* harmony import */ var _routedeviation_routedeviation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./routedeviation/routedeviation.component */ "./src/app/mainComponents/trip/routedeviation/routedeviation.component.ts");
/* harmony import */ var _videostreaming_videostreaming_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./videostreaming/videostreaming.component */ "./src/app/mainComponents/trip/videostreaming/videostreaming.component.ts");
/* harmony import */ var _modalpopup_viewpanic_details_viewpanic_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modalpopup/viewpanic-details/viewpanic-details.component */ "./src/app/mainComponents/trip/modalpopup/viewpanic-details/viewpanic-details.component.ts");
/* harmony import */ var _modalpopup_viewroutedeviation_viewroutedeviation_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modalpopup/viewroutedeviation/viewroutedeviation.component */ "./src/app/mainComponents/trip/modalpopup/viewroutedeviation/viewroutedeviation.component.ts");
/* harmony import */ var _modalpopup_viewtripdetails_viewtripdetails_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modalpopup/viewtripdetails/viewtripdetails.component */ "./src/app/mainComponents/trip/modalpopup/viewtripdetails/viewtripdetails.component.ts");


















var TripModule = /** @class */ (function () {
    function TripModule() {
    }
    TripModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_trip_component__WEBPACK_IMPORTED_MODULE_9__["TripComponent"],
                _triptracking_triptracking_component__WEBPACK_IMPORTED_MODULE_11__["TriptrackingComponent"],
                _panicalerts_panicalerts_component__WEBPACK_IMPORTED_MODULE_12__["PanicalertsComponent"],
                _routedeviation_routedeviation_component__WEBPACK_IMPORTED_MODULE_13__["RoutedeviationComponent"],
                _videostreaming_videostreaming_component__WEBPACK_IMPORTED_MODULE_14__["VideostreamingComponent"],
                _modalpopup_viewpanic_details_viewpanic_details_component__WEBPACK_IMPORTED_MODULE_15__["ViewpanicDetailsComponent"],
                _modalpopup_viewroutedeviation_viewroutedeviation_component__WEBPACK_IMPORTED_MODULE_16__["ViewroutedeviationComponent"],
                _modalpopup_viewtripdetails_viewtripdetails_component__WEBPACK_IMPORTED_MODULE_17__["ViewtripdetailsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _trip_routing_module__WEBPACK_IMPORTED_MODULE_10__["TripRoutingModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_3__["AgmCoreModule"],
                agm_direction__WEBPACK_IMPORTED_MODULE_4__["AgmDirectionModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["NgxPaginationModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_8__["CoreModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"]
            ],
            entryComponents: [
                _modalpopup_viewpanic_details_viewpanic_details_component__WEBPACK_IMPORTED_MODULE_15__["ViewpanicDetailsComponent"],
                _modalpopup_viewroutedeviation_viewroutedeviation_component__WEBPACK_IMPORTED_MODULE_16__["ViewroutedeviationComponent"],
                _modalpopup_viewtripdetails_viewtripdetails_component__WEBPACK_IMPORTED_MODULE_17__["ViewtripdetailsComponent"]
            ],
        })
    ], TripModule);
    return TripModule;
}());



/***/ }),

/***/ "./src/app/mainComponents/trip/triptracking/triptracking.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/mainComponents/trip/triptracking/triptracking.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container top-header p-b-3\">\n  <div class=\"row head-block no-gutters bdr-bottom m-b-3 p-t-1\">\n    <div class=\"col-md-5 p-l-0\">\n      <h4>Trip Tracking</h4>\n    </div>\n    <div class=\"col-md-7 p-r-0 text-right\">\n\n    </div>\n    <div class=\"col-md-12 p-a-0 p-t-1\">\n      <nav aria-label=\"breadcrumb\">\n        <ol class=\"breadcrumb\">\n          <li class=\"breadcrumb-item\"><a class=\"text-abhaya\" [routerLink]=\"['/dashboard']\">Home</a></li>\n          <li class=\"breadcrumb-item active text-secondary\" aria-current=\"page\">Trip Tracking</li>\n        </ol>\n      </nav>\n    </div>\n  </div>\n  <div class=\"trip-tracking\" *ngIf=\"isDataExists\">\n    <!-- <div class=\"trip-tracking-vehicle\">\n      <div class=\"vehicle\">\n        <div class=\"vehicle-block-left\">\n          <img src=\"assets/images/ic_VehDevicemap.svg\">\n        </div>\n        <div class=\"vehicle-block-right\">\n          <h6>\n            Vehicle No\n          </h6>\n          <h5>\n            AP30A5994\n          </h5>\n        </div>\n      </div>\n      <div class=\"vehicle\">\n          <div class=\"vehicle-block-left\">\n            <img src=\"assets/images/ic_VehDevicemap.svg\">\n          </div>\n          <div class=\"vehicle-block-right\">\n            <h6>\n              Vehicle No\n            </h6>\n            <h5>\n              AP30A5994\n            </h5>\n          </div>\n        </div>\n        <div class=\"vehicle\">\n            <div class=\"vehicle-block-left\">\n              <img src=\"assets/images/ic_VehDevicemap.svg\">\n            </div>\n            <div class=\"vehicle-block-right\">\n              <h6>\n                Vehicle No\n              </h6>\n              <h5>\n                AP30A5994\n              </h5>\n            </div>\n          </div>\n          <div class=\"vehicle\">\n              <div class=\"vehicle-block-left\">\n                <img src=\"assets/images/ic_VehDevicemap.svg\">\n              </div>\n              <div class=\"vehicle-block-right\">\n                <h6>\n                  Vehicle No\n                </h6>\n                <h5>\n                  AP30A5994\n                </h5>\n              </div>\n            </div>\n            <div class=\"vehicle\">\n                <div class=\"vehicle-block-left\">\n                  <img src=\"assets/images/ic_VehDevicemap.svg\">\n                </div>\n                <div class=\"vehicle-block-right\">\n                  <h6>\n                    Vehicle No\n                  </h6>\n                  <h5>\n                    AP30A5994\n                  </h5>\n                </div>\n              </div>\n              <div class=\"vehicle\">\n                  <div class=\"vehicle-block-left\">\n                    <img src=\"assets/images/ic_VehDevicemap.svg\">\n                  </div>\n                  <div class=\"vehicle-block-right\">\n                    <h6>\n                      Vehicle No\n                    </h6>\n                    <h5>\n                      AP30A5994\n                    </h5>\n                  </div>\n                </div>\n    </div> -->\n    <div class=\"trip-tracking-left\">\n      <h5>Trip Details</h5>\n      <div class=\"trip-tracking-left-content\">\n        <h6>Citizen Mobile Number :</h6>\n        <h4>{{tripDetails.citizenMobileNumber}}</h4>\n      </div>\n      <div class=\"trip-tracking-left-content p-t-1\">\n        <h6>Source :</h6>\n        <h4>{{tripDetails.sourceLocation}}</h4>\n      </div>\n      <div class=\"trip-tracking-left-content p-t-1\">\n        <h6>Destination :</h6>\n        <h4>{{tripDetails.destiLocation}}</h4>\n      </div>\n      <div class=\"trip-driver p-t-3\">\n        <ul>\n          <li  [ngClass]=\"{ 'active': isDriverDetails}\" >\n            <a (click)=\"changeView(true)\">\n              Driver Details\n            </a>\n          </li>\n          <li  [ngClass]=\"{ 'active': !isDriverDetails}\" >\n            <a (click)=\"changeView(false)\">\n              Vehicle Details\n            </a>\n          </li>\n        </ul>\n        <div class=\"trip-driver-details\" *ngIf=\"isDriverDetails\">\n          <div class=\"trip-driver-details-left\">\n            <img src=\"assets/images/ic_driverduty.svg\" />\n          </div>\n          <div class=\"trip-driver-details-right\">\n            <div class=\"trip-driver-details-right-content p-a-0\">\n              <h6>Driver Name :</h6>\n              <h4>{{tripDetails.driverName}}</h4>\n            </div>\n            <div class=\"trip-driver-details-right-content p-a-0\">\n              <h6>DL Number :</h6>\n              <h4>{{tripDetails.dlNumber}}</h4>\n            </div>\n            <div class=\"trip-driver-details-right-content p-a-0\">\n              <h6>Driver Mobile No :</h6>\n              <h4>{{tripDetails.driverContactNumber}}</h4>\n            </div>\n          </div>\n        </div>\n        <div class=\"trip-driver-details\" *ngIf=\"!isDriverDetails\">\n          <div class=\"trip-driver-details-left\">\n            <img src=\"assets/images/ic_driverduty.svg\" />\n          </div>\n          <div class=\"trip-driver-details-right\">\n            <div class=\"trip-driver-details-right-content p-a-0\">\n              <h6>Owner Name :</h6>\n              <h4>{{tripDetails.ownerName}}</h4>\n            </div>\n            <div class=\"trip-driver-details-right-content p-a-0\">\n              <h6>Owner Mobile No :</h6>\n              <h4>{{tripDetails.ownerContactNumber}}</h4>\n            </div>\n            <div class=\"trip-driver-details-right-content p-a-0\">\n              <h6>Address :</h6>\n              <h4>{{tripDetails.vehicleAddress}}</h4>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"trip-tracking-right\">\n      <!-- <agm-map [latitude]=\"lat\" [longitude]=\"lng\">\n        <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n      </agm-map> -->\n      <iframe [src]=\"url\" class=\"map-frame\"></iframe>\n    </div>\n  </div>\n\n\n  <app-nodata class=\"w-100p\" *ngIf=\"!isDataExists\" [noDataText]='noDataText'></app-nodata>\n\n\n</div>"

/***/ }),

/***/ "./src/app/mainComponents/trip/triptracking/triptracking.component.sass":
/*!******************************************************************************!*\
  !*** ./src/app/mainComponents/trip/triptracking/triptracking.component.sass ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW5Db21wb25lbnRzL3RyaXAvdHJpcHRyYWNraW5nL3RyaXB0cmFja2luZy5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/mainComponents/trip/triptracking/triptracking.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/mainComponents/trip/triptracking/triptracking.component.ts ***!
  \****************************************************************************/
/*! exports provided: TriptrackingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TriptrackingComponent", function() { return TriptrackingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _common_services_tripserviceapi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/services/tripserviceapi */ "./src/app/common/services/tripserviceapi.ts");






var TriptrackingComponent = /** @class */ (function () {
    function TriptrackingComponent(activatedRoute, sanitizer, tripserviceApi) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.sanitizer = sanitizer;
        this.tripserviceApi = tripserviceApi;
        this.noDataText = 'No Trip Details Available';
        this.isDataExists = false;
        this.isDriverDetails = true;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.tripId = params['tripId'] !== undefined ? params['tripId'] : '';
        });
    }
    TriptrackingComponent.prototype.ngOnInit = function () {
        if (this.tripId !== '') {
            this.getTripDetails();
        }
        var dynamicUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiBase + "/triptracking.html";
        dynamicUrl = (this.tripId !== '') ? dynamicUrl + "?tripId=" + this.tripId : dynamicUrl;
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(dynamicUrl);
    };
    TriptrackingComponent.prototype.getTripDetails = function () {
        var _this = this;
        this.tripserviceApi.getTripTracking(this.tripId)
            .subscribe(function (_data) {
            _this.tripDetails = _data.content[0];
            _this.isDataExists = (_data.content.length > 0);
        });
    };
    TriptrackingComponent.prototype.changeView = function (value) {
        this.isDriverDetails = value;
    };
    TriptrackingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-triptracking',
            template: __webpack_require__(/*! ./triptracking.component.html */ "./src/app/mainComponents/trip/triptracking/triptracking.component.html"),
            styles: [__webpack_require__(/*! ./triptracking.component.sass */ "./src/app/mainComponents/trip/triptracking/triptracking.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"], _common_services_tripserviceapi__WEBPACK_IMPORTED_MODULE_5__["TripServiceApi"]])
    ], TriptrackingComponent);
    return TriptrackingComponent;
}());



/***/ }),

/***/ "./src/app/mainComponents/trip/videostreaming/videostreaming.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/mainComponents/trip/videostreaming/videostreaming.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container top-header\">\n  <h1>Video Streaming</h1>\n</div>"

/***/ }),

/***/ "./src/app/mainComponents/trip/videostreaming/videostreaming.component.sass":
/*!**********************************************************************************!*\
  !*** ./src/app/mainComponents/trip/videostreaming/videostreaming.component.sass ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW5Db21wb25lbnRzL3RyaXAvdmlkZW9zdHJlYW1pbmcvdmlkZW9zdHJlYW1pbmcuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/mainComponents/trip/videostreaming/videostreaming.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/mainComponents/trip/videostreaming/videostreaming.component.ts ***!
  \********************************************************************************/
/*! exports provided: VideostreamingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideostreamingComponent", function() { return VideostreamingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VideostreamingComponent = /** @class */ (function () {
    function VideostreamingComponent() {
    }
    VideostreamingComponent.prototype.ngOnInit = function () {
    };
    VideostreamingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-videostreaming',
            template: __webpack_require__(/*! ./videostreaming.component.html */ "./src/app/mainComponents/trip/videostreaming/videostreaming.component.html"),
            styles: [__webpack_require__(/*! ./videostreaming.component.sass */ "./src/app/mainComponents/trip/videostreaming/videostreaming.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VideostreamingComponent);
    return VideostreamingComponent;
}());



/***/ })

}]);
//# sourceMappingURL=trip-trip-module.js.map