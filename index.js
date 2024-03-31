const express = require('express');
const db = require('./services/database');

const app = express();
const port = 3000;
const bodyParser = require('body-parser');
// app.use(express.json());
app.use(express.static(__dirname))
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/signUp.html")
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});


app.use(require('./Routes/client'))
app.use(require('./Routes/employe'))
app.use(require('./Routes/chambre'))
app.use(require('./Routes/bureau_chaine_contact'))
app.use(require('./Routes/bureau_chaine_hoteliere'))
app.use(require('./Routes/etablissement_hotelier'))
app.use(require('./Routes/etablissement_hotelier_contact'))
app.use(require('./Routes/location'))
app.use(require('./Routes/reservation'))
app.use(require('./Routes/chaine_hoteliere')) 