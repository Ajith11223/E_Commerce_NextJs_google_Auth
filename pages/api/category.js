import { CategoryModal } from "@/Models/CategoryModal"


export default async function handle(req,res){
    const {method} =req

    if(method == "POST"){
        const {name}=req.body
    const categoryDoc= await CategoryModal.create({name})
    res.json({message:"category created",categoryDoc})
    }

    if(method === "GET"){
        const cateData = await CategoryModal.find()
        res.json({message:"data fetched",cateData})
    }
}