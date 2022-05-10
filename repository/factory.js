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
}

module.exports = Repository;
