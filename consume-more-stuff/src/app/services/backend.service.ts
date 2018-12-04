import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})

export class BackendService {
    baseUrl: string = "https://localhost:4200";
    users: Object[] = [];
    contacts: any[] = [];
    allUsers: any[] = [];
    allContacts: any[] = [];
    newContact: any[] = [];
    obj: any;
    id: any;

    constructor(private http: HttpClient) { }

    getAllUsers() {
        // console.log(this.allUsers)
        const url = this.baseUrl + '/users';
        return this.http.get(url).toPromise();
    }

    getUser(id: number) {
        // console.log(this.users)
        const url = this.baseUrl + '/users/' + id;
        return this.http.get(url).toPromise();
    }

   

    login(user) {
        return Promise.resolve({
            id: user.id,
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
