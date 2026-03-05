# 🔐 Login App

A full-stack authentication web application with user login functionality. Built with a Node.js/Express backend and a React frontend, using  JWT for secure authentication.

---

## 🛠️ Tech Stack

### Backend
| Technology | Purpose |
|---|---|
| **Node.js** | JavaScript runtime |
| **Express.js** | Web framework / REST API |
| **JWT (jsonwebtoken)** | Authentication tokens |
| **dotenv** | Environment variable management |
| **cors** | Cross-Origin Resource Sharing |
| **Express-rate-limiter** |  Rate Limiter  |

### Frontend
| Technology | Purpose |
|---|---|
| **React.js** | UI library |
| **React Router DOM** | Client-side routing |
| **Axios** | HTTP client for API calls |
| **CSS** | Styling |

---


## 🚀 Setup & Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Mohammad-Ikhlas-khan/Login-App.git
cd Login-App
```

---

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory (see [Environment Variables](#-environment-variables) section below), then start the server:

```bash
# Development (with auto-restart via nodemon)
npm run dev

# Or production
npm start
```

---

### 3. Frontend Setup

Open a **new terminal** window:

```bash
cd frontend
npm install
npm start
```

---

## 🔑 Environment Variables

Create a `.env` file inside the `backend/` directory with the following variables:

```env
PORT=5000
JWT_SECRET=your_super_secret_jwt_key_here
---


## 📡 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/login` | Login a  user |

---
