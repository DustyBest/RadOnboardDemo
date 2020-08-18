import { Component, OnInit } from '@angular/core';
import * as mockVendors from '../mock-vendors.json'


@Component({
  selector: 'app-vendor-cards',
  templateUrl: './vendor-cards.component.html',
  styleUrls: ['./vendor-cards.component.scss']
})
export class VendorCardsComponent implements OnInit {

  mockVendors: any = (mockVendors as any).default;

  test(){
    console.log('testing');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
