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
app.use(express.static(__dirname+"/client/build"));

app.use("/", (res,req)=>{
    res.sendFile(__dirname+"/client/build/index.html");
});

/*const conn=mysql.createConnection({
    host:'localhost',
    user:'witch',
    password:'witch',
    database:'domestic'
});

conn.connect((err)=>{
    if(err){throw err;}
    console.log("테이블 생성 쿼리 실행");
})

const sqlQuery="insert into post(id, title, content, writer, timerecord) " +
    "values(4, 'test title2', 'test content2', 5, now())";

conn.query(sqlQuery, (err,result, fields)=>{
    if(err){throw err;}
    console.log(result);
})

app.get("/", (req,res)=>{
    const sqlQuery="select * from post";
    conn.query(sqlQuery, (err,result, fields)=>{
        if(err){throw err;}
        res.send(result);
    })
});*/

app.listen(PORT, ()=>{
    console.log("example app running on port", PORT);
});