import {Component, OnDestroy, OnInit} from '@angular/core';
import { AuthService } from '../../services/auth.service';
// import { SigninComponent } from '../user/signin/signin.component';
import { DataServiceService } from '../../services/data-service.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  public isLoggedIn = false;
  public username: any;
  subscription: Subscription;
  constructor(private authService: AuthService, public dataService: DataServiceService) {

  }

  ngOnInit() {
    this.subscription = this.dataService.getUsername().subscribe(name => { this.username = name; });
    console.log('subscription ', this.subscription);
    // this.isLoggedIn = this.authService.getAuth();
    // this.userName = this.signinComponent.getUserName();
    // this.dataService.currentUsername.subscribe(userName => this.userName = userName);
  }
  logout() {
    this.authService.logout();
  }
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

}
