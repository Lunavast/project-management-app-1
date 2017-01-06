import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../auth';

import { TaskFormComponent } from './components/task-form';

const routes: Routes = [
    
]
@NgModule({
    declarations: [
        TaskFormComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})

export class TasksModule { }