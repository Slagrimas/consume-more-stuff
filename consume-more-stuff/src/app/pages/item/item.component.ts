import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { SessionServices } from '../../services/session.service';


@Component({
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
    item: any
    items: any
    id: any
    
    constructor(private backend: BackendService, private session: SessionServices, ) { }
    ngOnInit() {

        this.backend.getAllItems()
            .then(data => {
                // console.log(data)
                this.items = data
            })
            .catch(err => {
                console.log(err)
            })

        this.backend.getItem(this.id)
            .then(data => {
                console.log(data)
                this.item = data
            })
            .catch(err => {
                console.log(err)
            })
    }

}