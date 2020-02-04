const mongoose = require('mongoose');

require('mongoose-type-email')
const Schema=mongoose.Schema;

//Create Schema
const EventSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    created_date:{
        type:Date,
        default: Date.now
    },
    price:{
        type:Number,
        required:true
    },
    place:{
        type:String,
        required:true
    },
    host_name:{
        type:String,
        required:true
    },
    host_contactno:{
        type:Number,
        required:true
    },
    host_email:{
        type:mongoose.SchemaTypes.Email,
        required:true
    },
    bio:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default: Date.now
    },
    people:{
        type:Array,
    }
});

module.exports = Event = mongoose.model('event', EventSchema);
