const models = require('../models')
const article = models.article
const category = models.category
const user = models.user
const comment = models.comment

exports.selectAll = (req, res) => {
    article.findAll({
        attributes: ["id", "title", "content", "image", "is_published", "is_active", "createdAt", "updatedAt"],
        include:
        [
            { 
                model: category, as: "Category", attributes: ["id", "name"]
            },
            {
                model: user, as: "CreatedBy", attributes: ["id", "fullname", "image"]
            }
        ]
    })
    .then(article => {
        res.send({
            message: "Article Selected!",
            article,
            error: false
        })
    })
    .catch(err => {
        res.send({
            message: "Cannot Select Article! Please fix your code!",
            err,
            error: true
        })
    })
}

exports.selectByID = (req, res) => {
    const parameter = req.params.id
    article.findOne({
        where: {id:parameter},
        attributes: ["id", "title", "content", "image", "is_published", "is_active", "createdAt", "updatedAt"],
        include:
        [
            { 
                model: category, as: "Category", attributes: ["id", "name"]
            },
            {
                model: user, as: "CreatedBy", attributes: ["id", "fullname", "image"]
            },
            {
                model: comment, as: "Comment", attributes: ["content", "createdAt"],
                include:
                [
                    {
                        model: user, as: "CommentedBy", attributes: ["id", "fullname", "image"]
                    }
                ]
            }
        ]
    })
    .then(article => {
        res.send({
            message: "Article Selected!",
            article,
            error: false
        })
    })
    .catch(err => {
        res.send({
            message: "Cannot Select Article! Please fix your code!",
            err,
            error:true
        })
    })
}

exports.selectByCategory = (req, res) => {
    const parameter = req.params.id
    article.findAll({
        where: {category_id:parameter},
        attributes: ["id", "title", "content", "image", "is_published", "is_active", "createdAt", "updatedAt"],
        include:
        [
            {
                model: user, as: "CreatedBy", attributes: ["id", "fullname", "image"]
            }
        ]
    })
    .then(article => {
        res.send({
            message: "Article Selected!",
            article,
            error: false
        })
    })
    .catch(err => {
        res.send({
            message: "Cannot Select Article! Please fix your code!",
            err,
            error:true
        })
    })
}

exports.selectByUser = (req, res) => {
    const parameter = req.params.id
    article.findAll({
        where: {user_id:parameter},
        attributes: ["id", "title", "content", "image", "is_published", "is_active", "createdAt", "updatedAt"],
        include: 
    [
        {
            model: category, as: "Category", attributes: ["id", "name"]
        },
        {
            model: user, as: "CreatedBy", attributes: ["id", "fullname", "image"]
        }
    ]
    })
    .then(article => {
        res.send({
            message: "Article Selected!",
            article,
            error:false
        })
    })
    .catch(err => {
        res.send({
            message: "Cannot Select Article! Please fix your code!",
            err,
            error:true 
        })
    })
}

exports.createArticle = (req, res) => {
    article.create(req.body)
    .then(article => {
        res.send({
            message: "Add Article Success!",
            article,
            error:false
        })
    })
    .catch(err => {
        res.send({
            message: "Cannot Add New Article! Please fix your code!",
            err,
            error:true
        })
    })
}

exports.deleteByID = (req, res) => {
    const parameter = req.params.id
    article.destroy({
        where: {id:parameter}
    })
    .then(article => {
        res.send({
            message: "Article Deleted!",
            article,
            error:false
        })
    })
    .catch(err => {
        res.send({
            message: "Delete Article Failed!",
            err,
            error:true
        })
    })
}

exports.updateByID = (req, res) => {
    const parameter = req.params.id
    article.update({
        where: {id:parameter}
    })
    .then(Article => {
        res.send({
            message: "Update Article Success!",
            article,
            error:false
        })
    })
    .catch(err => {
        res.send({
            message: "Update Article Failed!",
            err,
            error:false
        })
    })
}

// Side Note
// Belum dikasih include