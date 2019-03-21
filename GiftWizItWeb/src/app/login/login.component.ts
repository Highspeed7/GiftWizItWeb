import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AccountsService } from '../accounts.service';
import { WindowRefService } from '../window-ref.service';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
 
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public loginForm: FormGroup;
    public socialLogins = [];
    private window: any;
    // TODO: Ambiguous; will need seperated if more social logins are made possible
    private socialAuthUrl: string = '';

    constructor(
        private acntSvc: AccountsService,
        private windowRef: WindowRefService,
        private router: Router,
        private route: ActivatedRoute) {
        this.window = this.windowRef.nativeWindow;
    }

    ngOnInit() {
        this.loginForm = new FormGroup(
            {
                'email': new FormControl('', [Validators.required]),
                'password': new FormControl('', [Validators.required])
            }
        )
        this.acntSvc.getExternalUrl().pipe(
            map(response => response.json())
        ).subscribe((r) => {
            this.socialLogins = r;
            // Set the social authorization url
            this.socialAuthUrl = r[0].Url
        });

        // Catch the access_token in url and verify weather or not the user is registered
        const fragment: string = this.route.snapshot.fragment;
        if (fragment) {
            var access_token = fragment.split("access_token=")[1].split("&")[0];
            if (access_token) {
                this.isUserRegistered(access_token);
            }
        }
    }

    public onLoginSubmit() {
        let username = this.loginForm.controls.email.value;
        let password = this.loginForm.controls.password.value;

        this.acntSvc.loginUserLocal(username, password).subscribe((response: any) => {
            let res: any = JSON.parse(response._body);

            if (res.access_token !== undefined) {
                localStorage.setItem('access_token', res.access_token);
                this.window.gw_app.userInfo.username = res.userName;
                this.acntSvc.loggedInSrc.next(true);
                this.router.navigate(['/']);
            }
        });
    }

    public socialLogin(url: string) {
        // set the url for use elsewhere.
        this.socialAuthUrl = url;
        this.window.location.href = this.socialAuthUrl;
    }

    private isUserRegistered(access_token: string) {
        this.acntSvc.isUserRegistered(access_token).pipe(
            map(response => response.json())
        ).subscribe((result: any) => {
            if (result.HasRegistered) {
                localStorage.setItem('access_token', access_token);
                this.window.gw_app.userInfo.username = result.Email;
                this.acntSvc.loggedInSrc.next(true);
                this.router.navigate(['/']);
            } else {
                this.acntSvc.signupExternalUser(access_token).subscribe((response: any) => {
                    this.window.location.href = this.socialAuthUrl;
                });
            }
        });
    }
}
