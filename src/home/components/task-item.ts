import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask } from '../models/task';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'task-item',
    template:
    `
    {{task}}
    `
})
export class TaskItemComponent{
    @Input()task: ITask;

}