let mysql = require('../lib/db')

module.exports = {
    crear: (req, res) => {
        console.log(req.body)
        mysql.query(`INSERT INTO empleados (nombre,celular,email,cargo,salario) VALUES ('${req.body.nombre}','${req.body.celular}','${req.body.correo}','${req.body.cargo}',${req.body.salario})`, (error, results, fields) => {
            if (error) {
                res.json(error)
            } else {
                console.log('Id de empleado registrado:' + results.insertId)
                res.json({ tipo: '200', msg: 'Se inserto de manera correcta' })
            }
        });
    },
    listar: (req, res) => {
        mysql.query('SELECT * FROM empleados', (error, results, fields) => {
            if (error) {
                res.json(error)
            } else {
                res.json(results)
            }
        });
    },
    buscar: (req, res) => {
        mysql.query('SELECT * FROM empleados WHERE id=?', req.params.idempleado, (error, results, fields) => {
            if (error) {
                res.json(error)
            } else {
                res.json(results)
            }
        });
    },
    borrar: (req, res) => {
        mysql.query('DELETE FROM empleados WHERE id=?', req.params.idempleado, (error, results, fields) => {
            if (error) {
                res.json(error)
            } else {
                res.json(results)
            }
        });
    }
}