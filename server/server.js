const express= require("express")
const app = express() 
app.listen(300,()=>{
    console.log("serving running on port 3000")
})


require("./config/connect.js")

