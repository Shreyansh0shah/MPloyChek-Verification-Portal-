import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';

import { MatButtonModule } from '@angular/material/button';

import { MatInputModule } from '@angular/material/input';

import { MatFormFieldModule } from '@angular/material/form-field';

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
export class AdminPanel {
  users = [
    {
      name: 'Shreyansh',
      email: 'admin@test.com',
      role: 'Admin',
    },

    {
      name: 'User One',
      email: 'user@test.com',
      role: 'General User',
    },
  ];

  newUser = {
    name: '',
    email: '',
    role: '',
  };

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
}