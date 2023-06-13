import { Injectable } from '@angular/core';
import { signInWithPopup, Auth, GoogleAuthProvider } from '@angular/fire/auth';
import { Observable, catchError, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private firebaseAuth: Auth
  ) { }

  loginWithGoogle() {
    return from(signInWithPopup(this.firebaseAuth, new GoogleAuthProvider()))
  }
}
