const mongoose = require('mongoose');

// Define user schema
const seatschema = new mongoose.Schema({
    seats: {
        type:Array,
        required: true
    }
    
}, {timestamps: true});

// Create user model
const SeatsModel = mongoose.model('seat', seatschema);

module.exports = SeatsModel;