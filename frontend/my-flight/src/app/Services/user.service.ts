import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private http:HttpClient) {}

  username1:String='';
  //authen
  authenticate(user2: User){
    this.username1=user2.username;
    return this.http.post<boolean>('http://localhost:8080/login',user2);
  }

  //signup
  saveuser(user1: User) {
    return this.http.post<boolean>('http://localhost:8080/signup',user1);
  }
}
