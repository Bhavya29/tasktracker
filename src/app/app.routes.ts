import { Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {path: '', component: TasksComponent},
    {path: 'about', component: AboutComponent},
];
