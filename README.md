# Mini CRM System

A simple CRM system built with **Node.js**, **Express**, and **MySQL** for managing company information. This project implements basic CRUD operations, focusing on Create and Read functionalities.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Database Setup](#database-setup)
- [API Endpoints](#api-endpoints)
- [Running the Application](#running-the-application)
- [Future Enhancements](#future-enhancements)

## Features

- Create new company information.
- Retrieve company details by ID.
- Implements **RESTful** API design.
- Simple validation and error handling.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **ORM**: Sequelize
- **Frontend**: (Optional) Next.js, React.js

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/mini-crm-system.git
cd mini-crm-system
```

2. Install the dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory to store environment variables:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=crm_db
PORT=5000
```

4. Set up MySQL and create the database:

```sql
CREATE DATABASE crm_db;
```

## Database Setup

1. Define the `Company` model in the `models/Company.js` file. The model schema:

```javascript
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Company = sequelize.define('Company', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    industry: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        defaultValue: ''
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    }
});

module.exports = Company;
```

2. Sync the database schema using Sequelize:

```javascript
const sequelize = require('./config/database');
sequelize.sync();
```

## API Endpoints

### 1. Create Company

- **Method**: POST
- **Endpoint**: `/companies`
- **Request Body**:

```json
{
  "name": "TechCorp",
  "industry": "Software",
  "description": "A software development company."
}
```

- **Response**:

```json
{
  "id": 1,
  "name": "TechCorp",
  "industry": "Software",
  "description": "A software development company.",
  "createdAt": "2024-10-20T12:34:56.789Z"
}
```

### 2. Get Company by ID

- **Method**: GET
- **Endpoint**: `/companies/:id`
- **Response**:

```json
{
  "id": 1,
  "name": "TechCorp",
  "industry": "Software",
  "description": "A software development company.",
  "createdAt": "2024-10-20T12:34:56.789Z"
}
```

### Error Handling
- If a company is not found, the response is:

```json
{
  "error": "Company not found"
}
```

- For validation errors:

```json
{
  "error": "Validation error: Field cannot be empty"
}
```

## Running the Application

1. Start the server:

```bash
npm start
```

2. The server will be running at `http://localhost:5000`.

## Future Enhancements

- Add **Update** and **Delete** functionalities.
- Implement **User Authentication** for secure access.
- Extend search capabilities for companies.
- Add a frontend with **Next.js** to interact with the API.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

### Key Sections:
- **Installation**: Describes how to set up the project and environment.
- **Database Setup**: Explains how to create the MySQL database and model setup.
- **API Endpoints**: Lists the API routes and how to use them.
- **Running the Application**: Steps to run the app locally.
- **Future Enhancements**: Ideas for extending the project.

You can add any additional information or instructions as needed for your project!
