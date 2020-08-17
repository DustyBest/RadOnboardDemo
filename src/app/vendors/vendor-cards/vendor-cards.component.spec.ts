import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorCardsComponent } from './vendor-cards.component';

describe('VendorCardsComponent', () => {
  let component: VendorCardsComponent;
  let fixture: ComponentFixture<VendorCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
