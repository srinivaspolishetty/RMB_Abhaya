import { Component, OnInit } from '@angular/core';
import { UserDetails } from "../../models/userdetails.model";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  userDetails: UserDetails;
  vehicleSearch : string;
  constructor(private router: Router) {
    this.userDetails = JSON.parse(localStorage.getItem('userdetails'));
   }

  ngOnInit() {
  }
  searchVehicle(){
    this.router.navigate(['/vehicles'],
      {
        queryParams: { vehicleNumber: this.vehicleSearch },
        queryParamsHandling: 'merge'
      })
  }

}
