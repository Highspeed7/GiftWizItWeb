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
var accounts_service_1 = require("../accounts.service");
var forms_1 = require("@angular/forms");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(accntSvc) {
        this.accntSvc = accntSvc;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = new forms_1.FormGroup({
            'email': new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.email]),
            'password': new forms_1.FormControl('', [forms_1.Validators.required]),
            'confPass': new forms_1.FormControl('', [forms_1.Validators.required])
        });
    };
    RegisterComponent.prototype.onUsernameChange = function (elem) {
        // Check if username available
        console.log(elem);
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var username = this.registerForm.controls.email.value;
        var password = this.registerForm.controls.password.value;
        var confPass = this.registerForm.controls.confpass.value;
        this.accntSvc.registerUser(username, password, confPass).subscribe(function (response) {
            console.log(response);
        });
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.css']
        }),
        __metadata("design:paramtypes", [accounts_service_1.AccountsService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map