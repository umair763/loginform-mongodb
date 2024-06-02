const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const cors = require('cors');
// const { Int32 } = require('bson');

const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

// Database connection
mongoose.connect('mongodb://localhost:27017/loginform', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

var db = mongoose.connection;

// Model definition
const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    password: Number,
});
const User = mongoose.model('User', UserSchema);

// Endpoint to handle form submissions
app.post('/registerss', (req, res) => {
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var password = req.body.password;

    // Create a new User instance using the User model 
    var newUser = new User({
        firstName: firstname,
        lastName: lastname,
        password: password,
    });

    // Save the new user to the database
    newUser.save((err, user) => {
        if (err) {
            console.error('Error saving user:', err);
            return res.status(500).send('Error saving user');
        }
        console.log('Record inserted successfully:', user);
        return res.redirect('signup_successfully.html');
    });
});

app.get('/', (req, res) => {
    res.set({
        'allow-access-Allow-Origin': '*',
    });
    return res.redirect('/index.html');
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
