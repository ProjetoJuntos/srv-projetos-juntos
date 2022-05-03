const routes = [{
  method: 'GET',
  url: '/token',
  handler(request, reply) {
    reply.send({ hello: 'world' });
  },
}];

module.exports = routes;
