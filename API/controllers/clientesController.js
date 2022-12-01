let mysql = require('../lib/db')

module.exports = {
    crear: (req, res) => {
        console.log(req.body)
        mysql.query(`INSERT INTO clientes (nombre,celular,email) VALUES ('${req.body.nombre}','${req.body.celular}','${req.body.correo}')`, (error, results, fields) => {
            if (error) {
                res.json(error)
            } else {
                console.log('Id de cliente registrado:' + results.insertId)
                res.json({ tipo: '200', msg: 'Se inserto de manera correcta' })
            }
        });
    },
    listar: (req, res) => {
        mysql.query('SELECT * FROM clientes', (error, results, fields) => {
            if (error) {
                res.json(error)
            } else {
                return res.status(200).send({
                    msg: 'accedio correctamente',
                    token,
                    user: result[0],
                    s: 200
                });
            }
        });
    },
    buscar: (req, res) => {
        mysql.query('SELECT * FROM clientes WHERE id=?', req.params.idcliente, (error, results, fields) => {
            if (error) {
                res.json(error)
            } else {
                res.json(results)
            }
        });
    },
    borrar: (req, res) => {
        mysql.query('DELETE FROM clientes WHERE id=?', req.params.clientee, (error, results, fields) => {
            if (error) {
                res.json(error)
                console.log(error)
            } else {
                res.json(results)
                console.log(results)
            }
        });
    }
}