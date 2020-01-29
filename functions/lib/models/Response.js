const { PROJECT_NAME } = require("../../config");

class Response {
  constructor(status, code, message = "", data = {}) {
    this.status = status;
    this.code = code;
    this.message = message;
    this.data = data;
    this.timestamp = Date.now();
    this.createdBy = PROJECT_NAME;
  }
}

module.exports = Response;
