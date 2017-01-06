import { Component } from '@angular/core';
import { AuthService } from '../../auth/services/auth-service';


import { DateComponent } from './date';

@Component({
    selector: 'dashboard',
    styles:[
        require('./home-dashboard.scss')
    ],
    template: `
        <div class="container dashboard-container">
            <date-now></date-now>
            <h1>Hello {{name}}!</h1>
            <em>{{email}}</em>
            <article>
                <p>This is your home dashboard!</p>
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

