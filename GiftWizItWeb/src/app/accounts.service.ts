import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';

import { RegisterModel } from './models/register';
import { LoginLocalModel } from './models/login';

@Injectable({
    providedIn: 'root'
})
export class AccountsService {
    private apiUrl: string = "api/account";
    private authUrl: string = "/Token";

    constructor(private http: Http) { }

    public registerUser(email: string, password: string, confPass: string): Observable<any> {
        var registerObj: RegisterModel = {
            email: email,
            password: password,
            confirmPassword: confPass
        };

        return this.http.post(`${this.apiUrl}/register`, registerObj);
    }

    public loginUserLocal(email: string, password: string): Observable<any> {
        var loginObj: LoginLocalModel = {
            username: email,
            password: password,
            grant_type: "password"
        };

        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        var options = new RequestOptions({ headers: headers });

        let urlParams = new URLSearchParams();
        urlParams.set('grant_type', loginObj.grant_type);
        urlParams.set('username', loginObj.username);
        urlParams.set('password', loginObj.password);

        let body = urlParams.toString();

        return this.http.post(this.authUrl, body, options);
    }
}
