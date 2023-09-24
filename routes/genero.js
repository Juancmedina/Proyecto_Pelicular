const { Router } = require('express');
const { createGenero, getGeneros, getGeneroById,updateGenero,deleteGenero } = require('../controllers/genero')

const router = Router();

// Crear una género
router.post('/', createGenero)

// Obtener todos los géneros
router.get('/', getGeneros)

// Consultar un género por su ID
router.get('/:id', getGeneroById)

// Actualizar género
router.put('/:id', updateGenero)

// Borra un genero por su ID
router.delete('/:id', deleteGenero)

module.exports = router;