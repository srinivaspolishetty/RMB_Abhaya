import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CommandManagement } from '../../../../common/models/commandmanagement.model';

@Component({
  selector: 'app-editviewcommhistory',
  templateUrl: './editviewcommhistory.component.html',
  styleUrls: ['./editviewcommhistory.component.sass']
})
export class EditviewcommhistoryComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }
  @Input() selectedCommandDetails : CommandManagement;

  ngOnInit() {
  }

}
