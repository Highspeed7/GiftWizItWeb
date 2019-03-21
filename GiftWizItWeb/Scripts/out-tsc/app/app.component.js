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
var window_ref_service_1 = require("./window-ref.service");
var accounts_service_1 = require("./accounts.service");
var router_1 = require("@angular/router");
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
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        __metadata("design:paramtypes", [window_ref_service_1.WindowRefService, accounts_service_1.AccountsService, router_1.Router, router_1.ActivatedRoute])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map