const { MongoClient } = require('mongodb');
const factory = require('./factory');

module.exports = factory(MongoClient);
