const {
  add, listAll,
} = require('../controllers/doacoesController');

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
  },
  {
    method: 'POST',
    url: '/doacoes',
    handler: add,
  }];
