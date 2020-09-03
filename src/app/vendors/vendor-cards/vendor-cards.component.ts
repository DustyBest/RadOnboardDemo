import { Component, OnInit } from '@angular/core';
import * as mockVendors from '../mock-vendors.json'
import { Router } from '@angular/router';


@Component({
  selector: 'app-vendor-cards',
  templateUrl: './vendor-cards.component.html',
  styleUrls: ['./vendor-cards.component.scss']
})
export class VendorCardsComponent implements OnInit {

  mockVendors: any = (mockVendors as any).default;

  constructor(private router: Router) { }

  test(){
    console.log('testing');
  }

  onSelect(vendor){
    this.router.navigate(['/vendor', vendor.id]);
  }


  ngOnInit(): void {
  }

}
