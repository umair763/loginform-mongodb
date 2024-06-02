# MongoDB Login Form

This project is a simple login form application that saves user credentials to a MongoDB database. It demonstrates the use of Node.js, Express, Mongoose, and MongoDB for backend development and HTML, CSS, and JavaScript for the frontend.

## Table of Contents

-   [Installation](#installation)
-   [Usage](#usage)
-   [Project Structure](#project-structure)
-   [Endpoints](#endpoints)
-   [Contributing](#contributing)

## Installation

To get started with the project, follow these steps:

1. **Clone the repository:**

    ```sh
    git clone https://github.com/yourusername/mongodb-login-form.git
    cd mongodb-login-form
    ```

2. **Install the dependencies:**

    ```sh
    npm install
    ```

3. **Set up MongoDB:**

    - Make sure you have MongoDB installed and running on your local machine.
    - Create a database named `Registerform`.

4. **Start the server:**

    ```sh
    node index.js
    ```

5. **Open the application:**
    - Open your web browser and go to `http://localhost:3000` to see the login form.

## Usage

-   **Form Submission:**
    -   Enter your first name, last name, and password into the login form and click "Login".
    -   The credentials will be sent to the server and saved in the MongoDB database.
    -   A success message will be displayed upon successful saving of credentials, otherwise an error message will be shown.

## Project Structure

Here is an overview of the project's structure:

```plaintext
mongodb-login-form/
├── config/
│   └── db.js             # MongoDB connection setup
|
├── model/
│   └── logins.js         # Mongoose schema and model for User
│
├── public/               # Frontend files
│   ├── index.html        
│   └── css               
│       └── style.css     # css style file
│   └── js                
│       └── script.js     # js script file
│
├── routes/
│   └── app.js            # server file routes
|
├── .gitignore            # Git ignore file
├── package.json          # Node.js project metadata and dependencies
└── README.md             # Project documentation
```

# Endpoints

## POST /register

### Description

This endpoint handles the form submission and saves user credentials to the database.

### Request Body

{
"firstname": "John",
"lastname": "Doe",
"password": "password123"
}

### Responses:

-   **200 OK:**

-   **500 Internal Server Error:**

## Contributing

Contributions are welcome Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit them: `git commit -m "Add some feature"`
4. Push to the branch: `git push origin feature/your-feature-name`

Note: Ensure that you replace https://github.com/yourusername/mongodb-login-form.git with the actual URL of your GitHub repository.
