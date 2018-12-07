import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service'

@Component({
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

    constructor(private backend: BackendService) {
   
    }


    ngOnInit() { }

}