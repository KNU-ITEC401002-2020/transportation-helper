const functions = require('firebase-functions');
const api = require('./src');

exports.api = functions
  .region('asia-northeast2')
  .runWith({timeoutSeconds: 20, memory: '128MB'})
  .https.onRequest(api);
