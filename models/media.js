const {schema , model, Schema} = require ('mongoose')

const MediaSchema = Schema({
    serial:{
        type: String,
        require: [true, 'Serial requerido'],
        unique: [true, 'Media ya existe']
    },

    titulo:{
        type: String,
        require: [true, 'Titulo requerido']
    },

    sinopsis:{
        type: String,
    },
    
    url:{
        type: String
    },

    imagen:{
        type: String
    },

    fechaCreacion:{
        type: Date,
        default: new Date()
    },

    fechaActualizacion:{
        type: Date,
        default: new Date()
    },

    añoEstreno:{
        type:Date
    },

    genero:{
        type: Schema.Types.ObjectId,
        ref:'Genero',
        require: true
    },

    director:{
        type: Schema.Types.ObjectId,
        ref:'Director',
        require: true
    },

    productora: {
        type: Schema.Types.ObjectId,
        ref:'Productora',
        require: true
    },

    tipo:{
        type: Schema.Types.ObjectId,
        ref:'Tipo',
        require:true
    }

})

module.exports = model('Media', MediaSchema)