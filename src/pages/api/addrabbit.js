import db from "../../utils/mongo";
import dotenv from 'dotenv';
dotenv.config();
const { PORT } = process.env;
export default async function handler(req, res) {
    let{breed,url,urlId} =req.body;
    breed=breed.toLowerCase();
    console.log({breed,urlId});
    await db.collection("rabbits").insertOne({breed,url,urlId});
    res.status(200).json(`https://rabbit-api-pi.vercel.app/api/id/${urlId}`)
  }