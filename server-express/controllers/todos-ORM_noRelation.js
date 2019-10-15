const Todo = require('../models').todo

exports.index = (req, res) => {
    Todo.findAll().then(todos=>res.send(todos))
}

exports.show = (req, res) => {
    //DO IT YOURSELF - MINI QUIZ 2
    Todo.findOne({where:{id:req.params.id}}).then(todos=>res.send(todos))
}

exports.store = (req, res) => {
    //DO IT YOURSELF - MINI QUIZ 2
    Todo.create({
      title: req.body.title, //req.body.title untuk mendapatkan isi dari isian postman kita
      is_done: req.body.is_done,
      created_by: req.body.created_by
    }).then(todos=>res.send(todos))
}

exports.update = (req, res) => {
    //DO IT YOURSELF - MINI QUIZ 2
    const id = req.params.id
    const title = req.body.title
    const is_done = req.body.is_done

    Todo.update({
      title: title,
      is_done: is_done,
    }, {where: { id: id }}).then(res.send({status: "Sukses Update Data"}))
}

exports.delete = (req, res) => {
    //DO IT YOURSELF - MINI QUIZ 2
    const id = req.params.id

    Todo.destroy({where: {id: id}}).then(res.send({status: "Sekses Hapus Data"}))
}
