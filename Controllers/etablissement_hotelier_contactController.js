const database = require('../services/database');

exports.getAlletablissement_contact = async (req, res) => {
    database.query('SELECT * FROM etablissement_hotelier_contact', (err, result) => {
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
            text: ` insert into employe (id_ehc,telephone_ehc.email_contact_ehc,id_eh) 
            values($1,$2,$3,$4) returning *`
            ,
            values: [req.body.id_ehc,
            req.body.telephone_ehc,
            req.body.email_contact_ehc,
            req.body.id_eh
            ]
        })
        res.send(result.rows[0])
    }
    catch (err) {
        console.log(err.stack)
    }
}