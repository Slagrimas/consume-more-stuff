import { Component, OnInit } from '@angular/core';
import { BackendService } from "../../services/backend.service";
import { Router } from '@angular/router';

@Component({
    templateUrl: './auto.component.html',
    styleUrls: ['./auto.component.scss']
})

export class AutoComponent implements OnInit {
    result: any;
    error: string = "An Error Has Occured";

    constructor(private backend: BackendService, private router: Router) {
        this.backend.getAllAuto()
            .then((data) => {
                this.result = data;
                console.log('succesful')
            })
            .catch((err) => {
               alert('error has occured')
               window.location.href = '/error'
                console.log('failure', err)
            })
    }

    ngOnInit() { }

}