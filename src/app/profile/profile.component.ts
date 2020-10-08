import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import { UserService } from '../users/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  currentUser:any = {
    preferences: {
      brewPreferences:[],
      winePreferences:[],
      foodPreferences:[],
      occasionPreferences:[]
    }
  }
  name;

  preferenceOptions = {
    brewPreferences:["light", "amber", "dark", "pisners", "stouts", "sours", "kombucha", "lagers", 
      "porters", "ipa", "blondes", "belgian"],
    winePreferences:["red", "white", "sparkling", "riesling", "pinot gris", "chardonnay", "pinot noir", "zinfandel", "cabernet" ],
    foodPreferences:["american", "thai", "soul", "japanese", "cuban", "greek", "chinese", 
      "mediterranean", "italian", "pizza", "french", "german", "gourmet", "pub grub", "BBQ", "indian", "african", "mexican", "seafood"],
    occasionPreferences:["tasting rooms", "arcade", "darts", "ping pong", "theme bar", "games", 
      "comedy night", "trivia night", "game night", "sports", "dancing", "pool", "paint night", 
      "jenga", "dive bar", "live band", "rooftop bar", "wine bar", "karaoke", "juke box"]
  }

  addOrRemove = (array:any, item:any) => {
    const index = array.indexOf(item)
    if (index > -1) { 
      array.splice(index, 1)
    } else {
      array.push(item)
    }    
  }

  options = this.profileService.preferenceOptions

  brewPrefsChecked:boolean = false
  winePrefsChecked:boolean = false
  foodPrefsChecked:boolean = false
  occasionPrefsChecked:boolean = false

  printUser(){
    console.table(this.currentUser.preferences)
  }

  getName(){
    // Currently a workaround. Empty UserService returns a Srting Constructor and not a String.
    // If no name has been passed to the UserService I'd like the this.name to default to "User".
    if(this.userService.currentUser.firstName.toString().split(' ').length === 1){
      this.name = this.userService.currentUser.firstName.toString()
    } else {
      this.name = "User"
    }
  }

  constructor(public profileService: ProfileService, public userService: UserService) { }

  ngOnInit(): void {
    console.log(this.userService.currentUser)
    this.getName()
    this.currentUser.preferences = this.userService.currentUser.userPreferences;
  }

}
