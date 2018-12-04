import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../../app/services/backend.service'
import { Router } from '@angular/router';



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

  constructor(
    private backend: BackendService,
    private router: Router
  ){}

   ngOnInit(){

   }

   userLoginButtonPressed(){
     return this.loginPressed=true;
   }

   userLogin(){
     return this.backend.login
   }

   itemSearch(){
     if(this.search.toLowerCase)
     this.filter = this.backend.items.filter((element)=>{
      console.log(element)
      //  return element.includes(this.search)
     })
   }

}