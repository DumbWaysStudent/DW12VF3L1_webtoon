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
    router.get('/comics', ComicController.index)


    //another APIs goes here
})


app.listen(port, () => console.log(`Listening on port ${port}!`))
