const Media = require('../models/media')
const { request, response } = require('express')


//Crear una media

const createMedia = async (req = request, res = response) => {
    console.log(req.body)

    const { serial, titulo, sipnosis, url, imagen, añoEstreno, genero, director, productora, tipo } = req.body
    try{
        const mediaDB = await Media.findOne({ serial, titulo, sipnosis, url, imagen, añoEstreno, genero, director, productora, tipo  })
        if(mediaDB) {
            return res.status(400).json({ msj: 'Ya existe la media ingresada'})
        }
        
        const datos = {
            serial,
            titulo,
            sipnosis,
            url,
            imagen,
            añoEstreno,
            genero,
            director,
            productora,
            tipo
        }

        const media = new Media(datos)

        await media.save()

        return res.status(201).json(media)

    } catch(error) {
        console.log(error)
        return res.status(500).json({msj: error})
    }

}

// Obtener todas las medias

const getMedias = async (req = request, res = response) => {
    try {
        const media = await Media.find()
        return res.status(200).json(media)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msj: error })
    }
}

//Consultar una media por su ID

const getMediaById = async (req = request, res = response) => {
    const { id } = req.params
    
    try {
        const media = await Media.findById(id)

        if (!media) {
            return res.status(404).json({ msj: 'Media no encontrada' })
        }

        return res.status(200).json(media)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msj: error })
    }
}

// Actualizar media

const updateMedia = async (req = request, res = response) => {
    const { id } = req.params
    const { serial, titulo, sipnosis, url, imagen, añoEstreno, genero, director, productora, tipo } = req.body

    try {
        const media = await Media.findByIdAndUpdate(id, { serial, titulo, sipnosis, url, imagen, añoEstreno, genero, director, productora, tipo}, { new: true })

        if (!media) {
            return res.status(404).json({ msj: 'Media no encontrada' })
        }

        return res.status(200).json(media)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msj: error })
    }
}

// Borra una media por su ID

const deleteMedia = async (req = request, res = response) => {
    const { id } = req.params

    try {
        const media = await Media.findByIdAndDelete(id)

        if (!media) {
            return res.status(404).json({ msj: 'Media no encontrada' })
        }

        return res.status(201).json({ msj: 'Media eliminada con éxito' })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msj: error })
    }
} 

module.exports = {
    createMedia,
    getMedias,
    getMediaById,
    updateMedia,
    deleteMedia
}