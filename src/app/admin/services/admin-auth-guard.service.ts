import { UsersService } from '../../shared/services/user.service';
import { AuthService } from '../../shared/services/auth.service';
import { Observable } from 'rxjs';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(private authService: AuthService, private usersService: UsersService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  : Observable<boolean> {
    return this.authService.AppUser$
    .pipe(map(appUser => appUser.isAdmin));  
  }
}
