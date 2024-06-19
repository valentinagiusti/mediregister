# Full Stack Application - MediRegister

This project contains a Next.js frontend and a NestJS backend. It requires a MySQL database to be set up.

## Prerequisites

- Node.js
- npm (for Next.js)
- yarn (for NestJS)
- MySQL

## Getting Started

### Setting Up the MySQL Database

1. **Install MySQL:**

   Follow the instructions for your operating system to install MySQL.

2. **Create a Database:**

   Log into your MySQL instance and create a new database:

   ```sql
   CREATE DATABASE my_database;

## Next.js Frontend
Navigate to the frontend directory:

cd path/to/your/project/frontend
Install dependencies:

### yarn install

Start the development server:

### yarn dev
The Next.js application will be running on http://localhost:3000.

## NestJS Backend

Navigate to the backend directory:

### cd path/to/your/project/backend

Install dependencies:

## npm install

Set up environment variables:

copy the .env file in the backend directory and add your database connection details

Start the development server:

yarn dev

The NestJS application will be running on http://localhost:3001.

## Docker Compose

You can also use Docker Compose to set up the entire application, although there might be some issues with the database setup at the moment.

Navigate to the project root:

cd path/to/your/project

Run Docker Compose:

### docker-compose up

This command will build and start the containers for the frontend, backend, and database.

### Known Issues
There are currently some issues with the database setup when using Docker Compose. Manual database setup as described above is recommended for now.
