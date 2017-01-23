import { Component } from '@angular/core';

@Component({
    selector: 'project-view',
    styles:[
        require('./project-view.scss')
    ],
    template: `
        <div class="project-view container">
            <button class="btn-danger">
                Add New Project
            </button>
        </div>
    `
})

export class ProjectViewComponent{

}