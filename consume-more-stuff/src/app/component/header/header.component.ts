import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../../app/services/backend.service'
import { Router } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {


  constructor(
    private backend: BackendService,
    private router: Router
  ){}

   ngOnInit(){

   }


}