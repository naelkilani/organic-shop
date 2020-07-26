import { AuthService } from './../auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  user$: any;

  constructor(private auth: AuthService) { 
    this.user$ = auth.user$;
  }

  logout() {
    this.auth.logout();
  }
}
