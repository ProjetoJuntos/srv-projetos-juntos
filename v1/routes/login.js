const { login } = require('../controllers/loginController');

module.exports = [
  {
    method: 'OPTIONS',
    url: '/login',
    handler(res, reply) {
      reply.header('Content-Type', 'application/json; charset=utf-8');
      reply.header('Access-Control-Allow-Origin', '*');
      reply.header('Access-Control-Allow-Headers', '*');
      reply.code(200).send();
    },
  }, {
    method: 'POST',
    url: '/login',
    handler: login,
  }];
