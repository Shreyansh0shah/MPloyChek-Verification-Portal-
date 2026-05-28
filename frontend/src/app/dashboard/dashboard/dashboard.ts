import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { NavbarComponent } from '../../shared/navbar/navbar';

import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-dashboard',

  standalone: true,

  imports: [
    CommonModule,
    NavbarComponent,
    MatCardModule,
  ],

  templateUrl: './dashboard.html',

  styleUrl: './dashboard.css',
})
export class DashboardComponent {
  user = {
    name: 'Shreyansh',
    email: 'admin@test.com',
    role: 'Admin',
  };

  records = [
    {
      title: 'Background Verification',
      status: 'Completed',
    },

    {
      title: 'Document Verification',
      status: 'Pending',
    },

    {
      title: 'Employment Check',
      status: 'Completed',
    },
  ];
}