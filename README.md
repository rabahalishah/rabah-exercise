# Employee List Web Page

## Description
This project consists of a full-stack application with two main parts:
- **Backend**: A mock API server using `json-server` to serve data from a `db.json` file.
- **Frontend**: A React application powered by Vite for fast development and builds.

---

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Backend Setup](#backend-setup)
4. [Frontend Setup](#frontend-setup)
5. [Running the Application](#running-the-application)
6. [Project Structure](#project-structure)
7. [License](#license)

---

## Prerequisites

Before starting the project, ensure that you have the following installed:
- [Node.js](https://nodejs.org) (version 14.x or above)
- [npm](https://npmjs.com) or [yarn](https://yarnpkg.com)
- [Vite](https://vitejs.dev) (for frontend development)

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
Here’s the provided content converted into Markdown format:
```

## 2. Install dependencies for both backend and frontend

### Backend

Navigate to the `backend` folder and install dependencies:

```bash
cd backend
npm install
````

### Frontend

Navigate to the `frontend` folder and install dependencies:

```bash
cd ../frontend
npm install
```

---

## Backend Setup

The backend is powered by `json-server`, a simple tool to set up a mock REST API. The `db.json` file contains the data that will be served by the API.

### Steps to run the backend server:

1. Navigate to the `backend` directory:

   ```bash
   cd backend
   ```

2. Start the `json-server`:

   ```bash
   npm run start
   ```

   This will start the mock API server at `http://localhost:5000`, where you'll be able to interact with the REST endpoints defined in `db.json`.

---

## Frontend Setup

The frontend is built with React and Vite for fast development and hot reloading.

### Steps to run the frontend:

1. Navigate to the `frontend` directory:

   ```bash
   cd frontend
   ```

2. Start the Vite development server:

   ```bash
   npm run dev
   ```

   This will start the frontend application at `http://localhost:3000`, where you can view and interact with the React app.

---

## Running the Application

To run the complete application with both the backend and frontend:

1. Start the backend server by following the instructions above under **Backend Setup**.
2. Start the frontend development server by following the instructions above under **Frontend Setup**.

Once both are running, open `http://localhost:3000` in your browser to see the frontend, which will interact with the mock backend API hosted at `http://localhost:5000`.
