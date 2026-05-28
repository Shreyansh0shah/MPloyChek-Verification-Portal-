import { Component } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { Router } from '@angular/router';

import { MatCardModule } from '@angular/material/card';

import { MatInputModule } from '@angular/material/input';

import { MatButtonModule } from '@angular/material/button';

import { MatFormFieldModule } from '@angular/material/form-field';

import { MatSelectModule } from '@angular/material/select';

import { AuthService } from '../../services/auth';

import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-register',

  standalone: true,

  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    CommonModule,
    MatIconModule,
  ],

  templateUrl: './register.html',

  styleUrl: './register.css',
})
export class Register {
  registerForm: FormGroup;
  passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
  roles = ['Admin', 'General User'];
 
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
  name: ['', [Validators.required]],
  email: ['', [Validators.required, Validators.email]],
  password: ['', [
    Validators.required,
    Validators.minLength(8),
    Validators.pattern(this.passwordPattern)
  ]],
  role: ['General User', [Validators.required]],
});
  }

  onRegister(): void {
    if (this.registerForm.invalid) {
      return;
    }

    this.authService
      .register(this.registerForm.value)
      .subscribe({

        next: () => {

          alert('Registration Successful');

          this.router.navigate(['/']);
        },

        error: (error: any) => {

          console.log(error);

          alert(
            error.error.message ||
            'Registration Failed'
          );
        },
      });
  }
}