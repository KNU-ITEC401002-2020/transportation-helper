const express = require('express');
const router = express.Router();
const firebase = require('firebase-admin');

router.post('/', async (req, res) => {
  try {
    const {bus, traffic} = req.query;
    if (!bus || !traffic) {
      const error = {status: 400};
      throw error;
    }

    const traffic_validation = traffic === 'middle' || traffic === 'full' || traffic === 'fresh';
    if (!traffic_validation) {
      const error = {status: 400};
      throw error;
    }

    const db = firebase.firestore().collection('bus').doc(bus);
    await db.update({traffic});

    res.status(200).json({success: true});
  } catch (err) {
    console.log(err);
    const code = err.status || 500;
    res.status(code).json({code});
  }
});

module.exports = router;