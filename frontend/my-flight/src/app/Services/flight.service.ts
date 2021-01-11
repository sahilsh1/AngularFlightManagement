import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Flight } from '../flight';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
@Injectable({
  providedIn: 'root'
})
export class FlightService {
 

  constructor(private http:HttpClient,private userservice:UserService) { }
  
  username=this.userservice.username1;
  //save the data to database
  saveFlight(flight2: Flight):Observable<any> {
    //throw new Error('Method not implemented.');
    return this.http.post<Flight>(`http://localhost:7070/${this.username}/addtraveller`,flight2);
  }

  //list of all flight
  getAllFlights(): Observable<any> {
    //throw new Error('Method not implemented.');
     return this.http.get<any>(`http://localhost:8080/${this.username}/flightlist`);
  }

  // get single flight by Id
  getFlight(id:number):Observable<any>{
    return this.http.get(`http://localhost:8080/trvallerbyid/${id}`)
  }
  //update the flight
  updateFlight(id:number,flight:Flight){
    return this.http.put(`http://localhost:8080/update/${id}`,flight);
  }
  //get flight list by country
  getAllFlightByCountry(flying_to:String): Observable<any> {
    //throw new Error('Method not implemented.');
     return this.http.get<any>(`http://localhost:8080/byCountry/${flying_to}`);
  }

}
