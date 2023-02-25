import db from "../../../utils/mongo";
export default async function handler(req,res){
    let {urlId}=req.query;
    let searchedRabbit=await db.collection("rabbits").findOne({urlId});
    console.log(searchedRabbit.url)
// res.status(200).json(urlId)
res.redirect(searchedRabbit.url);
}