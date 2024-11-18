# Task Tracker API

## Overview

Developed a Task Tracker application using Express.js, node.js, MongoDB, and Mongoose object modeling tool. 
Built RESTful APIs with Node.js and Express.js, utilizing MongoDB for data storage. It provides endpoints for managing tasks, including creation, filtering, retrieval, updating, and deletion operations.

## Features

- Create New Task: Endpoint for adding new tasks to the database.
- Get All Tasks: Endpoint to retrieve a list of all tasks.
- Get Task by ID: Endpoint to fetch a specific task by its unique identifier.
- Filter Tasks: Filter a list of task based on specific parameters.
- Update Task: Endpoint to modify an existing task's details.
- Delete Task: Endpoint to remove a task from the database.

## Technologies Used

- Node.js: JavaScript runtime environment.
- Express.js: Web application framework for Node.js.
- MongoDB: NoSQL database for persistent data storage.
- Mongoose: MongoDB object modeling tool for Node.js, providing schema-based solutions.
- Bruno Tool: Bruno tool which acted as a client for hitting the server APIs.
- MongoDB Compass: GUI for MongoDB to manage database graphically.
- MongoDB Atlas: Managed Cloud storage for MongoDB 

## Application Structure:

Implemeted the project using various layers to handle different aspects of the application functionality.
-  Model Layer : The model layer defines the structure of data and interacts directly with the database. Models are defined using schemas.
- Service Layer: The service layer contains business logic that operates on the data models. It encapsulates complex logic and ensures separation of concerns between data access (models) and business operations.
- Controller Layer: Controllers handle incoming HTTP requests, execute application logic using services, and send HTTP responses back to the client. They serve as the bridge between the client (e.g., a web browser or mobile app) and the application's business logic.
- Route Layer: Routes define endpoints (URL paths) in the application and map them to specific controller functions. They provide a clear and organized way to handle different types of requests and direct them to the appropriate controller actions.
- App.js - The file where the application and MongoDB database are connected and application routes are initialised.
- Server.js - The file where the Express server is started.

## Installation and Run Guide:
- Install npm and other dependencies like Express, dotenv, mongoose, debug, cors
- Connect the MongoDB Atlas with MongoDB compass for better GUI management.
- Connect the MongoDB Atlas with the application server using .env variables.
- Implement and start the Express server using "node server.js"
- Using mongoose, connect to the MondoDB server.
- Using any client tool, test and run the implemented APIs to get and store data.

