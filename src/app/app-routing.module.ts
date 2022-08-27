import { Routes, RouterModule } from '@angular/router';
import { TaskListComponent } from '../task-list/task-list.component';
import { NgModule } from '@angular/core';
import { HelloComponent } from './hello.component';

const appRoutes: Routes = [
  { path: '', component: TaskListComponent },
  { path: 'task-list', component: TaskListComponent },
  { path: 'hello', component: HelloComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
