const Data1= require ("../models/data1")
const express= require("express")
const { response } = require("express")
const router = express.Router() ;
router.post("/add" , async (req  , resp)=>{
    try {
        console.log("adding data")
    data = req.body
    var data = new Data1(data) 
    var status = {
        message : "data inserted ",
        info : await data.save()  
    }
    resp.status(200).send(status)
}
catch (error){
    console.log("catch error in adding data")
    resp.status(400).send(error)
}
} )
module.exports = router