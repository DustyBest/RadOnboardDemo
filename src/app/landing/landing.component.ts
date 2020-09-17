import { Component, OnInit } from '@angular/core';
import * as mockVendors from '../vendors/mock-vendors.json';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  
  mockVendors: any = (mockVendors as any).default;
  value = 'Search';
  name = 'User';

  constructor() { }

  ngOnInit(): void {
  }

}
