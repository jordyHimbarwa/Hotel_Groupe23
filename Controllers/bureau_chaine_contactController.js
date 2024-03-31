const database = require('../services/database');

exports.getAllcontactChaine = async (req, res) => {
    database.query('SELECT * from bureau_chaine_contact', (err, result) => {
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
            text: ` insert into bureau_chaine_contact (id_bchc,telephone_bchc,email_contact_bchc,id_bch) 
            values($1,$2,$3,$4) returning *`
            ,
            values: [req.body.id_bchc,
            req.body.telephone_bchc,
            req.body.email_contact_bchc,
            req.body.id_bchc
            ]
        })
        res.send(result.rows[0])
    }
    catch (err) {
        console.log(err.stack)
    }
}
exports.updatecontactchaine = async (req, res) => {
    try {
        const result = await database.query({
            text: `
                UPDATE bureau_chaine_contact
                SET telephone_bchc= $1,email_contact_bchc=$2,id_bch=$3
                WHERE id_bchc = $4
                RETURNING *
            `,
            values: [
                req.body.telephone_bchc,
                req.body.email_contact_bchc,
                req.body.id_bch,
                req.params.id
            ]
        })
        res.send(result.rows[0])
    } catch (error) {
        console.log(error.stack)
    }
}
