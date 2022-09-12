// @ts-nocheck
const { MongoClient } = require("mongodb");
const client = new MongoClient('mongodb://localhost:27017');

let dbConnection;

const connectToServer = () => {
    client.connect(function (err, db) {
        if (err || !db) {
          return err;
        }
  
        dbConnection = db.db("sample_airbnb");
        console.log("Successfully connected to MongoDB.");
      });
}

const getDb = () => {
    return dbConnection;
}

export default {
  connectToServer,
  getDb,
};