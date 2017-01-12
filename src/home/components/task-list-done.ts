import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { IDoneTask } from '../models/task-done';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'task-list-done',
    styles:[
        require('./task-list-done.scss')
    ],
    template: `
     <div class="task-list-done">
        <ol>
            <li *ngFor="let td of taskdone | async">
                <span>
                    {{td.title}}
                    <i class="fa fa-trash" aria-hidden="true"
                    (click)= "remove.emit()"></i>
                </span>
            </li>
        </ol>
     </div>
    `
})

export class TaskListDoneComponent {
    @Input() td: IDoneTask;
    @Input() filter1: string;
    @Input() taskdone: FirebaseListObservable<IDoneTask[]>;

}

