import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../auth';

import { HomeDashboardComponent } from './components/home-dashboard';
import { DateComponent } from './components/date';

import { TaskViewComponent } from './components/task-view';
import { TaskFormComponent } from './components/task-form';


const routes: Routes = [
    { path: 'home', component: HomeDashboardComponent, canActivate: [AuthGuard]}
];

@NgModule({
    declarations: [
        HomeDashboardComponent,
        DateComponent,
        TaskViewComponent,
        TaskFormComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]   
})

export class HomeModule{ }