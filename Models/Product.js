const { Schema, model, models } = require("mongoose");


const ProductSchema = new Schema({
    title:{type:String,required:true},
    image:{type:[String]},
    description:{type:String,required:true},
    price:{type:Number,required:true}

})

export const ProductModel =models.Product || model("Product",ProductSchema)