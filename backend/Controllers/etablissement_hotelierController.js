const database = require('../services/database');

exports.getAlletablissement_hotelier = async (req, res) => {
    database.query('SELECT * FROM etablissement_hotelier', (err, result) => {
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
            text: ` insert into (id_eh,classe_eh,adresse_eh,nom_eh,nbr_chambres,id_ch) 
            values($1,$2,$3,$4,$5,$6) returning *`
            ,
            values: [req.body.id_eh,
            req.body.classe_eh,
            req.body.adresse_eh,
            req.body.nom_eh,
            req.body.nbr_chambres,
            req.body.id_ch
            ]
        })
        res.send(result.rows[0])
    }
    catch (err) {
        console.log(err.stack)
    }
}