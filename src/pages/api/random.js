import db from "../../utils/mongo";
export default async function handler(req, res) {
    let random = require('lodash.random');
    let rabbits = await db.collection("rabbits").find().toArray();
    res.status(200).json(rabbits[random(0,rabbits.length-1)])
  }
 