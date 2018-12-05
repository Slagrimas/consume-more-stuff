import { Component, OnInit } from '@angular/core';
import { BackendService } from "../../services/backend.service";

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  content: string = ''
  allItems: any;
  allCategories: any;

  constructor(private backend: BackendService) {

    this.backend.getAllCategories()
      .then((category) => {
        console.log('this is category', category)
        this.allCategories = category
      })
      .catch(err => { console.log(err) })
    

    this.backend.getAllItems()
      .then((data) => {
        console.log('this is data', data)
        this.allItems = data
      })
      .catch(err => {
        console.log('this is error', err)
      })

  }

  ngOnInit() {

  }

}