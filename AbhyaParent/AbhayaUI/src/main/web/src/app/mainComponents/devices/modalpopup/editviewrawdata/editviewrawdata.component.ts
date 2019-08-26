import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RawData } from "../../../../common/models/rawdata.model";

@Component({
  selector: 'app-editviewrawdata',
  templateUrl: './editviewrawdata.component.html',
  styleUrls: ['./editviewrawdata.component.sass']
})
export class EditviewrawdataComponent implements OnInit {

  @Input() selectedrawdata: RawData;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}