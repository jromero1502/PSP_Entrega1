import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksDashboardComponent } from './components/tasks-dashboard/tasks-dashboard.component';
import { HomeRoutingModule } from './home-routing.module';
import { TaskListComponent } from './components/task-list/task-list.component';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'


@NgModule({
  declarations: [
    TasksDashboardComponent,
    TaskListComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatButtonModule,
    MatIconModule    
  ]
})
export class HomeModule { }
