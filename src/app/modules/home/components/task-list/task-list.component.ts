import { Component, Input } from '@angular/core';
import { TaskModel } from 'src/app/shared/models/tasks/tasks.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {

  @Input()
  listTitle = ''

  tasks: TaskModel[] = [
    {
      title: 'Dummy',
      description: 'dummy description',
      createdBy: 'jromero',
      createdDate: new Date(),
      modifiedDate: new Date(),
      state: 'to-do'
    }
  ]
}
