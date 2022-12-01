const router = require('express').Router();
const empleadosController = require('../controllers/empleadosController');

router.get('/', (req, res) => {
    empleadosController.listar(req, res);
})

router.get('/:idempleado', (req, res) => {
    empleadosController.buscar(req, res);
})

router.post('/', (req, res) => {
    empleadosController.crear(req, res);
})

router.delete('/', (req, res) => {
    empleadosController.borrar(req, res);
})

module.exports = router;