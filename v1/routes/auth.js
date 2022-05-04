module.exports = [{
  method: 'POST',
  url: '/auth/token',
  handler(request, reply) {
    reply.send({ hello: 'world' });
  },
},
{
  method: 'GET',
  url: '/auth/refresh',
  handler(request, reply) {
    reply.send({ hello: 'world' });
  },
}];
