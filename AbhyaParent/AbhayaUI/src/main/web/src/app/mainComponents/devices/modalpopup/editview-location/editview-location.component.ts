import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LocationModel } from "../../../../common/models/locationmonitoring.model";

@Component({
  selector: 'app-editview-location',
  templateUrl: './editview-location.component.html',
  styleUrls: ['./editview-location.component.sass']
})
export class EditviewLocationComponent implements OnInit {

  @Input() selectedLocationDetails: LocationModel;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}