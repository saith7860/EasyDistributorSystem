Distributor Management System

## Introduction
The Distributor Management System is a full-stack web application developed to manage distributor operations efficiently and digitally. Traditional distributor management systems rely heavily on manual record keeping, spreadsheets, and disconnected software tools, which often lead to inefficiencies, errors, and poor data visibility. This project aims to solve these problems by providing a centralized digital platform where distributors, products, and orders can be managed seamlessly.

## Features
-Product Management
-Stock Management
-Sales
-Dashboard Ananlytics
## System Overview

The Distributor Management System is a web-based application that helps distributors performing stock management,product management and sales.They can see their analytics on dashboard.
The system is divided into two main parts:
Frontend:
Built using React to provide the user interface.
Backend:
Built using Node.js and Express to handle APIs and database operations.
## Tech Stack

Frontend
- React.js
- TypeScript
- HTML5
- CSS3

Backend
- Node.js
- Express.js

Database
- MongoDB

Tools
- Git
- GitHub
- Postman
- VS Code

## Deployment Instructions (Local Setup)

Follow these steps to run the project on your local machine.

 1. Clone the Repository

```bash
git clone https://github.com/saith7860/EasyDistributorSystem
cd EasyDistributorSystem
```

2. Install Backend Dependencies

Navigate to the backend folder and install required packages.

```bash
cd backend
npm install
```

 3. Install Frontend Dependencies

Navigate to the frontend folder and install required packages.

```bash
cd ../frontend
npm install
```

4. Configure Environment Variables

Create a `.env` file inside the **backend** directory and add the required variables.
```bash
PORT=3000
```
 5. Run the Backend Server
```bash
cd ../backend
npm start
```
 6. Run the Frontend
```bash
cd ../frontend
npm run dev
```

 7. Access the Application

After starting both servers, open your browser and go to:
```bash
http://localhost:5173
```
The frontend will communicate with the backend API running on the configured port.

## Contributors
Muhammad Shaheer Zafar(Developer)
Umair Razzaq(Database Designer)
Sadia Ali(UI/UX Designer)
Amir Farooq(Financial Analyst)