const models = require('../models')
const Comic = models.comic

exports.index = (req, res) => {
    Comic.findAll().then(comics=>res.send(comics))
}

exports.show = (req, res) => {
    Comic.findOne({id: req.params.id}).then(comics=> res.send(comics))
}
