import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser = {
    id: Number,
    firstName: String,
    lastName: String,
    password: String,
    dob: Date,
    userPreferences: {
      brewPreferences:[],
      winePreferences:[],
      foodPreferences:[],
      occasionPreferences:[]
    }

  }

  constructor() { }
}
