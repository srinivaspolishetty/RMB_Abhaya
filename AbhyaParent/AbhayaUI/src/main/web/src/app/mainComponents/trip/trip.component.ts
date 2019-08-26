import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
import { PageModel } from 'src/app/common/models/page.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TripServiceApi } from '../../common/services/tripserviceapi';
import { TripModel } from '../../common/models/trip.model';
import { ViewtripdetailsComponent } from "./modalpopup/viewtripdetails/viewtripdetails.component";
import { CitydistrictComponent } from "../../common/components/citydistrict/citydistrict.component";

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.sass']
})
export class TripComponent implements OnInit {

  tripDetails : Array<TripModel>;
  pageSizeValues = [10, 50, 100, 200];
  pageSize: Number = environment.pageSize;
  intilPageNumber: Number = 0;
  isDataExists: Boolean = false;
  page: PageModel = new PageModel();
  searchDate: string = '';
  searchText: string = '';
  p: Number;
  districtId: string = '';
  cityId: string = '';
  rtoId: string = '';
  parentFormSubmitted: boolean;
  cityDistrictCompData : any;
  noDataText : string = 'No Trip Details Available';
  showFilters: boolean = false;
  isTripClosed: Boolean = false;

  @ViewChild('validateCityDistrict') private CitydistrictComponent: CitydistrictComponent;
  private isCityDistrictValid(formValid: any) {
    this.cityDistrictCompData = formValid;
  }

  constructor(private tripserviceApi : TripServiceApi, private router: Router, private modalService: NgbModal ) { }
  ngOnInit() {
    this.getTripDetails();
  }
  toggleFilters() {
    this.showFilters = !this.showFilters;
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
      this.getTripDetails();
    }
    
  }
  refreshPage(){
    this.intilPageNumber = 0;
    this.pageSize = environment.pageSize;
    this.searchDate = '';
    this.searchText = '';
    this.districtId = '';
    this.cityId = '';
    this.getTripDetails();
  }
  getTripDetails() {
    this.tripserviceApi.getTripDetails(this.intilPageNumber, this.pageSize, this.searchDate, this.searchText, this.isTripClosed, this.districtId, this.cityId, this.rtoId)
      .subscribe((_data: any) => {
        this.tripDetails = _data.content;
        this.page = _data.page;
        this.isDataExists = (this.tripDetails.length > 0);
      });
  }

  tripMapView(tripDetails){
    this.router.navigate(['/trip/triptracking'],
      {
        queryParams: { tripId: tripDetails.tripId },
        queryParamsHandling: 'merge'
      })
  }
  changePageSize() {
    this.getTripDetails();
  }

  pageChanged(event) {
    this.p = event;
    this.intilPageNumber = event - 1;
    this.getTripDetails();
  }

  edittrip(trip:TripModel){
    const modalRef = this.modalService.open(ViewtripdetailsComponent, {
      size: 'lg', backdrop: 'static',
      keyboard: false
  });
  modalRef.componentInstance.selectedTripModel = trip;
  }
  tripViewToggel(){
    this.p = 1;
    this.isTripClosed = !this.isTripClosed;
    this.getTripDetails();
  }
}
