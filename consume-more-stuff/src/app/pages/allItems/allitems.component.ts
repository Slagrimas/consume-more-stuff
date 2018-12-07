import { Component, OnInit } from '@angular/core';
import { BackendService } from "../../services/backend.service";


@Component({
    templateUrl: './allitems.component.html',
    styleUrls: ['./allitems.component.scss']
})
export class AllItemComponent implements OnInit {
    items: any;

    constructor(private backend: BackendService) {
        this.backend.getAllItems()
            .then((data) => {
                this.items = data;
            })
            .catch((err) => {
                alert('error has occured')
                window.location.href = '/error'
                 console.log('failure', err)
             })
    }


    ngOnInit() { }

}