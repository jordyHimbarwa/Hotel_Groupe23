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
exports.getclientbyIdent = async (req, res) => {
    const id = parseInt(req.params.id)
    database.query('SELECT * from client where nas_cli = $1', [id], (err, result) => {
        if (err) {
            console.log(err.stack)
        } else {
            res.send(result.rows)
        }
    })

}
exports.create = async (req, res) => {
    try {
        const { nas_cli, nom_complet_cli, date_creation_cli, adresse } = req.body;
        const result = await database.query({
            text: ` insert into client (nas_cli,nom_complet_cli,date_creation_cli,adresse) 
            values($1,$2,$3,$4) returning *`
            ,
            values: [nas_cli, nom_complet_cli, date_creation_cli, adresse]
        });
        res.status(201).send(result.rows[0]); // Send 201 status for successful creation
    } catch (err) {
        console.error(err.stack);
        res.status(500).send('Internal Server Error');
    }
};

exports.update = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { nas_cli, nom_complet_cli, date_creation_cli, adresse } = req.body;
        const result = await database.query({
            text: `update client set nas_cli=$1,nom_complet_cli=$2,date_creation_cli=$3,adresse=$4 where nas_cli=$5 returning *`
            ,
            values: [nas_cli, nom_complet_cli, date_creation_cli, adresse, id]
        });
        if (result.rows.length === 0) {
            return res.status(404).send('client not found');
        }
        res.send(result.rows[0]);
    } catch (err) {
        console.error(err.stack);
        res.status(500).send('Internal Server Error');
    }
}

exports.delete = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const result = await database.query({
            text: 'delete from client where nas_cli=$1 returning *',
            values: [id]
        });
        if (result.rows.length === 0) {
            return res.status(404).send('client not found');
        }
        res.send('client deleted successfully');
    } catch (err) {
        console.error(err.stack);
        res.status(500).send('Internal Server Error');
    }
}
