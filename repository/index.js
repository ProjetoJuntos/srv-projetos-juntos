const { mongo } = require('../config');
const db = require('../db');

const factory = require('./factory');

const usersCollection = factory({
  db,
  uri: mongo.connectionString,
  dbName: mongo.dbName,
  collectionName: mongo.collectionUsers,
});

module.exports = {
  usersCollection,
};
