import { Component, OnInit } from "@angular/core";
import { BackendService } from "../../services/backend.service";
import { ActivatedRoute } from '@angular/router';


@Component({
    templateUrl: "./item.component.html",
    styleUrls: ["./item.component.scss"]
})
export class ItemComponent implements OnInit {
    item: any = [];
    
    constructor(private backend: BackendService, private route: ActivatedRoute) {
        console.log(this.route.snapshot.params['id'])
        const id = this.route.snapshot.params['id']

        this.backend.getItem(id)
            .then((data) => {
                this.item = data
            })
            .catch(err => {
                console.log('this is error', err)
            })
    }

    ngOnInit() { 
        
    }
}
