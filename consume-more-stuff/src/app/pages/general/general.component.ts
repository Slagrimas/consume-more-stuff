import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service'

@Component({
    templateUrl: './general.component.html',
    styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {
  general: any;

    constructor(private backend: BackendService ) { 
        this.backend.getAllGeneral()
        .then((data) => {
            this.general = data
        })
        .catch((err) => {
            console.log('this is a error', err)
        })
    }


    ngOnInit() {  }

}