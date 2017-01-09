import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask } from '../models/task';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'task-item',
    template:
    `<div class="task-item"><li>
        {{task.title}}
    </li></div>
    `
})
export class TaskItemComponent{
    @Input()task: ITask;

}