import { Component } from "@angular/core";
// import { Router } from "@angular/router";
import { BackendService } from "../../services/backend.service";
// import { AuthService } from "../../services/auth.service";
// import { SessionService } from "../../services/session.service";


@Component({
  templateUrl: './addItem.component.html',
  styleUrls: ['./addItem.component.scss']
})

export class AddItemComponent {
  addNewItemForm:{
title:string,
category_id:number,
condition_id:number,
status_id:number,
dimensions:string,
manufacturer:string,
description:string,
notes:string,
price:number,
  } = {
    title:"",
    category_id:null,
    condition_id:null,
    status_id:null,
    dimensions:"",
    manufacturer:"",
    description:"",
    notes:"",
    price:null,
  }
  constructor(
    
     private backend:BackendService,
    // private auth:AuthService,
    // private session:SessionService
  ){}


submitNewItem(){
  console.log(this.addNewItemForm)
  return this.backend.createNewItem(this.addNewItemForm)
}

  }
