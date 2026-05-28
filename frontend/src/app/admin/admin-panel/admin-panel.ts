import { Component,OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';

import { MatButtonModule } from '@angular/material/button';

import { MatInputModule } from '@angular/material/input';

import { MatFormFieldModule } from '@angular/material/form-field';

import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-admin-panel',

  standalone: true,

  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
  ],

  templateUrl: './admin-panel.html',

  styleUrl: './admin-panel.css',
})

export class AdminPanel implements OnInit {

  searchText: string = '';

  // users = [
  //   {
  //     name: 'Shreyansh',
  //     email: 'admin@test.com',
  //     role: 'Admin',
  //   },

  //   {
  //     name: 'User One',
  //     email: 'user@test.com',
  //     role: 'General User',
  //   },
  // ];

  users: any[] = [];
  ngOnInit(): void {

  this.loadUsers();
}

  newUser = {
    name: '',
    email: '',
    role: '',
  };

  

  filteredUsers() {

    return this.users.filter((user: any) =>

      user.name
        .toLowerCase()
        .includes(
          this.searchText.toLowerCase()
        )

    );
  }
  
loadUsers(): void {

  this.authService
    .getUsers()
    .subscribe({

      next: (response: any) => {

        this.users = response;
      },

      error: (error: any) => {

        console.log(error);
      },
    });
}

  addUser(): void {

    if (
      !this.newUser.name ||
      !this.newUser.email ||
      !this.newUser.role
    ) {
      return;
    }

    this.users.push({
      ...this.newUser,
    });

    this.newUser = {
      name: '',
      email: '',
      role: '',
    };
  }

  deleteUser(index: number): void {

    this.users.splice(index, 1);
  }
  constructor(
  private authService: AuthService
) {}

  logout(): void {

    localStorage.clear();

    window.location.href = '/';
  }
}
