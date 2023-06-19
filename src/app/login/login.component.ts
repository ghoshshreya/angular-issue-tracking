import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { UserDetailsService } from '../services/userDetails.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  public hide = true;
  public loginForm: FormGroup;
  public loginUrl =
    'https://my-json-server.typicode.com/ghoshshreya/mockjson/userDetails';
  public loginSubscription: Subscription | undefined;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private userService: UserDetailsService,
    private _snackBar: MatSnackBar
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {}

  login() {
    if (this.loginForm.valid) {
      this.loginSubscription = this.apiService.get(this.loginUrl, []).subscribe(
        (res: any) => {
          // dummy check for email, ideally check will be done against both email and password in the backend
          if (
            res?.isValid &&
            res?.email === 'john.doe@example.com' &&
            this.loginForm.get('password')?.value === 'test@123'
          ) {
            this.userService.userDetails = res;
          } else {
            this._snackBar.open('Incorrect email/password', 'Error');
          }
        },
        (error) => {
          console.error('Here');
          this._snackBar.open(
            'An unexpected error occurred! Please try again later',
            'Error'
          );
        }
      );
      this.router.navigate(['/home']);
    } else {
      this._snackBar.open('Please enter username and password', 'Error');
    }
  }

  ngOnDestroy() {
    this.loginSubscription?.unsubscribe();
  }
}
