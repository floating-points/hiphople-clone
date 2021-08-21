import express from "express";
import api from "./routes/api.js";
import path from "path";
import bodyParser from "body-parser";
import mysql from "mysql2/promise";
import connection from "./mysql/mysql_connection.js";
import {boardCommentFilteredByPost, boardCommentInsert, boardCommentUpdate} from "./mysql/board_db.js";

const __dirname=path.resolve();
const PORT=8000;

const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use("/api",api);
//app.use("/", express.static(__dirname+"/client/build"));


//postman으로 쿼리 날리기 시험용 페이지들
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
///////////////////

app.get("/", async (req, res)=>{
   res.send("시작 페이지");
});

app.listen(PORT, ()=>{
    console.log("example app running on port", PORT);
    console.log(__dirname);
});