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
var forms_1 = require("@angular/forms");
var accounts_service_1 = require("../accounts.service");
var window_ref_service_1 = require("../window-ref.service");
var router_1 = require("@angular/router");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(acntSvc, windowRef, router, route) {
        this.acntSvc = acntSvc;
        this.windowRef = windowRef;
        this.router = router;
        this.route = route;
        this.socialLogins = [];
        this.socialAuthUrl = '';
        this.window = this.windowRef.nativeWindow;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginForm = new forms_1.FormGroup({
            'email': new forms_1.FormControl('', [forms_1.Validators.required]),
            'password': new forms_1.FormControl('', [forms_1.Validators.required])
        });
        this.acntSvc.getExternalUrl().subscribe(function (r) {
            _this.socialLogins = JSON.parse(r._body);
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
        this.acntSvc.isUserRegistered(access_token).subscribe(function (response) {
            if (response.HasRegistered) {
                localStorage.setItem('accessToken', access_token);
                _this.window.gw_app.userInfo.username = response.Email;
            }
            else {
                _this.acntSvc.signupExternalUser(access_token).subscribe(function (response) {
                    _this.window.location.href = _this.socialAuthUrl;
                });
            }
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        }),
        __metadata("design:paramtypes", [accounts_service_1.AccountsService,
            window_ref_service_1.WindowRefService,
            router_1.Router,
            router_1.ActivatedRoute])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map