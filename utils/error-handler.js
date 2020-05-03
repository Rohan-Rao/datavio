const { httpErrorCodes, httpErrorMessages, httpStatus } = require('../config/config');

class ErrorHandler extends Error {
  constructor(statusCode, statusMessage, additionalInfo) {
    super();
    this.status = httpStatus.FAIL;
    this.statusCode = statusCode;
    this.statusMessage = statusMessage;
    this.additionalInfo = additionalInfo;
  }
}

const generateError = (statusCode, additionalInfo) => {
  switch (statusCode) {
    case httpErrorCodes.INTERNAL_SRVER_ERROR:
      return new ErrorHandler(httpErrorCodes.INTERNAL_SRVER_ERROR,
        httpErrorMessages.INTERNAL_SRVER_ERROR,
        additionalInfo);
    case httpErrorCodes.CONFLICT:
      return new ErrorHandler(httpErrorCodes.CONFLICT,
        httpErrorMessages.CONFLICT,
        additionalInfo);
    default:
      break;
  }
};

module.exports = {
  generateError,
};
