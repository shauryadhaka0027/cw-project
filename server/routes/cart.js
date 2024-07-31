import express from "express"
import { addToCart, deleteItem, deleteManyItems, getAddToCartProduct } from "../controller/cart.js"
const cartRouter=express.Router()

cartRouter.post("/addcart",addToCart);
cartRouter.post("/getCartItem",getAddToCartProduct);
cartRouter.post("/getItemdelete",deleteItem);
cartRouter.post("/deleteManyItems",deleteManyItems)

export default cartRouter