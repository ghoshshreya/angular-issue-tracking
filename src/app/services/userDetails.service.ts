import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserDetails {
  constructor() {}

  public _userDetails = {};

  set userDetails(userData: any) {
    this._userDetails = this.userDetails;
  }

  get userDetails() {
    return this._userDetails;
  }
}
