import { Component, Input } from '@angular/core';
import { TaskModel } from 'src/app/shared/models/tasks/tasks.model';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent {

  @Input()
  task!: TaskModel

  state = 'new'

  get newStateLabel() {
    return TaskCardComponent.NEW_STATE
  }

  get editStateLabel() {
    return TaskCardComponent.EDIT_STATE
  }

  public static readonly NEW_STATE = 'new'
  public static readonly EDIT_STATE = 'edit'
}
