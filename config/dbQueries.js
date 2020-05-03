const { secretKeys } = require('../config/config');

const authQueries = {
  CREATE_NEW_DATAVIO_USER: `insert into register(email_id, user_password, registered_with) values (?, aes_encrypt(?, unhex(sha2(${secretKeys.AES_ENCRYPTION_KEY}, 512))), ?);`,
  CRAETE_NEW_THIRD_PARTY_USER: 'insert into register(emal_id, registered_with) values (?, ?);',
  CHECK_USER_EXIST: `select id, email_id from register where email_id = ? and user_password = aes_encrypt(?, unhex(sha2(${secretKeys.AES_ENCRYPTION_KEY}, 512)));`,
};

module.exports = {
  authQueries,
};
