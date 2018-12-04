import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
    providedIn: 'root'
})

export class BackendService {
    baseUrl: string = "https://localhost:4200";
    users: Object[] = [];

    constructor(
        private http: HttpClient

    ) {

    }
getItems() {
    
}




}

