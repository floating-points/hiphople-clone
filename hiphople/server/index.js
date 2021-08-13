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

//DB 생성 코드
//connection.query("create database board character set utf8");

/*테이블 생성 코드
const postsTableQuery="create table posts" +
  "(id int not null primary key auto_increment," +
  "title nvarchar(100)," +
  "content text(5000)," +
  "writer int not null," +
  "timerecord datetime not null);";

connection.query(tableQuery, (err, result)=>{
    if(err){throw err;}
    console.log("게시글 테이블 생성 완료");
});*/

//댓글 db 생성 코드
/*const commentsTableQuery="create table domestic_comments" +
    "(id int not null primary key auto_increment," +
    "post int not null," +
    "content text(1000)," +
    "writer int not null," +
    "timerecord datetime not null);";

connection.query(commentsTableQuery);*/

// 글 db에 데이터 하나 추가하는 코드
/*const insertQuery="insert into posts(id, title, content, writer, timerecord) values(1, \"테스트 제목3\", \"테스트 내용3\", 2, NOW())";

connection.query(insertQuery, (err, result, fields)=>{
    if(err){throw err;}
    console.log(result);
});

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, "server/form.html"));
});*/

const boardCommentFilteredByPost=async (boardName, postID)=>{
    const commentFilterQuery="select * from "+boardName+" where post=?";
    const result=await connection.query(commentFilterQuery, [postID]);
    console.log(result[0]);
    return result[0];
};

const boardCommentUpdate=async (boardName, commentID, newContent)=>{
    const commentUpdateQuery="update "+boardName+" set content=? where id=?";
    const result=await connection.query(commentUpdateQuery, [newContent, commentID]);
    console.log("댓글 수정 완료");
};

const boardCommentInsert=async(boardName, postID, writer, content)=>{
    const commentInsertQuery="insert into "+boardName+"(post, writer, content, timerecord) values(?,?,?,?)";
    const currentTime=new Date().toISOString().slice(0, 19).replace("T", " ");
    const result=await connection.query(commentInsertQuery, [postID, writer, content, currentTime]);
    console.log("댓글 삽입 완료");
};

app.post("/comment-search", async (req,res)=>{
    const {boardName, postID}=req.body;
    res.send(await boardCommentFilteredByPost(boardName, postID));
});

app.post("/comment-update", async (req,res)=>{
    const {boardName, commentID, newContent}=req.body;
    res.send(await boardCommentUpdate(boardName, commentID, newContent));
});

app.post("/comment-insert", async (req,res)=>{
    const {boardName, postID, writer, content}=req.body;
    //datetime for mysql
    res.send(await boardCommentInsert(boardName, postID, writer, content));
});

app.get("/", async (req, res)=>{
   res.send("시작 페이지");
});

app.listen(PORT, ()=>{
    console.log("example app running on port", PORT);
    console.log(__dirname);
});