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

    let traffic_status = 'middle';

    if (traffic < 3) {
      traffic_status = 'fresh';
    } else if (traffic < 5) {
      traffic_status = 'middle';
    } else {
      traffic_status = 'full';
    }

    const db = firebase.firestore().collection('bus').doc(bus);
    await db.update({traffic: traffic_status});

    res.status(200).json({success: true});
  } catch (err) {
    console.log(err);
    const code = err.status || 500;
    res.status(code).json({code});
  }
});

module.exports = router;