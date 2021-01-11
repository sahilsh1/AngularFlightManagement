import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight';
import { FlightService } from '../Services/flight.service';
import {countryanddates} from '../CountryAndDates'

@Component({
  selector: 'app-view-by-country',
  templateUrl: './view-by-country.component.html',
  styleUrls: ['./view-by-country.component.css']
})
export class ViewByCountryComponent implements OnInit {

  links = [
    { path: '/addtraveler', title: ''},
    { path:'/flight-list2',title:'travelhistory'},
    {path:'/flight-add',title:'addjourney'},
    {path:'/viewByCountry',title:'viewByCountry'}

];
  flying_to:String='';
  constructor(private flightservice:FlightService) { }
  success:boolean=false;
  flight3:countryanddates[]=[]; 
  a:number=5;
  b:number=6;
  ngOnInit(): void {
  }
  onSubmit(){
    this.flightservice.getAllFlightByCountry(this.flying_to).subscribe(
      (response:any)=>{
        console.log(response);
        this.flight3=response;
        this.success=true;
      }
    )
  }

}
