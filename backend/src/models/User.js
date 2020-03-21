// |> Importações
import mongoose, { Mongoose } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

// |> Schema dos dados para o BD.
const UserSchema = new mongoose.Schema({

    Name:{
        type:String,
        required:true
    },
    Telphone:{
        type: String,
        required: true
    },

    Cnc:{
      type: String
    },

    SocialMidia:[String],

    createdAt:{
        type: Date,
        default: Date.now
    },

});

// |> Plugin de Paginação para o mongoose.
UserSchema.plugin(mongoosePaginate);

// |> Metodo de exportação do mongoose com apelido de User.
mongoose.model('User', UserSchema);