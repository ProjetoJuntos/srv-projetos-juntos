const { add, listAll } = require('../controllers/EntregadoresController');

module.exports = [{
  method: 'GET',
  url: '/entregadores',
  handler: listAll,
},
{
  method: 'POST',
  url: '/entregadores',
  handler: add,
}];
