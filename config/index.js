require('dotenv').config();

const app = () => ({
  port: process.env.PORT || 5000,
  host: process.env.HOST,
  baseRoute: process.env.BASE_ROUTE,
  salt: process.env.SALT || '123500abcvvvvv',
});

const mongo = () => ({
  connectionString: process.env.CONNECTION_STRING,
  collectionUsers: process.env.COLLECTION_USERS,
  collectionEntregadores: process.env.COLLECTION_ENTREGADORES,
  collectionDoadores: process.env.COLLECTION_DOADORES,
  dbName: process.env.DB_NAME,
});

class Config {
  constructor() {
    this.app = app();
    this.mongo = mongo();
  }
}

module.exports = new Config();
