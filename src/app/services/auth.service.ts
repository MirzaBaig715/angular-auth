import { Injectable } from '@angular/core';
import { JwtHelper} from 'angular2-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAuth: boolean;
  constructor(public jwtHelper: JwtHelper) {
    this.isAuth = false;
    console.log('Auths', this.isAuth);
  }
  public isAuthenticated(): boolean {
    return this.isAuth;
  }
  public logout(): void {
    this.isAuth = false;
  }
  public sigin(username: string, password: string): boolean {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      this.isAuth = (currentUser['username'] === 'mirza' && currentUser['password'] === 'password123');
      return this.isAuth;
    }
    return false;
  }
}
