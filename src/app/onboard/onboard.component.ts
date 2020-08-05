import { Component, OnInit } from '@angular/core';
import { IntakeService } from './intake.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-onboard',
  templateUrl: './onboard.component.html',
  styleUrls: ['./onboard.component.scss']
})
export class OnboardComponent implements OnInit {

  view:string = "";

  constructor(public intakeService:IntakeService) { }

  ngOnInit(): void {
    this.view = "brew"
    this.intakeService.newUser = 
    {
      value: {
        brew: "",
        wine: "",
        food: "",
        occasion: ""
      } 
    };
    this.intakeService.sayHi();
  }
}
