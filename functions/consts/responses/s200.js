const Response = require("../models/Response");

const s200 = {
  GENERAL_SUCCESS: new Response(
    200,
    "GENERAL_SUCCESS",
    "operation was successful",
  )
};

module.exports = s200;
