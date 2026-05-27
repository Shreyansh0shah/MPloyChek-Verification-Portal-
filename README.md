# Role-Based Verification Dashboard

A Single Page Application built as part of a Software Engineer Internship 
assessment for NSQTech Private Limited.

## Features
- JWT-style login with role-based access (Admin / General User)
- Async concurrent API calls using Promise.all on dashboard load
- Admin panel — add/remove users, configure API delay
- Real-time verification records table with search and filter
- API call logger with timestamps

## Tech Stack
- Angular 12+
- TypeScript
- Node.js
- REST API (dummy layer with configurable delay)

## Roles
| Role | Access |
|------|--------|
| Admin | Full dashboard + user management panel |
| General User | Own records only |

## Run Locally
```bash
git clone https://github.com/your-username/role-based-verification-dashboard
cd role-based-verification-dashboard
npm install
ng serve
```

## Demo Credentials
| User ID | Password | Role |
|---------|----------|------|
| admin01 | pass123 | Admin |
| user01 | pass456 | General User |
