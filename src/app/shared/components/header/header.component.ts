import { Component } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import APPLICATION_CONSTANTS from '../../constants/constants';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  get userName() {
    return this.storage.getSession(APPLICATION_CONSTANTS.AUTHENTICATION_STORAGE_KEY)?.user.displayName ?? ''
  }

  constructor(
    private storage: StorageService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  logout() {
    this.storage.clearStorage()
    this.router.navigate(['../login'], {
      relativeTo: this.activatedRoute
    })
  }
}
