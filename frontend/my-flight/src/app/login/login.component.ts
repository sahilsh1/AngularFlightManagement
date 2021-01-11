import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {User} from '../user';
import {Flight}  from '../flight';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  sucess:boolean=false;
  error: Error = new Error();
  user2: User = new   User(); 
  constructor(private userservice : UserService,
    private router:Router){}
  ngOnInit(){
  }
  onSubmit(){
    this.userservice.authenticate(this.user2).subscribe(
      (response)=>{
      if(response==true)
       {
         this.router.navigate(['flight-list2']);}
      else {
        this.sucess=true;
      }
    },
      (error)=>{
        this.error =error;
        this.sucess=true;
        console.log("cannot be loggined"+error);
      }
    )
  }
  
}
