module.exports = (MongoClient) => {
  const DataBase = class {
    constructor() {
      this.Client = MongoClient;
      this.connection = null;
      this.status = null;
    }

    async connectDb(uri, dbName) {
      const client = new this.Client(uri);
      await client.connect();
      this.connection = client.db(dbName);
      this.status = true;
      return this.connection;
    }

    async collection(uri, dbName, collectionName) {
      if (!this.status) {
        await this.connectDb(uri, dbName);
      }
      return this.connection.collection(collectionName);
    }
  };
  return new DataBase(MongoClient);
};
