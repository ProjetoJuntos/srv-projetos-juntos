'use strict';

const fastify = require('fastify');
const routes = require('./v1/routes');

const server = fastify({});

module.exports.start = async () => {
  server.register(routes, { prefix: '/v1' });
  await server.listen(3001);
  return server;
};

async function closeGracefully(signal) {
  fastify.log.error(`*^!@4=> Received signal to terminate: ${signal}`);
  await fastify.close();
  process.exit(1);
}
process.on('SIGINT', closeGracefully);
process.on('SIGTERM', closeGracefully);
