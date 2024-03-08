const mongoose = require('mongoose');

// Define user schema
const availbusschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    photo: {
        type: String
    },
    password: {
        type: String,
        required: true
    }
}, {timestamps: true});

// Create user model
const AvailablebusModel = mongoose.model('availbus', availbusschema);

module.exports = AvailablebusModel;