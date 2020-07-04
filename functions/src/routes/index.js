const express = require('express');

const mock = require('./mock');

const router = express.Router();

router.use('/mock', mock);

module.exports = router;
