import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IDoneTask } from '../models/task-done';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'task-item-done',
    template: `
     <div>
     {{td.title}}
     </div>
    `
})

export class TaskItemDoneComponent {
    @Input() td: IDoneTask;
}