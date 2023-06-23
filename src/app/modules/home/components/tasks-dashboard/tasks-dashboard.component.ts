import { Component, OnInit } from '@angular/core';
import { TaskModel } from 'src/app/shared/models/tasks/tasks.model';
import { RepositoryService } from 'src/app/shared/services/repository.service';

@Component({
  selector: 'app-tasks-dashboard',
  templateUrl: './tasks-dashboard.component.html',
  styleUrls: ['./tasks-dashboard.component.scss']
})
export class TasksDashboardComponent implements OnInit {

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
    private repository: RepositoryService
  ) {

  }

  ngOnInit(): void {
    this.getTasks()
  }

  getTasks() {
    this.repository.getByEmail('').subscribe(data => {
      data.forEach(task => {
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
        this.tasksBoards.filter(board => board.id === task['state'])[0]?.tasks.push({
          createdBy: task['createdBy'],
          createdDate: task['createdDate'],
          description: task['description'],
          modifiedDate: task['modifiedDate'],
          state: task['state'],
          title: task['title']
        })
      })
    })
  }

}

export interface TaskBoardModel {
  board: string,
  id: string,
  tasks: TaskModel[]
}