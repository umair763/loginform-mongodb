const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Middleware to parse JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/loginform', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Define a schema for login data
const loginSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    password: String,
});

const Login = mongoose.model('Login', loginSchema);

// Handle form submission
app.post('/submit', (req, res) => {
    const newLogin = new Login({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        password: req.body.password,
    });

    newLogin.save((err) => {
        if (err) {
            res.status(500).send('Error saving to database');
        } else {
            res.send('Login data saved successfully');
        }
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
