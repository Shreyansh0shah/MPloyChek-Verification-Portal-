import { Component } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';

import { MatCardModule } from '@angular/material/card';

import { FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';

import { MatInputModule } from '@angular/material/input';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',

  standalone: true,

  imports: [
    MatButtonModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
  ],

  templateUrl: './admin.html',

  styleUrl: './admin.css',
})
export class Admin {

  searchText: string = '';

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

  filteredUsers() {

    return this.users.filter((user: any) =>

      user.name
        .toLowerCase()
        .includes(
          this.searchText.toLowerCase()
        )

    );
  }

  logout(): void {

    localStorage.clear();

    window.location.href = '/';
  }
}