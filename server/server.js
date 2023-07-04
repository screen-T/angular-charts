const express= require("express")
const app = express() 
const data1router = require ("./routes/data1")
const data2router= require ("./routes/data2")
const cors= require ("cors")
app.use(cors())
app.use(express.json())
app.use('/data1',data1router)
app.use('/data2',data2router)
app.listen(3000,()=>{
    console.log("serving running on port 3000")
})


require("./config/connect.js")

