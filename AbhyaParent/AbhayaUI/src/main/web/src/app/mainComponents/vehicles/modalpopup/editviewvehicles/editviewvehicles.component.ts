import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { vehiclesModel } from "../../../../common/models/vehicles.model";

@Component({
  selector: 'app-editviewvehicles',
  templateUrl: './editviewvehicles.component.html',
  styleUrls: ['./editviewvehicles.component.sass']
})
export class EditviewvehiclesComponent implements OnInit {

  @Input() selectedVehicleDetails : vehiclesModel;
  ownerDetailsOwnerImage: string;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.ownerDetailsOwnerImage = 'data:image/jpeg;base64,' + this.selectedVehicleDetails.ownerDetailsOwnerImage;
  }

}
