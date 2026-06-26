# Student Mini Project Management Portal

A full-stack web application developed using **React, Vite, Tailwind CSS, Node.js, Express.js, and MySQL** to help students efficiently manage their mini project tasks.

---

# Project Overview

The Student Mini Project Management Portal is a task management application that enables users to create, update, search, filter, sort, and delete project tasks. It also provides dashboard statistics and a modern responsive user interface with Dark Mode support.

---

# Features

* Create New Tasks
* Edit Existing Tasks
* Delete Tasks with Confirmation
* Dashboard Statistics

  * Total Tasks
  * Pending Tasks
  * In Progress Tasks
  * Completed Tasks
* Search Tasks by Title and Description
* Filter Tasks by Status
* Sort Tasks by Created Date
* Responsive User Interface
* REST API Integration using Axios
* Dark Mode with Local Storage Persistence
* Loading Indicator
* Empty State Screen
* Toast Notifications
* Client-side Validation
* Server-side Validation
* Centralized Error Handling
* MySQL Database Integration

---

# Technologies Used

## Frontend

* React.js
* Vite
* Tailwind CSS
* Axios
* React Icons
* React Hot Toast

## Backend

* Node.js
* Express.js
* MySQL
* dotenv
* cors

## Database

* MySQL

---

# Project Structure

```text
Student-Mini-Project-Management-Portal
│
├── backend
│   ├── controllers
│   ├── database
│   ├── routes
│   ├── .env
│   ├── server.js
│   └── package.json
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   └── package.json
│
└── README.md
```

---

# Installation

## Clone the Repository

```bash
git clone https://github.com/your-username/student-mini-project-management-portal.git
```

---

## Backend Setup

```bash
cd backend

npm install

npm run dev
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

---

# MySQL Database Setup

Create the database:

```sql
CREATE DATABASE student_project_db;
```

Select the database:

```sql
USE student_project_db;
```

Create the `tasks` table:

```sql
CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    status ENUM('Pending','In Progress','Completed') DEFAULT 'Pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

# API Endpoints

| Method | Endpoint           | Description              |
| ------ | ------------------ | ------------------------ |
| GET    | `/api/tasks`       | Get all tasks            |
| GET    | `/api/tasks/stats` | Get dashboard statistics |
| GET    | `/api/tasks/:id`   | Get a single task        |
| POST   | `/api/tasks`       | Create a new task        |
| PUT    | `/api/tasks/:id`   | Update an existing task  |
| DELETE | `/api/tasks/:id`   | Delete a task            |

---

# Screenshots

Add project screenshots after running the application.

```text
screenshots/
│
├── dashboard.png
├── dark-mode.png
├── add-task.png
└── edit-task.png
```

---

# Future Enhancements

* User Authentication
* Task Deadlines
* Task Priority
* Team Collaboration
* File Attachments
* Email Notifications
* Charts and Analytics

---

# Learning Outcomes

This project helped in learning:

* React Component Development
* React Hooks
* REST API Integration
* Axios
* Express.js
* Node.js
* MySQL Database
* CRUD Operations
* Tailwind CSS
* Responsive Web Design
* Dark Mode Implementation

---

# Author
C.RUPALI (VTU26330)

---
