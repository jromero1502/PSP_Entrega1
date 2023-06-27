import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  private _showHeader = new BehaviorSubject(false)

  get showHeader() {
    return this._showHeader.asObservable()
  }

  set setShowHeader(state: boolean) {
    this._showHeader.next(state)
  }

  constructor() { }
}
