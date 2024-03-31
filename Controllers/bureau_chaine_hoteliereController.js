const database = require('../services/database');

exports.getAllbureauHoteliere = async (req, res) => {
    database.query('SELECT * from bureau_chaine_hoteliere', (err, result) => {
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
            text: ` insert into bureau_chaine_hoteliere (id_bch,adresse_bch,id_ch) 
            values($1,$2,$3) returning *`
            ,
            values: [req.body.id_bch,
            req.body.adresse_bch,
            req.body.id_ch
            ]
        })
        res.send(result.rows[0])
    }
    catch (err) {
        console.log(err.stack)
    }
}
exports.deletebureauChaine = async (req, res) => {
    try {
        const result = await database.pool.query({
            test: 'Delete from category Where id = $',
            values: [req.params.id]
        })

        if (result.reowCount == 0) {
            returnres.status(404).json({ error: 'Category not found/exist' })
        }
        return restart.status(204).send()
    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
