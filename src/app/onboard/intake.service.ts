import { Injectable } from '@angular/core';
import { Router } from "@angular/router"

@Injectable({
  providedIn: 'root'
})
export class IntakeService {
  newUser = { 
    value: {
      brew: "",
      wine: "",
      food: "",
      occasion: ""
    } 
  };
  

  sayHi(){
    console.log(this.newUser.value)
  }
  updateBrew(brew){
    this.newUser.value.brew = brew;
  }
  updateWine(wine){
    this.newUser.value.wine = wine;
  }
  updateFood(food){
    this.newUser.value.food = food;
  }
  updateOccasion(occasion){
    this.newUser.value.occasion = occasion;
  }


  onSubmit(){
    console.log(this.newUser)
    this.router.navigate(['landing'])
  }

  constructor(private router:Router) { }
}
