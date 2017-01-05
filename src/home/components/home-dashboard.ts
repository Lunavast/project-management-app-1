import { Component } from '@angular/core';
import { AuthService } from '../../auth/services/auth-service';


@Component({
    selector: 'dashboard',
    styles:[
        require('./home-dashboard.scss')
    ],
    template: `
        <div class="wrapper">
            <img src='{{photo}}' width='85px' height='85px' />
            <em>{{email}}</em>
            <h1>Hello {{name}}!</h1>
            <p>This is your home dashboard!</p>
        </div>
     `
})

export class HomeDashboardComponent{ 
    constructor (private auth: AuthService) {}
    photo = this.auth.userPhotoLink;
    email = this.auth.userEmail;
    name = this.auth.userDisplayName;

}

