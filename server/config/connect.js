const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/chartsData").then(()=>{
    console.log("connected to data base")
}).catch(error=>{
    console.log("failed connecting to data base : " , error )
})
module.exports= mongoose ;