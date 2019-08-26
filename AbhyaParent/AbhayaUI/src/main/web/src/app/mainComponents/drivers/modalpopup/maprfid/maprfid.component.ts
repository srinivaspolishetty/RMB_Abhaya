import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { driversModel } from "../../../../common/models/drivers-model";
import { DriversService } from '../../../../common/services/driversServiceApi';

@Component({
  selector: 'app-maprfid',
  templateUrl: './maprfid.component.html',
  styleUrls: ['./maprfid.component.sass']
})
export class MaprfidComponent implements OnInit {

  @Input() selectedDriverDetails : driversModel;
  driverDetails : driversModel;
  driverImage: string;
  constructor(public activeModal: NgbActiveModal,
    private driversApi: DriversService) { }

  ngOnInit() {

  }
  mapRfId(){
    console.log(this.selectedDriverDetails);
    this.driversApi.editDriverDetails(JSON.stringify(this.selectedDriverDetails))
    .subscribe((data) =>{
      console.log(data);
    });
  }
}