const database = require('../services/database');

exports.getAlllocation = async (req, res) => {
    database.query('SELECT * FROM location', (err, result) => {
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
            text: ` insert into location (id_loc,date_loc,id_res,id_cli,id_c,paiement,nas_emp) 
            values($1,$2,$3,$4,$5,$6,$7) returning *`
            ,
            values: [req.body.id_loc,
            req.body.date_loc,
            req.body.id_res,
            req.body.id_cli,
            req.body.id_c,
            req.body.paiement,
            req.body.nas_emp
            ]
        })
        res.send(result.rows[0])
    }
    catch (err) {
        console.log(err.stack)
    }
}