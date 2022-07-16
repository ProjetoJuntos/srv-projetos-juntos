const { usersCollection } = require('../../repository');
const { hash } = require('../../utils');

const add = async (request, reply) => {
  try {
    const { body: { password, ...rest } } = request;
    const user = {
      ...rest,
      password: hash(password),
    };
    await usersCollection.insertOne(user);
    reply.header('Access-Control-Allow-Origin', '*');
    reply.header('Access-Control-Allow-Headers', '*');
    reply.code(200).send(user);
  } catch (error) {
    reply.code(error.statusCode || 500).send(error.message || error);
  }
};

const listAll = async (request, reply) => {
  try {
    const result = await usersCollection.findAll();
    reply.header('Access-Control-Allow-Origin', '*');
    reply.code(200).send(result);
  } catch (error) {
    reply.code(error.statusCode || 500).send(error.message || error);
  }
};

module.exports = {
  add,
  listAll,
};
