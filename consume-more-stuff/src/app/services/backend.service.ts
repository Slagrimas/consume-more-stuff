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
 user:{
     id:number,
     username:string,
    password: string,
    name:string,
    email:string,
    user_status:number,
    item_id: null
    } = {
     id:null,
     username:'',
     password:'',
     name:'',
     email:'',
     user_status:null,
     item_id: null,
    };
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

    getAllAuto(){
        console.log('getting auto')
        const url = this.baseUrl + 'api/categories/automotive';
        return this.http.get(url).toPromise();
    }

    getAllClothing(){
        console.log('getting clothing')
        const url = this.baseUrl + 'api/categories/clothing';
        return this.http.get(url).toPromise();
    }

    getAllElectronics(){
        console.log('getting Electronics')
        const url = this.baseUrl + 'api/categories/electronics';
        return this.http.get(url).toPromise();
    }

    getAllGeneral(){
        console.log('getting General things')
        const url = this.baseUrl + 'api/categories/general';
        return this.http.get(url).toPromise();
    }

    getAllServices(){
        console.log('getting services')
        const url = this.baseUrl + 'api/categories/services';
        return this.http.get(url).toPromise();
    }

    getAllItems() {
        console.log('getting all items')
        const url = this.baseUrl + 'api/items';
        return this.http.get(url).toPromise();
    }

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

    login(username, password) {
        console.log(username, password)
        const userUrl = this.baseUrl + `api/login/${username}`;
        console.log(userUrl)
        return this.http.post(userUrl,{username:username, password:password}).toPromise()
    }

    logout() {
        return Promise.resolve({});
    }

    register() {
        return Promise.resolve({});
    }
}
