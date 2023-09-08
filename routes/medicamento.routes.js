const {Router} = require('express')
const {getMedicamentosStock, getMedicamentosProveedor,getMedicamentosProveedorA} = require('../controllers/medicamento.controller.js')
const router = Router()

//Se aplica una ruta a cada uno con su respectiva funcion del controlador
router.get("/",getMedicamentosStock)
router.get("/proveedores",getMedicamentosProveedor)
router.get("/proveedores/a",getMedicamentosProveedorA)

module.exports = router