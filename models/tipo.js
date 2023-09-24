const {schema , model, Schema} = require ('mongoose')

const TipoSchema = new Schema({
    nombre:{
        type: String,
        require: [true,'Nombre tipo requerido'],
        minlength: 1
    },

    fechaCreacion:{
        type: Date,
        default: new Date()
    },

    fechaActualizacion:{
        type: Date,
        default: new Date()
    },

    descripcion:{
        type: String
    }
})

module.exports = model('Tipo', TipoSchema)