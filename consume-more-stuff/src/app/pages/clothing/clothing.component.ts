import { Component, OnInit } from '@angular/core';
import { BackendService } from "../../services/backend.service";


@Component({
    templateUrl: './clothing.component.html',
    styleUrls: ['./clothing.component.scss']
})
export class ClothingComponent implements OnInit {
    clothes: any;

    constructor(private backend: BackendService) {
        this.backend.getAllClothing()
            .then((data) => {
                this.clothes = data;
            })
            .catch((err) => {
                alert('error has occured')
                window.location.href = '/error'
                 console.log('failure', err)
             })
    }


    ngOnInit() { }

}