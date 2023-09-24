const director = require('../models/director');
const Director = require('../models/director');
const { request, response } = require('express');


// Crear director

const createDirector = async (req = request, res = response) => {

    const { nombre } = req.body
    try {
        const directorDB = await Director.findOne({ nombre })
        if(directorDB) {
            return res.status(400).json({ msj: 'Ya existe el director ingresado'})
        }

        const datos = {
            nombre
        }

        const director = new Director(datos)

        await director.save();

        return res.status(201).json(director);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msj: error });
    }
}

// Consultar todos los directores

const getDirectores = async (req = request, res = response) => {
    try {
        const director = await Director.find()
        return res.status(200).json(director)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msj: error })
    }
}

// Consultar un director por su ID

const getDirectorById = async (req = request, res = response) => {
    const { id } = req.params
    
    try {
        const director = await Director.findById(id)

        if (!director) {
            return res.status(404).json({ msj: 'Director no encontrado' })
        }

        return res.status(200).json(director)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msj: error })
    }
}

// Actualizar un director

const updateDirector = async (req = request, res = response) => {
    const { id } = req.params
    const { nombre } = req.body

    try {
        const director = await Director.findByIdAndUpdate(id, { nombre }, { new: true })

        if (!director) {
            return res.status(404).json({ msj: 'Director no encontrado' })
        }

        return res.status(200).json(director)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msj: error })
    }
}

// Borra un genero por su ID

const deleteDirector = async (req = request, res = response) => {
    const { id } = req.params

    try {
        const director = await Director.findByIdAndDelete(id)

        if (!director) {
            return res.status(404).json({ msj: 'Director no encontrado' })
        }

        return res.status(201).json({ msj: 'Director eliminado con éxito' })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msj: error })
    }
}  

module.exports = {
    createDirector,
    getDirectores,
    getDirectorById,
    updateDirector,
    deleteDirector
}
