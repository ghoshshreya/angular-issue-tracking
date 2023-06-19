import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment } from '@angular/router';

@Injectable()
export class AuthenticationService implements CanLoad {
  constructor(private router: Router) {}

  canLoad(route: Route, segments: UrlSegment[]): boolean {
    //determine whether you want to load the module
    //return true or false
    const loggedInUserName = sessionStorage.getItem('userName');
    if (!loggedInUserName) this.router.navigate(['login']);
    return !!loggedInUserName;
  }
}
