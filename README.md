# MERN Stack To-Do List Application

## Overview
This is a simple to-do list application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) with TypeScript and Next.js. The application allows users to create, view, update, and delete tasks.

Demo :earth_asia: https://conference-management-sliit.herokuapp.com

# Features
1. Create New Tasks:
Users can create new tasks by entering a task title and description.

2. Display Task List:
The application displays a list of all tasks with their titles.

3. Mark as Completed:
Users can mark tasks as completed, indicating that the task has been finished.

4. Remove Tasks:
Users can remove tasks from the list.

## Technologies Used:

1. MongoDB (Database)
2. React.js (Frontend)
3. Next.js (React Framework)
4. Express.js (Backend)
5. TypeScript (Programming Language)

## Deployment:

The application stack, including both frontend and backend, has been deployed to Vercel.
The public access link for the application is [here.](https://mern-todo-app-texn.vercel.app/)

## Getting Started

### 1. Backend (Typescript - Express)

1. Navigate to the backend folder:

```
cd backend
```

2. Install dependencies using Yarn:

```
yarn install
```

3. Create a .env file in the "backend" folder and add your MongoDB connection URL and Server Port:

```
DB_URI=your-mongodb-connection-url
SERVER_PORT=4000
```

Replace your-mongodb-connection-url with the actual connection URL for your MongoDB database.

3. Start the backend server:

```
yarn start
```
This will start your Express.js server, and it should now be accessible at the specified port.


### 2. Frontend (Typescript - Next JS)

1. Navigate to the backend folder:

```
cd frontend
```

2. Install dependencies using Yarn:

```
yarn install
```

3. Create a .env file in the "frontend" folder and add your backend api connection url:

```
NEXT_PUBLIC_API_URL=backend-api-url
```

3. Start the frontend server:

```
yarn start
```
This will start your Next.js server, and it should now be accessible at the specified port.

![no todos](https://github.com/manukayasas99/Mern-Todo-App/blob/master/images/1-no-todos.png?raw=true)
![add todos](https://github.com/manukayasas99/Mern-Todo-App/blob/master/images/2-add-todo.png?raw=true)
![update todos](https://github.com/manukayasas99/Mern-Todo-App/blob/master/images/3-update-todo.png?raw=true)
![no todos](https://github.com/manukayasas99/Mern-Todo-App/blob/master/images/4-delete-todo.png?raw=true)
