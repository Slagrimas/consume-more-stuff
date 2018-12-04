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
    
    login(user) {
        return Promise.resolve({
            id: 18,
            username: user.username
        });
    }

    logout() {
        return Promise.resolve({});
    }

    register() {
        return Promise.resolve({});
    }
} 
