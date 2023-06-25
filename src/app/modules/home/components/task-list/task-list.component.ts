import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskModel } from 'src/app/shared/models/tasks/tasks.model';
import { TaskFormComponent } from '../task-form/task-form.component';
import { StorageService } from 'src/app/shared/services/storage.service';
import APPLICATION_CONSTANTS from 'src/app/shared/constants/constants';

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

  @Input()
  listId = ''

  defaultTask = {
    title: '',
    createdBy: this.storage.getSession(APPLICATION_CONSTANTS.AUTHENTICATION_STORAGE_KEY)?.user.email ?? '',
    createdDate: new Date(),
    description: '',
    modifiedDate: new Date(),
    state: this.listId ?? ''
  }

  constructor(
    private dialog: MatDialog,
    private storage: StorageService
  ) { }

  openAddForm(task: TaskModel) {
    const ref = this.dialog.open(TaskFormComponent, {
      width: '45%',
      data: task
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
