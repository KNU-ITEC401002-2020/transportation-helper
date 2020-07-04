const firebase = require('firebase-admin');
const functions = require('firebase-functions');
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const api = require('./routes');

firebase.initializeApp();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

app.use('/api', api);
app.all('*', (req, res) => {
    res.status(404).json({success: false, log: 'Not Found'});
})

app.listen(4000);

module.exports = app;
