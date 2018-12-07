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
    user: {
        id: number,
        username: string,
        password: string,
        name: string,
        email: string,
        user_status: number,
        item_id: null
    } = {
            id: null,
            username: '',
            password: '',
            name: '',
            email: '',
            user_status: null,
            item_id: null,
        };
    constructor(private http: HttpClient) { }

    getUser(id: number) {
        const url = this.baseUrl + "/users/" + id;
        return this.http.get(url).toPromise();
    }

    getAllCategories() {
        const url = this.baseUrl + "api/categories";
        return this.http.get(url).toPromise();
    }
    //can talk to database
    getAllItems() {
        const url = this.baseUrl + 'api/items';
        return this.http.get(url).toPromise();
    }
    //can talk to database
    getItem(id: number) {
        const ItemUrl = this.baseUrl + 'api/items/' + `?id=${id}`
        return this.http.get(ItemUrl).toPromise()
    }

    createItem(items) {
        this.item.push(items);
    }

    createNewItem(obj) {
        const url = this.baseUrl + "/new";
        return this.http.post(url, obj).subscribe(res => {
            console.log("added to DB");
        });
    }

    login(username, password) {
        const userUrl = this.baseUrl + `api/login`;
        return this.http.post(userUrl, {username:username, password:password}).toPromise()
    }

    logout() {
        return Promise.resolve({});
    }

    register() {
        return Promise.resolve({});
    }

    searchForItem(param) {
        const itemFetch = this.baseUrl + `api/item/${param}`;
        return this.http.post(itemFetch, '{title:title}').toPromise

    }
}
