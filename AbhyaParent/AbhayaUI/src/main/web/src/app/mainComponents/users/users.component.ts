import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CityDristict } from "././../../common/models/citydristict.model";

import { CitydistrictComponent } from "../../common/components/citydistrict/citydistrict.component";
import { UserServiceApi } from "../../common/services/userserviceapi";
import { PageModel } from "../../common/models/page.model";
import { environment } from './../../../environments/environment';
import { DatePickerModel } from '../../common/models/date-picker-model.model';
import { UserComponent } from "./modalpopup/user/user.component";
import { UserDetails } from "../../common/models/userdetails.model";
import { PaginationModel } from "../../common/models/pagination.model";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {
  cityDistrictConfig: CityDristict;
  cityDistrictCompData: any;
  parentFormSubmitted: boolean;
  showFilters: boolean = false;
  userData : Array<UserDetails>;
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
  noDataText: string = "No User Details Available";
  @ViewChild('validateCityDistrict') private CitydistrictComponent: CitydistrictComponent;
  private isCityDistrictValid(formValid: any) {
    this.cityDistrictCompData = formValid;
  }
  constructor(private usersapi: UserServiceApi, private modalService: NgbModal) { }

  ngOnInit() {
    this.getUsers();
  }

  toggleFilters() {
    this.showFilters = !this.showFilters;
  }

  editViewUser(selectedUser :UserDetails ) {
    const modalRef = this.modalService.open(UserComponent, {
      size: 'lg', backdrop: 'static',
      keyboard: false
    });
    modalRef.componentInstance.selectedUserData = selectedUser;
  }

  changePageSize() {
    this.getUsers();
  }
  pageChanged(event) {
    this.p = event;
    this.intilPageNumber = event - 1;
    this.getUsers();
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
      this.getUsers();
    }

  }

  getUsers() {
    this.usersapi.getAllUsers(this.intilPageNumber, this.pageSize, this.searchDate, this.searchText, this.districtId, this.cityId, this.rtoId)
      .subscribe((_data: PaginationModel) => {
        this.userData = _data.content;
        this.page = _data.page;
        this.isDataExists = (this.userData.length > 0);
      });
  }

}