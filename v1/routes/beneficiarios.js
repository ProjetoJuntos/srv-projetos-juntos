const {
  add, listAll,
} = require('../controllers/beneficiariosController');

const { responseBeneficiarios } = require('./schemas');

module.exports = [
  {
    method: 'OPTIONS',
    url: '/beneficiarios',
    handler(res, reply) {
      reply.header('Content-Type', 'application/json; charset=utf-8');
      reply.header('Access-Control-Allow-Origin', '*');
      reply.header('Access-Control-Allow-Headers', '*');
      reply.code(200).send();
    },
  },
  {
    method: 'GET',
    url: '/beneficiarios',
    handler: listAll,
    schema: responseBeneficiarios,
  },
  {
    method: 'POST',
    url: '/beneficiarios',
    handler: add,
  }];
