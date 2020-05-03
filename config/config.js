const connectionConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

const registrationOptions = {
  DATAVIO: 1,
  GOOGLE: 2,
  FACEBOOK: 3,
};

const httpStatus = {
  SUCCESS: 'SUCCESS',
  FAIL: 'FAIL',
};

const httpErrorCodes = {
  CREATED: 201,
  INTERNAL_SRVER_ERROR: 500,
  CONFLICT: 409,
};

const httpErrorMessages = {
  CREATED: 'Craeted',
  INTERNAL_SRVER_ERROR: 'Internal Server Error',
  CONFLICT: 'Conflict',
};

const sqlErrorCodes = {
  ER_DUP_ENTRY: 'ER_DUP_ENTRY',
};

const secretKeys = {
  AES_ENCRYPTION_KEY: process.env.DB_ENCRYPTION_KEY,
  JWT_SECRET_KET: process.env.JWT_SECRET,
};
module.exports = {
  connectionConfig,
  registrationOptions,
  httpStatus,
  httpErrorCodes,
  httpErrorMessages,
  secretKeys,
  sqlErrorCodes,
};
