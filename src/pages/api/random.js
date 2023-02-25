import db from "../../utils/mongo";
export default async function handler(req, res) {
    let random = require('lodash.random');
    let books = await db.collection("rabbits").find().toArray();
    res.status(200).json(books[random(0,books.length)])
  }
 