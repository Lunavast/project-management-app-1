// 
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/pluck';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { TaskService } from '../services/task-service';
// 

import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask } from '../models/task';
import { IDoneTask } from '../models/task-done';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'task-item',
        styles:[
        require('./task-item.scss')
    ],
    template:
    `<div class="task-item">
        <i class="fa fa-check" aria-hidden="true"
           (click)="submitDoneTask()"
        ></i>
        <i class="fa fa-trash" aria-hidden="true"
            (click)="remove.emit()">
        </i><span>
        {{task.title}}
    </span></div>
    `
})
export class TaskItemComponent{
    @Input()task: ITask;
    @Input()taskdone: IDoneTask;
    @Output() remove = new EventEmitter(false);
    @Output() createDoneTask = new EventEmitter(false);

    filter: Observable<any>;
    constructor(public route: ActivatedRoute, public taskService: TaskService){
        this.filter = route.params
            .pluck('completed')
            .do((value: string) => taskService.filterDoneTasks(value));
    }

    submitDoneTask(): void{
        this.taskService.createDoneTask(this.task.title);
    }


}