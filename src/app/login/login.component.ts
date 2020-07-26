import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase'

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private angularFireAuth: AngularFireAuth) { }

  login() {
    this.angularFireAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }
}
