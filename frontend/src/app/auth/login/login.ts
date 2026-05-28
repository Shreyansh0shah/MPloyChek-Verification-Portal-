import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgxSpinnerModule } from 'ngx-spinner';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',

  standalone: true,

  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    NgxSpinnerModule,
  ],

  templateUrl: './login.html',

  styleUrl: './login.css',
})
export class Login {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],

      password: ['', [Validators.required]],
    });
  }

  onLogin(): void {

  if (this.loginForm.invalid) {
    return;
  }

  // SHOW SPINNER
  this.spinner.show();

  // FAKE DELAY
  setTimeout(() => {

    this.authService
      .login(this.loginForm.value)
      .subscribe({

        next: (response: any) => {

          console.log(
            'LOGIN SUCCESS',
            response
          );

          localStorage.setItem(
            'token',
            response.token
          );

          // HIDE SPINNER
          this.spinner.hide();

         alert('Login Successful');

// STORE USER
localStorage.setItem(
  'user',
  JSON.stringify(response.user)
);

// CHECK ROLE
if (response.user.role === 'Admin') {

  this.router.navigate(['/admin']);

} else {

  this.router.navigate(['/dashboard']);
}
        },

        error: (error: any) => {

          console.log(error);

          // HIDE SPINNER
          this.spinner.hide();

          alert(
            error.error.message ||
            'Invalid credentials'
          );
        },
      });

  }, 2000);
}
}