import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightService } from '../Services/flight.service';
import { UserService } from '../Services/user.service';
import { User } from '../user';
@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

 
  success:boolean=false;
  succes:boolean=false;
  error: Error = new Error();
  user1: User = new   User(); 
  constructor(private userservice : UserService,
    private router:Router){}
  message:String="succesfully registered";

  ngOnInit(){
  }
  onSubmit(){
    this.userservice.saveuser(this.user1).subscribe(
      (response)=>{
      console.log(response);
      if(response==true)
       {
         this.success=true;
         console.log("your are registerred succesfully")
       }

      else {
        console.log("f u");
        this.succes=true;
      }
    }
    )
   }
}
