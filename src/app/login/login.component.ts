import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public hide = true;
  public loginForm: FormGroup;
  public loginSubscription: Subscription | undefined;

  public loginUrl = 'https://my-json-server.typicode.com/ghoshshreya/mockjson/posts';

  constructor(
    private fb: FormBuilder, private apiService: ApiService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  ngOnInit() {}

  login() {
    this.loginSubscription = this.apiService
      .get(this.loginUrl, [])
      .subscribe((res) => console.log(res));
    console.log('login');
    this.router.navigate(['/home']);
  }
}
