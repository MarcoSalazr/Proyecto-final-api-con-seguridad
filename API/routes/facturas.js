const router = require('express').Router();
const facturasController = require('../controllers/facturasControler');

router.get('/', (req, res) => {
    facturasController.listar(req, res);
})

router.get('/:idempleado', (req, res) => {
    facturasController.buscar(req, res);
})

router.post('/', (req, res) => {
    facturasController.crear(req, res);
})

router.delete('/', (req, res) => {
    facturasController.borrar(req, res);
})

module.exports = router;