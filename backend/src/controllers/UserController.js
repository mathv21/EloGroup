import mongoose from 'mongoose';

const User =  mongoose.model('User');

module.exports = {
    async index(req, res){
        const users = await User.find();

        return res.json(users);
    },
};