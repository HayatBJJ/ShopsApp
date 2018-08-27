import { Injectable } from '@angular/core';
import { Shop } from './shop';
import { Observable } from 'rxjs/';
import { Http, Response } from '@angular/http';
import {Router} from '@angular/router';
import { UserForm} from './_user';




@Injectable()
export class ShopsListService {
  constructor(private http: Http, private router: Router) { }
  shops: Shop[];
  newShopId: string;
  getShops() {
    return this.http.get('http://localhost:5002/shops').map((response: Response) => {
      const result = response.json();
      return result;
    });
  }
  // for update user  add or delete preferedShop
  onSelect(user: UserForm) {
    console.log(user);
    console.log(user.email);
    this.http.post('http://localhost:5002/updateuser', user).subscribe(status => {console.log(JSON.stringify(status));
      this.router.navigate(['/prefered-shops']); });
  }
}


