import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { driversModel } from "../../../../common/models/drivers-model";
import { PanicAlert } from "../../../../common/models/panic.model";

@Component({
  selector: 'app-viewpanic-details',
  templateUrl: './viewpanic-details.component.html',
  styleUrls: ['./viewpanic-details.component.sass']
})
export class ViewpanicDetailsComponent implements OnInit {

  @Input() selectedPanicDetails : PanicAlert;
  driverImage: string;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}