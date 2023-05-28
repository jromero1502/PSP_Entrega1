import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TasksDashboardComponent } from './components/tasks-dashboard/tasks-dashboard.component';

const routes: Routes = [
  {
    path: 'my-tasks',
    component: TasksDashboardComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule { }
