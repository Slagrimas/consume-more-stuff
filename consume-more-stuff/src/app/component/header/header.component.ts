import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../../app/services/backend.service'
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  item: Object[] = [];
  search: string;
  filter: Object[] = [];
  isLoggedIn: boolean = true;
  loginPressed: boolean = false;
  username: string;
  password: string;

  constructor(
    private backend: BackendService,
    private router: Router,
    private auth: AuthService,
  ) { }

  ngOnInit() {

  }

  userLoginButtonPressed() {
    return this.loginPressed = true;
  }

  userLogin() {
    return this.backend.login(this.username, this.password)
      .then((resp) => {
        console.log(resp)
        const userData = resp
      })



    // if (username === response.username && password === response.password){
    //   return this.auth.login(response)
    //  } 
    //  })
  }




  itemSearch() {
    if (this.search.toLowerCase)
      this.filter = this.backend.items.filter((element) => {
        console.log(element)
        //  return element.includes(this.search)
      })
  }

}