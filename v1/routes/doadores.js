const { add, listAll } = require('../controllers/DoadoresController');

module.exports = [{
  method: 'GET',
  url: '/doadores',
  handler: listAll,
},
{
  method: 'POST',
  url: '/doadores',
  handler: add,
}];
