
var express =require("express");
var path = require("path");
var session = require("express-session");
var cookieparser=require("cookie-parser");
var cors= require("cors");
var app=express();
var axios = require("axios");
var mongoose= require("mongoose");
const Staffs = require("./models/dbtype");


app.use(cors());
app.use(cookieparser());
app.use(express.urlencoded({extended:false}));
app.use(express.json());



const dburl="mongodb+srv://Macs:Kk76117018@@cluster0.6eqoe.mongodb.net/Macs?retryWrites=true&w=majority";
mongoose.connect(dburl,{useNewUrlParser:true,useUnifiedTopology:true}).then(
    (result)=>{ console.log("Database Connected Succesfully")}
)


app.get("/", function(req,res){
    res.sendFile(path.join(__dirname,"index.html"));
})


app.get("/add", function(req,res){
    res.sendFile(path.join(__dirname,"index.html"));
})
app.get("/About", function(req,res){
    res.sendFile(path.join(__dirname,("index.html")));
})

app.post("/inputs", function (req,res,next){

    const newstaffs = new Staffs({
        name:req.body.text,
        email:req.body.email,
        age:req.body.number
    });

    newstaffs.save().then(
        (secres)=>{
            res.send("Data  Added Sucessfully");
            console.log("Data Added")
        }
    )

  
    
})


    





app.get("/apple", function(req,res){

    axios.get("https://official-joke-api.appspot.com/jokes/ten").then((jokes)=>{
        console.log(jokes);
        res.send(jokes.json);
    })   
})










app.listen(3000);
