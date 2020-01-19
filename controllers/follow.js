const models = require('../models')
const follow = models.follow
const user = models.user

exports.selectFollowing = (req, res) => {
    const parameter = req.params.id
    follow.findAll({
        where: {user_id:parameter}, attributes: ["id", ["createdAt", "followAt"]],
        include:
        [
            {
                model: user, as: "User", attributes: ["id", "fullname"]
            },
            { 
                model: user, as: "Following", attributes: ["id", "fullname"]
            }
            
        ],
        
    })
    .then(follow => {
        res.send({
            message: "Data Following Selected!",
            follow,
            error: false
        })
    })
    .catch(err => {
        res.send({
            message: "Cannot Select Data! Please fix your code!",
            err,
            error:true
        })
    })
}

exports.selectFollower = (req, res) => {
    const parameter = req.params.id
    follow.findAll({
        where: {follow_user_id:parameter}, attributes: ["id"],
        include:
        [
            {
                model: user, as: "Followed", attributes: [["id", "id_user"],"fullname"]
            },
            {
                model: user, as: "Follower", attributes: [["id", "id_follower"],"fullname"]
            }
        ]
    })
    .then(follower => {
        res.send({
            message: "Data Follower Selected!",
            follower,
            error: false
        })
    })
    .catch(err => {
        res.send({
            message: "Cannot Select Data! Please fix your code!",
            err,
            error:true
        })
    })
}

exports.following = (req, res) => {
    const id_user = req.params.user_id
    const id_following = req.params.follow_user_id
    follow.create(
        req.body.user_id = id_user,
        req.body.follow_user_id = id_following
    )
    .then(follow => {
        res.send({
            message: "Following Success!",
            follow,
            error:false
        })
    })
    .catch(err => {
        res.send({
            message: "Cannot Follow! Please fix your code!",
            err,
            error:true
        })
    })
}

exports.unfollow = (req, res) => {
    const id_user = req.params.user_id
    const id_following = req.params.follow_user_id
    follow.destroy({
        where: {user_id:id_user, follow_user_id:id_following} 
    })
    .then(unfollow => {
        res.send({
            message: "Unfollow Success!",
            unfollow,
            error:false
        })
    })
    .catch(err => {
        res.send({
            message: "Unfollow Failed! Please fix your code!",
            err,
            error:true
        })
    })
}

// Side Note
// Belum dikasih include