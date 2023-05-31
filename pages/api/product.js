import { MongooseConnect } from "@/lib/mongoose"
import { ProductModel } from "@/Models/Product"
import mongoose from "mongoose"



export default async function handle(req, res) {
  const {method} = req
 await MongooseConnect()
 console.log(req.query?.id)

 if(method == "GET"){

  if(req.query?.id){
    res.json( await ProductModel.findOne({_id:req.query?.id}))
  }else{

    res.json(await ProductModel.find())
  }
 }

  if(method == "POST"){
    const {title,description,price,image}=req.body
  const productDoc= await ProductModel.create({
    title,description,price,image
    })
    res.json({message:"ok",productDoc})
  }


  if(method == "PUT"){
    const {title,description,price,image,_id}=req.body
    await ProductModel.updateOne({_id},{title,description,price,image})
    res.json({message:"ok updated"})

  }

  if(method == "DELETE"){
    if(req.query?.id){

      await ProductModel.deleteOne({_id:req.query?.id})
      res.json({message:"deleted"})
    }
  }
  }
  