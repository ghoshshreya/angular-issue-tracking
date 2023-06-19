import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class UserDetailsService {
  constructor(private router: Router) {}

  public _userDetails = {};

  set userDetails(userData: any) {
    this._userDetails = this.userDetails;
  }

  get userDetails() {
    return this._userDetails;
  }

  public logout() {
    this.userDetails = null;
    this.router.navigate(['/login'], { queryParams: { isLoggedOut: 'true' } });
  }
}
