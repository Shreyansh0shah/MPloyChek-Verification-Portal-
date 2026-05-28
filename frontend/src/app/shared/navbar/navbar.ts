import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-navbar',

  standalone: true,

  imports: [
    MatToolbarModule,
    MatButtonModule,
  ],

  templateUrl: './navbar.html',

  styleUrl: './navbar.css',
})
export class NavbarComponent {
  constructor(private router: Router) {}

  logout(): void {
    localStorage.removeItem('token');

    this.router.navigate(['/']);
  }
}