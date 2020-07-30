import { Component, OnInit } from '@angular/core';
import { IntakeService } from '../onboard/intake.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  something = "This is something";

  constructor(public intakeService:IntakeService) { }

  ngOnInit(): void {
  }

}
