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

app.get("/registro",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/register.html"))
})
app.post("/registro",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/home.html"))
})
app.get("/login",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/login.html"))
})
app.post("/login",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/login.html"))
})
var azul="azul"