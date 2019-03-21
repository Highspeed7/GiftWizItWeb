"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var rxjs_1 = require("rxjs");
var AccountsService = /** @class */ (function () {
    function AccountsService(http) {
        this.http = http;
        this.loggedInSrc = new rxjs_1.Subject();
        this.logingedIn$ = this.loggedInSrc.asObservable();
        this.apiUrl = "api/account";
        this.authUrl = "/Token";
    }
    AccountsService.prototype.registerUser = function (email, password, confPass) {
        var registerObj = {
            email: email,
            password: password,
            confirmPassword: confPass
        };
        return this.http.post(this.apiUrl + "/register", registerObj);
    };
    AccountsService.prototype.loginUserLocal = function (email, password) {
        var loginObj = {
            username: email,
            password: password,
            grant_type: "password"
        };
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new http_1.RequestOptions({ headers: headers });
        var urlParams = new URLSearchParams();
        urlParams.set('grant_type', loginObj.grant_type);
        urlParams.set('username', loginObj.username);
        urlParams.set('password', loginObj.password);
        var body = urlParams.toString();
        return this.http.post(this.authUrl, body, options);
    };
    AccountsService.prototype.logout = function () {
        // Get access token
        var access_token = localStorage.getItem("access_token");
        var headers = new http_1.Headers();
        headers.append("Authorization", "bearer " + access_token);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.apiUrl + "/logout", null, options);
    };
    AccountsService.prototype.getExternalUrl = function () {
        // Obtain external urls
        return this.http.get(this.apiUrl + "/ExternalLogins?returnUrl=/login&generateState=true");
    };
    AccountsService.prototype.doSocialLogin = function (url) {
        return this.http.get("" + url);
    };
    AccountsService.prototype.isUserRegistered = function (access_token) {
        return this.http.get(this.apiUrl + "/UserInfo", new http_1.RequestOptions({ headers: new http_1.Headers({ 'Authorization': "Bearer " + access_token }) }));
    };
    AccountsService.prototype.signupExternalUser = function (access_token) {
        var headers = new http_1.Headers({
            'content-type': 'application/json',
            'Authorization': "Bearer " + access_token
        });
        return this.http.post(this.apiUrl + "/RegisterExternal", null, new http_1.RequestOptions({ headers: headers }));
    };
    AccountsService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.Http])
    ], AccountsService);
    return AccountsService;
}());
exports.AccountsService = AccountsService;
//# sourceMappingURL=accounts.service.js.map