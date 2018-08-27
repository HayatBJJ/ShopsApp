import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here




import { AppComponent } from './app.component';

import { PreferedShopsService } from './prefered-shops.service';
import { ShopsListService } from './shops-list.service';
import { UserService } from './user.service';
import { AuthGuard } from './auth.guard';

import { HttpModule } from '@angular/http';

import { PreferedShopsComponent } from './prefered-shops/prefered-shops.component';
import { ShopsListComponent } from './shops-list/shops-list.component';
import { AppRoutingModule } from './/app-routing.module';

import {HttpClient} from '@angular/common/http';
import { RegistrationComponent } from './registration/registration.component';
import { LoginFormComponent } from './login-form/login-form.component';





@NgModule({
  declarations: [
    AppComponent,
    PreferedShopsComponent,
    ShopsListComponent,
    RegistrationComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [ ShopsListService, HttpClient, UserService, AuthGuard, PreferedShopsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
