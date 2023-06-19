import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { UserDetailsService } from '../services/userDetails.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public hide = true;
  public loginForm: FormGroup;
  public loginSubscription: Subscription | undefined;

  public loginUrl =
    'https://my-json-server.typicode.com/ghoshshreya/mockjson/posts';

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private userService: UserDetailsService
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {}

  login() {
    if (this.loginForm.valid) {
      this.loginSubscription = this.apiService
        .get(this.loginUrl, [])
        .subscribe((res: any) => {
          // dummy check for email, ideally check will be done against both email and password in the backend
          if (
            res?.userDetails?.isValid &&
            res?.userDetails?.email === 'john.doe@example.com' &&
            this.loginForm.get('password').value === 'test@123'
          ) {
            this.userService.userDetails(res.userDetails);
          } else {
          }
        });
      this.router.navigate(['/home']);
    }
  }
}
