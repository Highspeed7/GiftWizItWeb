import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AccountsService } from '../accounts.service';
import { WindowRefService } from '../window-ref.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public loginForm: FormGroup;
    private window: any;

    constructor(private acntSvc: AccountsService, private windowRef: WindowRefService) {
        this.window = windowRef.nativeWindow;
    }

    ngOnInit() {
        this.loginForm = new FormGroup(
            {
                'email': new FormControl('', [Validators.required]),
                'password': new FormControl('', [Validators.required])
            }
        )
    }

    public onLoginSubmit() {
        let username = this.loginForm.controls.email.value;
        let password = this.loginForm.controls.password.value;

        this.acntSvc.loginUserLocal(username, password).subscribe((response: any) => {
            let res: any = JSON.parse(response._body);

            if(res.access_token !== undefined) {
                localStorage.setItem('access_token', res.access_token);
                this.window.gw_app.userInfo.username = res.userName;
            }
        });     
    }
}
