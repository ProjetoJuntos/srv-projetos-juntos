const {
  add, listAll, listByCep,
} = require('../controllers/doacoesController');
const { responseDoacoes } = require('./schemas');

module.exports = [
  {
    method: 'OPTIONS',
    url: '/doacoes',
    handler(res, reply) {
      reply.header('Content-Type', 'application/json; charset=utf-8');
      reply.header('Access-Control-Allow-Origin', '*');
      reply.header('Access-Control-Allow-Headers', '*');
      reply.code(200).send();
    },
  },
  {
    method: 'GET',
    url: '/doacoes',
    handler: listAll,
    schema: responseDoacoes,
  },
  {
    method: 'POST',
    url: '/doacoes',
    handler: add,
    schema: responseDoacoes,
  },
  {
    method: 'GET',
    url: '/doacoes/:cep',
    handler: listByCep,
    schema: responseDoacoes,
  }];
