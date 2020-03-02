import express from 'express';
import mongoose from 'mongoose';
import requireDir from 'require-dir';

const app = express();

mongoose.connect("mongodb://localhost:27017/formuser",
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    }
);
requireDir("./models");

//Rotas
app.use('/', require('./routes'));

//Fazer com que a porsta 8080 escute a api
app.listen(8080);