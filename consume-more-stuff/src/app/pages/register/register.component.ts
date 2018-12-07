import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { BackendService } from '../../services/backend.service';

@Component({
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent {
  newUserForm: {
    username: string;
    password: string;
    name: string;
    email: string;
  } = {
    username: '',
    password: '',
    name: '',
    email: ''
  };

   constructor(private backend: BackendService, private router: Router) {}
   
   createUser(event){
    event.preventDefault();
    return this.backend 
      .register(this.newUserForm)
      .then(() => {
        return this.router.navigate(['/home']);
      })
      .catch(err => {
        return this.router.navigate(['/error']);
      });
  }
}
