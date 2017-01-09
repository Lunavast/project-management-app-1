import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { ITask } from '../models/task';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'task-list',
    template: `
    <div class="task-list">
        <task-item
         *ngFor="let task of tasks | async"
         [task]="task">
         </task-item>
    </div>
    `
})

export class TaskListComponent{
    @Input() filter: string;
    @Input() tasks: FirebaseListObservable<ITask[]>;

}