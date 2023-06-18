import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../services/storage.service';
import APPLICATION_CONSTANTS from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {

  constructor(
    private storageService: StorageService
  ) {

  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const authenticationItem = this.storageService.getSession(APPLICATION_CONSTANTS.AUTHENTICATION_STORAGE_KEY)
    return authenticationItem && authenticationItem != '';
  }
  
}
