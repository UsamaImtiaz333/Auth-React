
---

# 📌 **Backend (server/README.md)**

```markdown
# Backend – Authentication System

This is the **backend** of the Authentication System built using **Node.js, Express.js, and MongoDB**.

## 🚀 Features
- User registration & login API
- Secure password hashing with bcrypt
- JWT authentication for sessions
- Middleware for protected routes
- MongoDB database integration with Mongoose

## 🛠️ Tech Stack
- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **bcrypt**
- **jsonwebtoken (JWT)**

## ⚙️ Installation & Setup

```bash
# Navigate to backend
cd server

# Install dependencies
npm install

# Add environment variables
Create a `.env` file in the `server/` folder with:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=3000

# Run backend server
npm run dev
