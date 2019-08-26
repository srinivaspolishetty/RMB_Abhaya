import { Component, OnInit } from '@angular/core';
import { CommandManagementService } from '../../../common/services/commandmanagementserviceapi';
import { PaginationModel } from '../../../common/models/pagination.model';
import { DatePickerModel } from '../../../common/models/date-picker-model.model';
import { PageModel } from 'src/app/common/models/page.model';
import { environment } from 'src/environments/environment';
import {CommandManagement} from '../../../common/models/commandmanagement.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditviewcommhistoryComponent } from '../modalpopup/editviewcommhistory/editviewcommhistory.component';

@Component({
  selector: 'app-commandhistory',
  templateUrl: './commandhistory.component.html',
  styleUrls: ['./commandhistory.component.sass']
})
export class CommandhistoryComponent implements OnInit {

  constructor(private commandApi: CommandManagementService, private modalService: NgbModal) { }
  commandListData : Array<CommandManagement>;
  public isDataExists: Boolean = false;
  datePickerModel: DatePickerModel;
  public page: PageModel = new PageModel();
  noDataText: string = "No Command History Details Available";
  pageSizeValues: Array<number> = environment.pageSizeValues;
  public intilPageNumber: Number = 0;
  showFilters: boolean = false;
  public p: Number;
  public searchDate : string = '';
  searchText : string = '';
  public pageSize: Number = environment.pageSize;

  ngOnInit() {
    this.getCommandDetails();
  }
  toggleFilters() {
    this.showFilters = !this.showFilters;
  }

  applyFilters(parentForm) {
      this.getCommandDetails();
  }
   refreshPage(){
    this.intilPageNumber = 0;
    this.pageSize = environment.pageSize;
    this.searchText = '';
    this.searchDate = '';
    this.getCommandDetails();
  }
  getCommandDetails() {
    this.commandApi.getCommandList(this.intilPageNumber, this.pageSize, this.searchDate, this.searchText)
        .subscribe((data: PaginationModel) => {
            this.commandListData = data.content;
            this.isDataExists = (this.commandListData.length > 0);
            this.page = data.page;
        });
  }

  changePageSize() {
    this.getCommandDetails();
  }
  pageChanged(event) {
    this.p = event;
    this.intilPageNumber = event - 1;
    this.getCommandDetails();
  }

  editviewCommand(commandList : CommandManagement){
    const modalRef = this.modalService.open(EditviewcommhistoryComponent, {
      size: 'lg', backdrop: 'static',
      keyboard: false
    });
    modalRef.componentInstance.selectedCommandDetails = commandList;
  }

  getCommHistoryDetails(){
    console.log('testing');
  }
}
