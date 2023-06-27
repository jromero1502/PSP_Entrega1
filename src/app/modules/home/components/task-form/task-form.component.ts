import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import APPLICATION_CONSTANTS from 'src/app/shared/constants/constants';
import { TaskModel } from 'src/app/shared/models/tasks/tasks.model';
import { RepositoryService } from 'src/app/shared/services/repository.service';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent {

  formGroup: FormGroup

  validStates = [
    {
      id: 'backlog',
      value: 'Backlog'
    },
    {
      id: 'to-do',
      value: 'To Do'
    },
    {
      id: 'in-progress',
      value: 'In Progress'
    },
    {
      id: 'done',
      value: 'Done'
    }
  ]

  task: TaskModel

  get mappedTask() {
    return {
      ...this.task,
      title: this.formGroup.get('title')?.value,
      description: this.formGroup.get('description')?.value,
      state: this.formGroup.get('state')?.value,
      modifiedDate: new Date(),
    }
  }

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<TaskFormComponent>,
    @Inject(MAT_DIALOG_DATA) public taskData: TaskModel,
    private repository: RepositoryService,
    private storage: StorageService
  ) {
    this.formGroup = this.buildFormGroup()
    this.task = taskData ?? {
      title: '',
      createdBy: this.storage.getSession(APPLICATION_CONSTANTS.AUTHENTICATION_STORAGE_KEY)?.user.email ?? '',
      createdDate: new Date(),
      description: '',
      modifiedDate: new Date(),
      state: ''
    }
    this.mapDataToFormGroup(this.task)
  }

  private mapDataToFormGroup(task: TaskModel) {
    this.formGroup.reset(task)
  }

  private buildFormGroup(): FormGroup {
    return this.fb.group({
      title: [
        '',
        [
          Validators.required
        ]
      ],
      description: [
        '',
        [
          Validators.required
        ]
      ],
      state: [
        '',
        [
          Validators.required
        ]
      ],
    })
  }

  onClickAction() {
    this.repository.saveTask(this.mappedTask)
      .then(res => {
        console.log(res)
        this.dialogRef.close()
      })
      .catch(err => {
        console.log(err)
        this.dialogRef.close()
      })
  }

  deleteItem() {
    this.repository.deleteTask(this.mappedTask)
      .then(res => {
        console.log(res)
        this.dialogRef.close()
      })
      .catch(err => {
        console.log(err)
        this.dialogRef.close()
      })
  }
}
