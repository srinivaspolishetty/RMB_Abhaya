import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { CityDristict } from "../././../../common/models/citydristict.model";

import { CitydistrictComponent } from "../../../common/components/citydistrict/citydistrict.component";
import { TripServiceApi } from '../../../common/services/tripserviceapi';
import { PageModel } from "../../../common/models/page.model";
import { environment } from '.././../../../environments/environment';
import { DatePickerModel } from '../../../common/models/date-picker-model.model';
import { PaginationModel } from "../../../common/models/pagination.model";
import { PanicAlert } from "../../../common/models/panic.model";
import { ViewpanicDetailsComponent } from "../modalpopup/viewpanic-details/viewpanic-details.component";

@Component({
  selector: 'app-panicalerts',
  templateUrl: './panicalerts.component.html',
  styleUrls: ['./panicalerts.component.sass']
})
export class PanicalertsComponent implements OnInit {
  cityDistrictConfig: CityDristict;
  cityDistrictCompData: any;
  parentFormSubmitted: boolean;
  showFilters: boolean = false;
  panicData: Array<PanicAlert>;
  devicePanicData: Array<PanicAlert>;
  totalPanicData: Array<PanicAlert>;
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
  panicType: string;
  noDataText: string = "No Panic Data Available";
  panicSource: string = 'WEB';
  panicClosed: boolean = false;
  @ViewChild('validateCityDistrict') private CitydistrictComponent: CitydistrictComponent;
  private isCityDistrictValid(formValid: any) {
    this.cityDistrictCompData = formValid;
  }
  constructor(private tripserviceApi: TripServiceApi, private modalService: NgbModal,
    private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.panicType = params['panicType'] !== undefined ? params['panicType'] : '';
    })
  }

  ngOnInit() {
    console.log(this.panicType);
    if (this.panicType !== '') {
      this.getselectedpanic(this.panicType);
    }
    else {
      this.getPanicData();
    }
  }

  toggleFilters() {
    this.showFilters = !this.showFilters;
  }

  viewDetails(selectedPanic) {
    const modalRef = this.modalService.open(ViewpanicDetailsComponent, {
      size: 'lg', backdrop: 'static',
      keyboard: false
    });
    modalRef.componentInstance.selectedPanicDetails = selectedPanic;
  }
  changePageSize() {
    this.getPanicData();
  }
  pageChanged(event) {
    this.p = event;
    this.intilPageNumber = event - 1;
    this.getPanicData();
  }

  tripMapView(tripDetails) {
    this.router.navigate(['/trip/triptracking'],
      {
        queryParams: { tripId: tripDetails.tripId },
        queryParamsHandling: 'merge'
      })
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
      this.getPanicData();
    }

  }
  refreshPage() {
    this.intilPageNumber = 0;
    this.pageSize = environment.pageSize;
    this.panicSource = 'WEB';
    this.searchDate = '';
    this.searchText = '';
    this.getPanicData();
  }
  panicViewToggle() {
    this.p = 1;
    this.panicClosed = !this.panicClosed;
    this.getPanicData();
  }


  getselectedpanic(panicSource) {
    this.intilPageNumber = 0;
    this.panicSource = panicSource;
    this.getPanicData();
  }

  getPanicData() {
    if (this.panicSource == 'DEVICE') {
      this.tripserviceApi.getDevicePanic(this.intilPageNumber, this.pageSize, this.searchDate, this.searchText, this.panicClosed, this.districtId, this.cityId, this.rtoId)
        .subscribe((_data: PaginationModel) => {
          this.panicData = _data.content;
          this.page = _data.page;
          this.isDataExists = (this.panicData.length > 0);
          console.log(this.panicData);
        });
    }
    else {
      this.tripserviceApi.getPanicDetails(this.intilPageNumber, this.pageSize, this.searchDate, this.searchText, this.panicSource, this.panicClosed, this.districtId, this.cityId, this.rtoId)
        .subscribe((_data: PaginationModel) => {
          this.panicData = _data.content;
          this.page = _data.page;
          this.isDataExists = (this.panicData.length > 0);
          console.log(this.panicData);
        });
    }
  }

}