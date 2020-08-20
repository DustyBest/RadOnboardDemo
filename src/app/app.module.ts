import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnboardComponent } from './onboard/onboard.component';
import { LandingComponent } from './landing/landing.component';

import { IntakeService } from './onboard/intake.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import { SignInComponent } from './sign-in/sign-in.component';
import { MatIconModule } from '@angular/material/icon';
import { ProfileComponent } from './profile/profile.component';
import { VendorCardsComponent } from './vendors/vendor-cards/vendor-cards.component';
import { FooterNavComponent } from './footer-nav/footer-nav.component';



@NgModule({
  declarations: [
    AppComponent,
    OnboardComponent,
    LandingComponent,
    SignInComponent,
    ProfileComponent,
    VendorCardsComponent,
    FooterNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatButtonToggleModule,
    MatIconModule,
    MatSlideToggleModule,
    MatCardModule  
  ],
  providers: [
    IntakeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
