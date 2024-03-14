const mongoose = require('mongoose');

// Define user schema
const availbusschema = new mongoose.Schema({
    busenumber: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'bus',
        required: true  

    },
    from: {
        type: String,
        required: true,
    },
    to: {
        type: String,
        required: true,
    },
    departuretime: {
        type: String,
        required: true
    },
    date: { 
        type: Date, default: Date.now 
    },
    price:{
        type : Number ,
        required :true
    },
    status:{
        type : String,
        enum: ['arrival', 'onroad', 'available'],
        default: 'arrival'
    }
}, {timestamps: true});

// Create user model
const AvailablebusModel = mongoose.model('availbus', availbusschema);

module.exports = AvailablebusModel;