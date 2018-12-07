import { Component, OnInit } from '@angular/core';
import { BackendService } from "../../services/backend.service";
import { SessionService } from "../../services/session.service";

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  content: string = ''
  home: object;
  allCategories: any;
  cards: any;


  constructor(private backend: BackendService, private session: SessionService) {

    this.backend.getAllHomeItems()
      .then((data) => {
        this.home = data
      })
      .catch((err) => {
        alert('error has occured')
        window.location.href = '/error'
         console.log('failure', err)
     })

  }

  isLoggedIn() {
    return this.session.getIsLoggedIn();
}

  ngOnInit() {

  }

}