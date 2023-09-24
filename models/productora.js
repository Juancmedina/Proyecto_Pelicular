const {schema , model, Schema} = require ('mongoose')

const ProductoraSchema = new Schema({
    nombre:{
        type: String,
        require: [true,'Nombre genero requerido'],
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
    },

    slogan:{
        type:String
    },

    descripcion:{
        type: String
    }
})

module.exports = model('Productora', ProductoraSchema)