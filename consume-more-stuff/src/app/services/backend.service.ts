import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})

export class BackendService {
    baseUrl: string = 'http://localhost:4200/'
    item: any[] = [];
    items: any
    obj: any;
    id: number;

    constructor(private http: HttpClient) { }

    getUser(id: number) {
        console.log('this is getting user')
        const url = this.baseUrl + "/users/" + id;
        return this.http.get(url).toPromise();
    }

    getAllCategories() {
        const url = this.baseUrl + "api/categories";
        return this.http.get(url).toPromise();
    }
    //can talk to database
    getAllItems() {
        console.log('getting all items')
        const url = this.baseUrl + 'api/items';
        return this.http.get(url).toPromise();
    }
    //can talk to database
    getItem(id: number) {
        console.log('Getting Item')
        const ItemUrl = this.baseUrl + 'api/items/' + id
        console.log('thisisid', id) 
        return this.http.get(ItemUrl).toPromise()
    }
                                   
    createItem(items) {
        console.log('items', items)
        this.item.push(items);
    }

    createNewItem(obj) {
        const url = this.baseUrl + "/new";
        console.log("createNewContact obj from backend.service", obj);
        return this.http.post(url, obj).subscribe(res => {
            console.log("added to DB");
        });
    }

    login(user) {
        return Promise.resolve({
            id: this.id,
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
