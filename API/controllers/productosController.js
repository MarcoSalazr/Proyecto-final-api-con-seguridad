let mysql = require('../lib/db')

module.exports = {
    crear: (req, res) => {
        console.log(req.body)
        mysql.query(`INSERT INTO productos (codigo,nombre,cantidad) VALUES ('${req.body.codigo}','${req.body.nombre}','${req.body.cantidad}')`, (error, results, fields) => {
            if (error) {
                res.json(error)
            } else {
                console.log('Id de producto registrado:' + results.insertId)
                res.json({ tipo: '200', msg: 'Se inserto de manera correcta' })
                let detallesp = document.getElementById('detallesproductos');
                detallesp += 'Agregado correctamente'
            }
        });
    },
    listar: (req, res) => {
        mysql.query('SELECT * FROM productos', (error, results, fields) => {
            if (error) {
                res.json(error)
            } else {
                res.json(results)
                let detallesp = document.getElementById('detallesproductos');
                detallesp = '';
                detallesp += res.body
            }
        });
    },
    buscar: (req, res) => {
        mysql.query('SELECT * FROM productos WHERE id=?', req.params.idproducto, (error, results, fields) => {
            if (error) {
                res.json(error)
            } else {
                res.json(results)
                let detallesp = document.getElementById('detallesproductos');
                detallesp = '';
                detallesp += res.body
            }
        });
    },
    borrar: (req, res) => {
        mysql.query('DELETE FROM clientes WHERE id=?', req.params.eliminar, (error, results, fields) => {
            if (error) {
                res.json(error)
            } else {
                res.json(results)
            }
        });
    }
}