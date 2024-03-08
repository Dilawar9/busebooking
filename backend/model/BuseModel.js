const mongoose = require('mongoose');

// Define user schema
const busschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    seats: {
        type:Number,
        required: true,
    },
    
}, {timestamps: true});

// Create user model
const BusModel = mongoose.model('bus', busschema);

module.exports = BusModel;