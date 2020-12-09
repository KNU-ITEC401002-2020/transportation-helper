const express = require('express');

const get = require('./get');
const post = require('./post');

const router = express.Router();

router.use('/', get);
router.use('/', post);

module.exports = router;
