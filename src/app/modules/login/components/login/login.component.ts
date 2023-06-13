import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

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
    },
    {
      url: 'assets/img/facebook-icon.svg',
      text: 'Inicia sesión con facebook'
    }
  ]

  constructor( 
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService
  ) {

  }

  login() {
    this.authService.loginWithGoogle().subscribe(res => {+
      console.log(res)
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