import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskModel } from 'src/app/shared/models/tasks/tasks.model';
import { TaskFormComponent } from '../task-form/task-form.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {

  @Input()
  listTitle = ''

  @Input()
  tasks: TaskModel[] = []

  constructor(
    private dialog: MatDialog
  ) {}

  openAddForm() {
    const ref = this.dialog.open(TaskFormComponent, {
      width: '45%'
    })

    ref.afterClosed().subscribe({
      next: data => {
        console.log(data)
      },
      error: err => {
        console.error(err)
      }
    })
  }
}
