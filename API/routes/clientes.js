const router = require('express').Router();
const clientesController = require('../controllers/clientesController');

router.get('/', (req, res) => {
    clientesController.listar(req, res);
})

router.get('/:idcliente', (req, res) => {
    clientesController.buscar(req, res);
})

router.post('/', (req, res) => {
    clientesController.crear(req, res);
})

router.delete('/', (req, res) => {
    clientesController.borrar(req, res);
})

module.exports = router;