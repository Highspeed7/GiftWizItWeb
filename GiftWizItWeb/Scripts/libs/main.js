(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/accounts.service.ts":
/*!*************************************!*\
  !*** ./src/app/accounts.service.ts ***!
  \*************************************/
/*! exports provided: AccountsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsService", function() { return AccountsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountsService = /** @class */ (function () {
    function AccountsService(http) {
        this.http = http;
        this.loggedInSrc = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
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
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
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
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append("Authorization", "bearer " + access_token);
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
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
        return this.http.get(this.apiUrl + "/UserInfo", new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Authorization': "Bearer " + access_token }) }));
    };
    AccountsService.prototype.signupExternalUser = function (access_token) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'content-type': 'application/json',
            'Authorization': "Bearer " + access_token
        });
        return this.http.post(this.apiUrl + "/RegisterExternal", null, new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers }));
    };
    AccountsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], AccountsService);
    return AccountsService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row top-spacer\"></div>\r\n<!--TODO: Consider placing within own component-->\r\n<nav class=\"navbar navbar-expand-sm top-nav\">\r\n    <a class=\"navbar-brand\">\r\n        <div class=\"row logo\">\r\n            <img src=\"../../../Content/Images/gw_logo2.png\" />\r\n        </div>\r\n    </a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarText\" aria-controls=\"navbarText\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarText\">\r\n        <ul class=\"navbar-nav mr-auto\"></ul>\r\n        <div class=\"navbar-text\">\r\n            <span>Welcome {{username}}</span>\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li routerLinkActive=\"active\" *ngIf=\"!isLoggedIn\">\r\n                    <a [routerLink]=\"['register']\">Register</a>\r\n                </li>\r\n                <li routerLinkActive=\"active\" *ngIf=\"!isLoggedIn; else elseBlock\">\r\n                    <a [routerLink]=\"['login']\">Login</a>\r\n                </li>\r\n                <ng-template #elseBlock>\r\n                    <li>\r\n                        <a (click)=\"onLogout()\">Logout</a>\r\n                    </li>\r\n                </ng-template>\r\n                <!--<li>@Html.ActionLink(\"Log in\", \"Login\", \"Account\", routeValues: null, htmlAttributes: new { id = \"loginLink\" })</li>-->\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>\r\n<div class=\"row-fluid\">\r\n    <app-left-ribbon></app-left-ribbon>\r\n    <div class=\"col-sm-10 main-content\">\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _window_ref_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./window-ref.service */ "./src/app/window-ref.service.ts");
/* harmony import */ var _accounts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accounts.service */ "./src/app/accounts.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(windowRef, acntSvc, router, route) {
        var _this = this;
        this.windowRef = windowRef;
        this.acntSvc = acntSvc;
        this.router = router;
        this.route = route;
        this.isLoggedIn = false;
        this.title = 'app';
        this.username = "Guest";
        this.window = this.windowRef.nativeWindow;
        this.acntSvc.logingedIn$.subscribe(function (l) {
            _this.isLoggedIn = l;
            if (_this.window.gw_app.userInfo.username !== undefined) {
                _this.username = _this.window.gw_app.userInfo.username;
                _this.isLoggedIn = true;
            }
            else {
                _this.username = "Guest";
            }
        });
    }
    AppComponent.prototype.onLogout = function () {
        var _this = this;
        this.acntSvc.logout().subscribe(function (r) {
            if (r.status === 200) {
                _this.acntSvc.loggedInSrc.next(false);
                console.log(r);
                _this.isLoggedIn = false;
                localStorage.removeItem("access_token");
                _this.router.navigate(['']);
                _this.username = "Guest";
            }
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_window_ref_service__WEBPACK_IMPORTED_MODULE_1__["WindowRefService"], _accounts_service__WEBPACK_IMPORTED_MODULE_2__["AccountsService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _left_ribbon_left_ribbon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./left-ribbon/left-ribbon.component */ "./src/app/left-ribbon/left-ribbon.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _accounts_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./accounts.service */ "./src/app/accounts.service.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// Services



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _left_ribbon_left_ribbon_component__WEBPACK_IMPORTED_MODULE_5__["LeftRibbonComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_7__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                    {
                        path: "register",
                        component: _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"]
                    },
                    {
                        path: "login",
                        component: _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"]
                    }
                ])
            ],
            providers: [_accounts_service__WEBPACK_IMPORTED_MODULE_8__["AccountsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/left-ribbon/left-ribbon.component.css":
/*!*******************************************************!*\
  !*** ./src/app/left-ribbon/left-ribbon.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/left-ribbon/left-ribbon.component.html":
/*!********************************************************!*\
  !*** ./src/app/left-ribbon/left-ribbon.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-2 col-lg-1 ml-5 side-ribbon\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12 side-ribbon-content\">\r\n            Content here!\r\n        </div>\r\n    </div>\r\n</div>    \r\n"

/***/ }),

/***/ "./src/app/left-ribbon/left-ribbon.component.ts":
/*!******************************************************!*\
  !*** ./src/app/left-ribbon/left-ribbon.component.ts ***!
  \******************************************************/
/*! exports provided: LeftRibbonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftRibbonComponent", function() { return LeftRibbonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LeftRibbonComponent = /** @class */ (function () {
    function LeftRibbonComponent() {
    }
    LeftRibbonComponent.prototype.ngOnInit = function () {
    };
    LeftRibbonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-left-ribbon',
            template: __webpack_require__(/*! ./left-ribbon.component.html */ "./src/app/left-ribbon/left-ribbon.component.html"),
            styles: [__webpack_require__(/*! ./left-ribbon.component.css */ "./src/app/left-ribbon/left-ribbon.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LeftRibbonComponent);
    return LeftRibbonComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"alpha-card col-sm-8 mx-auto\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n                <h5>Login using an existing account.</h5>\r\n                <form [formGroup]=\"loginForm\" (ngSubmit)=\"onLoginSubmit()\">\r\n                    <div class=\"form-group right-vertical-rule\">\r\n                        <label for=\"email\">Email: </label>\r\n                        <input id=\"email\"\r\n                               type=\"text\"\r\n                               class=\"form-control\"\r\n                               formControlName=\"email\" />\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12 d-none d-md-block\">\r\n                            <span class=\"or-divider float-right\">-OR-</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group right-vertical-rule\">\r\n                        <label for=\"password\" style=\"position: relative; top: -20px;\">Password: </label>\r\n                        <input id=\"password\"\r\n                               style=\"position: relative; top: -20px;\"\r\n                               type=\"password\"\r\n                               class=\"form-control\"\r\n                               formControlName=\"password\" />\r\n                    </div>\r\n                    <div class=\"btn-group\">\r\n                        <button class=\"btn btn-primary\">Submit</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n            <div class=\"col-sm-6\">\r\n                <h5>Login using one of the below methods.</h5>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-12\">\r\n                        <button class=\"btn btn-primary\" *ngFor=\"let social of socialLogins\" (click)=\"socialLogin(social.Url)\">{{social.Name}}</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _accounts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../accounts.service */ "./src/app/accounts.service.ts");
/* harmony import */ var _window_ref_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../window-ref.service */ "./src/app/window-ref.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(acntSvc, windowRef, router, route) {
        this.acntSvc = acntSvc;
        this.windowRef = windowRef;
        this.router = router;
        this.route = route;
        this.socialLogins = [];
        // TODO: Ambiguous; will need seperated if more social logins are made possible
        this.socialAuthUrl = '';
        this.window = this.windowRef.nativeWindow;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
        this.acntSvc.getExternalUrl().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) { return response.json(); })).subscribe(function (r) {
            _this.socialLogins = r;
            // Set the social authorization url
            _this.socialAuthUrl = r[0].Url;
        });
        // Catch the access_token in url and verify weather or not the user is registered
        var fragment = this.route.snapshot.fragment;
        if (fragment) {
            var access_token = fragment.split("access_token=")[1].split("&")[0];
            if (access_token) {
                this.isUserRegistered(access_token);
            }
        }
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var username = this.loginForm.controls.email.value;
        var password = this.loginForm.controls.password.value;
        this.acntSvc.loginUserLocal(username, password).subscribe(function (response) {
            var res = JSON.parse(response._body);
            if (res.access_token !== undefined) {
                localStorage.setItem('access_token', res.access_token);
                _this.window.gw_app.userInfo.username = res.userName;
                _this.acntSvc.loggedInSrc.next(true);
                _this.router.navigate(['/']);
            }
        });
    };
    LoginComponent.prototype.socialLogin = function (url) {
        // set the url for use elsewhere.
        this.socialAuthUrl = url;
        this.window.location.href = this.socialAuthUrl;
    };
    LoginComponent.prototype.isUserRegistered = function (access_token) {
        var _this = this;
        this.acntSvc.isUserRegistered(access_token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) { return response.json(); })).subscribe(function (result) {
            if (result.HasRegistered) {
                localStorage.setItem('access_token', access_token);
                _this.window.gw_app.userInfo.username = result.Email;
                _this.acntSvc.loggedInSrc.next(true);
                _this.router.navigate(['/']);
            }
            else {
                _this.acntSvc.signupExternalUser(access_token).subscribe(function (response) {
                    _this.window.location.href = _this.socialAuthUrl;
                });
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_accounts_service__WEBPACK_IMPORTED_MODULE_2__["AccountsService"],
            _window_ref_service__WEBPACK_IMPORTED_MODULE_3__["WindowRefService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-6 alpha-card mx-auto\">\r\n        <h5>Please Register</h5>\r\n        <form [formGroup]=\"registerForm\" (ngSubmit)=\"onRegisterSubmit()\">\r\n            <div class=\"form-group\">\r\n                <label for=\"email\">Email: </label>\r\n                <input id=\"email\"\r\n                       class=\"form-control\"\r\n                       type=\"text\"\r\n                       name=\"email\"\r\n                       formControlName=\"email\" />\r\n                <div \r\n                     class=\"alert alert-danger\" \r\n                     *ngIf=\"registerForm.get('email').errors?.required === true \r\n                     && registerForm.get('email').touched\">Email is required.</div>\r\n                <label for=\"password\">Password: </label>\r\n                <input id=\"password\"\r\n                       class=\"form-control\"\r\n                       type=\"password\"\r\n                       name=\"password\"\r\n                       formControlName=\"password\" />\r\n                <div\r\n                     class=\"alert alert-danger\"\r\n                     *ngIf=\"registerForm.get('password').errors?.required === true &&\r\n                     registerForm.get('password').touched\">\r\n                    Password is required.\r\n                </div>\r\n                <label for=\"confpass\">Confirm Password: </label>\r\n                <input id=\"confpass\"\r\n                       class=\"form-control\"\r\n                       type=\"password\"\r\n                       name=\"confpass\"\r\n                       formControlName=\"confPass\" />\r\n                <div\r\n                     class=\"alert alert-danger\"\r\n                     *ngIf=\"registerForm.get('confPass').errors?.required === true &&\r\n                     registerForm.get('confPass').touched\">\r\n                    Confirm Password is required.\r\n                </div>\r\n            </div>\r\n            <button class=\"btn btn-primary\">Submit</button>\r\n        </form>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _accounts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accounts.service */ "./src/app/accounts.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(accntSvc, router) {
        this.accntSvc = accntSvc;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            'confPass': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    };
    RegisterComponent.prototype.onUsernameChange = function (elem) {
        // Check if username available
        console.log(elem);
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var username = this.registerForm.controls.email.value;
        var password = this.registerForm.controls.password.value;
        var confPass = this.registerForm.controls.confPass.value;
        this.accntSvc.registerUser(username, password, confPass).subscribe(function (response) {
            console.log(response);
            _this.router.navigate(['login']);
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_accounts_service__WEBPACK_IMPORTED_MODULE_1__["AccountsService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/window-ref.service.ts":
/*!***************************************!*\
  !*** ./src/app/window-ref.service.ts ***!
  \***************************************/
/*! exports provided: WindowRefService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowRefService", function() { return WindowRefService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

function getWindow() {
    return window;
}
var WindowRefService = /** @class */ (function () {
    function WindowRefService() {
    }
    Object.defineProperty(WindowRefService.prototype, "nativeWindow", {
        get: function () {
            return getWindow();
        },
        enumerable: true,
        configurable: true
    });
    WindowRefService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], WindowRefService);
    return WindowRefService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Brian\source\repos\GiftWizItWeb\GiftWizItWeb\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map