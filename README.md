# 📌 Role-Based Access Control (RBAC) with Node.js, Express & MongoDB

A simple **authentication & authorization** system built with **Node.js, Express, MongoDB, JWT, and bcrypt**.  
This project demonstrates how to implement **role-based access control (RBAC)** where users have different permissions (`admin`, `manager`, `user`) to access protected routes.

---

## 🚀 Features
- 🔐 User Authentication (Register/Login with JWT)  
- 🔑 Password Hashing using bcryptjs  
- 🎭 Role-Based Authorization (admin, manager, user)  
- 📂 Modular Code Structure with controllers, models, and middleware  
- ⚡ Secure APIs with token-based authentication  

---

## 🛠️ Tech Stack
- Backend: Node.js, Express.js  
- Database: MongoDB, Mongoose  
- Auth & Security: JWT, bcryptjs  
- Environment Config: dotenv  

---

# Create .env file
PORT=7001
CONNECTION_STRING=your_mongodb_connection
JWT_SECRET=your_secret_key

---

## 🔑 API Endpoints

### Auth Routes
POST   /api/auth/register   -> Register new user  
POST   /api/auth/login      -> Login user & get token  

### Protected Routes
Admin     -> GET /api/user/admin    (Only admin)  
Manager   -> GET /api/user/manager  (Admin + Manager)  
User      -> GET /api/user/user     (Admin + Manager + User)  

---

## 👤 Example Roles
- Admin: Full access  
- Manager: Limited access  
- User: Basic access  

---

## 📸 Demo Flow
1. Register a user with a role  
2. Login to get JWT token  
3. Use token in Authorization header to access role-specific routes  


