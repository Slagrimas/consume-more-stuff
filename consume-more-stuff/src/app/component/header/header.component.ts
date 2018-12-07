import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../../app/services/backend.service'
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { SessionService } from '../../services/session.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  item: Object[] = [];
  search: string;
  filter: Object[] = [];
  isLoggedIn: boolean = false;
  loginPressed: boolean = false;
  
  username: string;
  password: string;

  constructor(
    private backend: BackendService,
    private router: Router,
    private auth: AuthService,
    private session: SessionService,
  ) { }

  ngOnInit() {

  }

  userLoginButtonPressed() {
    return this.loginPressed = true;
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

  itemSearch() {
    return this.backend.searchForItem(this.search)
  }
   
  logout(){
     this.session.clearSession()
     this.isLoggedIn = false;
     this.loginPressed = false;
     return this.router.navigate([''])
  }

}