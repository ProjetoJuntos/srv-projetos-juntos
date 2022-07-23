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

const doacoesCollection = new Factory(
  db,
  mongo.connectionString,
  mongo.dbName,
  mongo.collectionDoacoes,
);

const beneficiariosCollection = new Factory(
  db,
  mongo.connectionString,
  mongo.dbName,
  mongo.collectionBeneficiarios,
);

module.exports = {
  usersCollection,
  entregadoresCollection,
  doadoresCollection,
  doacoesCollection,
  beneficiariosCollection,
};
