import { Component, OnInit } from '@angular/core';
import { IntakeService } from '../onboard/intake.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(private intakeService: IntakeService) { }

  ngOnInit(): void {
    this.intakeService.loggedIn.next(false);
  }

}
