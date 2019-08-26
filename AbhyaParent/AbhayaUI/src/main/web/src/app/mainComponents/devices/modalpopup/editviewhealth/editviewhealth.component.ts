import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HealthModel } from "../../../../common/models/healthmonitoring.model";

@Component({
  selector: 'app-editviewhealth',
  templateUrl: './editviewhealth.component.html',
  styleUrls: ['./editviewhealth.component.sass']
})
export class EditviewhealthComponent implements OnInit {

  @Input() selectedHealthDetails: HealthModel;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}