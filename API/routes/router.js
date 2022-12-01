const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const uuid = require('uuid');
const jwt = require('jsonwebtoken');

const db = require('../lib/db.js');
const userMiddleware = require('../middleware/users.js');
const { send } = require('process');
const { link, appendFile } = require('fs');

let clientes = require('./clientes')
router.use('/clientes', clientes)

let empleados = require('./empleados')
router.use('/empleados', empleados)

let facturas = require('./facturas')
router.use('/facturas', facturas)

let productos = require('./productos')
router.use('/productos', productos)

router.post('/sign-up', userMiddleware.validateRegister, (req, res, next) => {
    db.query(
        `SELECT * FROM users WHERE LOWER(username)=LOWER(${db.escape(req.body.username)})`,
        (err, result) => {
            if (result.length) {
                return res.status(409).send({
                    msg: 'El usuario esta en uso'
                });
            } else {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        return res.status(500).send({
                            msg: err
                        });
                    } else {
                        db.query(
                            `INSERT INTO users (id, username, password, registered) VALUES ('${uuid.v4()}', ${db.escape(
                                req.body.username
                              )}, ${db.escape(hash)}, now())`,
                            (err, result) => {
                                if (err) {
                                    throw err;
                                    return res.status(400).send({
                                        msg: err
                                    });
                                }
                                return res.status(201).send({
                                    msg: 'Registered!'
                                });
                            }
                        );
                    }
                });
            }
        }
    )
});

router.post('/login', (req, res, next) => {
    db.query(
        `SELECT * FROM users WHERE username=${db.escape(req.body.username)}`,
        (err, result) => {
            if (err) {
                throw err;
                return res.status(400).send({
                    msg: err
                });
            }
            if (!result.length) {
                return res.status(401).send({
                    msg: 'Nombre de usuario o contrasena incorrectos'
                });
            }
            bcrypt.compare(
                req.body.password,
                result[0]['password'],
                (bErr, bResult) => {
                    if (bErr) {
                        throw bErr;
                        return res.status(401).send({
                            msg: 'Nombre de usuario o contrasena incorrectos'
                        });
                    }
                    if (bResult) {
                        const token = jwt.sign({
                                username: result[0].username,
                                userId: result[0].id
                            },
                            `SECRETKEY`, {
                                expiresIn: '7d'
                            }
                        );

                        db.query(
                            `UPDATE users SET last_login=now() WHERE id='${result[0].id}'`
                        );
                        return res.status(200).send({
                            msg: 'accedio correctamente',
                            token,
                            user: result[0],
                            s: 200
                        });
                    }
                    return res.status(401), send({
                        msg: 'Nombre de usuario o contrasena incorrectos'
                    });
                }
            );
        }
    );
});

router.get('/secret-route', (req, res, next) => {
    res.send('Contenido oculto, solo usuarios con acceso pueden ver')
});


module.exports = router;