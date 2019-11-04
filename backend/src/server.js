// Modules import
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const socketio = require('socket.io');
const http = require('http')

// Import the routes
const routes = require('./routes');

// Create a server with express
const app = express();

const server = http.Server(app); // get the http server from app (express)
const io = socketio(server); 

mongoose.connect('mongodb+srv://tindev:tindev@tindev-7cgk9.mongodb.net/aircnc?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


const connectedUsers = {};

io.on('connection', socket => {
    const {user_id} = socket.handshake.query;
    connectedUsers[user_id] = socket.id;
})

// Need be before the other routes
app.use((req, res, next) => {
    req.io = io; 
    req.connectedUsers = connectedUsers;

    return next()
})

// Tell to express to use CORS
app.use(cors());

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));

// Tell to express to use json on request
app.use(express.json());

// Add the routes module to express server
app.use(routes);

// Start the server listening at port 3333
server.listen(3333);