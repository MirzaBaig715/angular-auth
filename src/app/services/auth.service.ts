import { Injectable } from '@angular/core';
import { JwtHelper} from 'angular2-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public jwtHelper: JwtHelper) { }
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if (token) {
      return !this.jwtHelper.isTokenExpired(token);
    }
    console.log('token', token);
    return true;
  }
  public logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('token');
    console.log('token removed!');
  }
}
