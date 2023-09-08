const {Router} = require('express')
const {getRecetasFecha, getVentaParacetamol} = require('../controllers/venta.controller.js')
const router = Router()

//Se aplica una ruta a cada uno con su respectiva funcion del controlador
router.get("/", getRecetasFecha)
router.get("/paracetamol", getVentaParacetamol)

module.exports = router