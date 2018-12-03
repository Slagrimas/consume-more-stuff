import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})

export class BackendService {
  baseUrl: string = "https://localhost:4200";
  users: any[] = [];

    constructor(private http: HttpClient) {

    }
  
    getAllUsers() {
        // console.log('this.allUsers in backend.service called\n', this.allUsers)
        const url = this.baseUrl + '/users';
        return this.http.get(url).toPromise();
      }
    

} 
