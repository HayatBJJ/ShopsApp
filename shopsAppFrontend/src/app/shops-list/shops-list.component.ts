import { Component, OnInit } from '@angular/core';
import { ShopsListService} from '../shops-list.service';
import { Shop} from '../shop';
import { UserService } from '../user.service';
import { UserForm} from '../_user';





@Component({
  selector: 'app-shops-list',
  templateUrl: './shops-list.component.html',
  styleUrls: ['./shops-list.component.css']
})
export class ShopsListComponent implements OnInit {
  shops = [] ;
  selectedUser: UserForm = this.userService.getSelectedUser();
  selectedshop: Shop = {
    id: '225gg5fdd',
    name: 'Windstorm',
    picture: 'fsgshs',
    city: 'rabat',
    email: 'ggh@chj.com',
    location: null
};
  // add shop to preferedShops of a selected user
  onSelect(shop: Shop): void {
    this.selectedshop = shop;
    console.log(typeof this.selectedUser);
    console.log(this.selectedUser);
    this.selectedUser.preferedshops.push(this.selectedshop.id);
    this.shopListService.onSelect(this.selectedUser);
  }
  constructor(private shopListService: ShopsListService, private userService: UserService) {
  }
  // get all shops
  getShops(): void {
    this.shopListService.getShops().subscribe((data: any) => {
      console.log(data);
      this.shops = data;
    }); }
  ngOnInit() {
    this.getShops();
  }
}
