import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../auth';

import { NavigationComponent } from './components/navigation';
import { HomeDashboardComponent } from './components/home-dashboard';

import { TaskViewComponent } from './components/task-view';
import { TaskFormComponent } from './components/task-form';
import { TaskListComponent } from './components/task-list';
import { TaskItemComponent } from './components/task-item';
import { TaskListDoneComponent } from './components/task-list-done';
import { TaskItemDoneComponent } from './components/task-item-done';

import { AutoFocusDirective } from './directives/autofocus-directive';
import { TaskService } from './services/task-service';

const routes: Routes = [
    { path: 'navigation', component: NavigationComponent, canActivate: [AuthGuard]},
    { path: 'home', component: HomeDashboardComponent, canActivate: [AuthGuard]},
    { path: 'tasks', component: TaskViewComponent, canActivate:[ AuthGuard]}
];

@NgModule({
    declarations: [
        AutoFocusDirective,
        NavigationComponent,
        HomeDashboardComponent,
        TaskViewComponent,
        TaskFormComponent,
        TaskListComponent,
        TaskItemComponent,
        TaskListDoneComponent,
        TaskItemDoneComponent
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