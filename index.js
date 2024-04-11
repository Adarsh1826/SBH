import express from 'express';
import path from 'path';



// server created 
const app = express();
const user = [];
app.use(express.static(path.join(path.resolve(),"public")));
// using middle wear
app.use(express.urlencoded({extended:true}));
//const port = 5000;
console.log("Team Udaan");
app.set("view engine","ejs");

app.get("/",(req,res,next)=>{
    res.render("index",{name:"Team"});
});
app.get("/sucesss",(req,res,next)=>{
    res.render("success");
    
});
app.get("/about",(req,res,next)=>{
    res.send("<h1>Heloo World</h1>")
});
app.get("/Admin",(req,res,next)=>{
    res.send("<h1>Admin Page</h1>");
});
app.post("/",(req,res)=>{
    user.push({userName:req.body.name,email:req.body.email});
    console.log({userName:req.body.name , email:req.body.email});
    res.redirect("/sucesss");
});
app.get("//",(req,res,next)=>{
    res.send("<h1>Page Not Found");
    
});

app.listen(5000,()=>{
    console.log('Server is working at http://localhost:5000')
});

