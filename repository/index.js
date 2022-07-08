const { mongo } = require('../config');
const db = require('../db');

const Factory = require('./factory');

const usersCollection = new Factory(
  db,
  mongo.connectionString,
  mongo.dbName,
  mongo.collectionUsers,
);

const entregadoresCollection = new Factory(
  db,
  mongo.connectionString,
  mongo.dbName,
  mongo.collectionEntregadores,
);

const doadoresCollection = new Factory(
  db,
  mongo.connectionString,
  mongo.dbName,
  mongo.collectionDoadores,
);

module.exports = {
  usersCollection,
  entregadoresCollection,
  doadoresCollection,
};
