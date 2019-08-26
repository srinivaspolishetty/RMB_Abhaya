import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { environment } from "../../../environments/environment";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Login } from '../../common/models/login.model';
import { UserDetails } from '../../common/models/userdetails.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  login: Login = new Login();
  loginError: String;
  constructor(private httpClient: HttpClient, private router: Router) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      'Authorization': 'Basic ' + window.btoa('abhaya-app' + ':' + 'abhaya-secret')
    })
  };

  ngOnInit() {
    localStorage.removeItem('token');
    localStorage.removeItem('userdetails');
  }

  userLogin(loginForm) {
    const url = `${environment.apiBase}/oauth/token`;
    this.httpClient.post(`${url}?username=${loginForm.username}&password=${loginForm.password}&grant_type=password`,
      {}, this.httpOptions).subscribe((data: any) => {
        localStorage.setItem('token', 'Bearer ' + data.access_token);
        this.getUserDetails();
      }, error => {
        console.log('error', error);
        this.loginError = 'Invalid Username or Password'
      }
      );
  }

  getUserDetails() {
    const headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Authorization': localStorage.getItem('token')
      })
    };
    this.httpClient.get(`${environment.apiBase}${environment.version}/readUser`, headers)
      .subscribe((userDetailsdata: UserDetails) => {
        localStorage.setItem('userdetails', JSON.stringify(userDetailsdata));
        this.router.navigate(['/dashboard']);


      }, error => {
        console.log('error', error);
        this.loginError = 'Invalid Username or Password'
      });
  }

}
