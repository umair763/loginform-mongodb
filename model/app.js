const express = require('express');
const bodyParser = require('body-parser');
const User = require('./user');
const db = require('./db');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (index.html, script.js, style.css)
app.use(express.static(__dirname + '/../'));

// Route to handle form submission 
app.post('/register', async (req, res) => {
    const { firstname, lastname, password } = req.body;
    const newUser = new User({ firstname, lastname, password });

    try {
        await newUser.save();
        res.status(200).send('User registered successfully!');
    } catch (error) {
        res.status(500).send('Error registering user');
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
