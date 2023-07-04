const Data2= require ("../models/data2")
const express= require("express")
const { response } = require("express");

const router = express.Router() ;
router.post("/add" , async (req  , resp)=>{
    try {
        console.log("adding data")
    data = req.body
    var data = new Data2(data) 
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

router.get("/all", async (req , resp)=>{
    try {
        console.log("find data")
        var data= await Data2.find()
        resp.status(200).send(data)
    }
    catch (error)
    {
       var status= {
            message : "error selecting the data" ,
            error : error  
        }
        resp.satus(400).send(status)
    }
})
router.delete("/delete/:id" , async (req ,resp)=>{
    try{
        var id=req.params.id ;
        console.log("deleting id : ",id)
        result = await Data2.deleteOne({_id:id})
        resp.status(200).send(result)
    }catch(error){
        resp.status(400).send(error)
    }
})
module.exports = router