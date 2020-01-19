require('express-group-routes')
//instantiate express module
const express = require('express')
//init bodyParser
const bodyParser = require('body-parser')
//init cors
const cors = require('cors')
//use express in app variable
const app = express()
//define the server port
const port = process.env.PORT || 5000

//allow this app to receive incoming json request
app.use(bodyParser.json())
app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "*");
  next();
});

//middlewares
const { authenticated } = require('./middleware')

//import controllers
const auth = require('./controllers/auth')
const category = require('./controllers/category')
const article = require('./controllers/article')
const user = require('./controllers/user')
const follow = require('./controllers/follow')
const comment = require('./controllers/comment')

//create the homepage route
app.get('/', (req, res) => {
    //res means, response and it send string "Welcome to Medium API" to the API
    res.send("Welcome to the Medium API")
})

//use group routes here
app.group("/api/v1", (router) => {
    //auth route
    router.post('/register', auth.register)
    router.post('/login', auth.login)

    //category route
    router.get('/categories', category.selectAll)
    router.get('/category/:id', category.selectByID)
    router.post('/category/add', category.addCategory)
    router.delete('/category/delete/:id', category.deleteByID)
    router.put('/category/update/:id', category.updateByID)

    //article route
    router.get('/articles', article.selectAll)
    router.get('/article/:id', article.selectByID)
    router.get('/article/:id/category', article.selectByCategory)
    router.get('/article/:id/user', article.selectByUser)
    router.post('/article/create', article.createArticle)
    router.delete('/article/delete/:id', article.deleteByID)
    router.put('/article/update/:id', article.updateByID)

    //comment route
    router.get('/comments', comment.selectAll)
    router.get('/comment/:id', comment.selectByID)
    router.get('/comment/:id/article', comment.commentByArticle)
    router.get('/comment/:id/user', comment.commentByUser)
    router.post('/comment/post', comment.postComment)
    router.delete('/comment/delete/:id', comment.deleteByID)
    router.put('/comment/update/:id', comment.updateByID)
    
    //follow route
    router.get('/following/:id', follow.selectFollowing)
    router.get('/follower/:id', follow.selectFollower)
    router.delete('/unfollow/:user_id/:follow_user_id', follow.unfollow)
    router.post('/follow/:user_id/:follow_user_id', follow.following)

    //user route
    router.get('/users', user.selectAll)
    router.get('/user/:id', user.selectByID)
    router.delete('/user/delete/:id', user.deleteAccount)
    router.put('/user/update/:id', user.updateAccount)
})

//when this nodejs app executed, it will listen to the defined port
app.listen(port, () => console.log(`Listening on port ${port}!`))