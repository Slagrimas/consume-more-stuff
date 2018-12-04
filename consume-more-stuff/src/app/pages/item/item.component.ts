import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';


@Component({
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
    item: any

    constructor(private backend: BackendService) {
        this.backend.getItem()
            .then(data => {
                console.log('this is data', data)
                this.item = data
            })
            .catch(err => {
                console.log('this is error', err)
            })
    }

    ngOnInit() {
    }

}