const express = require('express');
const router = express.Router();
const firebase = require('firebase-admin');

router.get('/', async (req, res) => {
  try {
    const {bus} = req.query;
    if (!bus) {
      const error = {status: 400};
      throw error;
    }

    const db = firebase.firestore().collection('bus').doc(bus);

    const doc = await db.get();

    const {bell} = doc.data();

    res.status(200).json({bell});
  } catch (err) {
    console.log(err);
    const code = err.status || 500;
    res.status(code).json({code});
  }
});

module.exports = router;