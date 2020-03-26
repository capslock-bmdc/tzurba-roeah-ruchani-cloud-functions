const functions = require("firebase-functions");
const admin = require("firebase-admin");

exports.deleteUser = functions.https.onCall(async (user) => {
  try {
  
    const db = admin.firestore();
    const userId = user.uid;

    await db.collection('users').doc(userId).delete();
    await admin.auth().deleteUser(userId);
    return true;
  
  } catch(err) {
    console.error(err);
    return false;
  }
});

