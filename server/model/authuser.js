import mongoose from "mongoose";
const authSchema=mongoose.Schema({
   email:{type:String,default:""},
   otp:{type:String,default:""}
})
const AuthUser=mongoose.model("User",authSchema)
export default AuthUser