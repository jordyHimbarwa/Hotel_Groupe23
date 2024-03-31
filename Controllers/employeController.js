const database = require('../services/database');

exports.getAllemploye = async (req, res) => {
    database.query('SELECT * FROM employe', (err, result) => {
        if (err) {
            console.log(err.stack)
        } else {
            res.send(result.rows)
        }
    })
}

exports.createemploye = async (req, res) => {
    try {
        const result = await database.query({
            text: ` insert into employe (nas_emp,nom_complet_emp,id_eh,adresse,role) 
            values($1,$2,$3,$4,$5) returning *`
            ,
            values: [req.body.nas_emp,
            req.body.nom_complet_emp,
            req.body.id_eh,
            req.body.adresse,
            req.body.role
            ]
        })
        res.send(result.rows[0])
    }
    catch (err) {
        console.log(err.stack)
    }
}