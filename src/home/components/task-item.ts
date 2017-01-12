import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskService } from '../services/task-service';
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

    @Output() remove = new EventEmitter(false);
    @Output() createDoneTask = new EventEmitter(false);

    constructor(public taskService: TaskService){ }

    submitDoneTask(): void{
        this.taskService.createDoneTask(this.task.title);
        this.taskService.removeTask(this.task);
    }

}