const { Content } = require('@angular/compiler/src/render3/r3_ast');
var mongoose=require('mongoose');
var prod=mongoose.Schema({
    id:{
        type:String
    },
    name:{
        type:String
    },
    desc:{
        type:String
    },
    image:
    {
      type:String
    },
    cost:{
        type:Number
    },
    

})
module.exports = new mongoose.model('products', prod);