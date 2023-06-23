import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksDashboardComponent } from './components/tasks-dashboard/tasks-dashboard.component';
import { HomeRoutingModule } from './home-routing.module';
import { TaskListComponent } from './components/task-list/task-list.component';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon';
import { TaskCardComponent } from './components/task-card/task-card.component';
import { TaskFormComponent } from './components/task-form/task-form.component'
import { MatDialogModule } from '@angular/material/dialog'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'

@NgModule({
  declarations: [
    TasksDashboardComponent,
    TaskListComponent,
    TaskCardComponent,
    TaskFormComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class HomeModule { }
