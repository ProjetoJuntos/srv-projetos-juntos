const fastify = require('fastify');
const proxy = require('@fastify/http-proxy');
const { app } = require('./config');
const routes = require('./v1/routes');

const server = fastify({});

module.exports.start = async () => {
  server.register(proxy, {
    upstream: 'http://localhost:3001',
    replyOptions: {
      onResponse: (request, reply, res) => {
        reply.header('Access-Control-Allow-Headers', '*');
        reply.header('Access-Control-Allow-Origin', '*');
        reply.header('Access-Control-Allow-Methods', '*');
        res.send();
      },
    },
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
