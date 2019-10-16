const models = require('../models')
const Episode = models.episode

exports.index = (req, res) => {
    Episode.findAll().then(episodes=>res.send(episodes))
}

exports.indexEpisode = (req, res) => {
    comicId = req.params.comicId
    Episode.findAll({where: {comicId: comicId}}).then(episodes=>res.send(episodes))
}

exports.show = (req, res) => {
    Episode.findOne({id: req.params.id}).then(episodes=> res.send(episodes))
}
