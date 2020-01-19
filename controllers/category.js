const models = require('../models')
const category = models.category

exports.selectAll = (req, res) => {
    category.findAll()
    .then(category => {
        res.send({
            message: "Category Selected Successfully!",
            category,
            error: false
        })
    })
    .catch(err => {
        res.send({
            message: "Cannot Select Category! Please fix your code!",
            err,
            error: true
        })
    })
}

exports.selectByID = (req, res) => {
    const parameter = req.params.id
    category.findOne({
        where: {id:parameter}
    })
    .then(category => {
        res.send({
            message: "Category Selected Successfully!",
            category,
            error: false
        })
    })
    .catch(err => {
        res.send({
            message: "Cannot Select Category! Please fix your code!",
            err,
            error:true
        })
    })
}

exports.addCategory = (req, res) => {
    category.create(req.body)
    .then(category => {
        res.send({
            message: "Add Category Success!",
            category,
            error:false
        })
    })
    .catch(err => {
        res.send({
            message: "Cannot Add New Category! Please fix your code!",
            err,
            error:true
        })
    })
}

exports.deleteByID = (req, res) => {
    const parameter = req.params.id
    category.destroy({
        where: {id:parameter}
    })
    .then(category => {
        res.send({
            message: "Category Deleted!",
            category,
            error:false
        })
    })
    .catch(err => {
        res.send({
            message: "Delete Category Failed!",
            err,
            error:true
        })
    })
}

exports.updateByID = (req, res) => {
    const parameter = req.params.id
    category.update({
        where: {id:parameter}
    })
    .then(category => {
        res.send({
            message: "Update Category Success!",
            category,
            error:false
        })
    })
    .catch(err => {
        res.send({
            message: "Update Category Failed!",
            err,
            error:false
        })
    })
}