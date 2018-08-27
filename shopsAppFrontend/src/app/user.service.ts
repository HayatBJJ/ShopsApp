import { Injectable } from '@angular/core';
import { UserForm } from './_user';

@Injectable()
export class UserService {
  private isUserLoggedIn;
  private selectedUser: UserForm;

  constructor() {
    this.isUserLoggedIn = false;
  }
  setUserLoggedIn() {
    this.isUserLoggedIn = true;
  }
  getUserLoggedIn() {
    return this.isUserLoggedIn;
  }
  setSelectedUser(user: UserForm) {
    this.selectedUser = user;
  }
  getSelectedUser() {
    return this.selectedUser;
  }

}
