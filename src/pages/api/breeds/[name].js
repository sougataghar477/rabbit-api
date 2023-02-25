import db from "../../../utils/mongo";
export default async function handler(req,res){
    let {name} =req.query;
    name=name.toLowerCase();
    let collection=await db.collection("rabbits").find({breed:name}).toArray();
    res.status(200).json(collection)
}