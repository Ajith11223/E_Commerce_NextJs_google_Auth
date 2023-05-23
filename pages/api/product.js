import { MongooseConnect } from "@/lib/mongoose"
import { ProductModel } from "@/Models/Product"
import mongoose from "mongoose"



export default async function handle(req, res) {
  const {method} = req
 await MongooseConnect()

  if(method == "POST"){
    const {title,description,price}=req.body
  const productDoc= await ProductModel.create({
    title,description,price
    })
    res.json(productDoc)
  }
  }
  