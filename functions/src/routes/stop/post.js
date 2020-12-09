const express = require('express');
const router = express.Router();
const firebase = require('firebase-admin');

router.post('/', async (req, res) => {
  try {
    const {bus, action} = req.query;
    if (!bus || action === undefined) {
      const error = {status: 400};
      throw error;
    }

    const bell = action === '1' ? true : false;

    const db = firebase.firestore().collection('bus').doc(bus);

    await db.update({bell});

    res.status(200).json({success: true});
  } catch (err) {
    console.log(err);
    const code = err.status || 500;
    res.status(code).json({code});
  }
});

module.exports = router;