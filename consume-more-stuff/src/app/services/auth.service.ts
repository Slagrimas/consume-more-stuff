import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { SessionService } from './session.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(
        private backend: BackendService,
        private session: SessionService,
    ) { }

    login(data, username,password) {
        console.log('auth',data)

        if (data.username === username && data.password === password){
             return this.session.setSession(data.username)
        }else{
            return `Username and/or password, incorrect.`
        }
    }

    logout() {
        return this.backend.logout()
            .then(() => {
                return this.session.clearSession();
            })
    }

    register() {
        return this.backend.register()
    }

}