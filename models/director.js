const {schema , model, Schema} = require ('mongoose')

const DirectorSchema = new Schema({
    nombre:{
        type: String,
        require: [true,'Nombre director requerido'],
        minlength: 1
    },

    estado:{
        type: Boolean,
        default: true,
        require: true
    },

    fechaCreacion:{
        type: Date,
        default: new Date()
    },

    fechaActualizacion:{
        type: Date,
        default: new Date()
    }
})

module.exports = model('Director', DirectorSchema)