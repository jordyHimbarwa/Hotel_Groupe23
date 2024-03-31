const database = require('../services/database');

exports.getAllchambre = async (req, res) => {
    database.query('SELECT * from chambre', (err, result) => {
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
            text: ` insert into chambre (id_c,intitule_c,prix,tv_c,air_cond_c,refrigerator_c,extensible_c.capacite_c,issue_c,id_eh,disponible_c) 
            values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) returning *`
            ,
            values: [req.body.id_c,
            req.body.intitule_c,
            req.body.prix,
            req.body.tv_c,
            req.body.air_cond_c,
            req.body.refrigerator_c,
            req.body.extensible_c,
            req.body.capacite_c,
            req.body.issue_c,
            req.body.id_eh,
            req.body.disponible_c
            ]
        })
        res.send(result.rows[0])
    }
    catch (err) {
        console.log(err.stack)
    }
}