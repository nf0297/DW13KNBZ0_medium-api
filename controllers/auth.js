const jwt = require('jsonwebtoken')
const models = require('../models')
const user = models.user


exports.register = (req, res) => {
    user.create(req.body)
    .then(user => {
        const token = jwt.sign({ id: user.id }, 'Tester');
        const username = user.username;
        const id = user.id;
        const name = user.fullname;
        res.send ({
            message: "Create Account Success!",
            id,
            username,
            name,
            token,
            error: false
        });
    })
    .catch(err => {
        res.send({
            message: "Create Account Fail!",
            err,
            error: true
        })
    })
};

exports.login = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    user.findOne({where: {username, password}})
    .then(user => {
        if (user){
            const id = user.id;
            const username = user.username;
            const name = user.fullname;
            const token = jwt.sign({ id: user.id }, 'Horizondust');
            res.send({
                message: "Login Success!",
                id,
                username,
                name,
                token,
                error: false
            })
        } else {
            res.send({
                error: true,
                message: "Wrong Email or Password!"
            })
        }
    })
}
