Alien CRUD API
This project implements a CRUD (Create, Read, Update, Delete) API for managing alien entities. It is built using Express.js for handling HTTP requests and Mongoose for interacting with a MongoDB database.

Getting Started
To get started with this project, follow these steps:

Prerequisites
Node.js installed on your machine.
MongoDB installed and running locally.
Installation
Clone this repository to your local machine:

bash
Copy code
git clone <repository-url>
Install dependencies:

bash
Copy code
cd CRUD-API
npm install
Set up MongoDB:

Make sure MongoDB is running locally.
Create a database named AlienDBex.
Running the Server
Start the server:

bash
Copy code
npm start
The server will start running on http://localhost:9000.

API Endpoints
GET /aliens: Retrieve a list of all aliens.
GET /aliens/:id: Retrieve a specific alien by its ID.
POST /aliens: Create a new alien.
Request Body:
json
Copy code
{
    "name": "AlienName",
    "tech": "Technology",
    "sub": true
}
PATCH /aliens/:id: Update an existing alien by its ID.
Request Body (fields to update):
json
Copy code
{
    "name": "NewAlienName",
    "tech": "NewTechnology",
    "sub": false
}
DELETE /aliens/:id: Delete an alien by its ID.
Database Schema
The MongoDB schema for the Alien model is as follows:

javascript
Copy code
const mongoose = require('mongoose');

const alienSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    tech: {
        type: String,
        required: true
    },
    sub: {
        type: Boolean,
        required: true,
        default: false
    }
});

module.exports = mongoose.model('Alien', alienSchema);
Technologies Used
Express.js
Mongoose
MongoDB
