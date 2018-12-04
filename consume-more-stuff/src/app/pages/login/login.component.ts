import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'login-page',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginForm: {
        username: '',
        password: ''
    } = {
            username: '',
            password: ''
        };



    constructor() { }

    ngOnInit() { }

}