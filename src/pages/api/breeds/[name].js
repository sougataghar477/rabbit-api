import db from "../../../utils/mongo";
export default async function handler(req,res){
    let {name} =req.query;
    let random = require('lodash.random');
    name=name.toLowerCase();
    let collection=await db.collection("rabbits").find({breed:name}).toArray();
    if(collection.length>0){
        res.status(200).json(collection[random(0,collection.length-1)])
    }
    else{
        res.status(404).json("No results found")
    }
}