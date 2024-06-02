const express = require('express');
const bodyParser = require('body-parser');
const User = require('./logins');
const connectDB = require('./db');
const cors = require('cors');

const app = express();

// Before your routes
app.use(cors());

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // This line parses incoming requests with JSON payloads

// Serve static files (index.html, script.js, style.css)
app.use(express.static(__dirname + '/../'));

connectDB();

// Route to handle form submission
app.post('/register', async (req, res) => {
    const { firstname, lastname, password } = req.body;
    const newUser = new User({ firstname, lastname, password });

    try {
        await newUser.save();
        res.status(200).json({ message: 'User registered successfully!' });
    } catch (error) {
        console.error('Error Saving User:', error); // Log the error for debugging
        res.status(500).send('Error registering user');
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
