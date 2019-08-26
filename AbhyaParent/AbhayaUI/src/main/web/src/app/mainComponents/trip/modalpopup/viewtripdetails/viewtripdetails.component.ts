import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TripModel } from "../../../../common/models/trip.model";

@Component({
  selector: 'app-viewtripdetails',
  templateUrl: './viewtripdetails.component.html',
  styleUrls: ['./viewtripdetails.component.sass']
})
export class ViewtripdetailsComponent implements OnInit {
  @Input() selectedTripModel : TripModel;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    console.log(this.selectedTripModel)
  }

}
