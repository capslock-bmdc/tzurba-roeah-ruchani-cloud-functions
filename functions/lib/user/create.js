const functions = require("firebase-functions");
const admin = require("firebase-admin");

exports.createUser = functions.auth.user().onCreate(async (user) => {

  const db = admin.firestore();
  const userId = user.uid;
  const timestamp = admin.firestore.FieldValue.serverTimestamp(),

  await db.collection('users').doc(userId).set({
    name: name,
    lastActive: timestamp,
  });

  return true

});