import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Validations } from "../../constants/validationconstants";


@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.sass']
})
export class AutocompleteComponent implements OnInit {

  public searchValue: string;  
  validations: any = Validations;
  @Input() masterArray : string[];
  
  constructor() { 
    this.searchValue = '';    
  }

  ngOnInit() {}

  @Output() acSearch: EventEmitter<string> = new EventEmitter<string>();
  @Output() searchData: EventEmitter<string> = new EventEmitter<string>();

  autocompleteData(searchValue:any) {
    this.acSearch.emit(searchValue);
  }

  searchFileterData(searchValue:any){
    this.searchData.emit(searchValue);
  }


}
