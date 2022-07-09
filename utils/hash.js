const crypto = require('crypto');
const { app: { salt } } = require('../config');

const hash = (password) => crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');

const verifyHash = (passwordUser, passwordHashed) => passwordHashed === hash(passwordUser, salt);

module.exports = {
  hash,
  verifyHash,
};
