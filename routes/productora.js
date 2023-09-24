const { Router } = require('express')
const { createProductora, getProductoras, getProductoraById, updateProductora, deleteProductora } = require('../controllers/productora')

const router = Router()

// Crear una productora
router.post('/', createProductora)

// Obtener todas las productoras
router.get('/', getProductoras)

// Consultar una productora por su ID
router.get('/:id', getProductoraById)

// Actualizar productora
router.put('/:id', updateProductora)

// Borra una productora por su ID
router.delete('/:id', deleteProductora)



module.exports = router;
