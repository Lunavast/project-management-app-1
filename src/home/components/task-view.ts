import { Component } from '@angular/core';
import { TaskFormComponent } from './task-form';

@Component({
    selector: 'task-view',
    styles:[
        require('./task-view.scss')
    ],
    template:`
    <div class="container task-view">
        <div class="row">
            <div class="col-md-4">
                <h4>Add Tasks</h4>
                <task-form></task-form>
            </div>
            <div class="col-md-4">
                <h4>Tasks List</h4>
            </div>
            <div class="col-md-4">
                <h4>Tasks Done</h4>
            </div>
        </div>
    </div>
    
    `
})
export class TaskViewComponent{

}