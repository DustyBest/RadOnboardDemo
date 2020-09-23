import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IntakeService } from '../onboard/intake.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  password: FormControl;
  dob: FormControl;

  submitForm() {
    this.intakeService.newUser.firstName = this.signUpForm.value.firstName;
    this.intakeService.newUser.lastName = this.signUpForm.value.lastName;
    this.intakeService.newUser.password = this.signUpForm.value.password;
    this.intakeService.newUser.dob = this.signUpForm.value.dob;
    // console.log(this.intakeService.newUser)
    this.router.navigate(['onboard'])
  }

  createFormControls() {
    this.firstName = new FormControl();
    this.lastName = new FormControl();
    this.password = new FormControl();
    this.dob = new FormControl();
  }

  createForm() {
    this.signUpForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      password: this.password,
      dob: this.dob
    });
  }

  constructor(public intakeService: IntakeService, public router:Router) { }

  ngOnInit(): void {
    this.createFormControls();
    this.createForm();
  }

}
