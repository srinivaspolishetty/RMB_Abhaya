import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CityDristict } from "../././../../common/models/citydristict.model";
import { Router, ActivatedRoute } from '@angular/router';

import { CitydistrictComponent } from "../../../common/components/citydistrict/citydistrict.component";
import { TripServiceApi } from '../../../common/services/tripserviceapi';
import { PageModel } from "../../../common/models/page.model";
import { environment } from '.././../../../environments/environment';
import { DatePickerModel } from '../../../common/models/date-picker-model.model';
import { PaginationModel } from "../../../common/models/pagination.model";
import { RouteDeviation } from "../../../common/models/routedeviation.model";
import { ViewroutedeviationComponent } from "../modalpopup/viewroutedeviation/viewroutedeviation.component";

@Component({
  selector: 'app-routedeviation',
  templateUrl: './routedeviation.component.html',
  styleUrls: ['./routedeviation.component.sass']
})
export class RoutedeviationComponent implements OnInit {
  cityDistrictConfig: CityDristict;
  cityDistrictCompData: any;
  parentFormSubmitted: boolean;
  showFilters: boolean = false;
  routeDeviationData: Array<RouteDeviation>;
  searchText: string = '';
  page: PageModel = new PageModel();
  isDataExists: Boolean = false;
  pageSizeValues: Array<number> = environment.pageSizeValues;
  pageSize: Number = environment.pageSize;
  intilPageNumber: Number = 0;
  p: Number;
  datePickerModel: DatePickerModel;
  searchDate: string = '';
  districtId: string = '';
  cityId: string = '';
  rtoId: string = '';
  noDataText: string = 'No Route Deviation Data Available';
  @ViewChild('validateCityDistrict') private CitydistrictComponent: CitydistrictComponent;
  private isCityDistrictValid(formValid: any) {
    this.cityDistrictCompData = formValid;
  }
  constructor(private tripserviceApi: TripServiceApi, private modalService: NgbModal,
    private router: Router) { }

  ngOnInit() {
    this.getRouteeviation();
  }

  toggleFilters() {
    this.showFilters = !this.showFilters;
  }

  viewDetails(routeDeviation) {
    const modalRef = this.modalService.open(ViewroutedeviationComponent, {
      size: 'lg', backdrop: 'static',
      keyboard: false
    });
    modalRef.componentInstance.routedeviationData = routeDeviation;
  }
  changePageSize() {
    this.getRouteeviation();
  }
  pageChanged(event) {
    this.p = event;
    this.intilPageNumber = event - 1;
    this.getRouteeviation();
  }

  applyFilters(parentForm) {
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

  }
  tripMapView(tripDetails){
    this.router.navigate(['/trip/triptracking'],
      {
        queryParams: { tripId: tripDetails.tripId },
        queryParamsHandling: 'merge'
      })
  }
  refreshPage(){
    this.intilPageNumber = 0;
    this.pageSize = environment.pageSize;
    this.searchDate = '';
    this.searchText = '';
    this.districtId = '';
    this.cityId = '';
    this.getRouteeviation();
  }

  getRouteeviation() {
    this.tripserviceApi.getRouteDeviationDetails(this.intilPageNumber, this.pageSize, this.searchDate, this.searchText, this.districtId, this.cityId, this.rtoId)
      .subscribe((_data: PaginationModel) => {
        this.routeDeviationData = _data.content;
        this.page = _data.page;
        this.isDataExists = (this.routeDeviationData.length > 0);
      });
  }

}