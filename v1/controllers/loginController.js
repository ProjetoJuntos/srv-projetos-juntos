const { usersCollection } = require('../../repository');
const { verifyHash } = require('../../utils');

const err = {
  statusCode: 401,
  message: 'E-mail/Senha incorretos!',
};

const login = async (request, reply) => {
  try {
    const User = await usersCollection.findOne({ email: request.body.email });
    if (User && verifyHash(request.body.password, User.password)) {
      reply.header('Access-Control-Allow-Origin', '*');
      reply.header('Access-Control-Allow-Headers', '*');
      reply.code(200).send();
    } else {
      throw err;
    }
  } catch (error) {
    reply.code(error.statusCode || 500).send(error.message || error);
  }
};

module.exports = {
  login,
};
