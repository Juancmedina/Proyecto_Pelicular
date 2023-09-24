const { Router } = require('express');
const { createDirector, getDirectores, getDirectorById, updateDirector, deleteDirector } = require('../controllers/director');

const router = Router();

// Crear un director
router.post('/', createDirector)

// Obtener todos los directores
router.get('/', getDirectores)

// Consultar un director por su ID
router.get('/:id', getDirectorById)

// Actualizar director
router.put('/:id', updateDirector)

// Borra un director por su ID
router.delete('/:id', deleteDirector)


module.exports = router;
