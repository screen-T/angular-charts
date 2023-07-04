const mongoose = require("mongoose") 
const schema = {
    data: {
        type : Number  
    }, 
    lables : {
        type : String 
    }
}

const data2 = mongoose.model("data2" , schema) 
module.exports= data2 

