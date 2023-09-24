const productora = require('../models/productora');
const Productora = require('../models/productora');
const { request, response } = require('express');

// Crear una productora

const createProductora = async (req = request, res = response) => {

    const { nombre, estado, slogan, descripcion } = req.body
    try {
        const productoraDB = await Productora.findOne({ nombre, estado, slogan, descripcion })
        if(productoraDB) {
            return res.status(400).json({ msj: 'Ya existe la productora ingresada'})
        }

        const datos = {
            nombre,
            estado,
            slogan,
            descripcion
        }

        const productora = new Productora(datos)

        await productora.save();

        return res.status(201).json(productora);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msj: error });
    }
}

// Consultar todos las productoras

const getProductoras = async (req = request, res = response) => {
    try {
        const productora = await Productora.find()
        return res.status(200).json(productora)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msj: error })
    }
}

// Consultar una productora por su ID

const getProductoraById = async (req = request, res = response) => {
    const { id } = req.params
    
    try {
        const productora = await Productora.findById(id)

        if (!productora) {
            return res.status(404).json({ msj: 'Productora no encontrada' })
        }

        return res.status(200).json(productora)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msj: error })
    }
}

// Actualizar productora

const updateProductora = async (req = request, res = response) => {
    const { id } = req.params
    const { nombre, estado,slogan, descripcion } = req.body

    try {
        const productora = await Productora.findByIdAndUpdate(id, { nombre, estado, slogan, descripcion }, { new: true })

        if (!productora) {
            return res.status(404).json({ msj: 'Productora no encontrada' })
        }

        return res.status(200).json(productora)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msj: error })
    }
}

// Borra una productora por su ID

const deleteProductora = async (req = request, res = response) => {
    const { id } = req.params

    try {
        const productora = await Productora.findByIdAndDelete(id)

        if (!productora) {
            return res.status(404).json({ msj: 'Productora no encontrada' })
        }

        return res.status(201).json({ msj: 'Productora eliminada con éxito' })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msj: error })
    }
}  


module.exports = {
    createProductora,
    getProductoras,
    getProductoraById,
    updateProductora,
    deleteProductora
}
