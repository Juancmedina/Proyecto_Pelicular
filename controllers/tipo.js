const Tipo = require('../models/tipo')
const { request, response } = require('express')


// Crear un tipo

const createTipo = async (req = request, res = response) => {
    console.log(req.body)

    const { nombre, descripcion } = req.body
    try{
        const tipoDB = await Tipo.findOne({ nombre })
        if(tipoDB) {
            return res.status(400).json({ msj: 'Ya existe el tipo ingresado'})
        }
        
        const datos = {
            nombre,
            descripcion
        }

        const tipo = new Tipo(datos)

        await tipo.save()

        return res.status(201).json(tipo)

    } catch(error) {
        console.log(error)
        return res.status(500).json({msj: error})
    }

}

// Obtener todos los tipos

const getTipos = async (req = request, res = response) => {
    try {
        const tipo = await Tipo.find()
        return res.status(200).json(tipo)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msj: error })
    }
}

// Consultar un tipo por su ID

const getTipoById = async (req = request, res = response) => {
    const { id } = req.params
    
    try {
        const tipo = await Tipo.findById(id)

        if (!tipo) {
            return res.status(404).json({ msj: 'Tipo no encontrado' })
        }

        return res.status(200).json(tipo)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msj: error })
    }
}

// Actualizar tipo

const updateTipo = async (req = request, res = response) => {
    const { id } = req.params
    const { nombre, descripcion } = req.body

    try {
        const tipo = await Tipo.findByIdAndUpdate(id, { nombre, descripcion }, { new: true })

        if (!tipo) {
            return res.status(404).json({ msj: 'Tipo no encontrado' })
        }

        return res.status(200).json(tipo)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msj: error })
    }
}

// Borra un tipo por su ID

const deleteTipo = async (req = request, res = response) => {
    const { id } = req.params

    try {
        const tipo = await Tipo.findByIdAndDelete(id)

        if (!tipo) {
            return res.status(404).json({ msj: 'Tipo no encontrado' })
        }

        return res.status(201).json({ msj: 'Tipo eliminado con éxito' })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msj: error })
    }
}  

module.exports = {
    createTipo,
    getTipos,
    getTipoById,
    updateTipo,
    deleteTipo
}