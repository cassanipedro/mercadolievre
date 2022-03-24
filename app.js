const express=require("express")
const app=express()

const path=require("path")
app.use(express.static(path.resolve(__dirname,"./public")));
app.listen(3003,()=>{
    console.log("servidor corriendo en http://localhost:3003")
})
app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/home.html"))
})