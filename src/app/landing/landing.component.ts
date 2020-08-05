import { Component, OnInit } from '@angular/core';
import { IntakeService } from '../onboard/intake.service';
import * as mockVendors from '../vendors/mock-vendors.json'

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  something = "This is something";
  mockVendors: any = (mockVendors as any).default;

  constructor(public intakeService:IntakeService) { }

  ngOnInit(): void {
  }

}
