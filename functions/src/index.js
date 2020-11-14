const firebase = require('firebase-admin');
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const api = require('./routes');

firebase.initializeApp();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

app.use('/', api);
app.all('*', (req, res) => {
    res.status(404).json({});
})

app.listen(4000);

module.exports = app;
