const { Router } = require('express')
const { createTipo, getTipos, getTipoById, updateTipo, deleteTipo} = require('../controllers/tipo')

const router = Router()

// Crear un tipo
router.post('/', createTipo)

// Obtener todos los tipos
router.get('/', getTipos)

// Consultar un tipo por su ID
router.get('/:id', getTipoById)

// Actualizar tipo
router.put('/:id', updateTipo)

// Borra un tipo por su ID
router.delete('/:id', deleteTipo)



module.exports = router;