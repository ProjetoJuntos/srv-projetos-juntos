const authRoutes = require('./auth');
const entregadores = require('./entregadores');
const doadores = require('./doadores');

const registerRoutes = (fastify, routes = [
  ...authRoutes,
  ...entregadores,
  ...doadores,
]) => {
  routes.forEach((route) => {
    fastify.route(route);
  });
};

module.exports = async (fastify) => (registerRoutes(fastify));
