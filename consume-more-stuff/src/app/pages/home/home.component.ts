import { Component, OnInit } from '@angular/core';
import { BackendService } from "../../services/backend.service";

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  content: string = ''
  allItems: any;
  constructor(private backend: BackendService) {

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