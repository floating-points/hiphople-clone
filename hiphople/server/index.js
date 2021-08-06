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
//app.use("/", express.static(__dirname+"/client/build"));

const conn=mysql.createConnection({
    host:'localhost',
    user:'witch',
    password:'witch',
    database:'domestic'
});

conn.connect((err)=>{
    if(err){throw err;}
    console.log("테이블 생성 쿼리 실행");
    const sqlQuery="create table post(" +
        "id int not null auto_increment primary key," +
        "title nvarchar(100) not null," +
        "content text(5000) not null," +
        "writer int not null," +
        "timerecord datetime not null" +
        ");";
    conn.query(sqlQuery, (err,result)=>{
        if(err){throw err ;}
        console.log("table created");
    })
})

app.get("/", (req,res)=>{
    res.send("Hello");
});

app.listen(PORT, ()=>{
    console.log("example app running on port", PORT);
});