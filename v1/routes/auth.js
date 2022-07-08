const usersController = require('../controllers/UsersController');

module.exports = [{
  method: 'GET',
  url: '/auth/token',
  handler: usersController,
},
{
  method: 'GET',
  url: '/auth/refresh',
  handler(request, reply) {
    reply.send({ hello: 'world' });
  },
}];
