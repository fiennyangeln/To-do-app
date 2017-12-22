import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
const routes : Routes = [
  {
    path:'tasks',
    component : TasksComponent
  },
  {
    path:'',
    redirectTo : '/tasks',
    pathMatch : 'full'
  },
  {
    path:'detail/:_id',
    component : TaskDetailsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
