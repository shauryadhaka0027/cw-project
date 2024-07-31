import mongoose from "mongoose";
const productSchema=mongoose.Schema({
    productName:{type:String,default:""},
    price:{type:String,default:""},
    image:{type:String,default:""},
    desc:{type:String,default:""},
    shade:{type:String,default:""},
})
const Product=mongoose.model("Product",productSchema)
export default Product