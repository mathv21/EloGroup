// |> Importações.
import express from 'express';
import cors from 'cors';
import mongoose, { Collection } from 'mongoose';
import requireDir from 'require-dir';

// |> Utilizando o Express.
const app = express();
app.use(express.json());
app.use(cors());

// |> Fazendo Conexão com Banco de Dados.
mongoose.connect("mongodb://localhost:27017/formuser",
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    }
);
requireDir("./models");

// |> Fazendo o uso das Rotas.
app.use('/', require('./routes'));

// |> Faz com que a porta 8080 escute a api
app.listen(8080);