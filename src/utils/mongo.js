require('dotenv').config();
const { DB_URL } = process.env;
const {MongoClient} = require('mongodb');
const client = new MongoClient(DB_URL);
client.connect();
let db = client.db("rabbitDb");
module.exports = db;