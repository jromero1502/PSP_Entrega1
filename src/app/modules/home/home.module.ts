import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksDashboardComponent } from './components/tasks-dashboard/tasks-dashboard.component';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [
    TasksDashboardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
