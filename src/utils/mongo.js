require('dotenv').config();
const { DB } = process.env;
const {MongoClient} = require('mongodb');
const client = new MongoClient(DB);
client.connect();
let db = client.db("rabbitDb");
module.exports = db;