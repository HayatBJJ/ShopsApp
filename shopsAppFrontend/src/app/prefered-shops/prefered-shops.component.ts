import { Component, OnInit } from '@angular/core';
import { Shop } from '../shop';
import 'rxjs/add/operator/map';
import { UserService } from '../user.service';
import { PreferedShopsService} from '../prefered-shops.service';
import { UserForm} from '../_user';



@Component({
  selector: 'app-prefered-shops',
  templateUrl: './prefered-shops.component.html',
  styleUrls: ['./prefered-shops.component.css']
})



export class PreferedShopsComponent implements OnInit {
  shops: Shop[] ;
  selectedUser: UserForm = this.userService.getSelectedUser();
  // the index of shop in the preferedShops array
  shopIndex: number;
  constructor(private userService: UserService, private prefered: PreferedShopsService) { }
  ngOnInit() {
    this.getPreferedShops(this.selectedUser);
  }
  // for remove a shop from preferedShops of selected user
  onSelect(shop: Shop): void {
    this.shopIndex = this.selectedUser.preferedshops.indexOf(shop.id);
    // delete the selected shops from preferedShops
    this.selectedUser.preferedshops.splice(this.shopIndex, 1);
    this.prefered.onSelect(this.selectedUser);
  }
  // get prefered shops of
  getPreferedShops(user: UserForm): void {

    this.prefered.getPreferedShops(user).subscribe((data: any) => {
      this.shops = data;
    }); }


}
