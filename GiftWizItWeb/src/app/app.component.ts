import { Component, OnInit } from '@angular/core';
import { WindowRefService } from './window-ref.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    private window: any;

    constructor(private windowRef: WindowRefService) {
        this.window = this.windowRef.nativeWindow;
    }

    title = 'app';
    public username: string;
    public isLoggedIn: boolean = false;

    public ngOnInit() {
        if (this.window.gw_app.userInfo.username !== undefined) {
            this.username = this.window.gw_app.userInfo.username;
            this.isLoggedIn = true;
        } else {
            this.username = "Guest";
        }
    }
}
