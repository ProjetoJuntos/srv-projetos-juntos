'use strict';

const fastify = require('fastify')({ logger: true });
const routes = require('./api/routes');

routes.forEach((route) => {
  fastify.route(route);
});

const server = async () => {
  try {
    await fastify.listen(3001);
  } catch (err) {
    process.exit(1);
  }
};

async function closeGracefully(signal) {
  fastify.log.error(`*^!@4=> Received signal to terminate: ${signal}`);
  await fastify.close();
  process.exit(1);
}
process.on('SIGINT', closeGracefully);
process.on('SIGTERM', closeGracefully);

module.exports = server;
