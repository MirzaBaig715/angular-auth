import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-auth';
  public isLoggedIn: boolean;
  constructor(private authService: AuthService, private location: Location, private router: Router) {
    // console.log('location path', location.path());
  }
}
