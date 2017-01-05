import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../auth';

import { HomeDashboardComponent } from './components/home-dashboard';

const routes: Routes = [
    { path: 'home', component: HomeDashboardComponent, canActivate: [AuthGuard]}
];

@NgModule({
    declarations: [
        HomeDashboardComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]   
})

export class HomeModule{ }