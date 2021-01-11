import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

links = [
    { path: '/home', title: 'Home' },
    { path: '/addtraveler', title: ''},
    { path:'/flight-list2',title:'travelhistory'},
    {path:'/flight-add',title:'addjourney'},
    {path:'/viewByCountry',title:'viewByCountry'}

];
  constructor() { }

  ngOnInit(): void {
  }

}
