const usersRoutes = require('./users');
const entregadores = require('./entregadores');
const doadores = require('./doadores');
const doacoes = require('./doacoes');
const beneficiarios = require('./beneficiarios');
const login = require('./login');
const serverPage = require('./serverFront');

const registerRoutes = (fastify, routes = [
  ...beneficiarios,
  ...doacoes,
  ...usersRoutes,
  ...entregadores,
  ...doadores,
  ...login,
  ...serverPage,
]) => {
  routes.forEach((route) => {
    fastify.route(route);
  });
};

module.exports = async (fastify) => (registerRoutes(fastify));
