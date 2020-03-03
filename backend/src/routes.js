// |> Importações
import express from 'express';
const routes = express.Router(); 

// |> Fazendo importamento e o requerimento do Controller.
const UserController = require( './controllers/UserController');

// |> Requisições das Rotas.
routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show);
routes.post('/users', UserController.store);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.delete);

// |> Exportando as Rotas.
module.exports = routes;