const models = require('../models')
const User = models.user

exports.index = (req, res) => {
    User.findAll().then(users=>res.send(users))
}

//show episode item based on episode id
exports.show = (req, res) => {
    User.findOne({id: req.params.id}).then(users=> res.send(users))
}
