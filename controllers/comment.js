const models = require('../models')
const comment = models.comment
const article = models.article
const user = models.user
const category = models.category

exports.selectAll = (req, res) => {
    comment.findAll({
        attributes: ["id", "content", "createdAt", "updatedAt"],
        include:
        [
            {
                model: user, as: "CreatedBy", attributes: ["id", "fullname", "image"]
            },
            { 
                model: article, as: "insideArticle", attributes: ["id", "title"]
            }
        ]
    })
    .then(comment => {
        res.send({
            message: "Comment Selected!",
            comment,
            error: false
        })
    })
    .catch(err => {
        res.send({
            message: "Cannot Select Comment! Please fix your code!",
            err,
            error: true
        })
    })
}

exports.selectByID = (req, res) => {
    const parameter = req.params.id
    comment.findOne({
        where: {id:parameter},
        attributes: ["id", "content", "createdAt", "updatedAt"],
        include:
        [
            {
                model: user, as: "CreatedBy", attributes: ["id", "fullname", "image"]
            },
            { 
                model: article, as: "insideArticle", attributes: ["id", "title"],
                include: 
                [
                        { 
                            model: category, as: "Category", attributes: ["id", "name"]
                        },
                        {
                            model: user, as: "CreatedBy", attributes: ["id", "fullname", "image"]
                        }
                ]
            }
        ]
    })
    .then(comment => {
        res.send({
            message: "Comment Selected!",
            comment,
            error: false
        })
    })
    .catch(err => {
        res.send({
            message: "Cannot Select Comment! Please fix your code!",
            err,
            error:true
        })
    })
}

exports.commentByArticle = (req, res) => {
    const parameter = req.params.id
    comment.findAll({
        where: {article_id:parameter},
        attributes: ["id", "content", "createdAt", "updatedAt"],
        include:
        [
            {
                model: user, as: "CreatedBy", attributes: ["id", "fullname", "image"]
            },
            { 
                model: article, as: "insideArticle", attributes: ["id", "title"],
                include: 
                [
                        { 
                            model: category, as: "Category", attributes: ["id", "name"]
                        },
                        {
                            model: user, as: "CreatedBy", attributes: ["id", "fullname", "image"]
                        }
                ]
            }
        ]
    })
    .then(comment => {
        res.send({
            message: "Comment Selected!",
            comment,
            error: false
        })
    })
    .catch(err => {
        res.send({
            message: "Cannot Select Comment! Please fix your code!",
            err,
            error:true
        })
    })
}

exports.commentByUser = (req, res) => {
    const parameter = req.params.id
    comment.findAll({
        where: {user_id:parameter},
        attributes: ["id", "content", "createdAt", "updatedAt"],
        include:
        [
            { 
                model: article, as: "insideArticle", attributes: ["id", "title"],
                include: 
                [
                        { 
                            model: category, as: "Category", attributes: ["id", "name"]
                        },
                        {
                            model: user, as: "CreatedBy", attributes: ["id", "fullname", "image"]
                        }
                ]
            }
        ]
    })
    .then(comment => {
        res.send({
            message: "Comment Selected!",
            comment,
            error:false
        })
    })
    .catch(err => {
        res.send({
            message: "Cannot Select Comment! Please fix your code!",
            err,
            error:true 
        })
    })
}

exports.postComment = (req, res) => {
    comment.create(req.body)
    .then(comment => {
        res.send({
            message: "Add comment Success!",
            comment,
            error:false
        })
    })
    .catch(err => {
        res.send({
            message: "Cannot Add New comment! Please fix your code!",
            err,
            error:true
        })
    })
}

exports.deleteByID = (req, res) => {
    const parameter = req.params.id
    comment.destroy({
        where: {id: parameter}
    })
    .then(comment => {
        res.send({
            message: "comment Deleted!",
            comment,
            error:false
        })
    })
    .catch(err => {
        res.send({
            message: "Delete comment Failed!",
            err,
            error:true
        })
    })
}

exports.updateByID = (req, res) => {
    const parameter = req.params.id
    comment.update({
        where: {id:parameter}
    })
    .then(comment => {
        res.send({
            message: "Update comment Success!",
            comment,
            error:false
        })
    })
    .catch(err => {
        res.send({
            message: "Update comment Failed!",
            err,
            error:false
        })
    })
}

// Side Note
// Belum dikasih include