const {
  add, listAll, ranking, listByCep,
} = require('../controllers/EntregadoresController');

module.exports = [
  {
    method: 'OPTIONS',
    url: '/entregadores',
    handler(res, reply) {
      reply.header('Content-Type', 'application/json; charset=utf-8');
      reply.header('Access-Control-Allow-Origin', '*');
      reply.header('Access-Control-Allow-Headers', '*');
      reply.code(200).send();
    },
  },
  {
    method: 'GET',
    url: '/entregadores/:cep',
    handler: listByCep,
  },
  {
    method: 'GET',
    url: '/entregadores/ranking',
    handler: ranking,
  },
  {
    method: 'GET',
    url: '/entregadores',
    handler: listAll,
  },
  {
    method: 'POST',
    url: '/entregadores',
    handler: add,
  }];
