const { Schema, models, model } = require("mongoose");

const CategoryShema = new Schema({
    name:{type:String,required:true},

})

export const CategoryModal = models.Category || model("Category",CategoryShema)