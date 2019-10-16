const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')

const app = express()
const port = 5000

app.use(bodyParser.json())

//controllers
const AuthController = require('./controllers/auth')
const TodosController = require('./controllers/todos')
const RegisterController = require('./controllers/register')
const ComicController = require('./controllers/comic')
const EpisodeController = require('./controllers/episode')
const PageController = require('./controllers/page')
const UserController = require('./controllers/user')

//middlewares
const {authenticated} = require('./middleware')

app.group("/api/v1", (router) => {
    //Login
    router.post('/login', AuthController.login)

    //todos API
    router.get('/todos', authenticated, TodosController.index)
    router.get('/todo/:id', TodosController.show)
    router.post('/todo', TodosController.store)
    router.patch('/todo/:id', TodosController.update)
    router.delete('/todo/:id', TodosController.delete)

    //Register User
    router.post('/register', RegisterController.store)

    //Comic Api
    router.get('/comics', authenticated, ComicController.index)
    router.get('/comic/:id', ComicController.show)

    //get comics where isFavorite = true
    router.get('/comic', authenticated, ComicController.favorite)

    //get episodes from comic based on comicId
    router.get('/comic/:comicId/episodes', EpisodeController.indexEpisode)

    //get pages from episode based on episodeId
    router.get('/episode/:episodeId/pages', PageController.indexPage)

    //Episode
    router.get('/episodes',EpisodeController.index)
    router.get('/episode/:id', EpisodeController.show)

    //Page
    router.get('/pages',PageController.index)
    router.get('/page/:id',PageController.show)


    //User
    router.get('/users',UserController.index)
    router.get('/user/:id',UserController.show)
    router.get('/user/:userId/comics', authenticated, ComicController.userComic)
    router.post('/user/:userId/comic', authenticated, ComicController.createComic)
    router.get('/user/:userId/comic/:comicId', authenticated, ComicController.show)
    router.put('/user/:userId/comic/:comicId', authenticated, ComicController.updateComic)
    router.delete('/user/:userId/comic/:comicId', authenticated, ComicController.deleteComic)

    router.post('/user/:userId/comic/:comicId/episode', authenticated, EpisodeController.createEpisode)
    router.get('/user/:userId/episode/:episodeId/images', authenticated, PageController.show)

    //another APIs goes here
})


app.listen(port, () => console.log(`Listening on port ${port}!`))
