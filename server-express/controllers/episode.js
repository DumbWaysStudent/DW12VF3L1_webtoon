const models = require('../models')
const Episode = models.episode

//show all episode
exports.index = (req, res) => {
    Episode.findAll().then(episodes=>res.send(episodes))
}

//show all episode based on comicId
exports.indexEpisode = (req, res) => {
    comicId = req.params.comicId
    Episode.findAll({where: {comicId: comicId}}).then(episodes=>res.send(episodes))
}

//show episode item based on episode id
exports.show = (req, res) => {
    Episode.findOne({id: req.params.id}).then(episodes=> res.send(episodes))
}
