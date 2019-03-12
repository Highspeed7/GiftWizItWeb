import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

import { RegisterModel } from './models/register';

@Injectable({
    providedIn: 'root'
})
export class AccountsService {
    private url: string = "api/account/register";

    constructor(private http: Http) { }

    public registerUser(email: string, password: string, confPass: string): Observable<any> {
        var registerObj: RegisterModel = {
            email: email,
            password: password,
            confirmPassword: confPass
        };

        return this.http.post(this.url, registerObj);
    }
}
