import { Component, OnInit } from '@angular/core';
import { IntakeService } from '../onboard/intake.service';
import * as mockVendors from '../vendors/mock-vendors.json';
import { VendorCardsComponent } from '../vendors/vendor-cards/vendor-cards.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  
  mockVendors: any = (mockVendors as any).default;
  value = 'Search';
  name = 'User';

  constructor(public intakeService:IntakeService) { }

  ngOnInit(): void {
  }

}
