import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { SessionServices } from './session.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(
        private backend: BackendService,
        private session: SessionServices
    ) { }

    login(user) {
        console.log(user)
        return this.backend.login(user)
            .then((response) => {
                return this.session.setSession(response);
            })
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