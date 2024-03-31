// Code to connect to the database
const { Client } = require('pg');

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'Hotel',
    password: 'Akabenzi@12',
    port: 5432,
})

client.connect()
    .then(() => console.log('Connected to the database'))
    .catch(e => console.error('Error connecting to the database', e.stack))
module.exports = client; 