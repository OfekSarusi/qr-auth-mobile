# Unixi Mobile Assignment

This project is a mobile application built with **React Native and Expo** as part of the **Unixi Junior Mobile Developer home assignment**.

The application demonstrates a complete mobile authentication flow based on **QR code scanning**, **backend communication**, **user authentication**, and **device information retrieval**.

---

# Application Flow

1. The application starts on a **QR scanning screen**.
2. The user scans a QR code containing a **QR token**.
3. The application sends the token to the backend:

```
POST /qr/resolve
```

4. The backend resolves the token and returns **user information**.
5. The app navigates to the **login screen**, where the user enters a password.
6. The password is validated via:

```
POST /auth/validate
```

7. If authentication fails → the user is redirected to an **error screen**.
8. If authentication succeeds → a **success screen** is shown and the user is redirected to the **main application**.

---

# Features

* QR code scanning
* Backend API communication
* Password authentication
* Error handling
* Success confirmation screen
* Main application with user information
* Device information screen
* Logout functionality
* Clean and modular architecture

---

# Tech Stack

## Mobile Application

* React Native
* Expo
* Expo Router
* TypeScript
* Axios

## Backend (Provided)

* Python
* FastAPI
* Docker

---

# Architecture

The project follows a simple layered structure separating UI, business logic, and API communication.

```
app/            → Application screens and navigation (Expo Router)
src/services/   → Backend API communication
src/context/    → Global session state management
src/models/     → TypeScript models and types
src/utils/      → Helper utilities
backend/        → Mock FastAPI backend server
```

---

# Project Structure

```
unixi-app/
│
├── app/
│   ├── _layout.tsx      # root layout (Expo Router navigation)
│   ├── index.tsx        # QR scan screen
│   ├── login.tsx        # password authentication
│   ├── error.tsx        # authentication error screen
│   ├── success.tsx      # authentication success screen
│   │
│   └── (tabs)/
│       ├── home.tsx     # main application screen
│       ├── device.tsx   # device information screen
│       └── _layout.tsx  # tabs navigation layout
│
├── src/
│   ├── context/
│   │   └── SessionContext.tsx   # global session state
│   │
│   ├── models/
│   │   ├── Auth.ts              # authentication types
│   │   └── User.ts              # user model
│   │
│   ├── services/
│   │   ├── api.ts               # axios configuration
│   │   ├── authService.ts       # password validation API
│   │   └── qrService.ts         # QR resolve API
│   │
│   └── utils/
│       └── formatDate.ts        # helper for formatting dates
│
├── backend/
│   ├── main.py                  # FastAPI mock backend
│   ├── Dockerfile
│   └── README.txt
│
├── .gitignore
├── app.json
├── package.json
└── README.md
```

---

# Backend API

The mobile application communicates with the provided backend using the following endpoints.

### Resolve QR Token

```
POST /qr/resolve
```

Resolves a QR token and returns user information.

---

### Validate Password

```
POST /auth/validate
```

Validates the user's password and authenticates the session.

---

### Demo QR Tokens

```
GET /demo/qr-tokens
```

Returns demo QR tokens that can be encoded into QR codes for testing.

---

### Health Check

```
GET /health
```

Used to verify that the backend server is running.

---

# Running the Backend

Navigate to the backend folder:

```
cd backend
```

Build the Docker image:

```
docker build -t unixi-mock-api .
```

Run the backend server:

```
docker run --rm -p 8080:8080 unixi-mock-api
```

The backend will be available at:

```
http://localhost:8080
```

---

# Running the Mobile App

Install dependencies:

```
npm install
```

Start Expo:

```
npx expo start
```

Scan the QR code using **Expo Go** on your mobile device.

Make sure your **phone and computer are connected to the same WiFi network**.

---

# API Configuration

The mobile app communicates with the backend through the base URL defined in:

```
src/services/api.ts
```

Example:

```
http://192.168.1.26:8080
```

Replace this with your computer's **local IPv4 address** if needed.

---

# Demo Credentials

Example users for testing authentication:

### User 1

User ID: `u_1001`
Password: `unixi123`

### User 2

User ID: `u_1002`
Password: `password`

Example QR tokens:

```
qr_demo_1
qr_demo_2
```

These tokens can be encoded into QR codes for testing.

---

# Notes

* The backend server is provided as part of the assignment.
* The application communicates with the backend using REST APIs.
* The UI follows a simple and clean mobile authentication flow.

---

# Author

Ofek Sarusi
Junior Mobile Developer Assignment
