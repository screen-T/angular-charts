const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/chartsData").then(()=>{
    console.log("connected to data base")
}).catch(error=>{
    console.log("failed connecting to data base : " , error )
})
module.exports= mongoose ;