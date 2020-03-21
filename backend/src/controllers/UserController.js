// |> Importações
import mongoose from 'mongoose';

// |> Fazendo Uso do Schema do Usuario.
const User =  mongoose.model('User');

// |> Fazendo exportações com as funções.
module.exports = {

    // |> Função que faz a Busca dos Usuarios cadastrados.
    async index(req, res){
        const { page = 1 } = req.query;
        const users = await User.paginate({}, {page, limit: 6});

        return res.json(users);
    },

    // |> Função que detalha as informações de um unico usuario.
    async show(req, res){
        const users = await User.findById(req.params.id);

        return res.json(users);
    },

    // |> Função que faz a Criação do Usuario.
    async store(req, res){
        //Criar usuario
        const users = await User.create(req.body);
        return res.json(users);
    },

    // |> Função que Atualiza os dados do Usuario. 
    async update(req, res){
        const users = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});

        return res.json(users);
    },

    // |> Função que deleta um Usuario.
    async delete(req, res){
        await User.findByIdAndRemove(req.params.id);

        return res.send();
    }
};