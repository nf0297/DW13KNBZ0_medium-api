const models = require('../models')
const user = models.user


exports.selectAll = (req, res) => {
    user.findAll()
    .then(user => {
        res.send({
            message: "User Data Selected!",
            user,
            error: false
        })
    })
    .catch(err => {
        res.send({
            message: "Cannot Select user! Please fix your code!",
            err,
            error: true
        })
    })
}

exports.selectByID = (req, res) => {
    const parameter = req.params.id
    user.findOne({
        where: {id:parameter}
    })
    .then(user => {
        res.send({
            message: "User Data Selected!",
            user,
            error: false
        })
    })
    .catch(err => {
        res.send({
            message: "Cannot Select user! Please fix your code!",
            err,
            error:true
        })
    })
}

exports.deleteAccount = (req, res) => {
    const parameter = req.params.id
    user.destroy({
        where: {id:parameter}
    })
    .then(user => {
        res.send({
            message: "User Data Deleted!",
            user,
            error:false
        })
    })
    .catch(err => {
        res.send({
            message: "Delete user Failed!",
            err,
            error:true
        })
    })
}

exports.updateAccount = (req, res) => {
    const parameter = req.params.id
    user.update({
        where: {id:parameter}
    })
    .then(user => {
        res.send({
            message: "Update User Success!!",
            user,
            error:false
        })
    })
    .catch(err => {
        res.send({
            message: "Update User Failed!!",
            err,
            error:false
        })
    })
}

// Side Note
// Belum dikasih include