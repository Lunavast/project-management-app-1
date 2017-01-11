import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { IDoneTask } from '../models/task-done';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'task-list-done',
    template: `
     <div class="task-list-done">
        Hello World
     </div>
    `
})

export class TaskListDoneComponent {

}