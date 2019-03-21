"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var left_ribbon_component_1 = require("./left-ribbon/left-ribbon.component");
var register_component_1 = require("./register/register.component");
var http_1 = require("@angular/http");
// Services
var accounts_service_1 = require("./accounts.service");
var login_component_1 = require("./login/login.component");
var common_1 = require("@angular/common");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                left_ribbon_component_1.LeftRibbonComponent,
                register_component_1.RegisterComponent,
                login_component_1.LoginComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                forms_1.ReactiveFormsModule,
                common_1.CommonModule,
                router_1.RouterModule.forRoot([
                    {
                        path: "register",
                        component: register_component_1.RegisterComponent
                    },
                    {
                        path: "login",
                        component: login_component_1.LoginComponent
                    }
                ])
            ],
            providers: [accounts_service_1.AccountsService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map