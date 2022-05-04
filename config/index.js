require('dotenv').config();

const app = () => ({
  port: process.env.PORT,
  host: process.env.HOST,
  baseRoute: process.env.BASE_ROUTE,
});

const mongo = () => ({
  connectionString: process.env.CONNECTION_STRING,
  collectionUsers: process.env.COLLECTION_USERS,
  dbName: process.env.DB_NAME,
});

class Config {
  constructor() {
    this.app = app();
    this.mongo = mongo();
  }
}

module.exports = new Config();
