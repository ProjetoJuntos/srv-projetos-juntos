const { add, listAll } = require('../controllers/DoadoresController');

module.exports = [
  {
    method: 'OPTIONS',
    url: '/doadores',
    handler(res, reply) {
      reply.header('Content-Type', 'application/json; charset=utf-8');
      reply.header('Access-Control-Allow-Origin', '*');
      reply.header('Access-Control-Allow-Headers', '*');
      reply.code(200).send();
    },
  },
  {
    method: 'GET',
    url: '/doadores',
    handler: listAll,
  },
  {
    method: 'POST',
    url: '/doadores',
    handler: add,
  }];
