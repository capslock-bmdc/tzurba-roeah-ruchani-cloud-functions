const s200 = require("./s200");
const s400 = require("./s400");
const s500 = require("./s500");

const withData = (response, data) => {
  response.data = data;
  return response;
};

const isValid = response => response.constructor.name === "Response";

const isSuccessful = response => response.staus >= 200 && response.status < 300;

module.exports = { withData, isValid, isSuccessful, s200, s400, s500 };
