import { Component, OnInit } from '@angular/core';
import { FlightService } from 'src/app/Services/flight.service';
import { Flight } from 'src/app/flight';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {

  constructor(private flightservice: FlightService,private router:Router) { }

  links = [
    { path: '/addtraveler', title: ''},
    { path:'/flight-list2',title:'travelhistory'},
    {path:'/flight-add',title:'addjourney'},
    {path:'/viewByCountry',title:'viewByCountry'}

];
  flight3:Flight[]=[]; 

  ngOnInit(): void {
  this.loadFlightsData();
  }
  loadFlightsData() {
    this.flightservice.getAllFlights().subscribe(
      (response:any)=>{
        console.log(response);
        this.flight3=response;
      }
    )
  }
 

}
