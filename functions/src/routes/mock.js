const express = require('express');

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        res.status(200).json({});
    } catch (err) {
        console.log(err);
        res.status(400).json({message: 'Internal Server Error'});
    }
})

module.exports = router;
