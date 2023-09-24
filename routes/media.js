const { Router } = require('express')
const { createMedia, getMedias, updateMedia,getMediaById, deleteMedia} = require('../controllers/media')

const router = Router()

// Crear una media
router.post('/', createMedia)

// Obtener todas las medias
router.get('/', getMedias)

// Consultar una media por su ID
router.get('/:id', getMediaById)

// Actualizar media
router.put('/:id', updateMedia)

// Borra una media por su ID
router.delete('/:id', deleteMedia)


module.exports = router;
