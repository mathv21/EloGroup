// |> Importações
import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

// |> Schema dos dados para o BD.
const UserSchema = new mongoose.Schema({
    Name:{
        firstName:{
            type: String,
            required: false
        }, 
        lastName:{
            type: String,
            required: false
        }
    },
    Telphone:{
        type: String,
        required: true
    },

    Cnc:{
      type: String
    },

    SocialMidia:[
        '',
    ],

    createdAt:{
        type: Date,
        default: Date.now
    },

});

// |> Plugin de Paginação para o mongoose.
UserSchema.plugin(mongoosePaginate);

// |> Metodo de exportação do mongoose com apelido de User.
mongoose.model('User', UserSchema);