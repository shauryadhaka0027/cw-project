import express from "express";
import { createProduct, getProduct, getProductDataSort, getSingleProduct } from "../controller/product.js";
const productRouter=express.Router()

productRouter.post("/addProduct",createProduct);
productRouter.post("/getProducts",getProduct);
productRouter.post("/productSort",getProductDataSort)
productRouter.post("/getSingleProduct",getSingleProduct)

export default productRouter