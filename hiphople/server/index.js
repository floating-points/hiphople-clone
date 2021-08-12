import express from "express";
import api from "./routes/api.js";
import path from "path";
import bodyParser from "body-parser";
import mysql from "mysql2/promise";
import connection from "./mysql/mysql_connection.js";

const __dirname=path.resolve();
const PORT=8000;

const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use("/api",api);
//app.use("/", express.static(__dirname+"/client/build"));

/*const conn=mysql.createPool({
    host:"localhost",
    user:"witch",
    password:"witch",
    database:"domestic"
});*/

/*conn.connect((err)=>{
    if(err){throw err;}
    console.log("DB 연결 완료");
});*/

/* DB 생성 코드
conn.query("create database domestic character set utf8", (err, result)=>{
    if(err){throw err;}
    console.log("국내 게시판 DB 생성 완료");
});*/

/*테이블 생성 코드
const postsTableQuery="create table posts" +
  "(id int not null primary key auto_increment," +
  "title nvarchar(100)," +
  "content text(5000)," +
  "writer int not null," +
  "timerecord datetime not null);";

conn.query(tableQuery, (err, result)=>{
    if(err){throw err;}
    console.log("게시글 테이블 생성 완료");
});*/

/*const commentsTableQuery="create table comments" +
    "(id int not null primary key auto_increment," +
    "post int not null," +
    "content text(1000)," +
    "writer int not null," +
    "timerecord datetime not null);";

conn.query(commentsTableQuery, (err, result)=>{
    if(err){throw err;}
    console.log("테이블 생성 완료");
});*/

// 데이터 하나 추가하는 코드
/*const insertQuery="insert into posts(id, title, content, writer, timerecord) values(1, \"테스트 제목3\", \"테스트 내용3\", 2, NOW())";

conn.query(insertQuery, (err, result, fields)=>{
    if(err){throw err;}
    console.log(result);
});

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, "server/form.html"));
});*/

const commentFilteredByPost=async (postID)=>{
    const commentFilterQuery="select * from comments where post=?";
    const result=await connection.query(commentFilterQuery, postID);
    console.log(result[0]);
    return result[0];
};

const commentUpdate=async(commentID, newContent)=>{
    const commentUpdateQuery="update comments set content=? where id=?";
    const result=await connection.query(commentUpdateQuery, [newContent, commentID]);
    console.log(result[0]);
};

app.post("/comment-search", async (req,res)=>{
    const {postID}=req.body;
    res.send(await commentFilteredByPost(postID));
});

app.post("/comment-update", async (req,res)=>{
    const {commentID, newContent}=req.body;
    res.send(await commentUpdate(commentID, newContent));
});

app.post("/post-insert", (req,res)=>{
    const newPostQuery="insert into posts set ?";

    req.body.timerecord=new Date().toISOString().slice(0, 19).replace("T", " ");
    //datetime for mysql
    connection.query(newPostQuery, req.body, (err,result,fields)=>{
        if(err){throw err;}
        console.log(result);
        res.send("등록 완료");
    });
});

app.post("/comment-insert", (req,res)=>{
    const newCommentQuery="insert into comments set ?";

    req.body.timerecord=new Date().toISOString().slice(0, 19).replace("T", " ");
    //datetime for mysql
    connection.query(newCommentQuery, req.body, (err,result,fields)=>{
        if(err){throw err;}
        console.log(result);
        res.send("댓글 등록 완료");
    });
});

app.get("/", async (req, res)=>{
   res.send("시작 페이지");
});

app.listen(PORT, ()=>{
    console.log("example app running on port", PORT);
    console.log(__dirname);
});