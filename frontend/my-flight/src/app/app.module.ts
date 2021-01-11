import { BrowserModule } from '@angular/platform-browser';
import { CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';


import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home/home.component';
import { SingupComponent } from './singup/singup.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { FlightUpdateComponent } from './flight-update/flight-update.component';
import { AddjourneyComponent } from './addjourney/addjourney.component';
import { ViewByCountryComponent } from './view-by-country/view-by-country.component';
import { BootstrappracComponent } from './bootstrapprac/bootstrapprac.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SingupComponent,
    FlightListComponent,
    FlightUpdateComponent,
    AddjourneyComponent,
    ViewByCountryComponent,
    BootstrappracComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
