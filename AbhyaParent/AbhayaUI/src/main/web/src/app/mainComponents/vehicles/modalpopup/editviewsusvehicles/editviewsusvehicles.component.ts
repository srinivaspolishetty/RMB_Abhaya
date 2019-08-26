import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { suspiciousVehiclesModel } from 'src/app/common/models/suspicious-vehicles-model';

@Component({
  selector: 'app-editviewsusvehicles',
  templateUrl: './editviewsusvehicles.component.html',
  styleUrls: ['./editviewsusvehicles.component.sass']
})
export class EditviewsusvehiclesComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }
  @Input() selectedVehicle : suspiciousVehiclesModel;

  ngOnInit() {
  }

}
