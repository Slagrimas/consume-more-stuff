import { Component, OnInit } from '@angular/core';
import { BackendService } from "../../services/backend.service";


@Component({
    templateUrl: './auto.component.html',
    styleUrls: ['./auto.component.scss']
})
export class AutoComponent implements OnInit {
  result: any;

    constructor(private backend: BackendService ) { 
        this.backend.getAllAuto()
        .then((data) => {
            this.result = data;
        })
        .catch((err) => { console.log('this is the error', err) })
    }


    ngOnInit() {  }

}