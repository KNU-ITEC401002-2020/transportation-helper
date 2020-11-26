const express = require('express');

// const location = require('./location');
const traffic = require('./traffic');
const stop = require('./stop');

const router = express.Router();

// router.use('/location', location);
router.use('/traffic', traffic);
router.use('/stop', stop);

module.exports = router;
