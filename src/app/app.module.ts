import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import {FakeBackendInterceptor, fakeBackendProvider} from './_helpers/backend';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

// import { Authentication} from './_guards/authentication';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';
// import { AuthenticationService} from './services/authentication.service';
// import { UserService } from './services/user.service';
import { ChartModule } from 'angular-highcharts';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material';
import { HighchartComponent } from './components/highchart/highchart.component';
import { SigninComponent } from './components/user/signin/signin.component';
import { SignupComponent } from './components/user/signup/signup.component';
import { AlertComponent } from './_directives/alert/alert.component';
// import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { CanActivate } from '@angular/router';
import {
  AuthGuardService as AuthGuard
} from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { JwtHelper } from 'angular2-jwt';
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full', canActivate: [AuthGuard]  },
  { path: 'dashboard', component: DashboardComponent,  canActivate: [AuthGuard] },
  { path: 'highchart', component: HighchartComponent,  canActivate: [AuthGuard]  },
  { path: 'signin', component: SigninComponent},
  // { path: 'register', component: SignupComponent},
  // { path: '**', redirectTo: 'register'},
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HighchartComponent,
    SigninComponent,
    SignupComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    ChartModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    // HttpClientModule,
    MatCardModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    AuthGuard,
    AuthService,
    JwtHelper
    // Authentication,
    // AuthenticationService,
    // UserService,
    // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
  // fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
