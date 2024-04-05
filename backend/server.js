const express = require('express');
const db = require('./services/database');

const app = express();
const port = 5000;
const bodyParser = require('body-parser');
const clientRoutes = require('./Routes/client');



// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(express.json());
// Routes
app.use('/api/client', clientRoutes);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});