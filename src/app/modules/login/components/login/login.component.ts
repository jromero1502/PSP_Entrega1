import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import APPLICATION_CONSTANTS from 'src/app/shared/constants/constants';
import { AuthService } from 'src/app/shared/services/auth.service';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginOptions: LoginOptionModel[] = [
    {
      url: 'assets/img/google-icon.svg',
      text: 'Inicia sesión con google',
      onClick: this.login.bind(this)
    }
  ]

  constructor( 
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private storageService: StorageService
  ) {

  }

  login() {
    this.authService.loginWithGoogle().subscribe(res => {
      this.storageService.setSession(APPLICATION_CONSTANTS.AUTHENTICATION_STORAGE_KEY, res)
      this.router.navigate(['../home/my-tasks'], {
        relativeTo: this.activatedRoute
      })
    })
  }
}

export interface LoginOptionModel {
  url: string,
  text: string,
  onClick?: (e?: any) => void
}