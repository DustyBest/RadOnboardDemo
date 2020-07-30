import { Component, OnInit } from '@angular/core';
import { IntakeService } from './intake.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-onboard',
  templateUrl: './onboard.component.html',
  styleUrls: ['./onboard.component.scss']
})
export class OnboardComponent implements OnInit {
  isLinear = true;
  userFormGroup: FormGroup;

  // user:{
  //   is21:boolean
  //   beers:[]
  //   wines:[]
  //   music:[]
  //   entertainment:[]
  //   isPetFriendly:boolean
  // }

  user:{} = {
    is21:true,
    beers:['iipa', 'sours', 'stouts'],
    wines:['sav blanc', 'rose'],
    music:['punk', 'reggae'],
    entertainment:['games', 'trivia'],
    isPetFriendly:true
  }

  constructor(public intakeService:IntakeService, private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    console.log(this.user);
    this.intakeService.sayHi();

    this.userFormGroup = this._formBuilder.group({
      is21:[''],
      beers:[''],
      wines:[''],
      music:[''],
      entertainment:[''],
      isPetFriendly:['']
    })
  }

}
