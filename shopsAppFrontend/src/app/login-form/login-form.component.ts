import { Component, OnInit } from '@angular/core';
import { UserForm} from '../_user';
import { Http} from '@angular/http';
import {Router} from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  // for specify the loged-in user
  userServer: UserForm;
  constructor(private http: Http, private router: Router, private userService: UserService ) { }

  ngOnInit() {
  }
  loginUser(user: UserForm) {
    return this.http.post('http://localhost:5002/loginUser', user).subscribe((data: any) => {
      this.userServer = JSON.parse(data._body);
      if (data.status === 200 ) {
      this.userService.setUserLoggedIn();
      this.userService.setSelectedUser(this.userServer);
      this.router.navigate(['/shops']); }
     });
  }}

