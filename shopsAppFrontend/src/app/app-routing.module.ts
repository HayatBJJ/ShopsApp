import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { PreferedShopsComponent } from './prefered-shops/prefered-shops.component';
import { ShopsListComponent } from './shops-list/shops-list.component';
import {LoginFormComponent} from './login-form/login-form.component';
import {RegistrationComponent} from './registration/registration.component';
import {AuthGuard} from './auth.guard';


const routes: Routes = [
  { path: 'shops', canActivate: [ AuthGuard], component: ShopsListComponent },
  { path: '', component: LoginFormComponent },
  { path: 'prefered-shops', canActivate: [ AuthGuard], component: PreferedShopsComponent },
  { path: 'logup', component: RegistrationComponent },

];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
