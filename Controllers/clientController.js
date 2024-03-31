const database = require('../services/database');

exports.getAllclient = async (req, res) => {
    database.query('SELECT * from client', (err, result) => {
        if (err) {
            console.log(err.stack)
        } else {
            res.send(result.rows)
        }
    })
}

exports.create = async (req, res) => {
    try {
        const result = await database.query({
            text: ` insert into client (nas_cli,nom_complet_cli,date_creation_cli,adresse) 
            values($1,$2,$3,$4) returning *`
            ,
            values: [req.body.nas_cli,
            req.body.nom_complet_cli,
            req.body.date_creation_cli,
            req.body.adresse,

            ]
        })
        res.send(result.rows[0])
        res.redirect('/')
    }
    catch (err) {
        console.log(err.stack)
    }
}