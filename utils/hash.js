const crypto = require('crypto');

const createSalt = () => crypto.randomBytes(16).toString('hex');

const hash = (password, salt) => crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');

const verifyHash = (password, salt) => password === hash(password, salt);

module.exports = {
  createSalt,
  hash,
  verifyHash,
};
