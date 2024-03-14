const mongoose = require('mongoose');

// Define user schema
const busschema = new mongoose.Schema({
    busename: {
        type: String,
        required: true
    },
    seats: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'seat',
        required: true
    },
    busenumber:{
        type : Number ,
        required:true, 
        unique:true
    }
    
}, {timestamps: true});

// Create user model
const BusModel = mongoose.model('bus', busschema);

module.exports = BusModel;