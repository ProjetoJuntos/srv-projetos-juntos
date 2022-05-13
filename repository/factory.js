const defaultConfigs = {
  upsert: false,
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

  async findOne(filter) {
    const result = await this.db.collection(this.uri, this.dbName, this.collectionName);
    return result.findOne(filter);
  }

  async updateOne({ _id }, update) {
    const result = this.db.collection(this.uri, this.dbName, this.collectionName);
    return result.updateOne({ _id }, update, defaultConfigs);
  }
}

module.exports = Repository;
