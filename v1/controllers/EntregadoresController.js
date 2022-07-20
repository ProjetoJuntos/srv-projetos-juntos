const { entregadoresCollection } = require('../../repository');

const add = async (request, reply) => {
  try {
    const result = await entregadoresCollection.insertOne(request.body);
    reply.header('Access-Control-Allow-Origin', '*');
    reply.header('Access-Control-Allow-Headers', '*');
    reply.code(200).send(result);
  } catch (error) {
    reply.code(error.statusCode || 500).send(error.message || error);
  }
};

const listAll = async (request, reply) => {
  try {
    const result = await entregadoresCollection.findAll();
    reply.header('Access-Control-Allow-Origin', '*');
    reply.code(200).send(result);
  } catch (error) {
    reply.code(error.statusCode || 500).send(error.message || error);
  }
};

const ranking = async (request, reply) => {
  try {
    const sort = { qtd: -1 };
    const result = await entregadoresCollection.findByRanking({ sort });
    reply.header('Access-Control-Allow-Origin', '*');
    reply.code(200).send(result);
  } catch (error) {
    reply.code(error.statusCode || 500).send(error.message || error);
  }
};

const listByCep = async (request, reply) => {
  try {
    const { cep } = request.params;
    const result = await entregadoresCollection.findAll({ filter: { cep } });
    reply.header('Access-Control-Allow-Origin', '*');
    reply.code(200).send(result);
  } catch (error) {
    reply.code(error.statusCode || 500).send(error.message || error);
  }
};

module.exports = {
  add,
  listAll,
  ranking,
  listByCep,
};
