const functions = require("firebase-functions");
const admin = require("firebase-admin");
const responses = require("../../consts/responses/responses");
const userUtil = require("../../utils/user");

exports.checkInvite = functions.https.onCall(async (data, context) => {
  try {
    const userId = context.auth.uid;
    const tz = data.tz;
    await userUtil.validateUserId(userId);
    await userUtil.validateUserTz(tz);
    
    const db = admin.firestore();
    const invitesCollection = db.collection("invites");
    var isValid = false;
    const inviteDoc = await invitesCollection.doc(tz).get();
    if (inviteDoc.exists) isValid = true;
    return responses.withData(responses.s200.GENERAL_SUCCESS, { isValid });

  } catch (err) {
    console.error(err);
    if (responses.isValid(err)) return err;
    return responses.s500.UNKNOWN_ERROR;
  }
});
