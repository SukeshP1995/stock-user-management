import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  // declare a variable 'routeURL'
  // to keep track of current active route
  routeURL: string;

  constructor(private authService: AuthService, private router: Router) {
    this.routeURL = this.router.url;
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (!this.authService.loggedIn && this.routeURL !== '/login') {
        this.routeURL = '/login';
        this.router.navigate(['login'], {
          queryParams: {
            return: 'login'
          }
        });
        return resolve(false);
      } else {
        this.routeURL = this.router.url;
        return resolve(true);
      }
    });
  }
}