import { Component } from '@angular/core';
import { AuthService } from '../../auth/services/auth-service';

import { DateComponent } from './date';


@Component({
    selector: 'dashboard',
    styles:[
        require('./home-dashboard.scss')
    ],
    template: `
        <navigation></navigation>
        <div class="container dashboard-container">
            <date-now></date-now>
            <h4>Hello {{name}}!</h4>
            <em>{{email}}</em>
            <article>
                <p>This is your home dashboard.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </article>
        </div>
     `
})

export class HomeDashboardComponent{ 
    constructor (private auth: AuthService) {}
    photo = this.auth.userPhotoLink;
    email = this.auth.userEmail;
    name = this.auth.userDisplayName;
}
