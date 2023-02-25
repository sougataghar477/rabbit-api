import db from "../../../utils/mongo";
export default async function handler(req,res){
    let {name} =req.query;
    let collection=await db.collection("rabbits").find({breed:name}).toArray();
    res.status(200).json(collection)
}