const Response = require("../../models/Response");

const s400 = {
  A_CLIENT_ERROR: new Response(
    400,
    "A_CLIENT_ERROR",
    "this is an error produced by the client"
  )
};

module.exports = s400;
