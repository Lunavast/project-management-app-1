import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask } from '../models/task';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'task-item',
        styles:[
        require('./task-item.scss')
    ],
    template:
    `<div class="task-item">
        <i class="fa fa-check" aria-hidden="true"></i>
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
}