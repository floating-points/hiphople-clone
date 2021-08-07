import express from "express";
import api from "./routes/api.js";
import path from "path";
import bodyParser from "body-parser";
import mysql from "mysql";

const __dirname=path.resolve();
const PORT=8000;

const app=express();

//app.use("/api",api);
//app.use("/", express.static(__dirname+"/client/build"));

const conn=mysql.createConnection({
    host:"localhost",
    user:"witch",
    password:"witch",
    database:"domestic"
});

conn.connect((err)=>{
    if(err){throw err;}
    console.log("DB 연결 완료");
});

/* DB 생성 코드
conn.query("create database domestic character set utf8", (err, result)=>{
    if(err){throw err;}
    console.log("국내 게시판 DB 생성 완료");
});*/

/*테이블 생성 코드
const tableQuery="create table posts" +
  "(id int not null primary key auto_increment," +
  "title nvarchar(100) not null," +
  "content text(5000)," +
  "writer int not null," +
  "timerecord datetime)";

conn.query(tableQuery, (err, result)=>{
    if(err){throw err;}
    console.log("테이블 생성 완료");
});*/

/* 데이터 하나 추가하는 코드
const insertQuery="insert into posts(id, title, content, writer, timerecord) values(1, \"테스트 제목3\", \"테스트 내용3\", 2, NOW())";

conn.query(insertQuery, (err, result, fields)=>{
    if(err){throw err;}
    console.log(result);
});*/

app.get("/", (req,res)=>{
    const sqlQuery="select * from posts";
    conn.query(sqlQuery, (err, result, fields)=>{
        if(err){throw err;}
        res.send(result);
    });
});

app.listen(PORT, ()=>{
    console.log("example app running on port", PORT);
    console.log(__dirname);
});