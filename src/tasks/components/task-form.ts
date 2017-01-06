import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'task-form',
    styles: [
        require('./task-form.scss')
    ],
    template: `
    <form class="task-form" (ngSubmit)="submit()" novalidate>
        <input [(ngModel)]="title"
        (keyup.escape)="clear()"
        autocomplete="off"
        autofocus
        class="task-form__input"
        name="title"
        placeholder="What needs to be done?"
        required
        type="text">
    </form>
    `
})

export class TaskFormComponent{

}