import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { deviceCommunicationModel } from '../../../../common/models/device-communication-model';

@Component({
  selector: 'app-editviewmovement',
  templateUrl: './editviewmovement.component.html',
  styleUrls: ['./editviewmovement.component.sass']
})
export class EditviewmovementComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }
  
  @Input() selectedMovementDetails : deviceCommunicationModel;

  ngOnInit() { }

}