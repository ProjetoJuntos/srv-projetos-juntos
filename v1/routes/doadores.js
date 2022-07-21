const { add, listAll, ranking } = require('../controllers/DoadoresController');

const { responseDoadores } = require('./schemas');

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
    url: '/doadores/ranking',
    handler: ranking,
    schema: responseDoadores,
  },
  {
    method: 'GET',
    url: '/doadores',
    handler: listAll,
    schema: responseDoadores,
  },
  {
    method: 'POST',
    url: '/doadores',
    handler: add,
  }];
