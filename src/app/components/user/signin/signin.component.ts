import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { HttpClient} from '@angular/common/http';
import { DataServiceService } from '../../../services/data-service.service';
import { AuthService } from '../../../services/auth.service';
import {Observable} from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Component({templateUrl: 'signin.component.html'})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  private token: string;
  private token_expires: Date;
  public username: string;
  public errors: any = [];
  public isAuth: boolean;


  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private _authService: AuthService,
    public client: HttpClient,
    public dataService: DataServiceService) {
  }

  ngOnInit() {
    // this.dataService.currentUsername.subscribe(username => this.username = '');
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    // reset login status
    // this.authService.logout();

    // get return url from route parameters or default to '/'
    // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  getUserName() {
    return this.username;
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  //
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    const result = 0;
    this._authService.sigin(
      {
        'username': this.f.username.value,
        'password': this.f.password.value
      }).subscribe(
        data => {
            this.token = data['token'];
            console.log('token', this.token);
            // decode the token to read the username and expiration timpstamp
            const token_parts = this.token.split(/\./);
            const token_decoded = JSON.parse(window.atob(token_parts[1]));
            this.token_expires = new Date(token_decoded.exp * 1000);
            this.username = token_decoded.username;
            console.log('decoded token', token_decoded);
            this._authService.setAuth(true);
            // return {'token_expire': this.token_expires, 'username': this.username};
            // this.dataService.changeUserName(this.username);
            // const subject = new BehaviorSubject(this.username);
            // subject.next(this.username);
            this.dataService.setUsername(this.username);
            console.log('dataService ChangeUsername', this.username);
            this.router.navigate(['/dashboard']);
        },
      error1 => {
        this.router.navigate(['/signup']);
      }
    );
    // if (result) {
    //   console.log('result', result);
    //   this.router.navigate(['/dashboard']);
    // } else {
    //   console.log('result', result);
    //   this.router.navigate(['/signup']);
    // }
    // if (this._authService.sigin({this.f.username.value, this.f.password.value})) {
    //   this.router.navigate(['/dashboard']);
    // } else {
    //   this.router.navigate(['/signup']);
    // }
    // .pipe(first())
    //   .subscribe(
    //     data => {
    //       this.router.navigate([this.returnUrl]);
    //     },
    //     error => {
    //       this.loading = false;
    //     });
  }
}

