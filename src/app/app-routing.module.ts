import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnboardComponent } from './onboard/onboard.component';
import { LandingComponent } from './landing/landing.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { VendorPageComponent } from './vendors/vendor-page/vendor-page.component';


const routes: Routes = [
  { path: 'onboard', component: OnboardComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'vendor/:id', component: VendorPageComponent },
  { path: '',   redirectTo: '/sign-in', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
