const models = require('../models')
const Todo = models.todo
const User = models.user

exports.store = (req, res) => {
    User.create(req.body).then(todo=> {
        res.send({
            message: "success",
            todo
        })
    })
}
