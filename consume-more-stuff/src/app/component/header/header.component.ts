import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../../app/services/backend.service'
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { SessionService } from '../../services/session.service'



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
item: Object[]=[];
search:string;
filter: Object[]=[];
isLoggedIn: boolean = true;
loginPressed:boolean=false;
username:string;
password:string;

  constructor(
    private backend: BackendService,
    private router: Router,
    private auth: AuthService,
    private session: SessionService
  ){}

   ngOnInit(){

   }

   userLoginButtonPressed(){
     return this.loginPressed=true;
   }

   userLogin(username, password){
     console.log(this.backend.login())
     
       
     
      // if (username === response.username && password === response.password){
      //   return this.auth.login(response)
      //  } 
      //  })
     }

     
   

   itemSearch(){
     if(this.search.toLowerCase)
     this.filter = this.backend.items.filter((element)=>{
      console.log(element)
      //  return element.includes(this.search)
     })
   }

}