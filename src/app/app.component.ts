import { Component, OnInit } from '@angular/core';
import { AppStateService } from './shared/services/app-state.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Gestor de tareas';

  showHeader?: Observable<boolean>

  constructor(
    private appState: AppStateService
  ) {}

  ngOnInit(): void {
    this.showHeader = this.appState.showHeader
  }
}
