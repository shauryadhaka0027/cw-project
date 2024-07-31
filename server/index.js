import express from "express"
import dotenv from "dotenv"
import connection from "./config/db.js";
import cors from "cors"
import productRouter from "./routes/product.js";
import cartRouter from "./routes/cart.js";
import AuthRouter from "./routes/authuser.js";
dotenv.config()
const app=express();


app.use(express.json());
app.use(cors({
    origin:["http://localhost:5173"],
    credentials: true,
  methods: ['GET', 'POST', 'DELETE', 'PATCH'],
}))
app.get("/",(req,res)=>{
    res.send("hiii")
})
app.use("/",productRouter)
app.use("/",cartRouter);
app.use("/",AuthRouter)

app.listen(process.env.Port,async()=>{
try {
    await connection
    console.log("server is running and mongobd is also connect")
} catch (error) {
    console.log("error")
}
})
