import mongoose from "mongoose";
const cartSchema=mongoose.Schema({
    productName:{type:String,default:""},
    adminId:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
    price:{type:String,default:""},
    image:{type:String,default:""},
    desc:{type:String,default:""},
    shade:{type:String,default:""},
    productId:{type:mongoose.Schema.Types.ObjectId,ref:"Product"}
})
const Cart=mongoose.model("AddToCart",cartSchema)
export default Cart