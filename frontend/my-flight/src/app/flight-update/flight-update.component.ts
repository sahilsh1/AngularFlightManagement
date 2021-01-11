import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Flight } from '../flight';
import { FlightService } from '../Services/flight.service';

@Component({
  selector: 'app-flight-update',
  templateUrl: './flight-update.component.html',
  styleUrls: ['./flight-update.component.css']
})
export class FlightUpdateComponent implements OnInit {

  success:boolean=false;
  flight:Flight=new Flight();
  id:number=0;
  constructor(private route:ActivatedRoute,private flightservice:FlightService,private router:Router) { }
  links = [
    { path: '/addtraveler', title: ''},
    { path:'/flight-list2',title:'travelhistory'},
    {path:'/flight-add',title:'addjourney'},
    {path:'/viewByCountry',title:'viewByCountry'}

];
  ngOnInit(){
    this.id = this.route.snapshot.params['id'];
    this.flightservice.getFlight(this.id)
      .subscribe(data => {
        console.log(data)
        this.flight = data;
      }, error => console.log(error));
  }
  onSubmit(){
    this.flightservice.updateFlight(this.id, this.flight)
    .subscribe(data => {
      console.log(data);
      this.flight = new Flight();
      this.gotoList();
    }, error => console.log(error));
  }
  gotoList() {
    this.router.navigate(['/flight-list2']);
  }
  
}
