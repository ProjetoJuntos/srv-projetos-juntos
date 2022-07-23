/* eslint-disable default-param-last */
const defaultConfigs = {
  upsert: false,
  projection: {
    _id: 1,
  },
};

class Repository {
  constructor(db, uri, dbName, collectionName) {
    this.db = db;
    this.uri = uri;
    this.dbName = dbName;
    this.collectionName = collectionName;
  }

  async insertOne(data) {
    const result = await this.db.collection(this.uri, this.dbName, this.collectionName);
    return result.insertOne(data);
  }

  async findOne(filter = {}) {
    const result = await this.db.collection(this.uri, this.dbName, this.collectionName);
    return result.findOne(filter, defaultConfigs);
  }

  async findAll(filter = {}) {
    const result = await this.db.collection(this.uri, this.dbName, this.collectionName);
    return result.find(filter, defaultConfigs).toArray();
  }

  async findByRanking({ filter = { qtd: { $gt: 0 } }, sort = {} }) {
    const result = await this.db.collection(this.uri, this.dbName, this.collectionName);
    return result.find(filter, defaultConfigs).sort(sort).limit(5).toArray();
  }

  async updateOne({ _id }, update = {}) {
    const result = this.db.collection(this.uri, this.dbName, this.collectionName);
    return result.updateOne({ _id }, update, defaultConfigs);
  }
}

module.exports = Repository;
