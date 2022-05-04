const authRoutes = require('./auth');

const registerRoutes = (fastify, routes = [...authRoutes]) => {
  routes.forEach((route) => {
    fastify.route(route);
  });
};

module.exports = async (fastify) => (registerRoutes(fastify));
