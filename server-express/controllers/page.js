const models = require('../models')
const Page = models.page

//show all episode
exports.index = (req, res) => {
    Page.findAll().then(pages=>res.send(pages))
}

//show all episode based on comicId
exports.indexPage = (req, res) => {
    episodeId = req.params.episodeId
    Page.findAll({where: {episodeId: episodeId}}).then(pages=>res.send(pages))
}

//show episode item based on episode id
exports.show = (req, res) => {
    Page.findOne({id: req.params.id}).then(pages=> res.send(pages))
}

exports.show = (req, res) => {
    Page.findAll({where:{episodeId: req.params.episodeId}}).then(pages=> res.send(pages))
}

exports.createImageEpisode = (req, res) => {
  Page.create(
    {
      page: req.body.page,
      image: req.body.image,
      episodeId: req.params.episodeId
    }
  ).then(pages=> res.send(pages))
}

exports.deleteImageEpisode = (req, res) => {
  Page.destroy(
  {
    where:{id:req.params.imageId}
  }).then(comics=>res.send('Sukses Hapus'))
}
