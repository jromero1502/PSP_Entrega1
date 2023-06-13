import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { LoginOptionUrlPipe } from './pipes/login-option-url.pipe';

@NgModule({
  declarations: [
    LoginComponent,
    LoginOptionUrlPipe
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
  ]
})
export class LoginModule { }
