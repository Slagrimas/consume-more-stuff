import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  content: string = ''
  title: string = 'Welcome To Consume More Stuff!'
  constructor() {  }

  ngOnInit() {  
    this.content = 'Home Page Content';
  }
  
}