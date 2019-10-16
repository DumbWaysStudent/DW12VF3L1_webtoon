const Sequelize = require  ('sequelize')
const models = require('../models')
const Comic = models.comic
const Search = Sequelize.Op

//show all comic data
exports.index = (req, res) => {
    //Buat variabel query untuk menampung

    const {is_favorite, title} = req.query
    console.log(is_favorite)

    if(is_favorite=='true'){
      Comic.findAll({
        where:{
          isFavorite:true
        }
      }).then(comics => res.send(comics))
    } else if(is_favorite=='false'){
      Comic.findAll({
        where:{
          isFavorite:false
        }
      }).then(comics => res.send(comics))
    } else if(title) {
      Comic.findAll(
        {
          where: {
            title: {[Search.like] : `%${title}%`}
          }
        }
      ).then(comics => res.send(comics))
    } else {
      Comic.findAll().then(comics => res.send(comics))
    }

    // let query
    // if(req.query.is_favorite = true ){
    //   query = Comic.findAll({
    //     where:{
    //       isFavorite: req.query.is_favorite
    //     }
    //   })
    // }
    // query.then(comics=>res.send(comics))
}

exports.favorite = (req, res) => {
  Comic.findAll({where: {isFavorite: req.params.isFavorite}}).then(comics=>res.send(comics))
}

//show data based on id
exports.show = (req, res) => {
    Comic.findOne({id: req.params.id}).then(comics=> res.send(comics))
}

//show all episode based on comicId
exports.userComic = (req, res) => {
    userId = req.params.userId
    Comic.findAll({where: {userId: userId}}).then(comics=>res.send(comics))
}
