import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight';
import { FlightService } from '../Services/flight.service';

@Component({
  selector: 'app-addjourney',
  templateUrl: './addjourney.component.html',
  styleUrls: ['./addjourney.component.css']
})
export class AddjourneyComponent implements OnInit {

  links = [
    { path: '/addtraveler', title: ''},
    { path:'/flight-list2',title:'travelhistory'},
    {path:'/flight-add',title:'addjourney'},
    {path:'/viewByCountry',title:'viewByCountry'}

];
  success:boolean=false;
  error: Error = new Error();
  flight: Flight = new Flight(); 
  constructor(private flightservice:FlightService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.flightservice.saveFlight(this.flight).subscribe(
      (response)=>{
        this.success=true;
      }
    )
  }

}
