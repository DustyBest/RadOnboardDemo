import { Injectable } from '@angular/core';
import { Router } from "@angular/router"
import { UserService } from '../users/user.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IntakeService {

  public loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  newUser:any = { 
    firstName:String,
    lastName:String,
    dob:Date,
    value: {
      brewPreferences:[],
      winePreferences:[],
      foodPreferences:[],
      occasionPreferences:[]
    } 
  };
  

  sayHi(){
    console.log('hi')
  }
  updateBrew(brew){
    this.newUser.value.brewPreferences = [brew];
  }
  updateWine(wine){
    this.newUser.value.winePreferences = [wine];
  }
  updateFood(food){
    this.newUser.value.foodPreferences = [food];
  }
  updateOccasion(occasion){
    this.newUser.value.occasionPreferences = [occasion];
  }


  onSubmit(){
    console.log(this.loggedIn)
    this.loggedIn.next(true);
    console.log(this.loggedIn)
    this.userService.currentUser.userPreferences = this.newUser.value
    console.log(this.userService.currentUser.userPreferences)
    this.router.navigate(['landing'])
  }

  constructor(private router:Router, public userService: UserService) { }
}
