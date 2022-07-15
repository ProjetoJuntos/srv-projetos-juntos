const fastify = require('fastify');
const proxy = require('@fastify/http-proxy');
const { app } = require('./config');
const routes = require('./v1/routes');

const server = fastify({});

module.exports.start = async () => {
  // server.register(proxy, {
  //   upstream: `http://${app.host}:${app.port}`,
  //   prefix: '/api',
  //   method: 'OPTIONS',
  //   replyOptions: {
  //     onResponse: (request, reply, res) => {
  //       reply.header('Access-Control-Allow-Headers', '*');
  //       reply.header('Access-Control-Allow-Origin', `http://${app.host}:${app.port}`);
  //       reply.header('Access-Control-Allow-Methods', '*');
  //       reply.send(res);
  //     },

  //   },

  // });
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
