const express = require('express');
const router = express.Router();
const firebase = require('firebase-admin');

router.get('/', async (req, res) => {
  try {
    const {bus, destination} = req.query;

    if (!bus || !destination) {
      const error = {status: 400};
      throw error;
    }

    const db = firebase.firestore().collection('bus').doc(bus);

    const doc = await db.get();
    const {destinations, current_station} = doc.data();
    const path = destinations.slice(parseInt(current_station), parseInt(destination));

    let time_left = 0;
    path.forEach((v) => {
      time_left += v.time_left;
    });

    const result = {
      bus,
      time_left,
    };

    res.status(200).json({result});
  } catch (err) {
    console.log(err);
    const code = err.status || 500;
    res.status(code).json({code});
  }
});

module.exports = router;