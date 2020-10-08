import { Injectable } from '@angular/core';
import { Router } from "@angular/router"
import { UserService } from '../users/user.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IntakeService {

  public loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  newUser:any = { 
    id: Number,
    firstName: String,
    lastName: String,
    dob: Date,
    password: String,
    userPreferences: {
      brewPreferences:[],
      winePreferences:[],
      foodPreferences:[],
      occasionPreferences:[]
    },
    favorites:[]
  };
  


  updateBrew(brew){
    this.newUser.userPreferences.brewPreferences = [brew];
  }
  updateWine(wine){
    this.newUser.userPreferences.winePreferences = [wine];
  }
  updateFood(food){
    this.newUser.userPreferences.foodPreferences = [food];
  }
  updateOccasion(occasion){
    this.newUser.userPreferences.occasionPreferences = [occasion];
  }


  onSubmit(){
    // console.log(this.loggedIn)
    this.loggedIn.next(true);
    // sessionStorage.setItem("loggedIn", "true")
    // console.log(this.loggedIn)
    this.userService.currentUser = this.newUser
    // console.log(this.userService.currentUser)
    this.router.navigate(['landing'])
  }

  constructor(private router:Router, public userService: UserService) { }
}
