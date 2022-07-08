const fastify = require('fastify');
const cors = require('@fastify/cors');
const { app } = require('./config');
const routes = require('./v1/routes');

const server = fastify({});

module.exports.start = async () => {
  server.register(cors, {
    origin: '*',
    methods: ['*'],
    allowHeaders: ['*'],
    preflight: false,
  });
  server.register(routes, { prefix: app.baseRoute });
  await server.listen({ port: app.port, host: app.host || '0.0.0.0' });
  return server;
};

async function closeGracefully(signal) {
  fastify.log.error(`*^!@4=> Received signal to terminate: ${signal}`);
  await fastify.close();
  process.exit(1);
}
process.on('SIGINT', closeGracefully);
process.on('SIGTERM', closeGracefully);
