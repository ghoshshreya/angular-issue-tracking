import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService implements CanLoad {

  constructor(private router: Router) {}
 
  canLoad(route: Route): boolean {
    //determine whether you want to load the module
    //return true or false
    const loggedInUserName =  sessionStorage.getItem('userName');
    if(!loggedInUserName) this.router.navigate(['login']);
    return !!loggedInUserName; 
  }
} 
 

}