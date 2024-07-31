import express from "express"
import { userSignIn, userSignUp } from "../controller/authUser.js"

const authRouter=express.Router()

authRouter.post("/authSignUp",userSignUp);
authRouter.post("/authSignIn",userSignIn)

export default authRouter