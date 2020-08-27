import { Component, OnInit } from '@angular/core';
import { IntakeService } from '../onboard/intake.service';
// import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  firstName;
  lastName;
  password;
  dob;
  // form: FormGroup;

  submitForm() {
    this.intakeService.newUser.firstName = this.firstName;
    this.intakeService.newUser.lastName = this.lastName;
    this.intakeService.newUser.dob = this.dob;
    console.log(this.intakeService.newUser)
  }

  constructor(public intakeService: IntakeService) { }

  ngOnInit(): void {
    // this.form = this.formBuilder.group({
    //   firstName:'',
    //   lastName:'',
    //   password:'',
    //   dob:''
    // });
  }

}
