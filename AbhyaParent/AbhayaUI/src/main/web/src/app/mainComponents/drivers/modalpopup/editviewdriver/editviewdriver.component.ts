import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { driversModel } from "../../../../common/models/drivers-model";

@Component({
  selector: 'app-editviewdriver',
  templateUrl: './editviewdriver.component.html',
  styleUrls: ['./editviewdriver.component.sass']
})
export class EditviewdriverComponent implements OnInit {

  @Input() selectedDriverDetails : driversModel;
  driverImage: string;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.driverImage = 'data:image/jpeg;base64,' + this.selectedDriverDetails.image;
  }

}