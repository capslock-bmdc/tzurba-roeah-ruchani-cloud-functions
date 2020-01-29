const Response = require("../models/Response");

const s500 = {
  UNKNOWN_ERROR: new Response(
    500,
    "UNKNOWN_ERROR",
    "an unknown server error occered",
  )
};

module.exports = s500;
