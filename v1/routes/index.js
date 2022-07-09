const usersRoutes = require('./users');
const entregadores = require('./entregadores');
const doadores = require('./doadores');
const login = require('./login');

const registerRoutes = (fastify, routes = [
  ...usersRoutes,
  ...entregadores,
  ...doadores,
  ...login,
]) => {
  routes.forEach((route) => {
    fastify.route(route);
  });
};

module.exports = async (fastify) => (registerRoutes(fastify));
