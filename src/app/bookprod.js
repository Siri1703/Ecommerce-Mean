var mongoose=require('mongoose');
var bookprod=mongoose.Schema({
    username:{
        type:String
    },
    prodid:{
        type:String
    },
    name:{
        type:String
    },
    
    cost:{
        type:Number
    },
    payment:{
        type:String,
        default:"paid online"
        
    }

})
module.exports = new mongoose.model('booking', bookprod);