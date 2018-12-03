import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})

export class BackendService {
  baseUrl: string = "https://localhost:8989";

    constructor(private http: HttpClientModule) {

    }

} 
