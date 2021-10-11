const mongoose=require('mongoose');
var schema=mongoose.Schema({
    name:{
        type:String
    },
   phonenumber:{
        type:Number
    },
    password:{
        type:String
    },
    email:{
        type:String
        
    },
});
module.exports=mongoose.model('users',schema);