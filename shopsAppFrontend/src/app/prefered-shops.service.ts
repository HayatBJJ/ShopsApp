import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { UserForm} from './_user';
import { Shop} from './shop';
import {Router} from '@angular/router';




@Injectable()
export class PreferedShopsService {

  constructor(private http: Http, private router: Router) { }

  getPreferedShops(user: UserForm) {
    return this.http.get('http://localhost:5002/prefered-shops', { params : user}).map((response: Response) => {
      const result = response.json();
      return result;
    });
  }

  onSelect(user: UserForm) {
    console.log(user);
    this.http.post('http://localhost:5002/updateuser', user).subscribe(status => {console.log(JSON.stringify(status));
      this.router.navigate(['/shops']); });
  }

}
