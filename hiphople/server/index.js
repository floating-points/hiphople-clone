import express from "express"
import api from "./routes/api.js"
import path from "path";
import bodyParser from "body-parser";
import mysql from 'mysql';

const __dirname=path.resolve();
const app=express();
app.use(express.json());

const PORT=8000;

//app.use("/api",api);
app.use("/", express.static(__dirname+"/client/build"));

/*const conn=mysql.createConnection({
    host:'localhost',
    user:'witch',
    password:'witch'
});

conn.connect((err)=>{
    if(err){throw(err);}
    console.log("connected to DB");
})

app.get("/", (req,res)=>{
    res.send("Hello");
})*/

app.listen(PORT, ()=>{
    console.log("example app running on port", PORT);
    console.log(__dirname);
})