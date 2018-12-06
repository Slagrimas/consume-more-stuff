import { Component, OnInit } from '@angular/core';
import { BackendService } from "../../services/backend.service";
import { runInThisContext } from 'vm';

@Component({
    templateUrl: './auto.component.html',
    styleUrls: ['./auto.component.scss']
})

export class AutoComponent implements OnInit {
    result: any;
    error: string = "An Error Has Occured"

    constructor(private backend: BackendService) {
        this.backend.getAllAuto()
            .then((data) => {
                this.result = data;
            })
            .catch(() => {
                this.errorHandler
            })
    }

errorHandler() {
    return 'An Error Has Occured'
}

    ngOnInit() { }

}