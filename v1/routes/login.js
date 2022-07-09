const { login } = require('../controllers/loginController');

module.exports = [{
  method: 'POST',
  url: '/login',
  handler: login,
}];
