import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../auth';

import { HomeDashboardComponent } from './components/home-dashboard';
import { DateComponent } from './components/date';

import { TaskViewComponent } from './components/task-view';
import { TaskFormComponent } from './components/task-form';
import { TaskListComponent } from './components/task-list';
import { TaskItemComponent } from './components/task-item';
import { TaskListDoneComponent } from './components/task-list-done';

import { AutoFocusDirective } from './directives/autofocus-directive';
import { TaskService } from './services/task-service';

const routes: Routes = [
    { path: 'home', component: HomeDashboardComponent, canActivate: [AuthGuard]}
];

@NgModule({
    declarations: [
        AutoFocusDirective,
        HomeDashboardComponent,
        DateComponent,
        TaskViewComponent,
        TaskFormComponent,
        TaskListComponent,
        TaskItemComponent,
        TaskListDoneComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes)
    ],
    providers: [
        TaskService
    ]   
})

export class HomeModule{ }

export { TaskService };