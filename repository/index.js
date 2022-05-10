const { mongo } = require('../config');
const db = require('../db');

const Factory = require('./factory');

const usersCollection = new Factory(
  db,
  mongo.connectionString,
  mongo.dbName,
  mongo.collectionUsers,
);

module.exports = {
  usersCollection,
};
