const fs = require('fs');

module.exports = [
  {
    method: 'OPTIONS',
    url: '/',
    handler(res, reply) {
      reply.header('Content-Type', 'application/json; charset=utf-8');
      reply.header('Access-Control-Allow-Origin', '*');
      reply.header('Access-Control-Allow-Headers', '*');
      reply.code(200).send();
    },
  },
  {
    method: 'GET',
    url: '/',
    handler: async (request, reply) => {
      try {
        reply.header('Access-Control-Allow-Origin', '*');
        return reply.sendFile('index.html');
      } catch (error) {
        reply.code(error.statusCode || 500).send(error.message || error);
      }
    },
  }];
