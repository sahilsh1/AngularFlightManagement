import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightListComponent } from './flight-list/flight-list.component';
import { CommonModule} from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';

import { FormsModule }   from '@angular/forms';
import { AddjourneyComponent } from './addjourney/addjourney.component';
import { FlightUpdateComponent } from './flight-update/flight-update.component';
import { ViewByCountryComponent } from './view-by-country/view-by-country.component';


const routes: Routes = [
{path:'',component:LoginComponent},
{path:'home',component:HomeComponent},
{path:'signup',component: SingupComponent},
{path:'flight-list2',component: FlightListComponent},
{path:'flight-add',component: AddjourneyComponent },
{path:'flight-list2/flightupdate/:id',component: FlightUpdateComponent },
{path:'viewByCountry',component: ViewByCountryComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes),
 CommonModule,FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
