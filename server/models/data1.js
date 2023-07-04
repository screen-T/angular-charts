const mongoose = require ("mongoose")
const schema ={
    data : {
        type : Number 
    },
    labels : {
        type : String
    }
}

const data1= mongoose.model("data1",schema)

module.exports=data1 ;