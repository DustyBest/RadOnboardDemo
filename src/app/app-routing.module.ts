import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnboardComponent } from './onboard/onboard.component';
import { LandingComponent } from './landing/landing.component';


const routes: Routes = [
  { path: 'onboard-component', component: OnboardComponent },
  { path: 'landing-component', component: LandingComponent },
  { path: '',   redirectTo: '/onboard-component', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
