const database = require('../services/database');

exports.getAllchainehoteliere = async (req, res) => {
    database.query('SELECT * from chaine_hoteliere', (err, result) => {
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
            text: ` insert into chaine_hoteliere (id_ch,nom_ch) 
            values($1,$2) returning *`
            ,
            values: [req.body.id_ch,
            req.body.nom_ch
            ]
        })
        res.send(result.rows[0])
    }
    catch (err) {
        console.log(err.stack)
    }
}

exports.delete = async (req, res) => {
    const franchiseId = req.params.id;
    try {
        await database.query('BEGIN DELETE');
        const deleteroomsquery = 'DELETE from chambre where hotel_id IN (select id from etablissement_hotelier where id_ch =$';
        await client.query(deleteHotels)
    }
    catch (err) {
        console.log(err.stack)
    }
}