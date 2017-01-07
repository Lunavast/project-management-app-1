import { Component } from '@angular/core';

@Component({
    selector: 'task-form',
    styles: [
        require('./task-form.scss')
    ],
    template: `
        <form class="task-form" (ngSubmit)="submit()" novalidate>
            <input
                name="title"
                placeholder="What needs to be done?"
                required
                type="text"
            >
        </form>
    `
})

export class TaskFormComponent{

}