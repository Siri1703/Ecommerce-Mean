var app=require('express')();
var express=require('express');
const cors=require('cors');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
const fs=require('fs');
var path=require('path');
const nodemailer=require('nodemailer');

const fileUpload = require('express-fileupload');
app.use(fileUpload({
 useTempFiles:true  
}
    
));

app.use(express.static('public'));
//var multer=require('multer');
var bodyparser=require('body-parser');
const upload=require('./multer.js')
const cloudinary=require('cloudinary').v2;
cloudinary.config({
    cloud_name:'dvozglnfa',
    api_key:'459378766536788',
    api_secret:'qyzYcxL7lmjNgBl0x_YvTbjVZKo'
})

app.use(express.json());
app.use(cors({
    origin: '*'
}));

app.set('view engine', 'ejs');
var s=require("./userschema.js");
var p=require("./productschema.js");
var b=require("./bookprod.js");
const mongoose=require('mongoose');
const { readFileSync } = require('fs');



let transporter = nodemailer.createTransport({
    service:'gmail',
    // port: 587,
    // secure: false, // true for 465, false for other ports
    auth: {
        user: 'sirilakshmi1703@gmail.com', 
        pass: 'nagalaxmi786',
    },
});




mongoose.connect('mongodb://localhost:27017/ecommerce')
let db=mongoose.connection
db.on('open',()=>{
    console.log("database connected successfully")
  });

app.use("/work",(req,res)=>{
res.send("Working!!!");
})


app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true}))


app.use("/user",async(req,res)=>{
    const salt=await bcrypt.genSaltSync(10);
    const to=req.body.email
 const users=new s({
     name:req.body.name,
     phonenumber:req.body.phonenumber,
     email:req.body.email,
     //password:req.body.password,
     password:await bcrypt.hashSync(req.body.password,salt),
   
 })
 try{
 await db.collection("users").createIndex({"email":1},{unique:true})
 await users.save()
 
 const maildata={
     from:'sirilakshmi@gmail.com',
     to:to,
     subject:'Thanking you for registering'
 }
 const info=await transporter.sendMail(maildata);
 console.log(info);
 res.send({"message":"Registered successfully"});
 }
 catch
 {
 res.send({"message":"Email already exists"})
 }
})



app.use("/login",async(req,res)=>{
    const users=new s({
        email:req.body.email,
        password:req.body.password,
    })
    const email=req.body.email;
    const password=req.body.password;
    const userexists=await s.findOne({email:email});
    console.log(users);
    console.log(userexists);
    console.log(users.password);
    console.log(password);
    console.log(userexists);
    const valid=await bcrypt.compareSync(users.password,userexists.password);
    if(valid)
    {
        const token=jwt.sign({email:users.email},"user");
        // res.send({"message":"validuser"});
        res.send({"message":token});
    }
    else{
        res.send({"message":"not valid credentials"});
    }
})



app.use("/upload",async(req,res)=>{
  console.log(req.body);
    const file=req.files.image
    
   
   try{
    const result =  await cloudinary.uploader.upload(file.tempFilePath,function(error, result) {console.log(result, error)})
   console.log(result);
    const products=new p({
        id:req.body.id,
        name:req.body.name,
        desc:req.body.desc,
       image:result.secure_url,
        cost:req.body.cost,
       
   
    })
    await products.save();
    res.send({"message":"saved"});
    
}
catch{

}

})



app.use("/dispprod",async(req,res)=>{
    const prod=new p({
        name:req.body.name,
    })
    if(prod.name=="")
    {
        const products=await p.find()
        res.send(products)
    }
    else{
    const products=await p.find({"name":prod.name})
    console.log(products);
    res.send(products)
    }
})
app.use("/addprod",async(req,res)=>{
    const products=new b({
        prodid:req.body.id,
        username:req.body.uemail,
        name:req.body.name,
        cost:req.body.cost,


    })
    console.log(req.body.id);
    await products.save()
    res.send({"message":"product added"})
})
app.use("/cancelprod",async(req,res)=>{
    const products=new b({
        
        prodid:req.body.id,
        username:req.body.uemail,
       


    })
    console.log(req.body.uemail);
    await b.deleteOne({'username':products.username,'prodid':products.prodid})
    res.send({"message":"product cancelled"})
})
app.use("/allbookings",async(req,res)=>{
    const products=new b({
        
        
        username:req.body.uemail,
       


    })
 const books=await b.find({'username':products.username})
 res.send(books)
})
app.use("/updatepayment",async(req,res)=>{
    console.log(req.body.user.email);
    console.log(req.body.cod);
    const products=new b({
        payment:req.body.cod,
        username:req.body.user.email
    })
    console.log(products);
    const books=await b.update({'username':products.username},{$set:{'payment':products.payment}})
})
app.listen(2000)
