import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { driversModel } from "../../../../common/models/drivers-model";
import { RouteDeviation } from "../../../../common/models/routedeviation.model";
@Component({
  selector: 'app-viewroutedeviation',
  templateUrl: './viewroutedeviation.component.html',
  styleUrls: ['./viewroutedeviation.component.sass']
})
export class ViewroutedeviationComponent implements OnInit {

  @Input() routedeviationData : RouteDeviation;
  driverImage: string;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}