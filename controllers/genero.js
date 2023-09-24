const Genero = require('../models/genero')
const { request, response } = require('express')


//Crear Genero

const createGenero = async (req = request, res = response) => {
    console.log(req.body)

    const { nombre, descripcion } = req.body
    try{
        const generoDB = await Genero.findOne({ nombre })
        if(generoDB) {
            return res.status(400).json({ msj: 'Ya existe el genero ingresado'})
        }
        
        const datos = {
            nombre,
            descripcion
        }

        const genero = new Genero(datos)

        await genero.save()

        return res.status(201).json(genero)

    } catch(error) {
        console.log(error)
        return res.status(500).json({msj: error})
    }

}

// Consultar todos los géneros

const getGeneros = async (req = request, res = response) => {
    try {
        const generos = await Genero.find()
        return res.status(200).json(generos)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msj: error })
    }
}

// Consultar un género por su ID

const getGeneroById = async (req = request, res = response) => {
    const { id } = req.params
    
    try {
        const genero = await Genero.findById(id)

        if (!genero) {
            return res.status(404).json({ msj: 'Género no encontrado' })
        }

        return res.status(200).json(genero)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msj: error })
    }
}

// Actualizar un género

const updateGenero = async (req = request, res = response) => {
    const { id } = req.params
    const { nombre, descripcion } = req.body

    try {
        const genero = await Genero.findByIdAndUpdate(id, { nombre, descripcion }, { new: true })

        if (!genero) {
            return res.status(404).json({ msj: 'Género no encontrado' })
        }

        return res.status(200).json(genero)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msj: error })
    }
}

// Borra un genero por su ID

const deleteGenero = async (req = request, res = response) => {
    const { id } = req.params

    try {
        const genero = await Genero.findByIdAndDelete(id)

        if (!genero) {
            return res.status(404).json({ msj: 'Género no encontrado' })
        }

        return res.status(201).json({ msj: 'Género eliminado con éxito' })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msj: error })
    }
}  

module.exports = {
    createGenero,
    getGeneros,
    getGeneroById,
    updateGenero,
    deleteGenero
}