import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EmergencyModel } from "../../../../common/models/emergencymonitoring.model";

@Component({
  selector: 'app-editviewemergency',
  templateUrl: './editviewemergency.component.html',
  styleUrls: ['./editviewemergency.component.sass']
})
export class EditviewemergencyComponent implements OnInit {

  @Input() selectedEmergencydata: EmergencyModel;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
