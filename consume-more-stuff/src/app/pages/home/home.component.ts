import { Component, OnInit } from '@angular/core';
import { BackendService } from "../../services/backend.service";

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  content: string = ''
  home: object;
  allCategories: any;
  cards: any;

  constructor(private backend: BackendService) {

    this.backend.getAllHomeItems()
      .then((data) => {
        console.log('this is data', data)
        this.home = data
      })
      .catch(err => {
        console.log('this is error', err)
      })

  }


  ngOnInit() {

  }

}