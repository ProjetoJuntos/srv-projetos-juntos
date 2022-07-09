const { add, listAll } = require('../controllers/UsersController');

module.exports = [{
  method: 'GET',
  url: '/users',
  handler: listAll,
},
{
  method: 'POST',
  url: '/users',
  handler: add,
}];
