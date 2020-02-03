const mongoose = require('mongoose');

require('mongoose-type-email')
const Schema=mongoose.Schema;

//Create Schema
const UserSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:mongoose.SchemaTypes.Email,
        required:true,
        unique: true
    },
    password:{
        type:String,
        required:true
    },
    created_date:{
        type:Date,
        default: Date.now
    }
    
});

module.exports = User = mongoose.model('user', UserSchema);
