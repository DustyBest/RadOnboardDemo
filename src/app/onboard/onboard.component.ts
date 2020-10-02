import { Component, OnInit } from '@angular/core';
import { IntakeService } from './intake.service';
import { UserService } from '../users/user.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-onboard',
  templateUrl: './onboard.component.html',
  styleUrls: ['./onboard.component.scss']
})
export class OnboardComponent implements OnInit {

  view:string = "";

  constructor(public intakeService:IntakeService, public userService:UserService) { }

  ngOnInit(): void {
    this.view = "brewPreferences"
    this.intakeService.loggedIn.next(false);
  }
  skip(skipFrom, skipTo){
    this.intakeService.newUser.userPreferences[skipFrom] = '';
    this.view = skipTo
    // console.log(this.intakeService.newUser.userPreferences)
  }
}
