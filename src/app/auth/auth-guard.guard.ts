import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  isAuthenticated(): boolean {
    const token = localStorage.getItem("token");
    return token !== null;
  }

  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isAuthenticated = this.isAuthenticated()

    if (!isAuthenticated) {
      this.router.navigate(["login"])
      return !isAuthenticated;
    }
    return isAuthenticated;
  }

}


@Injectable({
  providedIn: 'root'
})
export class LoginIn implements CanActivate {


  isAuthenticated(): boolean {
    const token = localStorage.getItem("token");
    return token !== null;
  }

  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isAuthenticated = this.isAuthenticated()

    if (isAuthenticated && state.url.includes('login')) {
      this.router.navigate(['/']);
      return isAuthenticated;
    }
    return !isAuthenticated;
  }

}
