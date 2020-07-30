import { Injectable } from '@angular/core';
import { Router } from "@angular/router"

@Injectable({
  providedIn: 'root'
})
export class IntakeService {
  newUser = { value: 'abc' };

  sayHi(){
    console.log("intake service working")
  }

  onSubmit(newUser){
    this.newUser = newUser
    console.log(newUser)
    this.router.navigate(['landing-component'])
  }

  constructor(private router:Router) { }
}
