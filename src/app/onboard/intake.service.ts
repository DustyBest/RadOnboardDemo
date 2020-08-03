import { Injectable } from '@angular/core';
import { Router } from "@angular/router"

@Injectable({
  providedIn: 'root'
})
export class IntakeService {
  newUser = { 
    value: {
      beers: "",
      entertainment: "",
      is21: "",
      isPetFriendly: "",
      music: "",
      wines: ""
    } 
  };
  

  sayHi(){
    console.log("intake service working")
  }

  onSubmit(newUser){
    this.newUser = { 
      value: {
        beers: "",
        entertainment: "",
        is21: "",
        isPetFriendly: "",
        music: "",
        wines: ""
      } 
    }
    this.newUser = newUser
    console.log(newUser)
    this.router.navigate(['landing'])
  }

  constructor(private router:Router) { }
}
