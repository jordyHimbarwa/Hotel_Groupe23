const database = require('../services/database');

exports.getAllreservation = async (req, res) => {
    database.query('SELECT * FROM reservation', (err, result) => {
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
            text: ` insert into reservation (id_res,date_res,status_res,id_c,id_emp,id_cli) 
            values($1,$2,$3,$4,$5,$6) returning *`
            ,
            values: [req.body.id_res,
            req.body.date_res,
            req.body.status_res,
            req.body.id_c,
            req.body.id_emp,
            req.body.id_cli
            ]
        })
        res.send(result.rows[0])
    }
    catch (err) {
        console.log(err.stack)
    }
}