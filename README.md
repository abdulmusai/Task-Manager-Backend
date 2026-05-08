Task Manager Backend API

A scalable backend API for a Task Manager application built with Node.js, Express.js, and MongoDB. This backend provides RESTful APIs for task management, authentication, and database operations.

Features
RESTful API architecture
CRUD operations for tasks
JWT Authentication
MongoDB database integration
Express middleware support
Secure API endpoints
Error handling
Environment variable configuration
MVC project structure
Tech Stack
Backend Technologies
Node.js
Express.js
MongoDB
Mongoose
JWT (JSON Web Token)
bcryptjs
dotenv
cors
nodemon
Project Structure
task-manager-backend/
│
├── controllers/
│   ├── authController.js
│   └── taskController.js
│
├── middleware/
│   └── authMiddleware.js
│
├── models/
│   ├── User.js
│   └── Task.js
│
├── routes/
│   ├── authRoutes.js
│   └── taskRoutes.js
│
├── config/
│   └── db.js
│
├── .env
├── server.js
├── package.json
└── README.md
Installation
Clone Repository
git clone https://github.com/your-username/task-manager-backend.git
Navigate Into Project
cd task-manager-backend
Install Dependencies
npm install
Environment Variables

Create a .env file in the root directory:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
Run Development Server
npm run dev

OR

npm start

Server runs on:

http://localhost:5000
API Endpoints
Authentication Routes
Method	Endpoint	Description
POST	/api/auth/register	Register user
POST	/api/auth/login	Login user
Task Routes
Method	Endpoint	Description
GET	/api/tasks	Get all tasks
POST	/api/tasks	Create new task
PUT	/api/tasks/:id	Update task
DELETE	/api/tasks/:id	Delete task
Example Request
Create Task
POST /api/tasks

{
  "title": "Build MERN project",
  "description": "Complete backend API",
  "completed": false
}
Example Response
{
  "_id": "123456789",
  "title": "Build MERN project",
  "description": "Complete backend API",
  "completed": false,
  "createdAt": "2026-05-08T10:00:00.000Z"
}
Authentication

Protected routes require JWT token in headers:

Authorization: Bearer your_token_here
Scripts
Command	Description
npm start	Start production server
npm run dev	Start development server with nodemon
Error Handling

The API includes:

Validation handling
Authentication checks
Database error handling
Middleware-based error responses
Future Improvements
Role-based authorization
Task categories and tags
File uploads
Real-time notifications
API documentation with Swagger
Unit and integration testing
Docker containerization
CI/CD pipeline integration
Deployment

Recommended platforms:

Render
Railway
AWS EC2
DigitalOcean
Heroku

Database:

MongoDB Atlas
Learning Outcomes

This project demonstrates:

Backend API development
Express.js routing
MongoDB CRUD operations
Authentication with JWT
MVC architecture
Middleware usage
Environment configuration
Secure backend practices
Author

Abdulrahman Musa Inuwa

Data Scientist
Full-Stack Developer
Blockchain Professional
Machine Learning Engineer
