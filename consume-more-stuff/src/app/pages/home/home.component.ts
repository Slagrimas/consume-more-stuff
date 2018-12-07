import { Component, OnInit } from '@angular/core';
import { BackendService } from "../../services/backend.service";
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  content: string = ''
  home: object;
  allCategories: any;
  cards: any;

  username: string;
  password: string;
  item: Object[] = [];
  search: string;
  filter: Object[] = [];
  isLoggedIn: boolean = false;
  loginPressed: boolean = false;
  


  constructor(private backend: BackendService, private auth: AuthService, private router: Router) {

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

  userLogin() {
    return this.backend.login(this.username, this.password)
      .then((resp) => {
        return this.auth.login(resp, this.username, this.password)
      })
      .then(() => {
        this.isLoggedIn = true;
        this.username = null;
        this.password = null;
        return this.router.navigate(['**']);
      })
  }

  ngOnInit() {

  }

}