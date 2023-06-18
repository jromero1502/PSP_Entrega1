import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks-dashboard',
  templateUrl: './tasks-dashboard.component.html',
  styleUrls: ['./tasks-dashboard.component.scss']
})
export class TasksDashboardComponent {

  tasksBoards = [
    'Backlog',
    'Ready to do',
    'In Progress',
    'Done'
  ]  

}
