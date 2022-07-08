const { entregadoresCollection } = require('../../repository');

const add = async (request, reply) => {
  try {
    const result = await entregadoresCollection.insertOne(request.body);
    reply.code(200).send(result);
  } catch (error) {
    reply.code(error.statusCode || 500).send(error.message || error);
  }
};

const listAll = async (request, reply) => {
  try {
    const result = await entregadoresCollection.findAll();
    reply.code(200).send(result);
  } catch (error) {
    reply.code(error.statusCode || 500).send(error.message || error);
  }
};

module.exports = {
  add,
  listAll,
};
