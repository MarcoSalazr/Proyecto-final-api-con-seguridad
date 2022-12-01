let mysql = require('../lib/db')

module.exports = {
    crear: (req, res) => {
        console.log(req.body)
        mysql.query(`INSERT INTO faturas (cliente,empleado,precio,productos) VALUES ('${req.body.cliente}','${req.body.empleado}','${req.body.precio}','${req.body.productos}')`, (error, results, fields) => {
            if (error) {
                res.json(error)
            } else {
                console.log('Id de factura registrada:' + results.insertId)
                    //res.json({ tipo: '200', msg: 'Se inserto de manera correcta' })
                for (let i = 0; i < req.body.productos.length; i++) {
                    mysql.query(`UPDATE productos SET  WHERE ${req.body.productos[i]}`, (error, results, fields) => {
                        if (error) {
                            res.json(error)
                        } else {
                            //res.json(results)
                        }
                    });
                }
                res.json({ tipo: '200', msg: 'Se inserto de manera correcta' })
            }
        });
    },
    listar: (req, res) => {
        mysql.query('SELECT * FROM facturas', (error, results, fields) => {
            if (error) {
                res.json(error)
            } else {
                res.json(results)
            }
        });
    },
    buscar: (req, res) => {
        mysql.query('SELECT * FROM facturas WHERE id=?', req.params.idfactura, (error, results, fields) => {
            if (error) {
                res.json(error)
            } else {
                res.json(results)
            }
        });
    },
    borrar: (req, res) => {
        mysql.query('DELETE FROM facturas WHERE id=?', req.params.idfactura, (error, results, fields) => {
            if (error) {
                res.json(error)
            } else {
                res.json(results)
            }
        });
    }
}