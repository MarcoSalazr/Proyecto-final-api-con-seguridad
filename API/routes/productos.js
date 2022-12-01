const router = require('express').Router();
const productosController = require('../controllers/productosController');

router.get('/', (req, res) => {
    productosController.listar(req, res);
})

router.get('/:idempleado', (req, res) => {
    productosController.buscar(req, res);
})

router.post('/', (req, res) => {
    productosController.crear(req, res);
})

router.delete('/', (req, res) => {
    productosController.borrar(req, res);
})

module.exports = router;