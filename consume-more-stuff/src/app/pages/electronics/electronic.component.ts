import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service'

@Component({
    templateUrl: './electronic.component.html',
    styleUrls: ['./electronic.component.scss']
})
export class ElectronicComponent implements OnInit {
    electro: any

    constructor(private backend: BackendService) {
        this.backend.getAllElectronics()
            .then((data) => {
                this.electro = data
            })
            .catch((err) => {
                alert('error has occured')
                window.location.href = '/error'
                 console.log('failure', err)
             })
    }


    ngOnInit() { }

}