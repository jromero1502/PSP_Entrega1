import { Component, OnDestroy, OnInit } from '@angular/core';
import APPLICATION_CONSTANTS from 'src/app/shared/constants/constants';
import { TaskModel } from 'src/app/shared/models/tasks/tasks.model';
import { AppStateService } from 'src/app/shared/services/app-state.service';
import { RepositoryService } from 'src/app/shared/services/repository.service';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-tasks-dashboard',
  templateUrl: './tasks-dashboard.component.html',
  styleUrls: ['./tasks-dashboard.component.scss']
})
export class TasksDashboardComponent implements OnInit, OnDestroy {

  tasksBoards: TaskBoardModel[] = [
    {
      board: 'Backlog',
      id: 'backlog',
      tasks: []
    },
    {
      board: 'To Do',
      id: 'to-do',
      tasks: []
    },
    {
      board: 'In Progress',
      id: 'in-progress',
      tasks: []
    },
    {
      board: 'Done',
      id: 'done',
      tasks: []
    }
  ]  

  constructor(
    private repository: RepositoryService,
    private storage: StorageService,
    private appState: AppStateService
  ) {}

  ngOnInit(): void {
    this.appState.setShowHeader = true
    this.getTasks()
  }

  getTasks() {
    const userData = this.storage.getSession(APPLICATION_CONSTANTS.AUTHENTICATION_STORAGE_KEY)
    this.repository.getByEmail(userData?.user.email).subscribe(data => {
      this.tasksBoards = [
        {
          board: 'Backlog',
          id: 'backlog',
          tasks: []
        },
        {
          board: 'To Do',
          id: 'to-do',
          tasks: []
        },
        {
          board: 'In Progress',
          id: 'in-progress',
          tasks: []
        },
        {
          board: 'Done',
          id: 'done',
          tasks: []
        }
      ] 
      data.forEach(task => {
        this.tasksBoards.filter(board => board.id === task['state'])[0]?.tasks.push({
          createdBy: task['createdBy'],
          createdDate: new Date(task['createdDate']?.seconds * 1000),
          description: task['description'],
          modifiedDate: new Date(task['modifiedDate']?.seconds * 1000),
          state: task['state'],
          title: task['title'],
          id: task['id']
        })
      })
    })
  }

  ngOnDestroy(): void {
    this.appState.setShowHeader = false
  }
}

export interface TaskBoardModel {
  board: string,
  id: string,
  tasks: TaskModel[]
}