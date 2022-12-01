const jwt = require('jsonwebtoken');


module.exports = {
    validateRegister: (req, res, next) => {
        if (!req.body.username || req.body.username.length < 3) {
            return res.status(400).send({
                msg: 'Introduzca un usuario de minimo 3 caracteres'
            });
        }
        if (!req.body.password || req.body.password.length < 6) {
            return res.status(400).send({
                msg: 'Introduzca una contrasena de minimo 6 caracteres'
            });
        }
        if (!req.body.password_repeat || req.body.password != req.body.password_repeat) {
            return res.status(400).send({
                msg: 'Los 2 password deben de coincidir'
            });
        }
        next();
    }
};