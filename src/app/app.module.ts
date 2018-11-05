import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ChartModule } from 'angular-highcharts';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HighchartComponent } from './components/highchart/highchart.component';
import { SigninComponent } from './components/user/signin/signin.component';
import { SignupComponent } from './components/user/signup/signup.component';
import { AlertComponent } from './_directives/alert/alert.component';
import {
  AuthGuardService as AuthGuard
} from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { JwtHelper } from 'angular2-jwt';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'highchart', component: HighchartComponent, canActivate: [AuthGuard] },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HighchartComponent,
    SigninComponent,
    SignupComponent,
    AlertComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ChartModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatCardModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot()
  ],
  providers: [
    AuthGuard,
    AuthService,
    JwtHelper
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
