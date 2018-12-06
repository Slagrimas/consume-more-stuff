import { Component, OnInit } from '@angular/core';
import { BackendService } from "../../services/backend.service";


@Component({
    templateUrl: './clothing.component.html',
    styleUrls: ['./clothing.component.scss']
})
export class ClothingComponent implements OnInit {
  clothes: any; 

    constructor(private backend: BackendService ) { 
        this.backend.getAllClothing()
        .then((data) => {
            this.clothes = data;
        })
        .catch((err) => {
            console.log('this is a error', err)
        })
    }


    ngOnInit() {  }

}