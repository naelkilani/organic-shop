import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import * as firebase from 'firebase';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  user: firebase.User;

  constructor(private angularFireAuth: AngularFireAuth) { 
    this.angularFireAuth.authState
    .subscribe(user => this.user = user);
  }

  logout() {
    this.angularFireAuth.signOut();
  }
}
