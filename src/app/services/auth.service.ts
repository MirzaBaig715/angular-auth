import { Injectable } from '@angular/core';
import { JwtHelper} from 'angular2-jwt';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {errorHandler} from '@angular/platform-browser/src/browser';
import {Observable} from 'rxjs';
import { DataServiceService } from './data-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private httpOptions: any;
  private token: string;
  private token_expires: Date;
  public username: string;
  public errors: any = [];
  public isAuth: boolean;

  constructor(public http: HttpClient, private dataService: DataServiceService) {
    this.isAuth = false;
    this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
  }

  public isAuthenticated(): boolean {
    return this.isAuth;
  }
  public setAuth(auth: boolean) {
    this.isAuth = auth;
  }

  public getAuth() {
    return this.isAuth;
  }
  public logout(): void {
    this.isAuth = false;
    this.token = null;
    this.token_expires = null;
    this.username = null;
    this.dataService.clearUserName();
  }

  public sigin(user) {
    //   // const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    //   // if (currentUser) {
    //   //   this.isAuth = (currentUser['username'] === 'mirza' && currentUser['password'] === 'password123');
    //   //   return this.isAuth;
    //   // }
    //   // return false;
    //   this.http.post('http://f5390bdd.ngrok.io/login/', JSON.stringify(user), this.httpOptions).subscribe(
    //     data => {
    //       const s = this.updateData(data['token']);
    //       console.log('s', s);
    //       return s;
    //     },
    //     err => {
    //       this.errors = err['error'];
    //       console.log('error', this.errors);
    //       this.isAuth = false;
    //       return { 'errors': this.errors };
    //     }
    //   );
     return this.http.post('http://127.0.0.1:8000/api/login/', JSON.stringify(user), this.httpOptions);
      // .pipe(
      //   map(res => {
      //     return res;
      //   })
      // );
    // }
    //
    // public updateData(token) {
    //   this.token = token;
    //   this.errors = [];
    //   // decode the token to read the username and expiration timpstamp
    //   const token_parts = this.token.split(/\./);
    //   const token_decoded = JSON.parse(window.atob(token_parts[1]));
    //   this.token_expires = new Date(token_decoded.exp * 1000);
    //   this.username = token_decoded.username;
    //   console.log('decoded token', token_decoded);
    //   this.isAuth = true;
    //   return {'token_expire': this.token_expires, 'username': this.username};
    // }
  }
}
