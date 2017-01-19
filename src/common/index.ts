import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../auth';
import { HomeModule} from '../home';
import { TasksModule } from '../tasks';

// import { NavigationComponent } from './components/navigation';

import { HomeDashboardComponent } from '../home/components/home-dashboard';
import { TaskViewComponent } from '../tasks/components/task-view';

const routes: Routes = [
//    { path: 'navigation', component: NavigationComponent, canActivate: [AuthGuard]},
   { path: 'home', component: HomeDashboardComponent, canActivate: [AuthGuard]},
   { path: 'tasks', component: TaskViewComponent, canActivate:[ AuthGuard]}
];

@NgModule({
    declarations: [
        // NavigationComponent
    ],
    imports: [ 
        RouterModule.forChild(routes),
        HomeModule,
        TasksModule
    ],
    exports: [ 
        RouterModule
    ]
})
export class RoutingModule{

}