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

exports.createEpisode = (req,res) => {
  Episode.create({title: req.body.title, image: req.body.image, comicId: req.params.comicId}).then(episodes=> res.send(episodes))
}

exports.updateEpisode = (req, res) => {
  Episode.update(
  req.body,
  {
    where:{id:req.params.episodeId}
  }).then(comics=>res.send(comics))
}

exports.deleteEpisode = (req, res) => {
  Episode.destroy(
  {
    where:{id:req.params.episodeId}
  }).then(comics=>res.send('Sukses Hapus'))
}
