import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import * as firebase from 'firebase';
import { Observable } from 'rxjs';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  user$: Observable<firebase.User>;

  constructor(private angularFireAuth: AngularFireAuth) { 
    this.user$ = this.angularFireAuth.authState;
  }

  logout() {
    this.angularFireAuth.signOut();
  }
}
