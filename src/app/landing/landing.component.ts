import { Component, OnInit } from '@angular/core';
import * as mockVendors from '../vendors/mock-vendors.json';
import { UserService } from '../users/user.service'

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  
  mockVendors: any = (mockVendors as any).default;
  value = 'Search';
  name = 'User';

  getName(){
    // Currently a workaround. Empty UserService returns a Srting Constructor and not a String.
    // If no name has been passed to the UserService I'd like the this.name to default to "User".
    if(this.userService.currentUser.firstName.toString().split(' ').length === 1){
      this.name = this.userService.currentUser.firstName.toString()
    } else {
      this.name = "User"
    }
  }

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getName()
  }

}
