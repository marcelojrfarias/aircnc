// Modules import
const express = require('express');

const multer = require('multer')

const uploadConfig = require('./config/upload')

// Create a express router
const routes = express.Router();

const upload = multer(uploadConfig);

// Import the Session creator route 
const SessionController = require('./controllers/SessionController')

// Import the Session creator route 
const SpotController = require('./controllers/SpotController')

// Import the Session creator route 
const DashboardController = require('./controllers/DashboardController')

// Import the Session creator route 
const BookingController = require('./controllers/BookingController')

// GET, POST, PUT, DELETE
// req.query = Query params (to filters)
// req.params = Route params (to edit, create)
// req.body = request body (to create, edit)

routes.post('/sessions', SessionController.store);
routes.post('/spots', upload.single('thumbnail'),SpotController.store);
routes.get('/spots', SpotController.index);
routes.get('/dashboard', DashboardController.show);

routes.post('/spots/:spot_id/bookings', BookingController.store);

// Exports the routes module
module.exports = routes;