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
    
    constructor(private http: HttpClient) { }

  getUser(id: number) {
    // console.log(this.users)
    const url = this.baseUrl + "/users/" + id;
    return this.http.get(url).toPromise();
  }

  getAllCategories() {
    // console.log('this.allContacts in backend.service called\n', this.allContacts)
    const url = this.baseUrl + "/categories";
    return this.http.get(url).toPromise();
  }

  // getAllItems() {
  //   // console.log(this.allUsers)
  //   const url = this.baseUrl + "/items";
  //   return this.http.get(url).toPromise();
  // }

    getAllItems() {
        console.log('getting items')
        const url = this.baseUrl + 'items';
        return this.http.get(url).toPromise();
    }

  // getItem() {
  //   console.log("Getting Item");
  //   const ItemUrl = this.baseUrl + "/items/" + this.id;
  //   return this.http.get(ItemUrl).toPromise();
  // }

    getItem(id: number) {
        console.log('Getting Item')
        const ItemUrl = this.baseUrl + 'api/items/' + 1
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
