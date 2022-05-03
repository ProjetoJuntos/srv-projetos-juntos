'use strict';

require('dotenv').config();

const app = () => ({
  port: process.env.PORT,
  host: process.env.HOST,
  baseRoute: process.env.BASE_ROUTE,
});

class Config {
  constructor() {
    this.app = app();
  }
}

module.exports = new Config();
