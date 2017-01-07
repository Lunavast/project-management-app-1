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
            <h4>Hello {{name}}!</h4>
            <em>{{email}}</em>
            <article>
                <p>This is your home dashboard! You can add tasks, view tasks and mark task if completed</p>
            </article>
            <task-view></task-view>
        </div>
     `
})

export class HomeDashboardComponent{ 
    constructor (private auth: AuthService) {}
    photo = this.auth.userPhotoLink;
    email = this.auth.userEmail;
    name = this.auth.userDisplayName;
}

