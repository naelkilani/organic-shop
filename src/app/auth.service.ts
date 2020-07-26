import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;

  constructor(private angularFireAuth: AngularFireAuth) { 
    this.user$ = angularFireAuth.authState;
  }

  login() : void {
    this.angularFireAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout() : void {
    this.angularFireAuth.signOut();
  }
}
