import { Component, OnInit } from '@angular/core';
import { IntakeService } from '../onboard/intake.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;

  constructor(private intakeService:IntakeService) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.intakeService.loggedIn;
  }

}
