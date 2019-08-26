import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserDetails } from "../../../../common/models/userdetails.model";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {

  @Input() selectedUserData : UserDetails;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}