import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';


@Component({
    templateUrl: './service.component.html',
    styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  service: any;

    constructor( private backend: BackendService ) {
        this.backend.getAllServices()
        .then((data) => {
            this.service = data;
        })
        .catch((err) => { console.log(err) })
     }


    ngOnInit() {  }

}