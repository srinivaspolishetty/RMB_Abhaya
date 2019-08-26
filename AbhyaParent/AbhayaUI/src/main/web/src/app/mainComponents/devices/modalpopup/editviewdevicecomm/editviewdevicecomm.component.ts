import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { deviceCommunicationModel } from '../../../../common/models/device-communication-model';

@Component({
  selector: 'app-editviewdevicecomm',
  templateUrl: './editviewdevicecomm.component.html',
  styleUrls: ['./editviewdevicecomm.component.sass']
})
export class EditviewdevicecommComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }
  
  @Input() selectedCommDeviceDetails : deviceCommunicationModel;

  ngOnInit() { 
  }

}