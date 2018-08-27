import { Component, OnInit } from '@angular/core';
import { UserForm} from '../_user';
import { Http} from '@angular/http';
import {Router} from '@angular/router';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  constructor(private http: Http, private router: Router) { }

  ngOnInit() {
  }
  addUser(user: UserForm) {

    this.http.post('http://localhost:5002/users', user).subscribe(status => {console.log(JSON.stringify(status));
      this.router.navigate(['/']); });
  }
}
