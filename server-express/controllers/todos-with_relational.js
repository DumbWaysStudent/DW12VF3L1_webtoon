const connection = require('../db')

exports.index = (req, res) => {
    connection.query('SELECT A.*, B.name as created_by FROM todos A LEFT JOIN users B ON A.created_by = B.id', (err, rows)=> {
        if (err) throw err

        res.send(rows)
    })
}

exports.show = (req, res) => {
    connection.query(`SELECT * FROM todos WHERE id=${req.params.id}`, (err, rows)=> {
        if (err) throw err

        res.send(rows[0])
    })
}

exports.store = (req, res) => {
    const { title, is_done, created_by } = req.body

    connection.query(`INSERT INTO todos (title, is_done, created_by) VALUES ('${title}', '${is_done}', '${created_by}')`, (err)=> {
        if (err) throw err
    })

    res.send({
        success: true,
        data: req.body
    })
}

exports.update = (req, res) => {
    //DO IT YOURSELF - MINI QUIZ
    const { title, is_done, id } = req.body

    connection.query(`UPDATE todos SET title = '${title}', is_done = '${is_done}' where id = ${req.params.id}`, (err, rows) => {
      if (err) throw err
    })
    res.send({
        success: true,
        data: req.body
    })
}

exports.delete = (req, res) => {
    //DO IT YOURSELF - MINI QUIZ
    //const { id } = req.body

    connection.query(`DELETE FROM todos where id = ${req.params.id}`, (err)=> {
        if (err) throw err
    })
    res.send({
        success: true,
        data: req.body
    })
}
