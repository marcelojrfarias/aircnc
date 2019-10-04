// Modules import
const express = require('express');
const mongoose = require('mongoose');

// Import the routes
const routes = require('./routes');

// Create a server with express
const app = express();

mongoose.connect('mongodb+srv://tindev:tindev@tindev-7cgk9.mongodb.net/aircnc?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// Tell to express to use json on request
app.use(express.json());

// Add the routes module to express server
app.use(routes);

// Start the server listening at port 3333
app.listen(3333);