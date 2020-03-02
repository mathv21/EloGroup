import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    Name:{
        firstName:{
            type: String,
            required: true
        }, 
        lastName:{
            type: String,
            required: true
        }
    },
    Telphone:{
        type: String,
        required: true
    },

    createdAt:{
        type: Date,
        default: Date.now
    },

});

mongoose.model('User', UserSchema);